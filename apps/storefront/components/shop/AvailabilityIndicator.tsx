import { cn } from "@/lib/utils";

export type AvailabilityStatus = "in_stock" | "low_stock" | "out_of_stock";

interface AvailabilityIndicatorProps {
  status: AvailabilityStatus;
  showText?: boolean;
}

const STATUS_CONFIG: Record<
  AvailabilityStatus,
  { dotClass: string; label: string }
> = {
  in_stock: {
    dotClass: "bg-success",
    label: "Auf Lager",
  },
  low_stock: {
    dotClass: "bg-warning",
    label: "Wenige verfügbar",
  },
  out_of_stock: {
    dotClass: "bg-accent",
    label: "Nicht verfügbar",
  },
};

export function AvailabilityIndicator({
  status,
  showText = true,
}: AvailabilityIndicatorProps) {
  const config = STATUS_CONFIG[status];

  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={cn("h-2 w-2 shrink-0 rounded-full", config.dotClass)}
        aria-hidden="true"
      />
      {showText && (
        <span
          className={cn(
            "text-sm",
            status === "out_of_stock" ? "text-accent" : "text-text-muted"
          )}
        >
          {config.label}
        </span>
      )}
      {!showText && <span className="sr-only">{config.label}</span>}
    </span>
  );
}
