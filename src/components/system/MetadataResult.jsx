'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { CopyButton } from './CopyButton'

export default function MetadataResult({ data }) {
  const metadataCode = `
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${data.title}',
  description: '${data.description}',
  keywords: '${data.keywords}',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name or Company',
  publisher: 'Your Company',
  openGraph: {
    title: '${data.title}',
    description: '${data.description}',
    url: '${data.url}',
    siteName: '${data.siteName}',
    locale: '${data.locale}',
    type: '${data.ogType}',
    images: [
      {
        url: '${data.ogImage}',
        width: 1200,
        height: 630,
        alt: '${data.title}',
      },
    ],
  },
  twitter: {
    card: '${data.twitterCardType}',
    title: '${data.title}',
    description: '${data.description}',
    siteId: '${data.twitterHandle}',
    creator: '${data.twitterHandle}',
    creatorId: '${data.twitterHandle}',
    images: ['${data.ogImage}'],
  },
  applicationName: '${data.siteName}',
  referrer: 'origin-when-cross-origin',
  keywords: ['${data.keywords.split(',').join("', '")}'],
  authors: [{ name: 'Your Name', url: '${data.url}' }],
  colorScheme: 'light',
  creator: 'Your Name or Company',
  publisher: 'Your Company',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('${data.url}'),
  alternates: {
    canonical: '${data.canonical}',
    languages: {
      'en-US': '${data.url}/en-US',
      'de-DE': '${data.url}/de-DE',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
    other: {
      me: ['my-email@example.com', 'https://example.com/profile'],
    },
  },
  category: 'technology',
}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Metadata</CardTitle>
          <CopyButton text={metadataCode} />
        </CardHeader>
        <CardContent>
          <pre className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-x-auto">
            <code className="text-sm">{metadataCode}</code>
          </pre>
        </CardContent>
      </Card>
    </motion.div>
  )
}