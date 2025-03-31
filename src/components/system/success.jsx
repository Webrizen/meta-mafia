"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    const verifySession = async () => {
      if (!sessionId) return;

      try {
        const res = await fetch(`/api/stripe/verify-session?sessionId=${sessionId}`);
        const data = await res.json();

        if (data.success) {
          setStatus("✅ Payment Successful! Your subscription is active.");
        } else {
          setStatus("❌ Payment verification failed. Please contact support.");
        }
      } catch (error) {
        setStatus("❌ Error verifying payment.");
      }
    };

    verifySession();
  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Payment Status</h2>
        <p className="text-lg">{status}</p>
      </div>
    </div>
  );
}
