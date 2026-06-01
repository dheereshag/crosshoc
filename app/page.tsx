import { ListIcon } from "lucide-react";
import { type SortKey } from "@/constants/catalog";
import { GameCard } from "@/components/game-card";
import { FilterBar } from "@/components/filter-bar";
import {
  getVisibleGames,
  titleBySection,
  legacyToCurrentSortMap,
} from "@/lib/catalog-utils";

type PageProps = {
  searchParams?: Promise<Record<string, string | undefined>>;
};

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
    : (titleBySection[section] ?? "All Games");

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
