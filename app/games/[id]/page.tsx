import Link from "next/link";
import { GameCardImage } from "@/components/game-card-image";
import { notFound } from "next/navigation";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  CalendarIcon,
  MessageSquareTextIcon,
  SparklesIcon,
  StarIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { games, type Game } from "@/constants/catalog";
import { getReviewsForGame, type Review } from "@/constants/reviews";
import { GenreBadge } from "@/components/genre-badge";
import { StarRating } from "@/components/star-rating";
import { GameDeckControls } from "@/components/game-deck-controls";

type PageProps = {
  params: Promise<{ id: string }>;
};

function StatBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-lg border border-border/70 bg-background/70 p-4">
      <p className="inline-flex items-center gap-1 text-xs uppercase tracking-wide text-muted-foreground">
        <Icon className="size-3" />
        {label}
      </p>
      <p className="mt-2 text-3xl font-semibold leading-none text-foreground md:text-4xl">
        {value}
      </p>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-lg border border-border/70 bg-background/70 p-4">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="inline-flex items-center gap-2">
          <Avatar size="sm">
            <AvatarImage src={review.avatar} alt={`${review.author} avatar`} />
            <AvatarFallback>
              {review.author.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium text-foreground">{review.author}</p>
        </div>
        <StarRating rating={review.rating} />
      </div>
      <p className="mb-2 text-xs text-muted-foreground">{review.postedOn}</p>
      <p className="text-sm text-foreground/90">{review.comment}</p>
    </div>
  );
}

export default async function GameDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const gameId = Number(id);

  if (!Number.isFinite(gameId)) {
    notFound();
  }

  const game = games.find((item) => item.id === gameId);

  if (!game) {
    notFound();
  }

  const reviews = getReviewsForGame(game);
  const recommendedGame =
    [...games]
      .filter((item) => item.id !== game.id && item.genre === game.genre)
      .sort((a, b) => b.rating - a.rating)[0] ??
    [...games]
      .filter((item) => item.id !== game.id)
      .sort((a, b) => b.rating - a.rating)[0];

  return (
    <div className="px-6 pb-10 pt-2 md:px-10">
      <div className="mb-5">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="size-4" />
          Back to listings
        </Link>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(360px,1fr)] xl:items-stretch">
        <Card className="h-full overflow-hidden border-border/80 bg-card/70 gap-0 py-0">
          <div className="border-b border-border/70 bg-muted">
            <GameCardImage
              images={
                game.screenshots.length > 0 ? game.screenshots : [game.image]
              }
              title={game.title}
              sizes="(max-width: 1024px) 100vw, 70vw"
              priority
            />
          </div>

          <CardHeader className="space-y-4 pt-4 pb-2">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <CardTitle className="text-2xl tracking-tight">
                {game.title}
              </CardTitle>
              <GenreBadge genre={game.genre} />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {game.description}
            </p>
          </CardHeader>

          <CardContent className="pb-4 pt-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <StatBlock
                icon={StarIcon}
                label="Average rating"
                value={game.rating.toFixed(1)}
              />
              <StatBlock
                icon={CalendarIcon}
                label="Release year"
                value={game.year}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex h-full flex-col gap-4">
          <GameDeckControls game={game} />

          <Link
            href={`/games/${recommendedGame.id}`}
            className="group block flex-1 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            <Card className="h-full overflow-hidden border-border/80 bg-card/70 transition-colors group-hover:bg-accent/30 gap-0 py-0">
              <div className="border-b border-border/70 bg-muted">
                <GameCardImage
                  images={
                    recommendedGame.screenshots.length > 0
                      ? recommendedGame.screenshots
                      : [recommendedGame.image]
                  }
                  title={recommendedGame.title}
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>
              <CardHeader className="space-y-2 pt-4 pb-2">
                <p className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  <SparklesIcon className="size-3.5" />
                  Recommended for you
                </p>
              </CardHeader>
              <CardContent className="flex flex-col gap-2 pb-4 pt-0">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="line-clamp-1 text-base">
                    {recommendedGame.title}
                  </CardTitle>
                  <StarRating rating={recommendedGame.rating} />
                </div>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {recommendedGame.description}
                </p>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <GenreBadge genre={recommendedGame.genre} />
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                    View
                    <ArrowRightIcon className="size-4" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <Card className="mt-4 border-border/80 bg-card/70">
        <CardHeader className="space-y-2">
          <CardTitle className="inline-flex items-center gap-2 text-lg">
            <MessageSquareTextIcon className="size-4" />
            Reviews
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            What players are saying about {game.title}.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
