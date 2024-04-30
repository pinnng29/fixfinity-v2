import Link from "next/link";
import reactStringReplace from "react-string-replace";

import { cn } from "@/lib/utils";
import { soria } from "@/lib/fonts";
import { contact } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-xl px-6 py-24 text-center"
    >
      <Badge className="text-zinc-50 mb-4">Why Fixfinity?</Badge>
      <div className="flex flex-col items-center justify-center rounded-xl border border-border p-10 shadow-xl">
        <h2 className="text-center font-semibold text-2xl lg:text-4xl tracking-wide">
          Get in touch with us
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Don&apos;t fix your house by yourself. You need the experts to do it
        </p>
        <Button
          asChild
          size={"lg"}
          variant={"default"}
          className="mt-4 rounded-lg"
        >
          <Link
            href={"https://wa.me/6281364664824/"}
            target="_blank"
          >
            Contact Us
          </Link>
        </Button>
      </div>
    </section>
  );
}
