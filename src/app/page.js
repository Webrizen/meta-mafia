import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroPlane from "@/assets/hero-plane.png";
import HeroBox from "@/assets/hero-box.gif";
import {
  LucideRocket,
  LucideZap,
  LucideCode,
  LucideWrench,
  LucideShield,
  LucideTerminal,
  LucideNetwork,
  ChevronRightIcon,
} from "lucide-react";
import Testimonials from "@/components/system/testimonials";
import { ClippedBgShape } from "@/components/system/clipped-bg-shape";

const features = [
  {
    title: "1-Click Metadata",
    icon: LucideRocket,
    description:
      "Instantly generate structured and production-ready metadata blocks for your Next.js 15 layout files — optimized for SEO, social media, and accessibility.",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Manifest & Robots Automation",
    icon: LucideWrench,
    description:
      "Automatically generate and insert a complete manifest.json and robots.txt file aligned with Google’s latest indexing guidelines. No manual setup needed.",
    className: "col-span-1 row-span-1",
  },
  {
    title: "CLI Tool for Speed",
    icon: LucideTerminal,
    description:
      "Use `npx metamafia` from anywhere. Generate metadata, inject it, and spin up SEO scaffolding — all from a simple terminal interface. Fast and developer-friendly.",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Multi-language & Routing Support",
    icon: LucideCode,
    description:
      "Fully compatible with `next-intl` and Next.js routing — including dynamic, catch-all, and localized routes. Generate sitemaps in multiple languages with zero effort.",
    className: "md:col-span-2 row-span-1",
  },
  {
    title: "SEO & OpenGraph Compliance",
    icon: LucideShield,
    description:
      "Generates OpenGraph, Twitter Cards, keywords, canonical links and structured data that align with modern SEO standards — no plugin needed.",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Zero Config Setup",
    icon: LucideZap,
    description:
      "Run with your live site URL or local project folder. Metamafia will intelligently crawl, analyze, and inject metadata with zero configuration.",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Future-Proof Integration",
    icon: LucideNetwork,
    description:
      "Built for Next.js 15 and beyond. Designed to adapt to framework updates and metadata schema changes, keeping your project evergreen.",
    className: "md:col-span-2 row-span-1",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="bg-gradient-to-r from-[#4338ca] via-[#6366f1] to-[#a5b4fc] w-[400px] h-[400px] md:blur-[190px] blur-[9990px] absolute top-0 left-0 md:opacity-100 opacity-35 pointer-events-none" />
        <div className="bg-gradient-to-r from-[#2dd4bf]  to-[#1f2937] w-[400px] h-[400px] md:blur-[190px] blur-[9990px] absolute bottom-0 right-0 md:opacity-100 opacity-35 pointer-events-none" />
        <Image
          src={HeroPlane}
          alt="Hero Image"
          width={500}
          height={500}
          className="absolute md:top-[15%] top-10 md:left-[35%] left-[40%] md:h-[100px] h-[50px] w-auto"
          placeholder="blur"
        />
        <Image
          src={HeroBox}
          alt="Hero Image"
          width={500}
          height={500}
          className="absolute md:bottom-[15%] bottom-5 md:left-[48.7%] left-[45%] h-[40px] w-auto dark:bg-transparent bg-indigo-50 rounded-full border border-slate-300 dark:border-none dark:rounded-none"
        />
        <div className="container mx-auto py-24 lg:py-32">
          <div className="flex justify-center">
            <Link
              className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
              href="/waitlist"
            >
              PRO release - Join to waitlist
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </Link>
          </div>
          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Simplified SEO for Next.js 15
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-xl text-muted-foreground">
              Boost your website&apos;s performance by generating AI powered
              accurate and optimized SEO metadata effortlessly for your nextjs
              application.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center">
            <Button size={"lg"} asChild>
              <Link href="/auth/sign-in">Get started</Link>
            </Button>
            <Button size={"lg"} variant={"outline"} asChild>
              <Link href="/features">Learn more</Link>
            </Button>
          </div>
          {/* End Buttons */}
          <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
            <span className="text-sm text-muted-foreground">
              Package Manager:
            </span>
            <span className="text-sm font-bold">npm </span>
            <svg
              className="h-5 w-5 text-muted-foreground"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
            <Link
              className="inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-medium"
              href="/docs"
            >
              Installation Guide
              <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-6 px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Animated SVG Connection Lines */}
          <svg
            className="absolute -top-23 -z-10 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none md:block hidden"
            style={{ maxWidth: "1152px" }}
          >
            {/* Vertical line from top point */}
            <path
              d="M576 -180 L576 180"
              className="stroke-indigo-500"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="24"
                to="0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>

            {/* Left diagonal line */}
            <path
              d="M192 120 L576 40"
              className="stroke-indigo-500"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="24"
                to="0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>

            {/* Right diagonal line */}
            <path
              d="M960 120 L576 40"
              className="stroke-indigo-500"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="24"
                to="0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>

            {/* Central point circle */}
            <circle cx="576" cy="-40" r="4" className="fill-indigo-500">
              <animate
                attributeName="r"
                values="4;6;4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Connection points on each line */}
            <circle cx="192" cy="120" r="3" className="fill-indigo-500" />
            <circle cx="576" cy="40" r="3" className="fill-indigo-500" />
            <circle cx="960" cy="120" r="3" className="fill-indigo-500" />
          </svg>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "One Command Setup",
                desc: "Run `npx metamafia` and inject metadata directly into your Next.js layout file.",
              },
              {
                title: "AI Content Parsing",
                desc: "We crawl your site, summarize your content, and generate metadata accordingly.",
              },
              {
                title: "Multilingual Support",
                desc: "Auto-generate alternate links and sitemap routes for multiple languages.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className={`bg-card-${i} p-6 border rounded-2xl transition`}
              >
                <h3 className="text-xl font-semibold mb-2 text-slate-50">
                  {f.title}
                </h3>
                <p className="text-slate-200">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-24 bg-white dark:bg-black relative">
        <div className="max-w-6xl mx-auto z-40">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 md:text-left text-center">
            🚀 Features That Ship Metadata
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(
              ({ title, icon: Icon, description, className }, idx) => (
                <div
                  key={idx}
                  className={`bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 p-6 rounded-2xl shadow-none border border-gray-200 dark:border-zinc-800 hover:border-slate-200 transition-all flex flex-col justify-start ${className}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                    {description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
