import Link from "next/link";
import { CalendarIcon, ReceiptTextIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { computeBasePrice, getGameImages, type Game } from "@/constants/catalog";
import { GameCardImage } from "@/components/game-card-image";
import { StarRating } from "@/components/star-rating";
import { GenreBadge } from "@/components/genre-badge";

type GameCardProps = {
  game: Game;
  priority?: boolean;
};

export function GameCard({ game, priority = false }: GameCardProps) {
  const price = `${computeBasePrice(game)}.99`;

  return (
    <Link
      href={`/games/${game.id}`}
      className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      <Card className="flex h-full min-w-0 flex-col gap-0 border-border/80 bg-card/70 p-0 shadow-none transition-colors group-hover:bg-accent/30">
        <div className="border-b border-border/70 bg-muted">
          <GameCardImage
            images={getGameImages(game)}
            title={game.title}
            priority={priority}
          />
        </div>
        <CardHeader className="flex-1 pb-2 pt-4">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="line-clamp-1 text-sm">{game.title}</CardTitle>
            <StarRating rating={game.rating} />
          </div>
          <CardDescription className="line-clamp-2 text-xs">
            {game.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pb-5 pt-0">
          <div className="flex flex-wrap items-center justify-end gap-2 text-xs">
            {game.genres.map((g) => (
              <GenreBadge key={g} genre={g} />
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <CalendarIcon className="size-3.5" />
              {game.year}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground">
              <ReceiptTextIcon className="size-3.5" />${price}/mo
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
