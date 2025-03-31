import { NextResponse } from "next/server";
import Stripe from "stripe";
import dbConnect from "@/utils/db";
import { currentUser } from '@clerk/nextjs/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { priceId } = await req.json();
    const user = await currentUser()

     // Extract email correctly
     const email = user?.emailAddresses[0]?.emailAddress;

    if (!user.id || !email) {
      return new Response(
        JSON.stringify({ error: "Unauthorized or missing email." }),
        { status: 401 }
      );
    }

    await dbConnect();

    // Check if customer exists in Stripe (to avoid duplicates)
    const existingCustomers = await stripe.customers.list({
      email,
      limit: 1,
    });

    let customer;
    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      // Create new customer in Stripe
      customer = await stripe.customers.create({
        email,
        metadata: { userId: user.id },
      });
    }

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
      metadata: {
        userId: user.id,
      },
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error("Stripe Checkout Error:", error.message);
    return NextResponse.json(
      { error: "Failed to create checkout." },
      { status: 500 }
    );
  }
}
