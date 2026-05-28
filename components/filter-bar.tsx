import Link from "next/link";
import {
  AArrowDownIcon,
  ArrowUpDownIcon,
  CalendarDaysIcon,
  Clock3Icon,
  FilterIcon,
  FlameIcon,
  LayoutGridIcon,
  SparklesIcon,
  StarIcon,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  genres,
  sortOptions,
  type Genre,
  type SortKey,
} from "@/constants/catalog";
import { genreIconComponents } from "@/constants/sidebar";
import { buildHref } from "@/lib/utils";

type FilterBarProps = {
  searchParams: Record<string, string | undefined>;
  genre: string | undefined;
  sort: SortKey;
};

const sortOptionIcons: Record<SortKey, LucideIcon> = {
  relevance: SparklesIcon,
  "date-added": Clock3Icon,
  name: AArrowDownIcon,
  "release-date": CalendarDaysIcon,
  popularity: FlameIcon,
  "average-rating": StarIcon,
};

const filterChips: Array<{ label: string; value: string | undefined }> = [
  { label: "All", value: undefined },
  ...genres.map((g) => ({ label: g, value: g })),
];

export function FilterBar({ searchParams, genre, sort }: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border/70 bg-card/50 p-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <FilterIcon className="size-3.5" />
          Filter
        </span>
        {filterChips.map((item) => {
          const active = genre === item.value;
          const Icon = item.value
            ? genreIconComponents[item.value as Genre]
            : LayoutGridIcon;
          return (
            <Button
              key={item.label}
              variant={active ? "default" : "outline"}
              size="sm"
              className="rounded-full px-3"
              nativeButton={false}
              render={
                <Link
                  href={buildHref(searchParams, { genre: item.value, sort })}
                />
              }
            >
              <Icon className="size-3.5" />
              <span>{item.label}</span>
            </Button>
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
            <Button
              key={item.value}
              variant={active ? "default" : "outline"}
              size="sm"
              className="rounded-full px-3"
              nativeButton={false}
              render={
                <Link href={buildHref(searchParams, { sort: item.value })} />
              }
            >
              <Icon className="size-3.5" />
              <span>{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
