import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">404</p>
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-xs text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button variant="outline" nativeButton={false} render={<Link href="/" />} className="mt-2">
        <HomeIcon className="size-4" />
        Back to catalog
      </Button>
    </main>
  );
}
