'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CopyButton } from './CopyButton'

export default function RobotsResult({ data }) {
  const robotsCode = `
# www.robotstxt.org/

# Allow crawling of all content
User-agent: *
Allow: /

# Disallow crawling of specific paths
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Allow Google AdSense bot to crawl the site
User-agent: Mediapartners-Google
Allow: /

# Crawl-delay for specific bots
User-agent: AnotherBot
Crawl-delay: 10

# Sitemap location
Sitemap: ${data.url}/sitemap.xml

# Host directive (specify preferred domain)
Host: ${data.url.replace(/^https?:\/\//, '')}
`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="mt-6">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>robots.txt</CardTitle>
          <CopyButton text={robotsCode} />
        </CardHeader>
        <CardContent>
          <pre className="p-4 bg-gray-100 rounded-md overflow-x-auto">
            <code>{robotsCode}</code>
          </pre>
        </CardContent>
      </Card>
    </motion.div>
  )
}

