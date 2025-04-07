import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { clerkClient } from "@clerk/nextjs/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.error('Error verifying webhook signature:', err);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'customer.subscription.updated':
      await handleSubscriptionUpdated(event.data.object);
      break;
    case 'customer.subscription.deleted':
      await handleSubscriptionDeleted(event.data.object);
      break;
    case 'invoice.payment_succeeded':
      await handleInvoicePaid(event.data.object);
      break;
    // ... handle other events
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

async function handleSubscriptionUpdated(subscription) {
  const customerId = subscription.customer;
  const subscriptionStatus = subscription.status;

  // 1. Fetch Stripe customer to get Clerk userId from metadata
  const customer = await stripe.customers.retrieve(customerId);
  const clerkUserId = customer.metadata?.clerkUserId;

  if (!clerkUserId) {
    console.warn("Missing clerkUserId in Stripe metadata");
    return;
  }

  // 2. Update Clerk user metadata
  const client = await clerkClient();  
  await client.users.updateUserMetadata(clerkUserId, {
    publicMetadata: {
      subscriptionStatus: subscriptionStatus,
      subscriptionId: subscription.id,
      currentPeriodEnd: subscription.current_period_end,
      plan: subscription.items.data[0]?.price?.id,
    },
  });

  console.log(`[Stripe] Updated Clerk user ${clerkUserId} with subscription ${subscription.id}`);
}

async function handleSubscriptionDeleted(subscription) {
  const customer = await stripe.customers.retrieve(subscription.customer);
  const clerkUserId = customer.metadata?.clerkUserId;

  if (!clerkUserId) return;
  const client = await clerkClient();  
  await client.users.updateUserMetadata(clerkUserId, {
    publicMetadata: {
      subscriptionStatus: "canceled",
    },
  });

  console.log(`[Stripe] Canceled subscription for user ${clerkUserId}`);
}

async function handleInvoicePaid(invoice) {
  const customerId = invoice.customer;
  const customer = await stripe.customers.retrieve(customerId);
  const clerkUserId = customer.metadata?.clerkUserId;

  if (!clerkUserId) return;

  // Optional: add payment history or flags in metadata
  console.log(`[Stripe] Payment succeeded for user ${clerkUserId}`);
}


export const config = {
  api: {
    bodyParser: false,
  },
};