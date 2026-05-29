"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type Props = {
  images: string[];
  title: string;
  sizes?: string;
  priority?: boolean;
};

export function GameImageGallery({
  images,
  title,
  sizes = "(max-width: 1024px) 100vw, 70vw",
  priority = false,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const onApiSet = useCallback(
    (carouselApi: CarouselApi) => {
      setApi(carouselApi);
      carouselApi?.on("select", () => {
        setActiveIndex(carouselApi.selectedScrollSnap());
      });
    },
    [],
  );

  function scrollTo(index: number) {
    api?.scrollTo(index);
  }

  return (
    <div className="flex h-full flex-col gap-3">
      {/* Main featured image */}
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-border/70 bg-muted">
        <Image
          src={images[activeIndex]}
          alt={`${title} screenshot ${activeIndex + 1}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-opacity duration-200"
        />
      </div>

      {/* Thumbnail carousel */}
      {images.length > 1 && (
        <Carousel
          setApi={onApiSet}
          opts={{ align: "start", dragFree: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {images.map((src, i) => (
              <CarouselItem
                key={i}
                className="pl-2 basis-1/4 sm:basis-1/5 cursor-pointer"
                onClick={() => scrollTo(i)}
              >
                <div
                  className={cn(
                    "relative aspect-video overflow-hidden rounded-md border-2 transition-colors",
                    activeIndex === i
                      ? "border-primary"
                      : "border-transparent hover:border-border",
                  )}
                >
                  <Image
                    src={src}
                    alt={`${title} thumbnail ${i + 1}`}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
}
