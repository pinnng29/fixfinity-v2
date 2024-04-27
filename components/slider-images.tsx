"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { bannerImages } from "@/lib/site";

export default function SliderImage() {
  return (
    <Carousel plugins={[Autoplay()]}>
      <CarouselContent>
        {bannerImages.map((images, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-video sm:aspect-[3:2] lg:aspect-[936/294] transition-all duration-200 ease-in">
              <Image
                src={images.imgUrl}
                alt={images.title}
                fill
                className="object-cover object-center rounded-md"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-md" />
              <p className="absolute top-1/2 left-5 font-semibold text-white md:text-xl lg:text-2xl">
                {images.title}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
