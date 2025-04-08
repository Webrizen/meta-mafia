'use client';

import { useState, useEffect, Suspense } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Subscriptions />
    </Suspense>
  );
}

const PLAN_DETAILS = {
  'price_1PjaWNSBcUwzODpLNpIBeddZ': {
    rateLimit: 500,
    features: [
      'Basic Metadata Generation',
      'Limited API Access',
      'Email Support',
    ],
  },
  'price_1PjaYrSBcUwzODpLtlwEHplj': {
    rateLimit: 2000,
    features: [
      'AI Metadata with Content Summary',
      'Faster Processing',
      'Priority Email Support',
    ],
  },
  'price_1PjaaPSBcUwzODpLroAILxp7': {
    rateLimit: 10000,
    features: [
      'AI Metadata + Image Metadata',
      'Access to Upcoming Features',
      '24/7 Support',
    ],
  },
};

function Subscriptions() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/stripe/subscription-plans')
      .then(res => res.json())
      .then(data => {
        setPlans(data);
        setLoading(false);
      });
  }, []);

  const handleSubscribe = async (priceId) => {
    const stripe = await stripePromise;
    const { sessionId } = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    }).then(res => res.json());

    const result = await stripe.redirectToCheckout({ sessionId });
    if (result.error) console.error(result.error);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Choose a Subscription Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full max-w-7xl">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow animate-pulse space-y-4"
              >
                <div className="h-6 w-1/2 bg-gray-300 rounded" />
                <div className="h-4 w-3/4 bg-gray-300 rounded" />
                <div className="h-5 w-1/3 bg-gray-300 rounded" />
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-5/6 bg-gray-200 rounded" />
                <div className="h-3 w-2/3 bg-gray-200 rounded" />
                <div className="h-10 w-full bg-gray-300 rounded mt-4" />
              </div>
            ))
          : plans.map((plan) => {
              const meta = PLAN_DETAILS[plan.price_id];
              return (
                <div
                  key={plan.id}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all flex flex-col"
                >
                  <h2 className="text-2xl font-semibold text-gray-700">{plan.name}</h2>
                  <p className="text-gray-600 mt-2 mb-4">{plan.description}</p>
                  <p className="text-xl font-bold text-gray-900 mb-2">
                    ${plan.price / 100}{' '}
                    <span className="text-sm text-gray-500">/ {plan.interval}</span>
                  </p>
                  {meta?.rateLimit && (
                    <p className="text-sm text-gray-600 mb-4">
                      Up to{' '}
                      <span className="font-medium text-gray-800">
                        {meta.rateLimit.toLocaleString()}
                      </span>{' '}
                      API requests / month
                    </p>
                  )}
                  {meta?.features?.length > 0 && (
                    <ul className="text-sm text-gray-600 space-y-1 mb-6">
                      {meta.features.map((f, i) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>
                  )}
                  <button
                    onClick={() => handleSubscribe(plan.price_id)}
                    className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition"
                  >
                    Subscribe
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  );
}