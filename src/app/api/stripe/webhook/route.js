import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Subscription from "@/models/Subscription";
import userModel from "@/models/userModel";
import Stripe from "stripe";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};

async function resetRequestCount(userId) {
  await dbConnect();
  await userModel.findOneAndUpdate({ clerkId: userId }, { requestCount: 0 });
}

export async function POST(req) {
  const rawBody = await buffer(req);
  const sig = req.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("⚠️ Webhook Error:", err.message);
    return NextResponse.json(
      { error: "Invalid webhook signature" },
      { status: 400 }
    );
  }

  await dbConnect();

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;

      const userId = session.metadata.userId;
      const stripeCustomerId = session.customer;
      const stripeSubscriptionId = session.subscription;
      const subscriptionx = await stripe.subscriptions.retrieve(
        stripeSubscriptionId
      );
      const plan = subscriptionx.items.data[0].plan.nickname || "Unknown";

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

      // Update user's plan in the database
      await userModel.findOneAndUpdate(
        { clerkId: userId },
        { plan: plan.toLowerCase() }
      );

      console.log(`✅ Subscription for user ${userId} activated!`);
      break;

      case "invoice.payment_succeeded":
        const invoice = event.data.object;
        const subscriptionId = invoice.subscription;
      
        // Get subscription to identify userId
        const subscriptionRecord = await Subscription.findOne({
          stripeSubscriptionId: subscriptionId,
        });
      
        if (!subscriptionRecord) {
          console.error(`❌ Subscription not found for ID: ${subscriptionId}`);
          break;
        }
      
        await resetRequestCount(subscriptionRecord.userId);
      
        // Update user's plan in the database
        await userModel.findOneAndUpdate(
          { clerkId: subscriptionRecord.userId },
          { plan: subscriptionRecord.plan.toLowerCase() }
        );
      
        console.log(`🔄 Request count reset for user: ${subscriptionRecord.userId}`);
        break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
