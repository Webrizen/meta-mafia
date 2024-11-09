"use client";
import Link from "next/link";
import { useState } from "react";
import MetaMafia from "@/assets/logo.png";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  {
    id: 1,
    text: "Features",
    link: "/features",
  },
  {
    id: 2,
    text: "How it works",
    link: "/how-it-works",
  },
  {
    id: 3,
    text: "Pricing",
    link: "/pricing",
  },
  {
    id: 4,
    text: "About",
    link: "/about",
  },
  {
    id: 5,
    text: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  const { setTheme } = useTheme();
  return (
    <>
      <header className="sticky left-0 top-0 w-full flex items-center md:py-3 py-2 dark:bg-[rgba(225,225,225,0.1)] border-b dark:border-b-[rgba(225,225,225,0.1)] backdrop-blur-3xl">
        <nav className="relative mx-auto container w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-3 justify-between items-center">
          <div className="flex items-center min-w-max relative border-r dark:border-r-[rgba(225,225,225,0.1)]">
            <Link
              href="/"
              className="h-[40px] w-auto flex gap-2 justify-start mr-2 items-center p-1 hover:bg-[rgba(225,225,225,0.05)]"
            >
              <Image
                src={MetaMafia}
                placeholder="blur"
                alt="Meta Mafia Logo"
                width={500}
                height={500}
                className="h-full w-auto rounded-xl"
              />
              <span>Meta Mafia</span>
            </Link>
          </div>
          <div className={`
                    fixed inset-x-0 h-[100dvh] lg:h-max top-0 lg:opacity-100 left-0 py-32 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
                    ${
                      openNavbar
                        ? ""
                        : "-translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0"
                    }
                `}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:pl-0">
              {navItems.map((navItem) => (
                <li key={navItem.id}>
                  <Link
                    href={navItem.link}
                    className="relative py-2.5 duration-300 ease-linear hover:text-black dark:hover:text-slate-50"
                  >
                    {navItem.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
              <Button variant="secondary">
                <Link href="/auth/sign-in">Login</Link>
              </Button>
              <Button>
                <Link href="/auth/sign-up">Sign-up</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center md:border-l dark:md:border-l-[rgba(225,225,225,0.1)] md:border-l-slate-200 md:pl-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="!w-[50px] !h-[40px] px-0 py-0 flex justify-center items-center"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-xl">
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="!rounded-xl cursor-pointer"
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="!rounded-xl cursor-pointer"
                >
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="!rounded-xl cursor-pointer"
                >
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => {
                toggleNavbar();
              }}
              className="lg:hidden outline-none border-l border-l-purple-100 dark:border-l-gray-800 pl-3 relative py-3"
            >
              <span className="sr-only">Toggle navbar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
