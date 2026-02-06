import Link from "next/link";
import Image from "next/image";
import { cn, formatPrice } from "@/lib/utils";
import {
  AvailabilityIndicator,
  type AvailabilityStatus,
} from "./AvailabilityIndicator";

interface ProductCardProduct {
  title: string;
  brand: string;
  slug: string;
  categorySlug: string;
  /** Price in cents */
  price: number;
  /** Compare-at / original price in cents */
  compareAtPrice?: number;
  thumbnail?: string | null;
  isLignoLoc: boolean;
  availability: AvailabilityStatus;
}

interface ProductCardProps {
  product: ProductCardProduct;
  showQuickAdd?: boolean;
}

export function ProductCard({ product, showQuickAdd = true }: ProductCardProps) {
  const {
    title,
    brand,
    slug,
    categorySlug,
    price,
    compareAtPrice,
    thumbnail,
    isLignoLoc,
    availability,
  } = product;

  const href = `/produkte/${categorySlug}/${slug}`;
  const hasDiscount =
    compareAtPrice !== undefined && compareAtPrice > price;

  return (
    <article className="group relative flex flex-col rounded-lg border border-border bg-white transition-shadow duration-200 hover:shadow-lg">
      <Link href={href} className="flex flex-col flex-1">
        {/* Image area */}
        <div className="relative aspect-square w-full overflow-hidden rounded-t-lg bg-gray-100">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-4 transition-transform duration-200 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="h-12 w-12 text-gray-300"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                />
              </svg>
            </div>
          )}

          {/* Badges overlay */}
          <div className="absolute left-2 top-2 flex flex-col gap-1">
            {isLignoLoc && (
              <span className="inline-flex items-center rounded-full bg-lignoloc-light px-2.5 py-0.5 text-xs font-semibold text-lignoloc">
                LignoLoc
              </span>
            )}
            {hasDiscount && (
              <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">
                Angebot
              </span>
            )}
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-1 flex-col gap-1.5 p-4">
          {/* Brand */}
          <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
            {brand}
          </span>

          {/* Title */}
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-primary group-hover:text-accent transition-colors duration-150">
            {title}
          </h3>

          {/* Price */}
          <div className="mt-auto flex items-baseline gap-2 pt-2">
            <span
              className={cn(
                "text-base font-bold",
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
          </div>

          {/* Availability */}
          <AvailabilityIndicator status={availability} showText />
        </div>
      </Link>

      {/* Quick add button */}
      {showQuickAdd && availability !== "out_of_stock" && (
        <div className="px-4 pb-4">
          <button
            type="button"
            className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            In den Warenkorb
          </button>
        </div>
      )}
    </article>
  );
}
