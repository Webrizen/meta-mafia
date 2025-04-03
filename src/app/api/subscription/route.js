import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Subscription from "@/models/Subscription";
import { currentUser } from "@clerk/nextjs/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
  try {
    await dbConnect();
    const user = await currentUser();

    if (!user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const subscription = await Subscription.findOne({ userId: user.id });

    if (!subscription) {
      return NextResponse.json(
        { message: "No active subscription" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      plan: subscription.plan,
      status: subscription.status,
      stripeCustomerId: subscription.stripeCustomerId,
      stripeSubscriptionId: subscription.stripeSubscriptionId,
    });
  } catch (error) {
    console.error("Error fetching subscription:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch subscription" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await dbConnect();
    const user = await currentUser();

    if (!user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const subscription = await Subscription.findOne({ userId: user.id });

    if (!subscription || subscription.status !== "active") {
      return NextResponse.json(
        { error: "No active subscription found" },
        { status: 404 }
      );
    }

    // Cancel subscription in Stripe
    await stripe.subscriptions.update(subscription.stripeSubscriptionId, {
      cancel_at_period_end: true, // Cancels at end of billing cycle
    });

    // Update in database
    subscription.status = "canceled";
    await subscription.save();

    return NextResponse.json({
      message: "Subscription cancellation scheduled",
    });
  } catch (error) {
    console.error("Error canceling subscription:", error.message);
    return NextResponse.json(
      { error: "Failed to cancel subscription" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const user = await currentUser();
    const { newPriceId } = await req.json();

    if (!user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const subscription = await Subscription.findOne({ userId: user.id });

    if (!subscription || subscription.status !== "active") {
      return NextResponse.json(
        { error: "No active subscription found" },
        { status: 404 }
      );
    }

    // Update Stripe subscription to new plan
    const updatedSubscription = await stripe.subscriptions.update(
      subscription.stripeSubscriptionId,
      {
        items: [{ id: subscription.stripeSubscriptionId, price: newPriceId }],
        proration_behavior: "create_prorations", // Charges user for the change
      }
    );

    // Update plan in database
    subscription.plan = newPriceId;
    await subscription.save();

    return NextResponse.json({ message: "Subscription updated successfully" });
  } catch (error) {
    console.error("Error updating subscription:", error.message);
    return NextResponse.json(
      { error: "Failed to update subscription" },
      { status: 500 }
    );
  }
}
