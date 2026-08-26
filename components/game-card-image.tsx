"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  images: string[];
  title: string;
  sizes?: string;
  priority?: boolean;
};

export function GameCardImage({
  images,
  title,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  priority = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const hasMultiple = images.length > 1;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!hasMultiple || !containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const idx = Math.min(Math.floor((x / width) * images.length), images.length - 1);
    setActiveIndex(idx);
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setActiveIndex(0);
        setIsHovered(false);
      }}
    >
      {/* Before first hover: only render the primary image */}
      {!isHovered && (
        <Image
          src={images[0]}
          alt={`${title} cover art`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      )}

      {/* After first hover: render all, toggle opacity */}
      {isHovered &&
        images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={i === 0 ? `${title} cover art` : `${title} screenshot ${i + 1}`}
            fill
            sizes={sizes}
            className={cn(
              "object-cover transition-opacity duration-150",
              i === activeIndex ? "opacity-100" : "opacity-0",
            )}
          />
        ))}

      {/* Pip indicators — only shown when there are multiple images */}
      {hasMultiple && (
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 flex items-end gap-0.5 px-2 pb-1.5 transition-opacity duration-150",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          {images.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-0.5 flex-1 rounded-full transition-colors duration-150",
                i === activeIndex ? "bg-white" : "bg-white/35",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
