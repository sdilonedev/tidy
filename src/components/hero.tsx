import { LinkIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Hero() {
  return (
    <div className="flex items-center gap-20 justify-end mx-auto py-12 max-w-4xl">
      <main className="container mx-auto px-4 mt-20 md:mt-32">
        <div className="flex flex-row items-center justify-between gap-12 mb-12">
          <div className="flex-1 text-center">
            <h1 className="text-tidy-ash dark:text-tidy-bone text-4xl lg:text-5xl font-extrabold leading-tight mb-8 duration-500 animate-in fade-in-5 slide-in-from-bottom-2">
              Simplify Links. Share Freely.
            </h1>
            <p className="text-tidy-ash dark:text-tidy-bone text-lg lg:text-2xl leading-relaxed mb-8 duration-500 animate-in fade-in-5 slide-in-from-top-2">
              Tidy is your open-source solution for creating short URLs and QR
              codes, just the essentials. Engage your audience, connect them to
              the right information, and track your links effortlessly.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 max-w-md mx-auto justify-center items-center">
              <Link href="login">
                <Button
                  size="lg"
                  className="w-full duration-500 animate-in fade-in-5 slide-in-from-left-2"
                >
                  <LinkIcon size={24} />
                  Create a links
                </Button>
              </Link>

              <Link href="https://github.com/sdilone/tidy">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full duration-500 animate-in fade-in-5 slide-in-from-right-2"
                >
                  <SiGithub size={24} />
                  Contribute in Github
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
