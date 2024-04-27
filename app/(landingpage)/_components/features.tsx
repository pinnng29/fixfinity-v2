import SliderImage from "@/components/slider-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { soria } from "@/lib/fonts";
import { features, featuresItem } from "@/lib/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import reactStringReplace from "react-string-replace";

export default function Features() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-4">
          <Badge className="text-zinc-50">Key Features</Badge>
        </div>
        <SliderImage />
        <div className="flex flex-col items-center justify-center mt-16">
          <h2
            className={cn(
              "text-3xl font-extrabold tracking-wide sm:text-5xl",
              soria.className
            )}
          >
            {features.heading.split("\n").map((line, index) => (
              <span key={index}>
                {reactStringReplace(line, /\*\*(.*)\*\*/g, (match, i) => (
                  <span
                    key={i}
                    className="word-animation"
                  >
                    {match}
                  </span>
                ))}
              </span>
            ))}
          </h2>
          <div className="container mx-auto px-2 p-4 items-center gap-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {featuresItem.map((item, index) => (
              <Card
                key={index}
                className="min-h-[269px] bg-muted"
              >
                <CardHeader className="mt-4 flex items-center justify-center">
                  {item.imgUrl && (
                    <Image
                      src={item.imgUrl}
                      alt={item.title}
                      width={80}
                      height={80}
                    />
                  )}
                  {/* <h2 className="text-lg font-semibold">{item.title}</h2> */}
                </CardHeader>
                <CardContent className="text-center">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
