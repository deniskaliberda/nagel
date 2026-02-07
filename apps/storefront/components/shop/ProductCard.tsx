"use client";

import Link from "next/link";
import Image from "next/image";
import { cn, formatPrice } from "@/lib/utils";
import {
  AvailabilityIndicator,
  type AvailabilityStatus,
} from "./AvailabilityIndicator";
import { useCartContext } from "@/components/providers/CartProvider";

export interface ProductCardProduct {
  id?: string;
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
  sku?: string;
}

interface ProductCardProps {
  product: ProductCardProduct;
  showQuickAdd?: boolean;
}

/** Category-based icon for product placeholder images */
function ProductPlaceholderIcon({ category, isLignoLoc }: { category: string; isLignoLoc: boolean }) {
  if (isLignoLoc) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="h-16 w-16 text-[#2d5016]/30">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    );
  }

  const cat = category.toLowerCase();
  // Nagler / Tacker - wrench/tool icon
  if (cat.includes("nagler") || cat.includes("tacker") || cat.includes("akku") || cat.includes("gas") || cat.includes("druckluft")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="h-16 w-16 text-gray-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    );
  }
  // Nails, screws, staples - diagonal arrow / fastener
  if (cat.includes("nagel") || cat.includes("klammer") || cat.includes("brad") || cat.includes("streif") || cat.includes("coil") || cat.includes("schraub") || cat.includes("pin")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="h-16 w-16 text-gray-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
      </svg>
    );
  }
  // Accessories - box icon
  if (cat.includes("kompressor") || cat.includes("zubehoer") || cat.includes("ersatz") || cat.includes("schlauch")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="h-16 w-16 text-gray-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    );
  }
  // Default - package icon
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="h-16 w-16 text-gray-300">
      <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
    </svg>
  );
}

export function ProductCard({ product, showQuickAdd = true }: ProductCardProps) {
  const {
    id,
    title,
    brand,
    slug,
    categorySlug,
    price,
    compareAtPrice,
    thumbnail,
    isLignoLoc,
    availability,
    sku,
  } = product;

  const { addItem } = useCartContext();

  const href = `/produkte/${categorySlug}/${slug}`;
  const hasDiscount =
    compareAtPrice !== undefined && compareAtPrice > price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: id ?? slug,
      productId: id ?? slug,
      variantId: `${slug}-default`,
      name: title,
      brand,
      image: thumbnail ?? undefined,
      price,
      compareAtPrice,
      sku: sku ?? slug.toUpperCase(),
    });
  };

  return (
    <article className="group relative flex flex-col rounded-lg border border-border bg-white transition-shadow duration-200 hover:shadow-lg">
      <Link href={href} className="flex flex-col flex-1">
        {/* Image area */}
        <div className={cn(
          "relative aspect-square w-full overflow-hidden rounded-t-lg",
          isLignoLoc ? "bg-[#f0fdf4]" : "bg-gray-50"
        )}>
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
              <ProductPlaceholderIcon category={categorySlug} isLignoLoc={isLignoLoc} />
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
            onClick={handleAddToCart}
            className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-primary/90 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            In den Warenkorb
          </button>
        </div>
      )}
    </article>
  );
}
