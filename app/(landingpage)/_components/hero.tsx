import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { soria } from "@/lib/fonts";
import { hero } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ChevronRight, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import reactStringReplace from "react-string-replace";

export const heroes = {
  heading: "Provider of Handyman Services\n for repairing technical problem",
};

export default function Hero() {
  return (
    <section className="py-[100px]">
      <div className="flex flex-col items-center justify-center py-10 delay-200 duration-1000 animate-in fade-in slide-in-from-top-6">
        <Badge className="flex items-center gap-2 text-lg font-extralight text-zinc-50">
          Announcing our new products
          <ChevronRight className="h-5 w-5"/>
        </Badge>
        <h1
          className={cn(
            soria.className,
            "lg:text-6xl xl:text-8xl mt-8 tracking-wide font-extrabold text-center text-5xl capitalize"
          )}
        >
          {hero.heading.split("\n").map((line, index) => (
            <span key={index}>
              {reactStringReplace(line, /\*\*(.*)\*\*/g, (match, i) => (
                <span
                  key={i}
                  className="word-animation"
                >
                  {match}
                </span>
              ))}
              <br />
            </span>
          ))}
        </h1>
        <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
          <div className="relative  mb-8 lg:mb-0 mt-4">
            <Image
              src={"/hero-tukang.png"}
              alt="Fixfinity Logo"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col items-center gap-y- gap-x-8">
            <h1 className="text-lg text-center lg:text-3xl font-bold text-neutral-600 max-w-[500px]">
              Your Trusted Building Solutions. Get the best service for your
              home easily in one app.
            </h1>
            <div className="flex items-center gap-x-2 mt-4">
              <Button asChild>
                <Link
                  href={"/"}
                  target="_blank"
                >
                  Contact us
                </Link>
              </Button>
              <Button asChild>
                <Link
                  href={"https://linktr.ee/fixfinity"}
                  target="_blank"
                >
                  <Info className="h-5 w-5 mr-1" />
                  For more information
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
