import Link from "next/link";
import { CalendarIcon, ListIcon, ReceiptTextIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  computeBasePrice,
  games,
  type Game,
  type SortKey,
} from "@/constants/catalog";
import { GameCardImage } from "@/components/game-card-image";
import { StarRating } from "@/components/star-rating";
import { GenreBadge } from "@/components/genre-badge";
import { FilterBar } from "@/components/filter-bar";

type PageProps = {
  searchParams?: Promise<Record<string, string | undefined>>;
};

const shuffledGames = [...games].sort(
  (a, b) => ((a.id * 37) % 101) - ((b.id * 37) % 101),
);

function getPrice(game: Game) {
  return `${computeBasePrice(game)}.99`;
}

function getVisibleGames(
  section: string,
  genre?: string,
  sort: SortKey = "relevance",
) {
  let visibleGames = [...shuffledGames];

  if (genre) {
    visibleGames = visibleGames.filter((game) => game.genre === genre);
  }

  if (section === "new") {
    visibleGames = visibleGames.filter((game) => game.badge === "New");
  }

  if (section === "top") {
    visibleGames = [...visibleGames]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8);
  }

  if (section === "genres") {
    visibleGames = [...visibleGames].sort((a, b) =>
      a.genre.localeCompare(b.genre),
    );
  }

  const popularityWeightByBadge: Record<string, number> = {
    Trending: 4,
    "Top Rated": 3,
    "Editor's Pick": 2,
    New: 1,
  };

  switch (sort) {
    case "date-added":
      visibleGames = [...visibleGames].sort((a, b) => b.id - a.id);
      break;
    case "name":
      visibleGames = [...visibleGames].sort((a, b) =>
        a.title.localeCompare(b.title),
      );
      break;
    case "release-date":
      visibleGames = [...visibleGames].sort((a, b) => b.year - a.year);
      break;
    case "popularity":
      visibleGames = [...visibleGames].sort((a, b) => {
        const badgeDelta =
          (popularityWeightByBadge[b.badge ?? ""] ?? 0) -
          (popularityWeightByBadge[a.badge ?? ""] ?? 0);

        if (badgeDelta !== 0) {
          return badgeDelta;
        }

        return b.rating - a.rating;
      });
      break;
    case "average-rating":
      visibleGames = [...visibleGames].sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return visibleGames;
}

function GameCard({ game }: { game: Game }) {
  return (
    <Link
      href={`/games/${game.id}`}
      className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      <Card className="flex h-full min-w-0 flex-col gap-0 border-border/80 bg-card/70 p-0 shadow-none transition-colors group-hover:bg-accent/30">
        <div className="border-b border-border/70 bg-muted">
          <GameCardImage
            images={
              game.screenshots.length > 0 ? game.screenshots : [game.image]
            }
            title={game.title}
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
            <GenreBadge genre={game.genre} />
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <CalendarIcon className="size-3.5" />
              {game.year}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground">
              <ReceiptTextIcon className="size-3.5" />${getPrice(game)}/mo
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default async function DashboardPage({ searchParams }: PageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const legacyToCurrentSortMap: Record<string, SortKey> = {
    featured: "relevance",
    "year-desc": "release-date",
    title: "name",
    rating: "average-rating",
  };
  const section = resolvedSearchParams.section ?? "all";
  const genre = resolvedSearchParams.genre;
  const rawSort = resolvedSearchParams.sort;
  const normalizedSort = rawSort
    ? (legacyToCurrentSortMap[rawSort] ?? rawSort)
    : undefined;
  const sort = (normalizedSort as SortKey | undefined) ?? "relevance";
  const visibleGames = getVisibleGames(section, genre, sort);

  const titleBySection: Record<string, string> = {
    new: "New Releases",
    top: "Top Games",
    genres: "Genres",
    support: "Support",
    feedback: "Feedback",
    projects: "Projects",
  };
  const title = genre
    ? `${genre} Games`
    : (titleBySection[section] ?? "Game Leases");

  return (
    <div className="px-6 pb-10 pt-2 md:px-8">
      <section>
        <div className="mb-4 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-sm font-semibold tracking-tight text-foreground/90">
              {title}
            </h1>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <ListIcon className="size-3.5" />
              {visibleGames.length} active listings
            </span>
          </div>
          <FilterBar
            searchParams={resolvedSearchParams}
            genre={genre}
            sort={sort}
          />
        </div>
        <div className="grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
          {visibleGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}
