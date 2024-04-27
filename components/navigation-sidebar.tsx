import Image from "next/image";
import Link from "next/link";
import { NavigationBar } from "./navigation-bar";
import { Button } from "@/components/ui/button";

export default function NavigationSidebar() {
  return (
    <div className="flex h-full lg:w-[256px] lg:fixed left-0 px-4 border-r flex-col">
      <Link href={"/"}>
        <div className="flex items-center gap-x-3 pt-2 pl-4 pb-7">
          <Image
            src={"/fixfinity-logo.png"}
            alt="Fixfinity Logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-extrabold rounded-md bg-gradient-to-br from-violet-400 to-cyan-500 p-1 text-foreground">
            Fixfinity
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <Button
          asChild
          size={"lg"}
        >
          <Link href={"#hero"}>Home</Link>
        </Button>
        <Button
          asChild
          size={"lg"}
        >
          <Link href={"#services"}>Service</Link>
        </Button>
        <Button
          asChild
          size={"lg"}
        >
          <Link href={"#features"}>Features</Link>
        </Button>
        <Button
          asChild
          size={"lg"}
        >
          <Link href={"#contact"}>Contact</Link>
        </Button>
      </div>
    </div>
  );
}
