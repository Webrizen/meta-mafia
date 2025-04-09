"use client";
import { motion } from "framer-motion";
import { LucideQuote } from "lucide-react";
import Squares from "./squares-grid";

const testimonials = [
  {
    name: "Shaan J.",
    title: "Founder @ SaaSForge",
    quote:
      "Metamafia saved us weeks of manual SEO setup. We just ran the CLI and had fully optimized metadata across 40+ routes. Insane time-saver.",
  },
  {
    name: "Lena R.",
    title: "DevRel @ Vercel",
    quote: `This is the most Next.js-native SEO tool I've seen. The integration with App Router, manifest, and OpenGraph just works.`,
  },
  {
    name: "Yuki K.",
    title: "CTO @ LocalizeX",
    quote:
      "Multi-language support is top-tier. Our localized pages now rank properly on Google — and we didn’t have to touch a sitemap.",
  },
  {
    name: "Nico M.",
    title: "Freelancer",
    quote:
      "For solo devs, it’s a godsend. Fire up the CLI and get production-grade SEO in 2 minutes. I’m hooked.",
  },
];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Testimonials() {
  return (
    <>
      <section className="w-full relative bg-gradient-to-b dark:from-zinc-950 from-white to-zinc-50 dark:to-zinc-900 py-20 px-6 lg:px-32 text-white">
      <Squares
        speed={0.5}
        squareSize={20}
        direction="diagonal"
        borderColor="#fff"
        hoverFillColor="#222"
      />
        <div className="max-w-6xl mx-auto z-20 relative">
          <h2 className="text-4xl font-bold mb-10 md:text-right text-center dark:text-white text-black">
            🫣 What People Are Saying?
          </h2>
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
                className={`dark:bg-zinc-800 bg-zinc-50 rounded-2xl p-6 border dark:border-zinc-700 border-zinc-200 flex flex-col justify-between min-h-[250px] ${
                  i % 3 === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <LucideQuote className="w-6 h-6 mb-4 dark:text-zinc-400 text-zinc-600" />
                <p className="dark:text-zinc-200 text-zinc-900 text-sm leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-6">
                  <p className="font-semibold dark:text-white text-black">
                    {t.name}
                  </p>
                  <p className="text-xs dark:text-zinc-400 text-zinc-600">
                    {t.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
