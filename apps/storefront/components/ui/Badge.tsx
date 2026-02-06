import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "success" | "warning" | "lignoloc";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-700",
  accent: "bg-accent/10 text-accent",
  success: "bg-green-50 text-success",
  warning: "bg-yellow-50 text-yellow-700",
  lignoloc: "bg-lignoloc-light text-lignoloc",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs gap-1",
  md: "px-2.5 py-1 text-sm gap-1.5",
};

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M15.312 3.188a.75.75 0 01.218.53v.782c0 3.177-1.395 5.93-3.634 7.7A7.97 7.97 0 017.75 14h-.009a.75.75 0 01-.53-1.28l.28-.28a6.472 6.472 0 003.45-3.95 6.505 6.505 0 00-3.95 3.45l-.28.28A.75.75 0 015.43 11.69 7.97 7.97 0 017.2 7.546c1.77-2.239 4.523-3.634 7.7-3.634h.782a.75.75 0 01.53.218l.1.058zM4.75 15.5a.75.75 0 01-.75-.75 3.25 3.25 0 013.25-3.25.75.75 0 01.75.75A3.25 3.25 0 014.75 15.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Badge({
  variant = "default",
  size = "sm",
  className,
  children,
}: BadgeProps) {
  const iconSize = size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium whitespace-nowrap",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {variant === "lignoloc" && <LeafIcon className={iconSize} />}
      {children}
    </span>
  );
}
