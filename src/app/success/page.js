export default function page() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            🎉 Subscription Successful!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Thank you for subscribing. Your AI-powered metadata is ready!
          </p>
          <a
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    );
  }
  