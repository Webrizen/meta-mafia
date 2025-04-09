import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-neutral-950 text-gray-900 dark:text-white overflow-hidden">
       <div className="bg-gradient-to-r from-[#4338ca] via-[#6366f1] to-[#a5b4fc] w-[400px] h-[400px] md:blur-[190px] blur-[9990px] absolute top-0 left-0 md:opacity-100 opacity-35 pointer-events-none" />
       <div className="bg-gradient-to-r from-[#2dd4bf]  to-[#1f2937] w-[400px] h-[400px] md:blur-[190px] blur-[9990px] absolute bottom-0 right-0 md:opacity-100 opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-24 space-y-24">
        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
            Built by Developers.
            <br />
            For Developers.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Metamafia is your AI-powered SEO assistant, removing all manual
            effort from metadata, sitemaps, and configuration — in seconds.
          </p>
        </section>

        {/* Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold">Why Metamafia Exists</h2>
            <p className="text-gray-700 dark:text-neutral-300">
              SEO setup is crucial but boring. From Open Graph tags to Twitter
              cards to proper indexing configs, it's a time sink. Metamafia
              automates all that — so you don’t have to.
            </p>
            <p className="text-gray-700 dark:text-neutral-300">
              Our CLI scans, structures, and generates production-ready metadata
              and assets compatible with Next.js 15 and beyond.
            </p>
            <Link
              href="https://www.npmjs.com/package/metamafia-cli"
              className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl transition-all text-sm"
              target="_blank"
            >
              Try the CLI →
            </Link>
          </div>
          <Image
            src={Logo}
            width={600}
            height={400}
            placeholder="blur"
            alt="Development screenshot"
            className="md:w-[70%] w-[90%] mx-auto"
          />
        </section>

        {/* Webrizen CTA */}
        <section className="bg-[rgba(225,225,225,0.1)] backdrop-blur-3xl py-16 rounded-3xl text-center z-40 relative">
          <h2 className="text-3xl font-semibold mb-2">A Product by Webrizen</h2>
          <p className="text-gray-700 dark:text-neutral-300 max-w-2xl mx-auto mb-6">
            Webrizen builds fast, reliable websites and AI tools that power the
            modern web. Metamafia is just one of many — and we’re just getting
            started.
          </p>
          <Button asChild>
            <Link href="https://webrizen.dev" target="_blank">
              Visit Webrizen
            </Link>
          </Button>
        </section>
      </div>
    </main>
  );
}
