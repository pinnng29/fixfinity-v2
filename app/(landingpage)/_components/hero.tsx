import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Info } from "lucide-react";
import reactStringReplace from "react-string-replace";

import { cn } from "@/lib/utils";
import { hero } from "@/lib/site";
import { soria } from "@/lib/fonts";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-[100px]"
    >
      <div className="flex flex-col items-center justify-center py-10 delay-200 duration-1000 animate-in fade-in slide-in-from-top-6">
        <Badge className="flex items-center gap-2 text-lg font-extralight text-zinc-50">
          Announcing our new products
          <ChevronRight className="h-5 w-5" />
        </Badge>
        <h1 className="text-center font-semibold text-4xl lg:text-6xl xl:text-7xl mt-6 capitalize tracking-wide">
          Provider of handyman services for repairing technical problem
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
              <Button
                asChild
                size={"sm"}
              >
                <Link
                  href={"https://wa.me/6281364664824/"}
                  target="_blank"
                >
                  Contact us
                </Link>
              </Button>
              <Button
                asChild
                size={"sm"}
              >
                <Link
                  href={"https://linktr.ee/fixfinity"}
                  target="_blank"
                >
                  <Info className="h-4 w-4 mr-1" />
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
