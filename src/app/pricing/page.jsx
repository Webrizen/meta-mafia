import Link from "next/link";

const pricingPlans = [
  {
    name: "Basic",
    price: "₹499/month",
    features: ["Basic metadata generation", "Manual updates"],
    stripePriceId: "price_basic_001",
  },
  {
    name: "Pro",
    price: "₹999/month",
    features: [
      "AI-powered metadata",
      "Auto-updates",
      "Unlimited requests",
    ],
    stripePriceId: "price_pro_001",
  },
];

export default function page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-6">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-xl mb-4">{plan.price}</p>
            <ul className="mb-4 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="text-gray-600">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <Link
              href={`/subscribe?priceId=${plan.stripePriceId}`}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Subscribe Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
