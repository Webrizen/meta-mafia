import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Cpu,
  Rocket,
  Search,
  Code,
  Languages,
  CheckIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import HowItWorks from "@/components/system/how-it-works";

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

export default function Home() {
  const features = [
    {
      icon: <Cpu className="h-8 w-8 text-orange-600" />,
      title: "AI-Powered Metadata",
      description:
        "Leverage OpenAI's advanced language models to generate intelligent, context-aware SEO metadata. Automatically craft meta titles, descriptions, and keywords that resonate with your audience while adhering to SEO best practices. Save hours of manual effort and focus on what matters most—building your project.",
      badge: "OpenAI API",
      className: "md:col-span-2 md:row-span-1",
    },
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
    <>
      <section className="py-32 dark-bg-custom relative">
        <div className="container mx-auto text-center md:px-0 px-5">
          <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
            <h1 className="text-3xl font-extrabold lg:text-6xl text-slate-50">
              Let Meta Mafia handle your SEO so you can pretend you worked hard.
            </h1>
            <p className="text-balance text-muted-foreground lg:text-lg text-slate-300">
              Boost your website's visibility by generating SEO-friendly
              metadata for your Next.js projects. Enter your data, let AI do the
              hard work, and focus on what matters.
            </p>
          </div>
          <div className="flex justify-center items-center md:flex-row flex-col md:max-w-2xl max-w-sm gap-3 mt-10 mx-auto">
            <Button size="lg">Start Generating Now</Button>
            <Button size="lg" variant="ghost" className="text-slate-50">
              Learn More
            </Button>
          </div>
          <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="mx-4 inline-flex items-center -space-x-4">
              <Avatar className="size-14 border">
                <AvatarImage src="https://i.pravatar.cc/300" alt="Colm Tuite" />
                <AvatarFallback>N/A</AvatarFallback>
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage src="https://i.pravatar.cc/301" alt="John Dow" />
                <AvatarFallback>N/A</AvatarFallback>
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage src="https://i.pravatar.cc/302" alt="Silam Rocky" />
                <AvatarFallback>N/A</AvatarFallback>
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage src="https://i.pravatar.cc/303" alt="Rajesh Khan" />
                <AvatarFallback>N/A</AvatarFallback>
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage src="https://i.pravatar.cc/304" alt="Desh Pandey" />
                <AvatarFallback>N/A</AvatarFallback>
              </Avatar>
            </span>
            <div>
              <div className="flex items-center gap-1 text-slate-50">
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">5.0</span>
              </div>
              <p className="text-left font-medium text-slate-100">
                from 200+ satisfied users
              </p>
            </div>
          </div>
        </div>
        <div className="absolute md:block hidden bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full md:h-[130px] dark:text-[#121212] text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
            ></path>
          </svg>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
              Unleash the Power of{" "}
              <span className="text-orange-600">MetaMaifia</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolutionize your Next.js SEO strategy with AI-driven metadata
              generation and advanced internationalization support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4">
            {features.map((feature, index) => {
              const assignedClass = randomClasses[index % randomClasses.length];
              return (
                <Card
                  key={index}
                  className={`bg-card hover:shadow-lg transition-shadow duration-300 ${feature.className} ${assignedClass}`}
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
        </div>
      </section>
      <HowItWorks />
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
              About <span className="text-orange-600">Meta Mafia</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              At Meta Mafia, we simplify SEO for developers and creators.
              Automate your metadata generation and focus on what matters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center w-full h-min">
              <img
                src="https://placehold.co/500x500"
                alt="About Meta Mafia"
                className="rounded-lg border-2 w-full h-full dark:border-slate-800 border-slate-300"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p className="text-lg text-muted-foreground mb-3">
                At Meta Mafia, we empower developers and businesses to optimize
                their websites with AI-driven metadata solutions. Our platform
                automates SEO workflows, ensuring precision, efficiency, and
                superior results. Built with cutting-edge technology, Meta Mafia
                simplifies SEO, so you can focus on growing your brand and
                reaching a global audience.
              </p>

              <p className="text-lg text-muted-foreground mb-3">
                Our mission is to empower developers and businesses to achieve
                outstanding digital visibility. Metadata is the unsung hero of
                search engine optimization, and Meta Mafia ensures it gets the
                spotlight it deserves. Whether you’re looking to boost rankings,
                enhance social sharing, or improve site discoverability, we’ve
                got you covered.
              </p>

              <p className="text-lg text-muted-foreground mb-3">
                Meta Mafia was founded by a passionate developer, Arshahdul
                Ahmed who recognized the challenges faced by businesses and
                developers in optimizing their websites for search engines. With
                years of experience in web development and a vision to simplify
                complex SEO workflows, they created Meta Mafia to bring AI and
                automation to the forefront of metadata generation.
              </p>
              <p className="text-lg text-muted-foreground">
                Under their leadership, Meta Mafia has grown into a trusted
                platform for developers and businesses alike, setting a new
                standard for efficient and effective SEO practices.
              </p>

              {/* Mission and Vision Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`bg-card-1 text-slate-100 p-4 rounded-lg`}>
                  <Globe className="w-6 h-6 mb-2" />
                  <p className="font-medium">Our Mission</p>
                  <p className="text-sm text-slate-300">
                    To revolutionize the SEO landscape by providing effortless,
                    AI-driven metadata solutions that enable developers and
                    creators to achieve their goals with ease.
                  </p>
                </div>
                <div className={`bg-card-4 text-slate-100 p-4 rounded-lg`}>
                  <Rocket className="w-6 h-6 mb-2" />
                  <p className="font-medium">Our Vision</p>
                  <p className="text-sm text-slate-300">
                    To become the leading platform for automated SEO solutions,
                    helping businesses and developers worldwide achieve
                    unparalleled digital success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
