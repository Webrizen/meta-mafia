"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Subscribe() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const priceId = searchParams.get("priceId");

  useEffect(() => {
    if (!priceId) {
      alert("❌ No plan selected. Please choose a plan.");
      window.location.href = "/pricing";
    }
  }, [priceId]);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        body: JSON.stringify({ priceId }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert("❌ Error starting checkout. Try again.");
      }
    } catch (error) {
      alert("❌ Checkout failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Confirm Your Subscription</h2>
        <p className="text-lg mb-6">You are subscribing to plan: {priceId}</p>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className={`bg-green-600 text-white px-6 py-3 rounded-lg ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
          }`}
        >
          {loading ? "Processing..." : "Proceed to Checkout"}
        </button>
      </div>
    </div>
    </Suspense>
  );
}