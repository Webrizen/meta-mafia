'use client';

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Copy, Loader2 } from 'lucide-react'

export function CopyButton({ text }) {
  const [isCopying, setIsCopying] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async () => {
    setIsCopying(true)
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    } finally {
      setIsCopying(false)
    }
  }

  return (
    <Button onClick={copyToClipboard} variant="outline" size="sm" disabled={isCopying}>
      {isCopying ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : isCopied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      <span className="ml-2">{isCopied ? 'Copied!' : 'Copy'}</span>
    </Button>
  )
}