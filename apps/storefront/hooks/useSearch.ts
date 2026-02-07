"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { getSearchSuggestions } from "@/lib/meilisearch"

export interface SearchResult {
  id: string
  name: string
  slug: string
  category: string
  categorySlug: string
  brand: string
  image?: string
  price: number
}

export interface SearchState {
  query: string
  results: SearchResult[]
  isLoading: boolean
  isOpen: boolean
}

const PRODUCT_CATALOG: SearchResult[] = [
  { id: "1", name: "HiKOKI NR1890DBCL Akku-Streifennagler 18V 5,0 Ah", slug: "hikoki-nr1890dbcl", category: "Akku-Nagler", categorySlug: "akku-nagler", brand: "HiKOKI", price: 59900 },
  { id: "2", name: "Paslode IM90i Gasnagler", slug: "paslode-im90i-gasnagler", category: "Gas-Nagler", categorySlug: "gas-nagler", brand: "Paslode", price: 89900 },
  { id: "3", name: "Prebena Streifennägel RK 28/80 NK verzinkt", slug: "prebena-rk28-80-nk", category: "Streifennägel", categorySlug: "streifennaegel", brand: "Prebena", price: 3490 },
  { id: "4", name: "Prebena Streifennägel RK 28/65 BK blank", slug: "prebena-rk28-65-bk", category: "Streifennägel", categorySlug: "streifennaegel", brand: "Prebena", price: 2990 },
  { id: "5", name: "BeA Druckluft-Nagler SKS 650-228", slug: "bea-druckluft-nagler-sks-650-228", category: "Druckluft-Nagler", categorySlug: "druckluft-nagler", brand: "BeA", price: 44900 },
  { id: "6", name: "Beck FASCO F44 AC LignoLoc Holznagelgerät", slug: "beck-fasco-f44-ac-lignoloc", category: "Akku-Nagler", categorySlug: "akku-nagler", brand: "Beck (LignoLoc)", price: 129900 },
  { id: "7", name: "LignoLoc Holznägel 3,7 x 50mm", slug: "lignoloc-holznaegel-37x50", category: "LignoLoc Holznägel", categorySlug: "lignoloc", brand: "Beck (LignoLoc)", price: 4490 },
  { id: "8", name: "LignoLoc Holznägel 3,7 x 38mm", slug: "lignoloc-holznaegel-37x38", category: "LignoLoc Holznägel", categorySlug: "lignoloc", brand: "Beck (LignoLoc)", price: 3990 },
  { id: "9", name: "HiKOKI NR90GC1 Druckluft-Streifennagler", slug: "hikoki-nr90gc1", category: "Druckluft-Nagler", categorySlug: "druckluft-nagler", brand: "HiKOKI", price: 32900 },
  { id: "10", name: "Senco Finish Pro 18Mg Akku-Bradnagler", slug: "senco-finish-pro-18mg", category: "Akku-Nagler", categorySlug: "akku-nagler", brand: "Senco", price: 39900 },
  { id: "11", name: "Prebena Coilnägel CNW 25/65 BK Ring", slug: "prebena-cnw-25-65-bk", category: "Coilnägel", categorySlug: "coilnaegel", brand: "Prebena", price: 3490 },
  { id: "12", name: "Haubold Druckluft-Tacker T28/65 ST", slug: "haubold-t28-65-st", category: "Tacker", categorySlug: "tacker", brand: "Haubold", price: 28900 },
  { id: "13", name: "BeA Klammern 380/14 NK verzinkt", slug: "bea-klammern-380-14-nk", category: "Klammern", categorySlug: "klammern", brand: "BeA", price: 1990 },
  { id: "14", name: "Paslode Brads 16Ga 50mm verzinkt", slug: "paslode-brads-16ga-50mm", category: "Brads & Pins", categorySlug: "brads-pins", brand: "Paslode", price: 2490 },
  { id: "15", name: "Beck FASCO F58 AC LignoLoc", slug: "beck-fasco-f58-ac-lignoloc", category: "Akku-Nagler", categorySlug: "akku-nagler", brand: "Beck (LignoLoc)", price: 169900 },
  { id: "16", name: "LignoLoc Holznägel 4,7 x 65mm", slug: "lignoloc-holznaegel-47x65", category: "LignoLoc Holznägel", categorySlug: "lignoloc", brand: "Beck (LignoLoc)", price: 6490 },
  { id: "17", name: "Prebena Kompressor VIGON 300", slug: "prebena-vigon-300", category: "Kompressoren", categorySlug: "kompressoren", brand: "Prebena", price: 49900 },
  { id: "18", name: "HiKOKI BSL36A18 Multi-Volt Akku 36V/18V", slug: "hikoki-bsl36a18", category: "Akkus & Ladegeräte", categorySlug: "zubehoer", brand: "HiKOKI", price: 12900 },
  { id: "19", name: "Fasco Druckluftschlauch 10m", slug: "fasco-druckluftschlauch-10m", category: "Schläuche & Kupplungen", categorySlug: "zubehoer", brand: "Fasco", price: 3990 },
  { id: "20", name: "LignoLoc Holznägel 3,7 x 55mm", slug: "lignoloc-holznaegel-37x55", category: "LignoLoc Holznägel", categorySlug: "lignoloc", brand: "Beck (LignoLoc)", price: 5490 },
]

