import Stripe from "stripe";
import { updateUserSubscription } from "@/lib/database"; // Update user in DB

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId");

  try {
    if (!sessionId) {
      return new Response(
        JSON.stringify({ error: "Missing sessionId." }),
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const { userId } = session.metadata;

      // Update user subscription in DB
      await updateUserSubscription(userId, {
        stripeCustomerId: session.customer,
        stripeSubscriptionId: session.subscription,
        status: "active",
      });

      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ success: false }), { status: 400 });
    }
  } catch (error) {
    console.error("❌ Stripe Verify Error:", error.message);
    return new Response(
      JSON.stringify({ error: "Payment verification failed." }),
      { status: 500 }
    );
  }
}
