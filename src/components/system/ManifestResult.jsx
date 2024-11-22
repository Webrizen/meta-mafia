"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "./CopyButton";

export default function ManifestResult({ data }) {
  const manifestCode = `
{
  "name": "${data.title}",
  "short_name": "${data.siteName}",
  "description": "${data.description}",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "${data.themeColor}",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/maskable_icon.png",
      "sizes": "196x196",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "orientation": "portrait",
  "categories": ["productivity", "utilities"],
  "screenshots": [
    {
      "src": "/screenshot1.png",
      "sizes": "1280x720",
      "type": "image/png"
    },
    {
      "src": "/screenshot2.png",
      "sizes": "1280x720",
      "type": "image/png"
    }
  ],
  "shortcuts": [
    {
      "name": "Open About",
      "short_name": "About",
      "description": "Open the about page",
      "url": "/about",
      "icons": [{ "src": "/icons/about.png", "sizes": "192x192" }]
    }
  ],
  "lang": "${data.locale.split("_")[0]}",
  "dir": "ltr",
  "prefer_related_applications": false,
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.app1",
      "id": "com.example.app1"
    }
  ],
  "iarc_rating_id": "e84b072d-71b3-4d3e-86ae-31a8ce4e53b7"
}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="mt-6">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>manifest.json</CardTitle>
          <CopyButton text={manifestCode} />
        </CardHeader>
        <CardContent>
          <pre className="p-4 bg-gray-100 rounded-md overflow-x-auto">
            <code>{manifestCode}</code>
          </pre>
        </CardContent>
      </Card>
    </motion.div>
  );
}
