'use client';

export default function page() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 py-12 px-6 lg:px-32">
      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <h1 className="text-4xl font-bold mb-4">📄 Metamafia Docs</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Metamafia is an AI-powered CLI tool that auto-generates SEO-optimized, production-ready metadata for your Next.js 15 websites. Eliminate boilerplate, save time, and get compliant with best practices instantly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">🔧 Features</h2>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-2">
            <li>Generate full `metadata` export block (Next.js 15 compatible)</li>
            <li>Auto-create `manifest.json`, `robots.txt`</li>
            <li>SEO-friendly image metadata and social previews</li>
            <li>Zero-config CLI: <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">npx metamafia-cli</code></li>
            <li>Works with static & dynamic routes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">🚀 CLI Installation & Usage</h2>
          <pre className="bg-gray-100 dark:bg-gray-900 text-sm p-4 rounded-xl overflow-auto border border-gray-200 dark:border-gray-800">
{`# Quick install (Recommended)
npm i metamafia-cli

# OR install globally
npm install -g metamafia-cli

# Basic Usage
npx metamafia-cli [id]

# With flags
npx metamafia-cli --url=https://yourdomain.com --lang=en

# Output files:
# - layout.tsx metadata block
# - manifest.json
# - robots.txt

# Optional:
--dry-run         Preview output without writing files
--debug           Show internal logging
--path=./app      Specify path to your Next.js app directory
`}
          </pre>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
            View full CLI documentation on <a href="https://www.npmjs.com/package/metamafia-cli" className="text-indigo-600 dark:text-indigo-400 underline">npmjs.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">📦 Output Example</h2>
          <pre className="bg-gray-100 dark:bg-gray-900 text-sm p-4 rounded-xl overflow-auto border border-gray-200 dark:border-gray-800">
{`export const metadata = {
  title: "My Awesome Site",
  description: "Boost your SEO with AI-generated metadata.",
  keywords: ["SEO", "AI", "Next.js"],
  openGraph: {
    title: "My Awesome Site",
    description: "Boost your SEO with AI-generated metadata.",
    url: "https://mysite.com",
    siteName: "MySite",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Awesome Site",
    description: "Boost your SEO with AI-generated metadata.",
    images: ["/og.png"],
  },
};
`}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">📬 Need Help?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Contact us at <a className="text-indigo-600 dark:text-indigo-400 underline" href="mailto:support@metamafia.dev">support@metamafia.dev</a> or join the waitlist to get early access to the SaaS dashboard.
          </p>
        </section>
      </div>
    </main>
  );
}
