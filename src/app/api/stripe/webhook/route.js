import { buffer } from "micro";
import Stripe from "stripe";
import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Subscription from "@/models/Subscription";
import userModel from "@/models/userModel";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  let event;
  try {
    // Read raw body from request as a buffer
    const rawBodyBuffer = await buffer(req);
    // Convert to a UTF-8 string without trimming
    const rawBody = rawBodyBuffer.toString("utf8");
    console.log("Raw body length:", rawBody.length);
    
    const sig = req.headers.get("stripe-signature");
    if (!sig) {
      throw new Error("Missing Stripe signature header");
    }

     // Read raw body from request as a buffer
     const rawBodyBuffer = await buffer(req);
     // Convert to a UTF-8 string without trimming
     const rawBody = rawBodyBuffer.toString("utf8");
     console.log("Raw body length:", rawBody.length);
     
     const sig = req.headers.get("stripe-signature");
     if (!sig) {
       throw new Error("Missing Stripe signature header");
     }
 
  } catch (err) {
    console.error("⚠️ Webhook Error:", err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Process the event
  try {
    await dbConnect();

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const userId = session.metadata.userId;
        const stripeCustomerId = session.customer;
        const stripeSubscriptionId = session.subscription;

        // Retrieve the subscription to extract plan info
        const subscription = await stripe.subscriptions.retrieve(
          stripeSubscriptionId
        );
        const plan = subscription.items.data[0].plan.nickname || "Unknown";

        // Save/update subscription info in our database
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

        // Update user's plan in our user model
        await userModel.findOneAndUpdate(
          { clerkId: userId },
          { plan: plan.toLowerCase() }
        );

        console.log(`✅ Subscription for user ${userId} activated!`);
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object;
        const subscriptionId = invoice.subscription;

        // Find our subscription record     
        const subscriptionRecord = await Subscription.findOne({ stripeSubscriptionId: subscriptionId });
        if (!subscriptionRecord) {
          console.error(`❌ Subscription not found for ID: ${subscriptionId}`);
          break;
        }
        // Reset the user's request count on successful invoice payment\n
        await userModel.findOneAndUpdate(
          { clerkId: subscriptionRecord.userId },
          {
            requestCount: 0,
          }
        );
        console.log(
          `🔄 Request count reset for user: ${subscriptionRecord.userId}`
        );
        break;
      }

      case "customer.subscription.deleted": {
        const subscriptionDeleted = event.data.object;
        await Subscription.findOneAndUpdate(
          { stripeSubscriptionId: subscriptionDeleted.id },
          { status: "canceled" }
        );
        console.log("❌ Subscription canceled.");
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("⚠️ Error handling webhook event:", err.message);
    return NextResponse.json(
      { error: "Webhook handler error" },
      { status: 500 }
    );
  }
}
