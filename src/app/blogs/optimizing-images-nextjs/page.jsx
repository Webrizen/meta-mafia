import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const metadata = {
  title: "Optimizing Images in Next.js: A Comprehensive Guide",
  description:
    "Learn how to effectively optimize images in your Next.js applications for improved performance and user experience.",
  keywords:
    "Next.js, image optimization, web performance, React, web development",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Optimizing Images in Next.js: A Comprehensive Guide",
    description:
      "Learn how to effectively optimize images in your Next.js applications for improved performance and user experience.",
    type: "article",
    url: "https://metamafia.dev/blog/optimizing-images-nextjs",
    images: [
      {
        url: "https://metamafia.dev/images/image-optimization-og.jpg",
        width: 1200,
        height: 630,
        alt: "Optimizing Images in Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimizing Images in Next.js: A Comprehensive Guide",
    description:
      "Learn how to effectively optimize images in your Next.js applications for improved performance and user experience.",
    images: ["https://metamafia.dev/images/image-optimization-og.jpg"],
  },
};

export default function OptimizingImagesNextjs() {
  return (
    <article className="max-w-4xl mx-auto space-y-8 py-12">
      <header>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Optimizing Images in Next.js: A Comprehensive Guide
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Enhance your web application's performance with efficient image
          handling
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Introduction
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Images play a crucial role in modern web applications, but they can
          also significantly impact performance if not handled properly. Next.js
          provides powerful built-in features for image optimization, allowing
          developers to create fast, visually appealing websites without
          sacrificing quality. In this comprehensive guide, we'll explore
          various techniques and best practices for optimizing images in your
          Next.js applications.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>1. Using the Next.js Image Component</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            The Next.js Image component is a powerful tool for automatic image
            optimization. It provides lazy loading, prevents Cumulative Layout
            Shift (CLS), and automatically serves images in modern formats like
            WebP when supported by the browser.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4 overflow-x-auto">
            <code>{`
import Image from 'next/image'

export default function OptimizedImage() {
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
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Here's an example of an optimized image using the Next.js Image
            component:
          </p>
          <div className="mt-4">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Example optimized image"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2. Responsive Images</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            Next.js allows you to serve different image sizes based on the
            device's screen size. This ensures that users don't download
            unnecessarily large images on smaller screens, improving load times
            and reducing data usage.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4 overflow-x-auto">
            <code>{`
<Image
  src="/path/to/your/image.jpg"
  alt="Responsive image"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  fill
/>
            `}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>3. Lazy Loading</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            Lazy loading is enabled by default with the Next.js Image component.
            This means images are only loaded when they enter the viewport,
            reducing initial page load time and saving bandwidth.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            You can control the loading behavior using the loading prop:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4 overflow-x-auto">
            <code>{`
<Image
  src="/path/to/your/image.jpg"
  alt="Eager loaded image"
  width={500}
  height={300}
  loading="eager" // 'lazy' is the default
/>
            `}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>4. Image Formats and Quality</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            Next.js automatically serves images in modern formats like WebP when
            supported by the browser. You can also control the quality of the
            images to balance between file size and visual quality.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4 overflow-x-auto">
            <code>{`
<Image
  src="/path/to/your/image.jpg"
  alt="High quality image"
  width={500}
  height={300}
  quality={85} // 75 is the default
/>
            `}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>5. Optimizing Background Images</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            For background images, you can use the fill prop along with
            object-fit CSS property to create responsive background images that
            are also optimized.
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4 overflow-x-auto">
            <code>{`
<div style={{ position: 'relative', width: '100%', height: '300px' }}>
  <Image
    src="/path/to/your/background.jpg"
    alt="Background image"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
            `}</code>
          </pre>
        </CardContent>
      </Card>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Optimizing images in your Next.js application is crucial for improving
          performance, user experience, and SEO. By leveraging the built-in
          Image component and following best practices, you can significantly
          reduce page load times, save bandwidth, and create visually appealing
          websites that perform well across all devices.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Remember to always provide descriptive alt text for accessibility, use
          appropriate image sizes and formats, and take advantage of lazy
          loading and responsive image techniques. With these optimizations in
          place, your Next.js application will be well-equipped to deliver a
          fast and efficient user experience.
        </p>
      </section>
    </article>
  );
}
