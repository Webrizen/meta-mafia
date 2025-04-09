import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-neutral-950 text-gray-700 dark:text-neutral-300 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Metamafia Branding */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Metamafia</h3>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              AI-powered metadata generation for Next.js 15. Simplify your SEO, boost performance, and stay ahead — automatically.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs" className="hover:underline">Docs</Link></li>
              <li><Link href="/waitlist" className="hover:underline">Waitlist</Link></li>
              <li><a href="https://npmjs.com/package/metamafia-cli" target="_blank" className="hover:underline">CLI on NPM</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://webrizen.dev" target="_blank" className="hover:underline">Webrizen</a></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Stay Connected</h4>
            <p className="text-sm mb-3">For updates, follow Webrizen and stay in the loop.</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/webrizen" target="_blank" className="hover:text-indigo-600">Twitter</a>
              <a href="mailto:webrizen@gmail.com" className="hover:text-indigo-600">Email</a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 dark:border-neutral-800 pt-6 text-sm text-gray-500 dark:text-neutral-500 flex flex-col md:flex-row justify-between">
          <span>© {new Date().getFullYear()} Metamafia. All rights reserved.</span>
          <span>Built by <a href="https://webrizen.dev" className="underline hover:text-indigo-600">Webrizen</a></span>
        </div>
      </div>
    </footer>
  );
}