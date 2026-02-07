"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import { useSearch } from "@/hooks/useSearch"
import { formatPrice } from "@/lib/utils"

const POPULAR_SEARCHES = [
  "Akku-Nagler",
  "Streifennägel",
  "HiKOKI",
  "LignoLoc",
  "Dachlatten Nagler",
  "Coilnägel",
  "Paslode IM90i",
  "Druckluft-Tacker",
  "Brads 18G",
  "Kompressor",
]

const CATEGORIES = [
  { label: "Druckluft-Nagler", href: "/produkte/druckluft-nagler" },
  { label: "Akku-Nagler", href: "/produkte/akku-nagler" },
  { label: "Gas-Nagler", href: "/produkte/gas-nagler" },
  { label: "Tacker", href: "/produkte/tacker" },
  { label: "Streifennägel", href: "/produkte/streifennaegel" },
  { label: "Coilnägel", href: "/produkte/coilnaegel" },
  { label: "Brads & Pins", href: "/produkte/brads-pins" },
  { label: "Klammern", href: "/produkte/klammern" },
  { label: "LignoLoc Holznägel", href: "/produkte/lignoloc" },
  { label: "Kompressoren", href: "/produkte/kompressoren" },
  { label: "Akkus & Ladegeräte", href: "/produkte/zubehoer" },
  { label: "Ersatzteile", href: "/produkte/zubehoer" },
]

export function SearchPageClient() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") ?? ""
  const { query, results, isLoading, search } = useSearch()

  useEffect(() => {
    if (initialQuery) {
      search(initialQuery)
    }
  }, [initialQuery, search])

  const hasResults = results.length > 0
  const showEmptyState = query.length >= 2 && !isLoading && !hasResults

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Search header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a]">Suche</h1>
        <div className="mt-4">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              defaultValue={initialQuery}
              onChange={(e) => search(e.target.value)}
              placeholder="Nagler, Nägel, Klammern, Marken..."
              className="w-full rounded-xl border border-[#e5e7eb] bg-white py-4 pl-12 pr-4 text-lg focus:border-[#e94560] focus:outline-none focus:ring-2 focus:ring-[#e94560]/20"
              autoFocus
            />
          </div>
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center gap-3 py-12 text-[#6b7280]">
          <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Suche läuft...
        </div>
      )}

      {/* Results */}
      {hasResults && (
        <section className="mb-12">
          <p className="mb-4 text-sm text-[#6b7280]">
            {results.length} Ergebnis{results.length !== 1 ? "se" : ""} für &ldquo;{query}&rdquo;
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/produkte/${product.categorySlug}/${product.slug}`}
                className="group rounded-xl border border-[#e5e7eb] bg-white p-4 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <div className="flex h-full items-center justify-center">
                    <svg
                      className="h-8 w-8 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                      />
                    </svg>
                  </div>
                  {product.categorySlug === "lignoloc" && (
                    <span className="absolute left-2 top-2 rounded-full bg-[#ecfccb] px-2 py-0.5 text-xs font-semibold text-[#2d5016]">
                      LignoLoc
                    </span>
                  )}
                </div>
                <div className="mt-3">
                  <p className="text-xs text-[#6b7280]">{product.brand}</p>
                  <h3 className="mt-0.5 text-sm font-medium text-[#1a1a1a] line-clamp-2 group-hover:text-[#e94560]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#6b7280]">{product.category}</p>
                  <p className="mt-2 text-lg font-bold text-[#1a1a1a]">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {showEmptyState && (
        <div className="py-12 text-center">
          <svg className="mx-auto h-12 w-12 text-[#e5e7eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
            Keine Ergebnisse für &ldquo;{query}&rdquo;
          </h3>
          <p className="mt-2 text-[#6b7280]">
            Versuchen Sie es mit einem anderen Suchbegriff oder stöbern Sie in unseren Kategorien.
          </p>
        </div>
      )}

      {/* Popular searches (shown when no active search) */}
      {!hasResults && !showEmptyState && !isLoading && (
        <>
          <section className="mb-12">
            <h2 className="mb-4 text-lg font-semibold text-[#1a1a1a]">Beliebte Suchen</h2>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES.map((term) => (
                <Link
                  key={term}
                  href={`/suche?q=${encodeURIComponent(term)}`}
                  className="rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-sm text-[#1a1a1a] transition-all hover:border-[#e94560] hover:text-[#e94560]"
                >
                  {term}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#1a1a1a]">
              Oder stöbern Sie nach Kategorie
            </h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className="rounded-lg border border-[#e5e7eb] bg-white p-4 text-sm font-medium text-[#1a1a1a] transition-all hover:border-[#e94560] hover:shadow-md"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
