"use client";

import Image from "next/image";
import { useRef, useState } from "react";

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
    const idx = Math.min(
      Math.floor((x / width) * images.length),
      images.length - 1,
    );
    setActiveIndex(idx);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setActiveIndex(0);
    setIsHovered(false);
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
            className={[
              "object-cover transition-opacity duration-150",
              i === activeIndex ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
        ))}

      {/* Pip indicators — only shown when there are multiple images */}
      {hasMultiple && (
        <div className="absolute inset-x-0 bottom-0 flex items-end gap-0.5 px-2 pb-1.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          {images.map((_, i) => (
            <div
              key={i}
              className={[
                "h-0.5 flex-1 rounded-full transition-colors duration-150",
                i === activeIndex ? "bg-white" : "bg-white/35",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
