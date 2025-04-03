import { CopyCommand } from "@/components/system/copy-command";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import React from "react";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/get-metadata?id=${id}`,
    { cache: "no-store" }
  );
  const response = await res.json();

  if (!response.success || !response.data) {
    return <div className="text-red-500 text-center mt-10">Error fetching metadata</div>;
  }

  const { metadata, manifest, robotsTxt } = response.data.metadata;
  const npxCommand = `npx metamafia ${id}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 w-full">
      {/* Next.js Metadata */}
      <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4 rounded-xl shadow-none border border-gray-300 dark:border-slate-500 col-span-2">
        <h2 className="text-xl font-semibold mb-2">Next.js Metadata</h2>
        <pre className="overflow-auto p-2 bg-gray-200 dark:bg-black rounded-md">
          <code>
            {`export const metadata = ${JSON.stringify(metadata, null, 2)};`}
          </code>
        </pre>
      </div>

      <div className="w-full flex flex-col gap-5">
        {/* Quick Install Block */}
        <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4 border border-gray-300 dark:border-slate-500 rounded-xl flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-2">Quick Install</h2>
          <div className="flex flex-row gap-2 items-center justify-center">
            <pre className="bg-gray-200 dark:bg-gray-800 p-3 rounded-md overflow-auto text-xs w-full">
              {npxCommand}
            </pre>
            <CopyCommand text={npxCommand} />
          </div>
        </div>

        {/* Manifest JSON */}
        <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4 rounded-xl shadow-none border border-gray-300 dark:border-slate-500">
          <h2 className="text-xl font-semibold mb-2">Manifest.json</h2>
          <pre className="overflow-auto p-2 bg-gray-200 dark:bg-black rounded-md">
            <code>{JSON.stringify(manifest, null, 2)}</code>
          </pre>
        </div>

        {/* Robots.txt */}
        <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4 rounded-xl shadow-none border border-gray-300 dark:border-slate-500">
          <h2 className="text-xl font-semibold mb-2">Robots.txt</h2>
          <pre className="overflow-auto p-2 bg-gray-200 dark:bg-black rounded-md">
            <code>{robotsTxt}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}