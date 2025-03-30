import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-32 dark-bg-custom relative">
        <div className="container mx-auto text-center md:px-0 px-5">
          <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
            <h1 className="text-3xl font-extrabold lg:text-6xl text-slate-50">
              Let Meta Mafia handle your SEO so you can pretend you worked hard.
            </h1>
            <p className="text-balance lg:text-lg text-slate-300">
              Boost your website's performance by generating accurate and
              optimized SEO metadata effortlessly. Provide your details, let
              Meta Mafia handle the rest, and focus on creating amazing web
              experiences.
            </p>
          </div>
          <div className="flex justify-center items-center md:flex-row flex-col md:max-w-2xl max-w-sm gap-3 mt-10 mx-auto">
            <Button size="lg" asChild>
              <Link href="/dashboard">Start Generating Now</Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-slate-50" asChild>
              <Link href="/how-to-use">Learn More</Link>
            </Button>
          </div>
          <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="mx-4 inline-flex items-center -space-x-4">
              <Avatar className="size-14 border">
                <AvatarImage src="https://i.pravatar.cc/300" alt="Colm Tuite" />
                <AvatarFallback>N/A</AvatarFallback>
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage src="https://i.pravatar.cc/301" alt="John Dow" />
                <AvatarFallback>N/A</AvatarFallback>
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://i.pravatar.cc/302"
                  alt="Silam Rocky"
                />
                <AvatarFallback>N/A</AvatarFallback>
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://i.pravatar.cc/303"
                  alt="Rajesh Khan"
                />
                <AvatarFallback>N/A</AvatarFallback>
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://i.pravatar.cc/304"
                  alt="Desh Pandey"
                />
                <AvatarFallback>N/A</AvatarFallback>
              </Avatar>
            </span>
            <div>
              <div className="flex items-center gap-1 text-slate-50">
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">5.0</span>
              </div>
              <p className="text-left font-medium text-slate-100">
                from 200+ satisfied users
              </p>
            </div>
          </div>
        </div>
        <div className="absolute md:block hidden bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full md:h-[130px] dark:text-slate-950 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