function searchLocalCatalog(query: string): SearchResult[] {
  const normalizedQuery = query.toLowerCase().trim()
  const terms = normalizedQuery.split(/\s+/)

  const scored = PRODUCT_CATALOG.map((product) => {
    const searchableText = `${product.name} ${product.brand} ${product.category}`.toLowerCase()
    let score = 0

    for (const term of terms) {
      if (searchableText.includes(term)) {
        score += 1
        if (product.name.toLowerCase().startsWith(term)) score += 2
        if (product.brand.toLowerCase() === term) score += 3
      }
    }

    return { product, score }
  })

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((s) => s.product)
}

async function searchViaMeilisearch(query: string): Promise<SearchResult[] | null> {
  try {
    const meiliHost = process.env.NEXT_PUBLIC_MEILISEARCH_HOST
    if (!meiliHost) return null

    const response = await getSearchSuggestions(query, 8)
    return response.hits.map((hit) => ({
      id: hit.id,
      name: hit.name,
      slug: hit.handle,
      category: hit.categoryName,
      categorySlug: hit.categorySlug,
      brand: hit.brand,
      image: hit.thumbnail,
      price: hit.price,
    }))
  } catch {
    return null
  }
}

export function useSearch() {
  const [state, setState] = useState<SearchState>({
    query: "",
    results: [],
    isLoading: false,
    isOpen: false,
  })
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const search = useCallback((query: string) => {
    setState((prev) => ({ ...prev, query, isLoading: query.length >= 2, isOpen: query.length >= 2 }))

    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    if (query.length < 2) {
      setState((prev) => ({ ...prev, results: [], isLoading: false, isOpen: false }))
      return
    }

    debounceRef.current = setTimeout(async () => {
      try {
        // Try Meilisearch first; fall back to local catalog
        const meiliResults = await searchViaMeilisearch(query)
        const results = meiliResults ?? searchLocalCatalog(query)
        setState((prev) => ({ ...prev, results, isLoading: false }))
      } catch {
        setState((prev) => ({ ...prev, results: [], isLoading: false }))
      }
    }, 300)
  }, [])

  const clearSearch = useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    setState({ query: "", results: [], isLoading: false, isOpen: false })
  }, [])

  const closeResults = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }))
  }, [])

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [])

  return {
    query: state.query,
    results: state.results,
    isLoading: state.isLoading,
    isOpen: state.isOpen,
    search,
    clearSearch,
    closeResults,
  }
}
