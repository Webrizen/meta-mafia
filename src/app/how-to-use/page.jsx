import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    Globe,
    Cpu,
    Rocket,
    Search,
    Code,
    Languages,
    CheckIcon,
    Star
  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title:
    "How to Use MataMafia for Generating Next.js Metadata, sitemap, manifest.json, robots.txt  | Optimize Your SEO",
  description:
    "Learn how to use our Next.js Metadata Generator to create SEO-optimized metadata, manifest.json, robots.txt, and sitemap.xml files for your Next.js projects.",
  keywords: "Next.js, Metadata, SEO, Generator, Tutorial, Web Development",
};

const Step = ({ title }) => (
    <li className="flex gap-2 items-start my-2">
      <CheckIcon />
      <p>{title || "No title available"}</p>
    </li>
  );
  
  // Shuffle array function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

export default function page() {
    
    const features = [
        {
          icon: <Code className="h-8 w-8 text-orange-600" />,
          title: "Next.js Integration",
          description:
            "Seamlessly integrate with Next.js projects for automatic metadata injection and optimization. Save development time with pre-built configurations tailored to Next.js 14, ensuring a smooth workflow and reliable performance.",
          badge: "Next.js",
          className: "md:col-span-1 md:row-span-1",
        },
        {
          icon: <Search className="h-8 w-8 text-orange-600" />,
          title: "Advanced SEO",
          description:
            "Generate comprehensive metadata including meta titles, descriptions, Open Graph properties for enhanced social sharing, and structured data with JSON-LD schemas to boost your search engine rankings. Ensure your website stands out in search results with precision-crafted SEO tags for every page.",
          description2: (
            <>
              <ul className="list-disc list-inside text-muted-foreground">
                <Step title="Generate meta titles and descriptions tailored to each page." />
                <Step title="Include Open Graph properties for enhanced social media sharing." />
                <Step title="Automatically create structured data with JSON-LD schemas." />
                <Step title="Boost search engine rankings with SEO-friendly metadata." />
                <Step title="Ensure consistency and precision across all pages for maximum impact." />
              </ul>
            </>
          ),
          badge: "SEO Boost",
          className: "md:col-span-1 md:row-span-2",
        },
        {
          icon: <Globe className="h-8 w-8 text-orange-600" />,
          title: "Internationalization",
          description:
            "Support for multiple languages and regions, ensuring global SEO optimization. Tailor your metadata for diverse audiences worldwide, enhancing user experience and improving rankings across different search engines and geographies.",
          badge: "i18n",
          className: "md:col-span-1 md:row-span-1",
        },
        {
          icon: <Rocket className="h-8 w-8 text-orange-600" />,
          title: "Performance Optimization",
          description:
            "Lightweight metadata generation that doesn't compromise your site's speed and performance. Ensure faster page loads and seamless rendering without bloating your codebase, making your site highly efficient and user-friendly.",
          badge: "Fast",
          className: "md:col-span-1 md:row-span-1",
        },
        {
          icon: <Languages className="h-8 w-8 text-orange-600" />,
          title: "Dynamic Content Adaptation",
          description:
            "Automatically adjust metadata based on page content, user behavior, and context. Adapt dynamically to visitor needs and search engine preferences, delivering highly relevant and impactful SEO content that improves visibility and engagement.",
          badge: "Smart",
          className: "md:col-span-2 md:row-span-1",
        },
      ];
    
      const randomClasses = shuffleArray([
        "bg-card-1",
        "bg-card-2",
        "bg-card-3",
        "bg-card-4",
        "bg-card-5",
        "bg-card-6",
      ]);

  return (
    <div className="container mx-auto grid md:grid-cols-2 gap-6 space-y-12 my-12 md:px-12 px-2">
      <div className="space-y-12 w-full">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            How to Use Next.js Metadata Generator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Optimize your Next.js project with ease
          </p>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            What is the Next.js Metadata Generator?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The Next.js Metadata Generator is a powerful tool designed to help
            developers create comprehensive metadata for their Next.js projects.
            It generates not only metadata for SEO purposes but also creates
            manifest.json, robots.txt, and sitemap.xml files, all of which are
            crucial for optimizing your web application for search engines and
            improving user experience.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Steps to Use the Generator
          </h2>
          <ol className="space-y-6">
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold mr-4">
                1
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Navigate to the Generator
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Go to the main page of the application where you'll find the
                  metadata form.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold mr-4">
                2
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Fill in the Form
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enter the required information about your project, including
                  title, description, URL, site name, locale, theme color, and
                  more.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold mr-4">
                3
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Generate Metadata
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Click the "Generate Metadata" button to create your metadata
                  and related files.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold mr-4">
                4
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Review Generated Content
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The generator will produce four types of content: Metadata,
                  Manifest, Robots, and Sitemap.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold mr-4">
                5
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Copy the Generated Code
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use the "Copy" button next to each generated file to copy the
                  content to your clipboard.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold mr-4">
                6
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Implement in Your Project
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Paste the copied code into the appropriate files in your
                  Next.js project.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Best Practices
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Tips for Optimal Use</CardTitle>
              <CardDescription>
                Follow these guidelines to get the most out of the Metadata
                Generator
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  Be concise but descriptive in your title and description
                </li>
                <li>
                  Use relevant keywords that accurately represent your content
                </li>
                <li>Ensure your URLs are correct and consistent</li>
                <li>
                  Use high-quality, relevant images for your Open Graph tags
                </li>
                <li>
                  Regularly update your sitemap as your website content changes
                </li>
                <li>
                  Customize your robots.txt file based on your specific needs
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Why Use Our Metadata Generator?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">SEO Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Our generator creates metadata that helps search engines
                  understand and rank your content better, potentially improving
                  your search engine rankings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Time-Saving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Instead of manually creating metadata, manifest, robots.txt,
                  and sitemap files, our tool generates them all in one go,
                  saving you valuable development time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Error Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  By automating the process, our generator reduces the
                  likelihood of errors that can occur when manually writing
                  metadata and configuration files.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Our generator follows current best practices for metadata,
                  ensuring your Next.js application is optimized according to
                  the latest standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <div className="space-y-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {features.map((feature, index) => {
            const assignedClass = randomClasses[index % randomClasses.length];
            return (
              <Card
                key={index}
                className={`bg-card hover:shadow-lg transition-shadow duration-300 ${assignedClass}`}
              >
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full bg-white text-orange-500 border-2 border-slate-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-200 mb-4">{feature.description}</p>
                  {feature.description2 && (
                    <div className="text-slate-300 mb-4">
                      {feature.description2}
                    </div>
                  )}
                  <Badge variant="secondary">{feature.badge}</Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/">Try the Metadata Generator Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
