import { Badge } from "@/components/ui/badge";
import { genreIconComponents } from "@/constants/sidebar";
import type { Game } from "@/constants/catalog";

export function GenreBadge({ genre }: { genre: Game["genre"] }) {
  const GenreIcon = genreIconComponents[genre];
  return (
    <Badge
      variant="secondary"
      className="inline-flex items-center gap-1 font-medium text-foreground/80"
    >
      <GenreIcon className="size-3.5" />
      <span>{genre}</span>
    </Badge>
  );
}
