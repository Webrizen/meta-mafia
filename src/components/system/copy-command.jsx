"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyCommand({ text, className = "", ...props }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!navigator.clipboard) {
      console.error("Clipboard API not available");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <button
      className={`relative rounded-md p-2 bg-slate-200 dark:bg-slate-700 h-full w-[45px] flex justify-center items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      onClick={handleCopy}
      {...props}
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs py-1 px-2 rounded-md shadow-md opacity-0 transition-opacity duration-200 pointer-events-none">
          {copied ? "Copied!" : "Copy"}
      </div>
      <style jsx global>{`
      button:hover div {
        opacity: 1;
      }
      `}</style>
    </button>
  );
}