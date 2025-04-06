'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const [status, setStatus] = useState('loading');
  const [customerEmail, setCustomerEmail] = useState('');
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get('session_id');

  useEffect(() => {
    if (sessionId) {
      fetchSessionStatus();
    } else {
      setStatus('failed');
    }
  }, [sessionId]);

  async function fetchSessionStatus() {
    try {
      const response = await fetch('/api/stripe/check-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch session status');
      }

      const { session, error } = await response.json();

      if (error) {
        setStatus('failed');
        console.error(error);
        return;
      }

      setStatus(session.status || 'unknown');
      setCustomerEmail(session.customer_email || '');
    } catch (err) {
      setStatus('failed');
      console.error('Error fetching session status:', err);
    }
  }

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-lg font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Failed</h1>
          <p className="mt-2 text-gray-700">
            Failed to process subscription. Please try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-green-600">Subscription Successful!</h1>
        <p className="mt-4 text-gray-700">
          Thank you for your subscription. A confirmation email has been sent to{' '}
          <span className="font-semibold">{customerEmail || "- No email found, please contact support!"}</span>.
        </p>
        <Link href="/dashboard" className="mt-6 inline-block bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
        Dashboard
        </Link>
      </div>
    </div>
  );
}