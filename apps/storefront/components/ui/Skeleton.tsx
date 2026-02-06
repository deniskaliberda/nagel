import { cn } from "@/lib/utils";

type SkeletonVariant = "text" | "image" | "card" | "productCard";

interface SkeletonProps {
  variant?: SkeletonVariant;
  className?: string;
  lines?: number;
}

const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

function SkeletonBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn("rounded bg-gray-200", shimmer, className)}
      aria-hidden="true"
    />
  );
}

function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-2", className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBlock
          key={i}
          className={cn("h-4", i === lines - 1 && "w-3/4")}
        />
      ))}
    </div>
  );
}

function SkeletonImage({ className }: { className?: string }) {
  return (
    <SkeletonBlock
      className={cn("aspect-square w-full", className)}
    />
  );
}

function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-white",
        className
      )}
      aria-hidden="true"
    >
      <SkeletonBlock className="aspect-video w-full" />
      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <SkeletonBlock className="h-5 w-2/3" />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}

function SkeletonProductCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-white",
        className
      )}
      aria-hidden="true"
    >
      <SkeletonBlock className="aspect-square w-full" />
      <div className="flex flex-col gap-2.5 p-4 sm:p-5">
        <SkeletonBlock className="h-3 w-20" />
        <SkeletonBlock className="h-5 w-4/5" />
        <SkeletonText lines={2} />
        <div className="mt-2 flex items-center justify-between">
          <SkeletonBlock className="h-6 w-24" />
          <SkeletonBlock className="h-10 w-10 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export function Skeleton({ variant = "text", className, lines }: SkeletonProps) {
  switch (variant) {
    case "text":
      return <SkeletonText lines={lines} className={className} />;
    case "image":
      return <SkeletonImage className={className} />;
    case "card":
      return <SkeletonCard className={className} />;
    case "productCard":
      return <SkeletonProductCard className={className} />;
    default:
      return <SkeletonText lines={lines} className={className} />;
  }
}
