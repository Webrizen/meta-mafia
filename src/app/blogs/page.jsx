import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: 'Blog | Next.js Metadata Generator',
  description: 'Explore our latest articles on Next.js, SEO, and web development best practices.',
  keywords: 'Next.js, SEO, web development, blog, tutorials',
}

const blogPosts = [
  {
    slug: 'seo-best-practices-nextjs',
    title: 'SEO Best Practices for Next.js Applications',
    description: 'Learn how to optimize your Next.js application for search engines with these essential SEO best practices.',
    date: '2023-05-15',
  },
  {
    slug: 'benefits-of-server-side-rendering-nextjs',
    title: 'The Benefits of Server-Side Rendering with Next.js',
    description: 'Explore the advantages of using server-side rendering (SSR) in Next.js for improved performance, SEO, and user experience.',
    date: '2023-05-22',
  },
  {
    slug: 'optimizing-images-nextjs',
    title: 'Optimizing Images in Next.js: A Comprehensive Guide',
    description: 'Learn how to effectively optimize images in your Next.js applications for improved performance and user experience.',
    date: '2023-05-29',
  },
]

export default function BlogIndex() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 py-12">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Explore our latest articles on Next.js, SEO, and web development best practices.
        </p>
      </div>

      <section className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.slug}>
            <CardHeader>
              <CardTitle>
                <Link href={`/blogs/${post.slug}`} className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                <Link href={`/blogs/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}