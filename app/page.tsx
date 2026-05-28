import { ListIcon } from "lucide-react";
import { games, type SortKey, type Genre } from "@/constants/catalog";
import { GameCard } from "@/components/game-card";
import { FilterBar } from "@/components/filter-bar";

type PageProps = {
  searchParams?: Promise<Record<string, string | undefined>>;
};

// Deterministic pseudo-shuffle: multiply by prime 37 and mod by prime 101
// so the catalog doesn't default to insertion order.
const shuffledGames = [...games].sort(
  (a, b) => ((a.id * 37) % 101) - ((b.id * 37) % 101),
);

const popularityWeightByBadge: Record<string, number> = {
  Trending: 4,
  "Top Rated": 3,
  "Editor's Pick": 2,
  New: 1,
};

const titleBySection: Record<string, string> = {
  new: "New Releases",
  top: "Top Games",
  genres: "Genres",
};

const legacyToCurrentSortMap: Record<string, SortKey> = {
  featured: "relevance",
  "year-desc": "release-date",
  title: "name",
  rating: "average-rating",
};


function getVisibleGames(
  section: string,
  genre: string | undefined,
  sort: SortKey = "relevance",
) {
  let visibleGames = [...shuffledGames];

  if (genre) {
    visibleGames = visibleGames.filter((game) =>
      game.genres.includes(genre as Genre),
    );
  }

  if (section === "new") {
    visibleGames = visibleGames.filter((game) => game.badge === "New");
  }

  if (section === "top") {
    visibleGames.sort((a, b) => b.rating - a.rating);
    visibleGames = visibleGames.slice(0, 8);
  }

  switch (sort) {
    case "date-added":
      visibleGames.sort((a, b) => b.id - a.id);
      break;
    case "name":
      visibleGames.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "release-date":
      visibleGames.sort((a, b) => b.year - a.year);
      break;
    case "popularity":
      visibleGames.sort((a, b) => {
        const badgeDelta =
          (popularityWeightByBadge[b.badge ?? ""] ?? 0) -
          (popularityWeightByBadge[a.badge ?? ""] ?? 0);
        return badgeDelta !== 0 ? badgeDelta : b.rating - a.rating;
      });
      break;
    case "average-rating":
      visibleGames.sort((a, b) => b.rating - a.rating);
      break;
    case "relevance":
    default:
      if (section === "genres") {
        visibleGames.sort((a, b) => a.genres[0].localeCompare(b.genres[0]));
      }
      break;
  }

  return visibleGames;
}

export default async function HomePage({ searchParams }: PageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
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
        <div className="grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {visibleGames.map((game, index) => (
            <GameCard key={game.id} game={game} priority={index === 0} />
          ))}
        </div>
      </section>
    </div>
  );
}
