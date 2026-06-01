import { StarIcon } from "lucide-react";

export function StarRating({ rating }: { rating: number }) {
  return (
    <span
      className="flex items-center gap-1 text-muted-foreground text-xs font-medium"
      aria-label={`Rating: ${rating.toFixed(1)} out of 10`}
    >
      <StarIcon className="size-3" aria-hidden="true" />
      {rating.toFixed(1)}
    </span>
  );
}
