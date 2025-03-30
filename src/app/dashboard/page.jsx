"use client";
import { useState } from "react";

export default function Dashboard() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [metadata, setMetadata] = useState(null);
  const [manifest, setManifest] = useState(null);
  const [robotsTxt, setRobotsTxt] = useState("");

  async function handleCrawl() {
    if (!url) return alert("Please enter a URL.");
    setLoading(true);
    setSummary("");
    setMetadata(null);
    setManifest(null);
    setRobotsTxt("");

    try {
      const res = await fetch("/api/crawl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (data.success) {
        setSummary(data.summary);
        await handleGenerateMetadata(data.summary);
      } else {
        setSummary("Failed to crawl the website.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setSummary("An error occurred.");
      setLoading(false);
    }
  }

  async function handleGenerateMetadata(content) {
    try {
      const res = await fetch("/api/generate-metadata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      const data = await res.json();
      console.log(data);
      if (data.metadata) {
        setMetadata(data.metadata);
        setManifest(data.manifest);
        setRobotsTxt(data.robotsTxt);
      } else {
        alert("Failed to generate metadata.");
      }
    } catch (error) {
      console.error("Error generating metadata:", error);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Crawl & Generate Metadata</h1>
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={handleCrawl}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Processing..." : "Start Crawling"}
        </button>

        {summary && (
          <div className="mt-4 p-4 border rounded">
            <h2 className="text-lg font-bold">Summary:</h2>
            <p className="text-sm mt-2">{summary}</p>
          </div>
        )}

        {metadata && (
          <div className="mt-4 p-4 border rounded">
            <h2 className="text-lg font-bold">Metadata:</h2>
            <pre className="text-xs mt-2 overflow-auto">{JSON.stringify(metadata, null, 2)}</pre>
          </div>
        )}

        {manifest && (
          <div className="mt-4 p-4 border rounded">
            <h2 className="text-lg font-bold">manifest.json:</h2>
            <pre className="text-xs mt-2 overflow-auto">{JSON.stringify(manifest, null, 2)}</pre>
          </div>
        )}

        {robotsTxt && (
          <div className="mt-4 p-4 border rounded">
            <h2 className="text-lg font-bold">robots.txt:</h2>
            <pre className="text-xs mt-2 overflow-auto">{robotsTxt}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
