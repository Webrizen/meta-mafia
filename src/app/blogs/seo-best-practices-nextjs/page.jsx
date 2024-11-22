import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "SEO Best Practices for Next.js Applications",
  description:
    "Learn how to optimize your Next.js application for search engines with these essential SEO best practices.",
  keywords: "Next.js, SEO, search engine optimization, web development, React",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "SEO Best Practices for Next.js Applications",
    description:
      "Learn how to optimize your Next.js application for search engines with these essential SEO best practices.",
    type: "article",
    url: "https://metamafia.dev/blog/seo-best-practices-nextjs",
    images: [
      {
        url: "https://metamafia.dev/images/seo-best-practices-og.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Best Practices for Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Best Practices for Next.js Applications",
    description:
      "Learn how to optimize your Next.js application for search engines with these essential SEO best practices.",
    images: ["https://metamafia.dev/images/seo-best-practices-og.jpg"],
  },
};

export default function SEOBestPracticesNextjs() {
  return (
    <article className="max-w-4xl mx-auto space-y-8 py-12">
      <header>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          SEO Best Practices for Next.js Applications
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Optimize your Next.js app for search engines and improve your online
          visibility
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Introduction
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Search Engine Optimization (SEO) is crucial for any web application,
          including those built with Next.js. By implementing SEO best
          practices, you can improve your site's visibility in search engine
          results, drive more organic traffic, and provide a better user
          experience. In this article, we'll explore essential SEO techniques
          specifically tailored for Next.js applications.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>1. Utilize Next.js Built-in Head Component</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            Next.js provides a built-in <code>Head</code> component that allows
            you to modify the <code>&lt;head&gt;</code> of your pages easily.
            Use this component to add important SEO elements such as title tags,
            meta descriptions, and Open Graph tags.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4 overflow-x-auto">
            <code>{`
import Head from 'next/head'

export default function YourPage() {
  return (
    <>
      <Head>
        <title>Your Page Title | Your Site Name</title>
        <meta name="description" content="Your page description here" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your page description here" />
        <meta property="og:image" content="https://yoursite.com/og-image.jpg" />
      </Head>
      {/* Your page content */}
    </>
  )
}
            `}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2. Implement Dynamic Metadata</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            Next.js 13 introduced a new metadata API that allows you to define
            metadata for your pages more easily. This approach is particularly
            useful for dynamic routes where the content might change based on
            the URL parameters.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4 overflow-x-auto">
            <code>{`
import { Metadata } from 'next'

export const generateMetadata = async ({ params }): Promise<Metadata> => {
  // Fetch data for the page if needed
  const product = await getProduct(params.id)

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  }
}

export default function ProductPage({ params }) {
  // Your page component
}
            `}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>3. Optimize Images</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            Next.js provides an <code>Image</code> component that automatically
            optimizes images for better performance. Use this component to
            ensure your images load quickly and don't negatively impact your
            page speed, which is an important SEO factor.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4 overflow-x-auto">
            <code>{`
import Image from 'next/image'

export default function YourComponent() {
  return (
    <Image
      src="/path/to/your/image.jpg"
      alt="Descriptive alt text"
      width={500}
      height={300}
      layout="responsive"
    />
  )
}
            `}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>4. Implement Proper URL Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            Next.js uses a file-based routing system, which naturally creates
            clean and SEO-friendly URLs. Organize your pages in a logical
            structure that reflects the hierarchy of your content. Use
            descriptive names for your files and folders to create meaningful
            URLs.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <code>/pages/blog/[slug].js</code> →{" "}
              <code>/blog/your-post-title</code>
            </li>
            <li>
              <code>/pages/products/[category]/[id].js</code> →{" "}
              <code>/products/electronics/iphone-12</code>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>5. Generate a Sitemap</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            A sitemap helps search engines understand the structure of your
            website and find all your pages. You can generate a sitemap
            dynamically using Next.js API routes.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4 overflow-x-auto">
            <code>{`
// pages/api/sitemap.xml.js
import { getAllPosts } from '../lib/api'

const BASE_URL = 'https://metamafia.dev'

function generateSiteMap(posts) {
  return \`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>\${BASE_URL}</loc>
      </url>
      \${posts
        .map(({ id }) => {
          return \`
            <url>
              <loc>\${BASE_URL}/posts/\${id}</loc>
            </url>
          \`
        })
        .join('')}
    </urlset>
  \`
}

export default async function handler(req, res) {
  const posts = await getAllPosts()
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
}
            `}</code>
          </pre>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Implementing these SEO best practices in your Next.js application will
          help improve your site's visibility in search engine results and
          provide a better experience for your users. Remember that SEO is an
          ongoing process, so continually monitor your site's performance and
          make adjustments as needed. By leveraging Next.js's built-in features
          and following these guidelines, you'll be well on your way to creating
          a highly optimized and search-engine-friendly web application.
        </p>
      </section>
    </article>
  );
}
