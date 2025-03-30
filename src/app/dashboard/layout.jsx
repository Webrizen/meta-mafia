import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <section className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto p-3">
        <nav className="flex flex-row gap-1 items-center justify-start border-b border-slate-500 py-3 md:mt-0 mt-20 overflow-x-auto">
          <Link
            href="/dashboard"
            className="w-min whitespace-nowrap py-2 px-3 rounded text-sm dark:hover:bg-[rgba(225,225,225,0.06)] hover:bg-[rgba(0,0,0,0.06)]"
          >
            Dashboard
          </Link>
          <span>·</span>
          <Link
            href="/dashboard/create-metadata"
            className="w-min whitespace-nowrap py-2 px-3 rounded text-sm dark:hover:bg-[rgba(225,225,225,0.06)] hover:bg-[rgba(0,0,0,0.06)]"
          >
            Create Metadata
          </Link>
          <span>·</span>
          <Link
            href="/dashboard/manage-metadata"
            className="w-min whitespace-nowrap py-2 px-3 rounded text-sm dark:hover:bg-[rgba(225,225,225,0.06)] hover:bg-[rgba(0,0,0,0.06)]"
          >
            Manage Metadata
          </Link>
          <span>·</span>
          <Link
            href="/dashboard/manage-subscriptions"
            className="w-min whitespace-nowrap py-2 px-3 rounded text-sm dark:hover:bg-[rgba(225,225,225,0.06)] hover:bg-[rgba(0,0,0,0.06)]"
          >
            Subscriptions
          </Link>
        </nav>

        <main className="md:p-2 p-0">{children}</main>
      </div>
    </section>
  );
}
