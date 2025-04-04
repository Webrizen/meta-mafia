"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [metadata, setMetadata] = useState(null);
  const [manifest, setManifest] = useState(null);
  const [robotsTxt, setRobotsTxt] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleCrawl() {
    if (!url) {
      setErrorMessage("Please enter a valid URL.");
      return;
    }
    setLoading(true);
    setSummary("");
    setMetadata(null);
    setManifest(null);
    setRobotsTxt("");
    setErrorMessage("");
  
    try {
      const res = await fetch("/api/crawl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || `HTTP error! Status: ${res.status}`);
      }
  
      if (data.success) {
        setSummary(data.summary);
        await handleGenerateMetadata(url, data.summary);
      } else {
        throw new Error(data.message || "Failed to crawl the website.");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }
  
  async function handleGenerateMetadata(url, content) {
    try {
      const res = await fetch("/api/generate-metadata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, content }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || `HTTP error! Status: ${res.status}`);
      }
  
      if (data.metadata) {
        setMetadata(data.metadata);
        setManifest(data.manifest);
        setRobotsTxt(data.robotsTxt);
      } else {
        throw new Error("Failed to generate metadata.");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  }
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      <motion.div 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="p-6 rounded-lg border border-gray-300 dark:border-gray-700 w-full bg-white dark:bg-gray-800"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Crawl & Generate Metadata</h1>
        <div className="flex flex-row justify-between gap-2 items-center">
          <Input
            type="text"
            className="w-full py-2 px-4 !h-11"
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button onClick={handleCrawl} size="lg" className="flex items-center justify-center cursor-pointer" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Start Crawling"}
          </Button>
        </div>

        {errorMessage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 border border-red-500 bg-red-100 text-red-800 rounded">
            <h2 className="text-lg font-bold">Error:</h2>
            <p className="text-sm mt-2">{errorMessage}</p>
          </motion.div>
        )}

        {summary && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 border border-gray-300 dark:border-gray-700 rounded">
            <h2 className="text-lg font-bold">Summary:</h2>
            <p className="text-sm mt-2">{summary}</p>
          </motion.div>
        )}

        {metadata && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 border border-gray-300 dark:border-gray-700 rounded">
            <h2 className="text-lg font-bold">Metadata:</h2>
            <pre className="text-xs mt-2 overflow-auto">{JSON.stringify(metadata, null, 2)}</pre>
          </motion.div>
        )}

        {manifest && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 border border-gray-300 dark:border-gray-700 rounded">
            <h2 className="text-lg font-bold">manifest.json:</h2>
            <pre className="text-xs mt-2 overflow-auto">{JSON.stringify(manifest, null, 2)}</pre>
          </motion.div>
        )}

        {robotsTxt && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 border border-gray-300 dark:border-gray-700 rounded">
            <h2 className="text-lg font-bold">robots.txt:</h2>
            <pre className="text-xs mt-2 overflow-auto">{robotsTxt}</pre>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}