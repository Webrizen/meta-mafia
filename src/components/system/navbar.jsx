"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MetamafiaLogo from "@/assets/logo.png";
import { UserButton, useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const links = [
    {
      href: "/features",
      title: "Features",
      description: "Explore Metamafia’s metadata automation capabilities.",
    },
    {
      href: "/docs",
      title: "Documentation",
      description:
        "Learn how to integrate Metamafia into your Next.js projects.",
    },
    {
      href: "/blog",
      title: "Blog",
      description: "Stay updated with the latest SEO and metadata trends.",
    },
  ];
  const { isSignedIn } = useAuth()
  return (
    <header className="p-2 bg-[rgba(225,225,225,0.1)] backdrop-blur-3xl sticky top-0 z-50">
      <div className="md:max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="h-10 w-auto flex gap-2 justify-start mr-10 items-center p-1 rounded-md hover:bg-[rgba(225,225,225,0.05)]"
        >
          <Image
            src={MetamafiaLogo}
            alt="Metamafia Logo"
            width={500}
            height={500}
            className="h-full w-auto"
          />
          <span>MetaMafia</span>
        </Link>

        <nav className="lg:flex hidden md:border-l md:border-slate-500 md:px-3 lg:flex-row flex-col flex-grow md:relative absolute md:w-auto w-full left-0 right-0 md:top-auto top-16 z-50 text-sm items-center">
          <Link
            href="/"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
          >
            Home
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-100/50 to-transparent p-4 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Why Metamafia?
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Automate and optimize your Next.js metadata
                            effortlessly.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {links.map((link) => (
                      <NavigationMenuLink asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                        >
                          <div className="text-sm font-medium leading-none">
                            {link.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {link.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href="/pricing"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-slate-700 dark:text-slate-300 items-center justify-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
          >
            Contact
          </Link>
        </nav>

        <div className="w-full flex justify-end items-center gap-2">
        {isSignedIn ? (
            <UserButton />
          ) : (
            <Button
              className="bg-indigo-600 hover:bg-indigo-500 text-indigo-50"
              radius="full"
            >
              <Link
                href="/auth/sign-in"
                className="size-full flex justify-center items-center text-center"
              >
                Login
              </Link>
            </Button>
          )}
          <Button
            variant="ghost"
            radius="full"
            className="!min-h-[35px] !min-w-[35px] cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Sheet>
            <SheetTrigger className="w-10 h-10 flex md:hidden justify-center items-center hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)] rounded">
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
            </SheetTrigger>
            <SheetContent className="bg-white dark:bg-black border-l-slate-100/30">
              <SheetHeader className="w-full text-left">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Explore Metamafia's features and documentation.
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-4 flex flex-col space-y-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-[rgba(225,225,225,0.1)]"
                  >
                    <div className="text-sm font-medium leading-none">
                      {link.title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
