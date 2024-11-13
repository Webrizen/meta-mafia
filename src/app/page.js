import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="py-32 md:min-h-min min-h-screen dark-bg-custom relative">
        <div className="container mx-auto text-center">
          <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
            <h1 className="text-3xl font-extrabold lg:text-6xl text-slate-50">
            Let Meta Mafia handle your SEO so you can pretend you worked hard.
            </h1>
            <p className="text-balance text-muted-foreground lg:text-lg text-slate-300">
              Boost your website's visibility by generating SEO-friendly metadata
              for your Next.js projects. Enter your data, let AI do the hard
              work, and focus on what matters.
            </p>
          </div>
          <div className="flex justify-center items-center md:flex-row flex-col md:max-w-2xl max-w-sm gap-3 mt-10 mx-auto">
            <Button size="lg">
              Start Generating Now
            </Button>
            <Button size="lg" variant="ghost" className="text-slate-50">
              Learn More
            </Button>
          </div>
          <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="mx-4 inline-flex items-center -space-x-4">
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                  alt="User Avatar 1"
                />
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-2.webp"
                  alt="User Avatar 2"
                />
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-3.webp"
                  alt="User Avatar 3"
                />
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-4.webp"
                  alt="User Avatar 4"
                />
              </Avatar>
              <Avatar className="size-14 border">
                <AvatarImage
                  src="https://www.shadcnblocks.com/images/block/avatar-5.webp"
                  alt="User Avatar 5"
                />
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
        <div className="absolute bottom-0 left-0 w-full  overflow-hidden">
          <svg
            className="relative block w-full h-[130px] dark:text-[#121212] text-white"
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