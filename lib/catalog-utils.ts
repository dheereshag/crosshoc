import { games, type Genre, type SortKey } from "@/constants/catalog";

// Deterministic pseudo-shuffle: multiply by prime 37 and mod by prime 101
// so the catalog doesn't default to insertion order.
export const shuffledGames = [...games].sort((a, b) => ((a.id * 37) % 101) - ((b.id * 37) % 101));

const popularityWeightByBadge: Record<string, number> = {
  Trending: 4,
  "Top Rated": 3,
  "Editor's Pick": 2,
  New: 1,
};

export const titleBySection: Record<string, string> = {
  new: "New Releases",
  top: "Top Games",
  genres: "Genres",
};

/** Maps legacy sort param values to current SortKey identifiers. */
export const legacyToCurrentSortMap: Record<string, SortKey> = {
  featured: "relevance",
  "year-desc": "release-date",
  title: "name",
  rating: "average-rating",
};

export function getVisibleGames(
  section: string,
  genre: string | undefined,
  sort: SortKey = "relevance",
) {
  let visibleGames = [...shuffledGames];

  if (genre) {
    visibleGames = visibleGames.filter((game) => game.genres.includes(genre as Genre));
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
