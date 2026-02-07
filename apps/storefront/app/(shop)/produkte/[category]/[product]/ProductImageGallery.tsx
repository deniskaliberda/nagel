"use client"

import { useState } from "react"

interface ProductImageGalleryProps {
  productTitle: string
  categorySlug: string
  isLignoLoc: boolean
  hasDiscount: boolean
  discountPercent: number
}

function CategoryIcon({ category, isLignoLoc, size = "large" }: { category: string; isLignoLoc: boolean; size?: "large" | "small" }) {
  const cls = size === "large" ? "h-24 w-24" : "h-8 w-8"

  if (isLignoLoc) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={size === "large" ? 0.8 : 1} stroke="currentColor" className={`${cls} text-[#2d5016]/30`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    )
  }

  const cat = category.toLowerCase()
  if (cat.includes("nagler") || cat.includes("tacker") || cat.includes("akku") || cat.includes("gas") || cat.includes("druckluft")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={size === "large" ? 0.8 : 1} stroke="currentColor" className={`${cls} text-gray-300`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    )
  }
  if (cat.includes("nagel") || cat.includes("klammer") || cat.includes("brad") || cat.includes("streif") || cat.includes("coil") || cat.includes("schraub") || cat.includes("pin")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={size === "large" ? 0.8 : 1} stroke="currentColor" className={`${cls} text-gray-300`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
      </svg>
    )
  }
  if (cat.includes("kompressor") || cat.includes("zubehoer") || cat.includes("ersatz") || cat.includes("schlauch")) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={size === "large" ? 0.8 : 1} stroke="currentColor" className={`${cls} text-gray-300`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    )
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={size === "large" ? 0.8 : 1} stroke="currentColor" className={`${cls} text-gray-300`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
    </svg>
  )
}

const GALLERY_VIEWS = ["Hauptansicht", "Seitenansicht", "Detail", "Im Einsatz"] as const

export function ProductImageGallery({
  productTitle,
  categorySlug,
  isLignoLoc,
  hasDiscount,
  discountPercent,
}: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      {/* Main image */}
      <div className={`relative aspect-square w-full overflow-hidden rounded-xl border border-border ${isLignoLoc ? "bg-[#f0fdf4]" : "bg-gray-100"}`}>
        <div className="flex h-full flex-col items-center justify-center gap-2">
          <CategoryIcon category={categorySlug} isLignoLoc={isLignoLoc} size="large" />
          <span className="text-xs text-gray-400">{GALLERY_VIEWS[activeIndex]}</span>
        </div>

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {isLignoLoc && (
            <span className="inline-flex items-center rounded-full bg-lignoloc-light px-3 py-1 text-sm font-semibold text-lignoloc">
              LignoLoc
            </span>
          )}
          {hasDiscount && (
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-semibold text-white">
              -{discountPercent}%
            </span>
          )}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {GALLERY_VIEWS.map((view, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
              isLignoLoc ? "bg-[#f0fdf4]" : "bg-gray-100"
            } ${
              i === activeIndex ? "border-primary" : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex h-full flex-col items-center justify-center gap-1">
              <CategoryIcon category={categorySlug} isLignoLoc={isLignoLoc} size="small" />
              <span className="text-[10px] text-gray-400">{view}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
