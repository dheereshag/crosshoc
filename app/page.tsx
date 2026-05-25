import Link from "next/link";
import {
  AArrowDownIcon,
  ArrowUpDownIcon,
  CalendarIcon,
  CalendarDaysIcon,
  Clock3Icon,
  FilterIcon,
  FlameIcon,
  LayoutGridIcon,
  ListIcon,
  ReceiptTextIcon,
  SparklesIcon,
  StarIcon,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  basePriceByGenre,
  games,
  genres,
  sortOptions,
  type Game,
  type SortKey,
} from "@/constants/catalog";
import { GameCardImage } from "@/components/game-card-image";
import { genreIconComponents } from "@/constants/sidebar";
import { cn } from "@/lib/utils";

type PageProps = {
  searchParams?: Promise<Record<string, string | undefined>>;
};

function buildHref(
  currentParams: Record<string, string | undefined>,
  updates: Record<string, string | undefined>,
) {
  const params = new URLSearchParams();
  const merged = { ...currentParams, ...updates };

  Object.entries(merged).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });

  const queryString = params.toString();
  return queryString ? `/?${queryString}` : "/";
}

const shuffledGames = [...games].sort(
  (a, b) => ((a.id * 37) % 101) - ((b.id * 37) % 101),
);

function getPrice(game: Game) {
  const base = basePriceByGenre[game.genre];
  const recencyAdjustment = game.year === 2025 ? 0 : -8;
  const parityAdjustment = game.id % 2 === 0 ? 2 : 0;
  const value = Math.max(
    12,
    Math.floor((base + recencyAdjustment + parityAdjustment) * 0.35),
  );
  return `${value}.99`;
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

function getChipButtonClass(active: boolean) {
  const base =
    "inline-flex h-7 items-center justify-center gap-1 rounded-full border text-[0.8rem] font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50";
  const variant = active
    ? "border-transparent bg-primary text-primary-foreground"
    : "border-border bg-background hover:bg-muted hover:text-foreground";

  return cn(base, variant, "px-3");
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-muted-foreground text-xs font-medium">
      <StarIcon className="size-3" />
      {rating.toFixed(1)}
    </span>
  );
}

function GameCard({ game }: { game: Game }) {
  const GenreIcon = genreIconComponents[game.genre];

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
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-1 font-medium text-foreground/80"
            >
              <GenreIcon className="size-3.5" />
              <span>{game.genre}</span>
            </Badge>
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
  const title = genre
    ? `${genre} Games`
    : section === "new"
      ? "New Releases"
      : section === "top"
        ? "Top Games"
        : section === "genres"
          ? "Genres"
          : section === "support"
            ? "Support"
            : section === "feedback"
              ? "Feedback"
              : section === "projects"
                ? "Projects"
                : "Game Leases";

  const filterChips = [
    { label: "All", value: undefined },
    ...genres.map((genreName) => ({ label: genreName, value: genreName })),
  ];
  const sortOptionIcons: Record<SortKey, LucideIcon> = {
    relevance: SparklesIcon,
    "date-added": Clock3Icon,
    name: AArrowDownIcon,
    "release-date": CalendarDaysIcon,
    popularity: FlameIcon,
    "average-rating": StarIcon,
  };

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
          <div className="flex flex-col gap-3 rounded-xl border border-border/70 bg-card/50 p-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <FilterIcon className="size-3.5" />
                Filter
              </span>
              {filterChips.map((item) => {
                const active = (genre ?? undefined) === item.value;
                const Icon = item.value
                  ? genreIconComponents[item.value as Game["genre"]]
                  : LayoutGridIcon;
                return (
                  <a
                    key={item.label}
                    href={buildHref(resolvedSearchParams, {
                      genre: item.value,
                      sort,
                    })}
                    className={getChipButtonClass(active)}
                  >
                    <Icon className="size-3.5" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <ArrowUpDownIcon className="size-3.5" />
                Order by
              </span>
              {sortOptions.map((item) => {
                const active = sort === item.value;
                const Icon = sortOptionIcons[item.value];
                return (
                  <a
                    key={item.value}
                    href={buildHref(resolvedSearchParams, { sort: item.value })}
                    className={getChipButtonClass(active)}
                  >
                    <Icon className="size-3.5" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4">
          {visibleGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}
