import React from 'react'

export default function page() {
  return (
    <>
     <section className="py-20 bg-slate-900 text-gray-100 relative">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-6 tracking-wide">
            About <span className="text-orange-500">Meta Mafia</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Meta Mafia is a free and innovative platform crafted to simplify web development by dynamically generating SEO metadata, manifest files, and robots.txt. Built under the visionary web development agency{" "}
            <a
              href="https://webrizen.vercel.app"
              target="_blank"
              className="text-orange-500 font-bold underline hover:text-orange-400"
              rel="noopener noreferrer"
            >
              Webrizen
            </a>
            , Meta Mafia embodies the spirit of accessibility and empowerment for developers worldwide.
          </p>
        </div>

        {/* Creator Section */}
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-16">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="/arshahdul-ahmed.webp"
              alt="Arshahdul Ahmed"
              className="rounded-xl border-2 border-slate-500/50"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              Meet Arshahdul Ahmed
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I’m Arshahdul Ahmed, an 18-year-old solo entrepreneur, developer,
              and dreamer. My journey began at the age of 16 when I discovered
              my passion for building SaaS platforms that solve real-world
              problems. Driven by a challenging personal life, I channeled my
              energy into honing my skills, not just for survival but to create
              a better future for myself and my family.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              As the founder of{" "}
              <a
                href="https://webrizen.vercel.app"
                target="_blank"
                className="text-orange-500 font-bold underline hover:text-orange-400"
                rel="noopener noreferrer"
              >
                Webrizen
              </a>
              , I’ve built a full-stack development agency specializing in web,
              mobile, and desktop applications. My mission is to create tools
              that empower developers, like Meta Mafia—a free platform built
              with the vision of simplifying web optimization for everyone.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Growing up in a challenging environment taught me resilience and
              the importance of thinking strategically. Whether it's building
              platforms or facing life’s hurdles, I approach every challenge
              with a determination to succeed.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-orange-500">
            Why Developers Love Meta Mafia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-orange-500">
                Simplified Metadata
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Generate SEO metadata in seconds. With predefined templates and
                user-friendly inputs, you can ensure your site is optimized for
                search engines effortlessly.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-orange-500">
                PWA Manifest Files
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Create Progressive Web App-ready manifest files that enhance
                user experience and make your application ready for the modern
                web.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-orange-500">
                Robots.txt Generator
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Define your website's crawling behavior with ease. Ensure
                search engines understand and prioritize your site’s content.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Meta Mafia is not just a tool; it’s a commitment to empowering
            developers. Under the guidance of{" "}
            <span className="text-orange-500 font-bold">Webrizen</span>, our
            mission is to make the web more accessible, efficient, and
            impactful—one line of metadata at a time.
          </p>
        </div>
      </div>
      <div className="absolute md:block hidden bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full md:h-[130px] text-white"
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
    </>
  )
}
