'use client'

import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const formFields = [
  { name: 'title', label: 'Title', placeholder: 'My Next.js App' },
  { name: 'description', label: 'Description', placeholder: 'A fantastic Next.js application' },
  { name: 'url', label: 'URL', placeholder: 'https://myapp.com' },
  { name: 'siteName', label: 'Site Name', placeholder: 'My App' },
  { name: 'locale', label: 'Locale', placeholder: 'en_US' },
  { name: 'themeColor', label: 'Theme Color', placeholder: '#000000' },
  { name: 'twitterHandle', label: 'Twitter Handle', placeholder: '@myapp' },
  { name: 'twitterCardType', label: 'Twitter Card Type', placeholder: 'summary_large_image' },
  { name: 'ogType', label: 'OG Type', placeholder: 'website' },
  { name: 'ogImage', label: 'OG Image URL', placeholder: 'https://myapp.com/og-image.jpg' },
  { name: 'canonical', label: 'Canonical URL', placeholder: 'https://myapp.com' },
  { name: 'keywords', label: 'Keywords', placeholder: 'nextjs, react, web development' },
]

export default function MetadataForm({ onSubmit }) {
  const { register, handleSubmit } = useForm()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Metadata</CardTitle>
        <CardDescription>Fill in the details to generate your metadata</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input
                  id={field.name}
                  {...register(field.name)}
                  placeholder={field.placeholder}
                  className="mt-1"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: formFields.length * 0.1 }}
          >
            <Button type="submit" className="w-full">
              Generate Metadata
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  )
}