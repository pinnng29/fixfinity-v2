"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { services, servicesItem } from "@/lib/site";
import { cn } from "@/lib/utils";
import { soria } from "@/lib/fonts";
import reactStringReplace from "react-string-replace";
import Image from "next/image";
import SliderImage from "@/components/slider-images";

export default function Services() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto delay-300 duration-1000 animate-in fade-in slide-in-from-bottom-7">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2
            className={cn(
              "text-3xl font-extrabold tracking-wide sm:text-5xl",
              soria.className
            )}
          >
            {services.heading.split("\n").map((line, index) => (
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
          </h2>
          <p className="font-extrabold text-muted-foreground text-center">
            We provide a varitety of services for you, from building a house to
            calculating construction and repair needs.
          </p>
          <div className="mx-auto p-6 px-4 grid items-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {servicesItem.map((service, i) => (
              <Card
                key={i}
                className="min-h-[300px]"
              >
                <CardHeader className="mt-6 flex items-center gap-y-4">
                  {service.imgUrl && (
                    <Image
                      src={service.imgUrl}
                      alt="Service Image"
                      width={70}
                      height={70}
                    />
                  )}
                  <h2 className="text-xl font-semibold">{service.title}</h2>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground text-center">
                  {service.description}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="container mx-auto">
            {/* <SliderImage /> */}
          </div>
        </div>
      </div>
    </section>
  );
}