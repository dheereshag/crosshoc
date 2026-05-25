import { StarIcon } from "lucide-react";

export function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-muted-foreground text-xs font-medium">
      <StarIcon className="size-3" />
      {rating.toFixed(1)}
    </span>
  );
}
