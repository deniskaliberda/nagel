"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ProductCard, type ProductCardProduct } from "@/components/shop/ProductCard"

// All available products for search
const ALL_PRODUCTS: ProductCardProduct[] = [
  { slug: "hikoki-nr1890dbcl", categorySlug: "akku-nagler", title: "HiKOKI NR1890DBCL Akku-Streifennagler 18V", brand: "HiKOKI", price: 59900, compareAtPrice: 69900, isLignoLoc: false, availability: "in_stock" },
  { slug: "paslode-im90i", categorySlug: "gas-nagler", title: "Paslode IM90i Li Gasnagler im Koffer", brand: "Paslode", price: 89900, isLignoLoc: false, availability: "in_stock" },
  { slug: "prebena-rk28-80-nk", categorySlug: "streifennaegel", title: "Prebena Streifennägel RK 28/80 NK verzinkt", brand: "Prebena", price: 3490, isLignoLoc: false, availability: "in_stock" },
  { slug: "bea-sks-650-228", categorySlug: "druckluft-nagler", title: "BeA SKS 650-228 Druckluft-Klammergerät", brand: "BeA", price: 44900, isLignoLoc: false, availability: "in_stock" },
  { slug: "beck-fasco-f44-ac-lignoloc", categorySlug: "akku-nagler", title: "Beck FASCO F44 AC LignoLoc Holznagelgerät", brand: "Beck (LignoLoc)", price: 129900, isLignoLoc: true, availability: "in_stock" },
  { slug: "lignoloc-holznaegel-37x50", categorySlug: "lignoloc", title: "LignoLoc Holznägel 3,7 x 50 mm (Paket 2.000 Stk.)", brand: "Beck (LignoLoc)", price: 4900, isLignoLoc: true, availability: "in_stock" },
  { slug: "hikoki-nr90gc1", categorySlug: "druckluft-nagler", title: "HiKOKI NR90GC1 Druckluft-Streifennagler 50-90mm", brand: "HiKOKI", price: 32900, isLignoLoc: false, availability: "low_stock" },
  { slug: "senco-finishpro-18mg", categorySlug: "akku-nagler", title: "Senco FinishPro 18Mg Akku-Bradnagler 18V", brand: "Senco", price: 39900, isLignoLoc: false, availability: "in_stock" },
  { slug: "prebena-coilnaegel-cn-25-50-nk", categorySlug: "coilnaegel", title: "Prebena Coilnägel CN 25/50 NK Ring verzinkt", brand: "Prebena", price: 2890, isLignoLoc: false, availability: "in_stock" },
  { slug: "haubold-rn65-a", categorySlug: "druckluft-nagler", title: "Haubold RN65 A Druckluft-Coilnagler", brand: "Haubold", price: 52900, isLignoLoc: false, availability: "in_stock" },
  { slug: "paslode-klammern-s16-32mm", categorySlug: "klammern", title: "Paslode Klammern S16 1,6 x 32 mm verzinkt", brand: "Paslode", price: 1890, isLignoLoc: false, availability: "in_stock" },
  { slug: "hikoki-ec-1445h", categorySlug: "kompressoren", title: "HiKOKI EC 1445H Kompressor 14 Bar / 45 Liter", brand: "HiKOKI", price: 69900, compareAtPrice: 79900, isLignoLoc: false, availability: "low_stock" },
]

const POPULAR_SEARCHES = [
  "Akku-Nagler", "Streifennägel", "HiKOKI", "LignoLoc",
  "Dachlatten Nagler", "Coilnägel", "Paslode IM90i",
  "Druckluft-Tacker", "Brads 18G", "Kompressor",
]

const CATEGORIES = [
  { label: "Druckluft-Nagler", href: "/produkte/druckluft-nagler" },
  { label: "Akku-Nagler", href: "/produkte/akku-nagler" },
  { label: "Gas-Nagler", href: "/produkte/gas-nagler" },
  { label: "Tacker", href: "/produkte/tacker" },
  { label: "Streifennägel", href: "/produkte/streifennaegel" },
  { label: "Coilnägel", href: "/produkte/coilnaegel" },
  { label: "Brads & Pins", href: "/produkte/brads" },
  { label: "Klammern", href: "/produkte/klammern" },
  { label: "LignoLoc Holznägel", href: "/produkte/lignoloc" },
  { label: "Kompressoren", href: "/produkte/kompressoren" },
  { label: "Akkus & Ladegeräte", href: "/produkte/akkus" },
  { label: "Ersatzteile", href: "/produkte/ersatzteile" },
]

function searchProducts(query: string): ProductCardProduct[] {
  if (!query.trim()) return []
  const terms = query.toLowerCase().split(/\s+/)
  return ALL_PRODUCTS.filter((p) => {
    const searchable = `${p.title} ${p.brand} ${p.categorySlug}`.toLowerCase()
    return terms.every((term) => searchable.includes(term))
  })
}

export function SucheContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") ?? ""
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<ProductCardProduct[]>(() => searchProducts(initialQuery))
  const [hasSearched, setHasSearched] = useState(!!initialQuery)

  useEffect(() => {
    const q = searchParams.get("q") ?? ""
    if (q) {
      setQuery(q)
      setResults(searchProducts(q))
      setHasSearched(true)
    }
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setResults(searchProducts(query))
      setHasSearched(true)
      window.history.replaceState(null, "", `/suche?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleTagClick = (term: string) => {
    setQuery(term)
    setResults(searchProducts(term))
    setHasSearched(true)
    window.history.replaceState(null, "", `/suche?q=${encodeURIComponent(term)}`)
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Suche</h1>
          <form onSubmit={handleSearch} className="mt-4">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Nagler, Nägel, Klammern, Marken..."
                className="w-full rounded-xl border border-[#e5e7eb] bg-white py-4 pl-12 pr-4 text-lg focus:border-[#e94560] focus:outline-none focus:ring-2 focus:ring-[#e94560]/20"
                autoFocus
              />
              {query && (
                <button
                  type="button"
                  onClick={() => { setQuery(""); setHasSearched(false); setResults([]) }}
                  className="absolute right-14 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#6b7280] hover:text-[#1a1a1a]"
                  aria-label="Suche leeren"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-[#e94560] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]"
              >
                Suchen
              </button>
            </div>
          </form>
        </div>

        {/* Search results */}
        {hasSearched ? (
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#1a1a1a]">
                {results.length > 0
                  ? `${results.length} Ergebnis${results.length !== 1 ? "se" : ""} für „${query}"`
                  : `Keine Ergebnisse für „${query}"`
                }
              </h2>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {results.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-[#e5e7eb] bg-white p-12 text-center">
                <svg className="mx-auto h-16 w-16 text-[#e5e7eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="mt-4 text-[#6b7280]">
                  Versuchen Sie es mit einem anderen Suchbegriff oder stöbern Sie in unseren Kategorien.
                </p>
              </div>
            )}
          </section>
        ) : (
          <>
            {/* Popular searches */}
            <section className="mb-12">
              <h2 className="mb-4 text-lg font-semibold text-[#1a1a1a]">Beliebte Suchen</h2>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleTagClick(term)}
                    className="rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-sm text-[#1a1a1a] transition-all hover:border-[#e94560] hover:text-[#e94560]"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </section>

            {/* Browse by category */}
            <section>
              <h2 className="mb-4 text-lg font-semibold text-[#1a1a1a]">
                Oder stöbern Sie nach Kategorie
              </h2>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.href}
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
    </main>
  )
}
