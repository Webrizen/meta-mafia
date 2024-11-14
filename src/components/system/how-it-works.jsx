"use client";
import { useState } from "react";
import { Code, Globe, Zap, Sparkles, ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [generatedCode, setGeneratedCode] = useState("");

  const steps = [
    {
      title: "Connect Your Next.js Project",
      description:
        "Seamlessly integrate MetaMaifia with your existing Next.js application using our simple API.",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "AI-Powered Analysis",
      description:
        "Our advanced AI scans your content, understanding context and key information.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Generate Optimized Metadata",
      description:
        "MetaMaifia creates tailored SEO metadata, including advanced structured data and internationalization support.",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: "Global Reach",
      description:
        "Automatically generate localized metadata for multiple languages and regions.",
      icon: <Globe className="w-8 h-8" />,
    },
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
    // Simulate code generation
    setTimeout(() => {
      setGeneratedCode(`// Generated SEO Metadata for Step ${index + 1}
export const metadata = {
  title: 'Your Optimized Title',
  description: 'AI-generated description for maximum impact',
  openGraph: {
    title: 'Engaging Social Media Title',
    description: 'Compelling description for social sharing',
    images: [{ url: 'https://example.com/og-image.jpg' }],
  },
  alternates: {
    canonical: 'https://example.com',
    languages: {
      'en-US': 'https://example.com/en-US',
      'es-ES': 'https://example.com/es-ES',
      'fr-FR': 'https://example.com/fr-FR',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}`);
    }, 500);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            How <span className="text-orange-600">MetaMaifia</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This is how we work effectively communicates the advanced,
            AI-powered SEO metadata generation with support for multiple
            languages and regions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-colors ${
                  activeStep === index
                    ? "bg-gradient-to-br from-yellow-500 via-orange-600 to-red-700 dark:text-slate-50 text-white"
                    : "dark:bg-[rgba(225,225,225,0.02)] bg-slate-50 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                }`}
                onClick={() => handleStepClick(index)}
              >
                <div className="bg-white border-2 border-slate-300 text-orange-600 p-3 rounded-full">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="dark:text-slate-300 opacity-70">
                    {step.description}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 ml-auto" />
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="dark:bg-slate-800 bg-slate-100 rounded-lg p-6 border-2 dark:border-slate-800 border-slate-300">
              <h3 className="text-xl font-semibold mb-4">
                Generated SEO Metadata
              </h3>
              <div className="dark:bg-gray-900 bg-slate-200 border-2 dark:border-slate-800 border-slate-300 p-4 rounded-md h-[200px]">
                <pre className="text-sm overflow-auto h-full">
                  <code>{generatedCode}</code>
                </pre>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">
                Internationalization Preview
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["en", "es", "fr", "de"].map((lang, index) => (
                  <div
                    key={lang}
                    className={`bg-card-${index} text-slate-100 p-4 rounded-lg`}
                  >
                    <Globe className="w-6 h-6 mb-2" />
                    <p className="font-medium">{lang.toUpperCase()}</p>
                    <p className="text-sm text-slate-300">Localized metadata</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
