'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Subscriptions() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // Fetch subscription plans from your API
    fetch('/api/stripe/subscription-plans')
      .then(res => res.json())
      .then(data => setPlans(data));
  }, []);

  const handleSubscribe = async (priceId) => {
    const stripe = await stripePromise;
    const { sessionId } = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    }).then(res => res.json());

    const result = await stripe.redirectToCheckout({ sessionId });

    if (result.error) {
      console.error(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Choose a Subscription Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map(plan => (
          <div
            key={plan.id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">{plan.name}</h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="text-lg font-medium text-gray-800 mb-4">
              Price: <span className="text-indigo-600">${plan.price / 100}</span> / {plan.interval}
            </p>
            <button
              onClick={() => handleSubscribe(plan.price_id)}
              className="w-full bg-indigo-600 text-white py-2 px-4 cursor-pointer rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}