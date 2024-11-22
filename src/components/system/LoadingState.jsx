'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

export default function LoadingState() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center h-64">
        <motion.div
          className="w-16 h-16 border-t-4 border-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.p
          className="mt-4 text-xl font-semibold text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Generating your metadata...
        </motion.p>
      </CardContent>
    </Card>
  )
}