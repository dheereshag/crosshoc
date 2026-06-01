import { Skeleton } from "@/components/ui/skeleton";

export default function GameDetailsLoading() {
  return (
    <div className="px-6 pb-10 pt-2 md:px-10">
      {/* Breadcrumb */}
      <div className="mb-5">
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.6fr)_minmax(360px,1fr)]">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <Skeleton className="aspect-video w-full rounded-xl" />
          <div className="space-y-3">
            <Skeleton className="h-7 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Skeleton className="h-24 rounded-xl" />
              <Skeleton className="h-24 rounded-xl" />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          <Skeleton className="h-64 rounded-xl" />
          <Skeleton className="h-64 rounded-xl" />
        </div>
      </div>

      {/* Reviews */}
      <Skeleton className="mt-4 h-48 w-full rounded-xl" />
    </div>
  );
}
