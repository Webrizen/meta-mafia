"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import MetaMafia from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="p-2 dark:bg-[rgba(225,225,225,0.1)] bg-white backdrop-blur-3xl z-50 sticky top-0">
      <div className="md:container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="md:h-8 h-10 md:w-auto w-full flex gap-2 justify-start mr-8 items-center p-1 rounded-md hover:bg-[rgba(225,225,225,0.05)]"
        >
          <Image
            src={MetaMafia}
            placeholder="blur"
            alt="MetaMafia Logo"
            width={500}
            height={500}
            className="h-full w-auto rounded-md"
          />
          <span className="md:block hidden">MetaMafia</span>
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
            href="/pricing"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
          >
            Pricing
          </Link>
          <Link
            href="/#faqs"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded dark:text-slate-300 text-slate-700 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded dark:text-slate-300 text-slate-700 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
          >
            Contact
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="lg:inline-flex bg-transparent lg:w-auto px-3 py-2 rounded dark:text-slate-300 text-slate-700 items-center justify-center dark:bg-transparent hover:bg-slate-100">
                  Legal
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2 flex flex-col gap-1 whitespace-nowrap bg-white dark:bg-transparent shadow-lg rounded-lg">
                  <Link href="/privacy-policy" legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                      Privacy Policy
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/refund-policy" legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                      Refund Policy
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/terms-of-service" legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
                      Terms of Service
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="w-full flex justify-end items-center gap-2">
          <Button className="w-min rounded-lg" asChild size="sm">
            <Link href="/auth/sign-in">Login</Link>
          </Button>
          <Button variant="outline" className="md:block hidden w-full rounded-lg bg-gradient-to-br from-yellow-500 via-orange-600 to-red-700 text-slate-50" size="sm">
          <Link href="/auth/sign-up">Sign up</Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">
                <Button variant="outline" size="sm" className=" rounded-lg">
                  <Sun
                    className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${
                      theme === "dark" ? "dark:-rotate-90 dark:scale-0" : ""
                    }`}
                  />
                  <Moon
                    className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${
                      theme === "dark" ? "dark:rotate-0 dark:scale-100" : ""
                    }`}
                  />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl p-2">
              <DropdownMenuItem onClick={() => setTheme("light")} className="rounded-xl p-2">
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} className="rounded-xl p-2">
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")} className="rounded-xl p-2">
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <UserButton />
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
  );
};

export default Navbar;
