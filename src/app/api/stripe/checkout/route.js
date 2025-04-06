import { NextResponse } from "next/server";
import Stripe from "stripe";
import { auth, currentUser } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const { priceId } = await request.json();
  const { userId } = await auth();
  if (!userId) return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  if (!priceId) {
    return NextResponse.json(
      { error: "Price ID is required" },
      { status: 400 }
    );
  }
  const user = await currentUser();
  const client = await clerkClient()
  try {
    // Get user email
    const email = user.emailAddresses[0].emailAddress;

    // Check if Stripe customer already exists in Clerk metadata
    const stripeCustomerId = user.privateMetadata.stripeCustomerId;

    let customer;

    if (stripeCustomerId) {
      customer = await stripe.customers.retrieve(stripeCustomerId);
    } else {
      customer = await stripe.customers.create({
        email,
        metadata: { clerkUserId: userId },
      });

      // Save Stripe customer ID to Clerk for future use
      await client.users.updateUserMetadata(user.id, {
        privateMetadata: {
          stripeCustomerId: customer.id,
        },
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customer.id, 
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${request.headers.get(
        "origin"
      )}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("origin")}/pricing`,
      metadata: {
        userId: userId,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
//customer_details - email