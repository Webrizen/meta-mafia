import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Check if user has an active subscription
export async function getUserSubscription(userId) {
  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: userId,
      status: "active",
    });

    return subscriptions.data.length > 0;
  } catch (error) {
    console.error("Error checking subscription:", error);
    return false;
  }
}