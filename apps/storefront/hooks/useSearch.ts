"use client"

import { useState, useCallback, useRef, useEffect } from "react"

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
        // TODO: Replace with Meilisearch API call
        // const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        // const data = await response.json()
        // setState(prev => ({ ...prev, results: data.hits, isLoading: false }))
        setState((prev) => ({ ...prev, results: [], isLoading: false }))
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
