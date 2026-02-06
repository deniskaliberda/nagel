import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide";
}

interface CardSlotProps {
  className?: string;
  children: React.ReactNode;
}

const aspectRatioStyles: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[4/3]",
};

export function Card({ className, children, href }: CardProps) {
  const classes = cn(
    "group overflow-hidden rounded-xl border border-border bg-white",
    "transition-shadow duration-300",
    "hover:shadow-lg hover:shadow-black/5",
    href && "cursor-pointer",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "block")}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}

export function CardImage({
  src,
  alt,
  className,
  aspectRatio = "square",
}: CardImageProps) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-bg-alt",
        aspectRatioStyles[aspectRatio],
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}

export function CardHeader({ className, children }: CardSlotProps) {
  return (
    <div className={cn("px-4 pt-4 sm:px-5 sm:pt-5", className)}>
      {children}
    </div>
  );
}

export function CardBody({ className, children }: CardSlotProps) {
  return (
    <div className={cn("px-4 py-3 sm:px-5 sm:py-4", className)}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children }: CardSlotProps) {
  return (
    <div
      className={cn(
        "border-t border-border px-4 py-3 sm:px-5 sm:py-4",
        className
      )}
    >
      {children}
    </div>
  );
}
