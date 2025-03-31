import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Subscription from "@/models/Subscription";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("⚠️ Webhook Error:", err.message);
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
  }

  await dbConnect();

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;

      const userId = session.metadata.userId;
      const stripeCustomerId = session.customer;
      const stripeSubscriptionId = session.subscription;
      const plan = session.display_items?.[0]?.plan?.nickname || "Unknown";

      // Save subscription info
      await Subscription.findOneAndUpdate(
        { userId },
        {
          userId,
          stripeCustomerId,
          stripeSubscriptionId,
          plan,
          status: "active",
        },
        { upsert: true }
      );
      console.log(`✅ Subscription for user ${userId} activated!`);
      break;

    case "customer.subscription.deleted":
      const subscription = event.data.object;
      await Subscription.findOneAndUpdate(
        { stripeSubscriptionId: subscription.id },
        { status: "canceled" }
      );
      console.log("❌ Subscription canceled.");
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
