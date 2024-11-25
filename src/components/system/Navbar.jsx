"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MetaMafia from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="dark-bg-custom text-white py-3 text-sm text-center">
        <p>
          We're looking for investors (domain & hosting).{" "}
          <Link href="/invest" className="font-semibold underline">
            Learn More
          </Link>
        </p>
      </div>
      <header className="p-2 dark:bg-[rgba(225,225,225,0.1)] bg-white backdrop-blur-3xl z-50 sticky top-0">
        <div className="md:container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="h-12 md:w-auto w-max flex gap-2 justify-start pr-7 mr-8 items-center p-1 rounded-md hover:bg-slate-50 dark:hover:bg-[rgba(225,225,225,0.05)]"
          >
            <Image
              src={MetaMafia}
              placeholder="blur"
              alt="MetaMafia Logo"
              width={500}
              height={500}
              className="h-full w-full rounded-md"
            />
            <span className="block font-bold">MetaMafia</span>
          </Link>
          <nav
            className={`lg:flex md:border-l md:border-slate-500 md:px-3 lg:flex-row flex-col flex-grow md:relative absolute md:w-auto w-full left-0 right-0 md:top-auto top-16 z-50 text-sm items-center ${
              isMenuOpen
                ? "grid grid-cols-2 bg-white dark:bg-slate-900 p-4"
                : " hidden"
            }`}
          >
            <Link
              href="/#"
              className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
            >
              About
            </Link>
            <Link
              href="/how-to-use"
              className="lg:inline-flex whitespace-nowrap lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
            >
              How to use
            </Link>
            <Link
              href="/faqs"
              className="lg:inline-flex lg:w-auto px-3 py-2 rounded dark:text-slate-300 text-slate-700 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
            >
              FAQs
            </Link>
            <Link
              href="/blogs"
              className="lg:inline-flex lg:w-auto px-3 py-2 rounded dark:text-slate-300 text-slate-700 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
            >
              Blogs
            </Link>
            <a
              href="https://webrizen.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:inline-flex lg:w-auto px-3 py-2 rounded dark:text-slate-300 text-slate-700 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
            >
              Contact
            </a>
          </nav>
          <div className="w-full flex justify-end items-center gap-2">
            <Button asChild>
              <a
                href="https://x.com/arsh_jsx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="size-5" />
                Follow us
              </a>
            </Button>
            <button
              className="inline-flex w-10 h-10 justify-center items-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
