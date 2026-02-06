import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  /** Price in cents */
  price: number;
  /** Original / compare-at price in cents */
  compareAtPrice?: number;
  /** Unit label, e.g. "pro Stück" or "pro 1000 Stk." */
  unit?: string;
  /** Whether to show "inkl. 19% MwSt." below the price */
  showMwst?: boolean;
}

export function PriceDisplay({
  price,
  compareAtPrice,
  unit,
  showMwst = true,
}: PriceDisplayProps) {
  const hasDiscount =
    compareAtPrice !== undefined && compareAtPrice > price;

  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-baseline gap-2 flex-wrap">
        <span
          className={cn(
            "text-lg font-bold",
            hasDiscount ? "text-accent" : "text-primary"
          )}
        >
          {formatPrice(price)}
        </span>

        {hasDiscount && (
          <span className="text-sm text-text-muted line-through">
            {formatPrice(compareAtPrice)}
          </span>
        )}

        {unit && (
          <span className="text-sm text-text-muted">{unit}</span>
        )}
      </div>

      {showMwst && (
        <span className="text-xs text-text-muted">
          inkl. 19% MwSt.
        </span>
      )}
    </div>
  );
}
