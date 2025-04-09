import { Spotlight } from "@/components/system/spotlight";
import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <>
      <div className="relative bg-gradient-to-bl from-slate-100/50 via-slate-100/20 to-background min-h-screen overflow-hidden">
      <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#f1f1f1"
        />
        <div className="max-w-7xl mx-auto py-24 px-4">
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                MetaMafia Authentication
              </p>
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Power Your Web Presence with Smarter Metadata
                </h1>
                <p className="text-xl dark:text-slate-100/70 text-slate-950/70">
                Every website tells a story, but not all stories are found. MetaMafia ensures your site stands out, ranks better, and speaks the right language to search engines. Whether you're signing in or signing up, you're taking the first step toward effortless metadata automation.
                </p>
              </div>
              <blockquote className="hidden md:block relative max-w-sm">
                <svg
                  className="absolute top-0 z-10 start-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-slate-100/10"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="relative z-40">
                  <p className="text-xl italic">
                    “The Strongest Principle of Growth Lies in the Human
                    Choice.”
                  </p>
                </div>
                <div className="mt-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://placehold.co/100x100"
                        alt="Image Description"
                      />
                    </div>
                    <div className="grow ms-4">
                      <div className="font-semibold">George Eliot</div>
                      <div className="text-xs dark:text-slate-100/70 text-slate-950/70">
                        - English novelist and poet
                      </div>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
            <div className="lg:px-8 md:mt-0 mt-20">
              <div className="mx-auto flex w-full flex-col justify-start items-start space-y-6 sm:w-full relative">
                <div className="z-40 w-full flex justify-center items-center">{children}</div>
                <div className="z-10 block h-[360px] w-[360px] overflow-hidden filter blur-[9999px] border-blue-700 rounded-[40%_60%_60%_40%/55%_67%_33%_45%] transition-all duration-500 bg-gradient-to-tr from-indigo-900 to-cyan-500 absolute left-2 -top-16"></div>
                <div className="z-10 block h-[360px] w-[360px] overflow-hidden filter blur-[9999px] border-blue-700 rounded-[40%_60%_60%_40%/55%_67%_33%_45%] transition-all duration-500 bg-gradient-to-tr from-indigo-900 to-cyan-500 absolute right-2 bottom-2"></div>
                <p className="px-8 text-center text-sm text-muted-foreground sm:w-[320px] mx-auto z-30">
                  By clicking continue, you agree to our{" "}
                  <Link
                    href="https://webrizen.dev/terms-of-service"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://webrizen.dev/privacy-policy"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}