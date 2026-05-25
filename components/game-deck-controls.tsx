"use client"

import { useState } from "react"
import {
  CalendarDaysIcon,
  CalculatorIcon,
  CopyIcon,
  DollarSignIcon,
  PackageIcon,
  PlusIcon,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { computeBasePrice, type Game } from "@/constants/catalog";
import { cn, pluralize } from "@/lib/utils";

type GameDeckControlsProps = {
  game: Game;
  className?: string;
};

const leasePeriods = [1, 3, 6, 12] as const

const leasePeriodDiscounts: Record<(typeof leasePeriods)[number], number> = {
  1: 1,
  3: 0.95,
  6: 0.9,
  12: 0.85,
}

function getLeasePeriodPrice(game: Game, months: (typeof leasePeriods)[number]) {
  const monthlyPrice = computeBasePrice(game)
  const discountedTotal = monthlyPrice * months * leasePeriodDiscounts[months]

  return Math.max(12, Math.round(discountedTotal))
}

export function GameDeckControls({ game, className }: GameDeckControlsProps) {
  const [leasePeriod, setLeasePeriod] =
    useState<(typeof leasePeriods)[number]>(3);
  const [copies, setCopies] = useState(1);

  const monthlyPrice = computeBasePrice(game);
  const selectedPeriodPrice = getLeasePeriodPrice(game, leasePeriod);

  return (
    <Card className={cn("border-border/80 bg-card/70", className)}>
      <CardHeader className="space-y-3 pb-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="inline-flex items-center gap-1.5 text-base">
            <PackageIcon className="size-4" />
            Deck
          </CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">
          Choose a lease period and number of copies before adding this game to
          your Deck.
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <CalendarDaysIcon className="size-3.5" />
              Lease period
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <DollarSignIcon className="size-3.5" />
              {monthlyPrice}/mo per copy
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {leasePeriods.map((months) => {
              const active = leasePeriod === months;
              const periodPrice = getLeasePeriodPrice(game, months);

              return (
                <Button
                  key={months}
                  type="button"
                  variant={active ? "default" : "outline"}
                  size="sm"
                  className="h-auto w-full flex-col items-start gap-0.5 px-3 py-2 text-left"
                  onClick={() => setLeasePeriod(months)}
                >
                  <span>{pluralize(months, "month")}</span>
                  <span className="text-[0.72rem] font-normal opacity-80">
                    ${periodPrice}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-end">
          <label
            className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:pb-2"
            htmlFor="copies"
          >
            <CopyIcon className="size-3.5" />
            Copies
          </label>
          <div className="space-y-2">
            <Input
              id="copies"
              type="number"
              min={1}
              max={9}
              value={copies}
              onChange={(event) => {
                const nextCopies = Number(event.target.value);
                setCopies(
                  Number.isFinite(nextCopies) && nextCopies > 0
                    ? nextCopies
                    : 1,
                );
              }}
              className="max-w-56"
            />
          </div>

          <Button
            type="button"
            onClick={() => {
              toast.success("Added to Deck", {
                description: `${game.title} · ${pluralize(copies, "copy", "copies")} · ${pluralize(leasePeriod, "month")}`,
              });
            }}
            className="sm:min-w-44"
          >
            <PlusIcon className="size-4" />
            Add to Deck
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border/70 bg-background/70 px-3 py-2 text-sm">
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <CalculatorIcon className="size-3.5" />
            Estimated total
          </span>
          <span className="font-semibold text-foreground">
            ${selectedPeriodPrice * copies}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
