import { MeiliSearch } from "meilisearch"

const MEILISEARCH_HOST = process.env.NEXT_PUBLIC_MEILISEARCH_HOST || "http://localhost:7700"
const MEILISEARCH_API_KEY = process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY || ""

export const searchClient = new MeiliSearch({
  host: MEILISEARCH_HOST,
  apiKey: MEILISEARCH_API_KEY,
})

export const PRODUCTS_INDEX = "products"

export interface SearchableProduct {
  id: string
  name: string
  handle: string
  description: string
  brand: string
  categoryName: string
  categorySlug: string
  price: number
  isLignoLoc: boolean
  thumbnail?: string
  tags: string[]
  gewerke: string[]
}

export async function searchProducts(
  query: string,
  options?: {
    limit?: number
    offset?: number
    filter?: string[]
    sort?: string[]
    facets?: string[]
  }
) {
  const index = searchClient.index(PRODUCTS_INDEX)
  return index.search<SearchableProduct>(query, {
    limit: options?.limit ?? 20,
    offset: options?.offset ?? 0,
    filter: options?.filter,
    sort: options?.sort,
    facets: options?.facets ?? ["brand", "categoryName", "isLignoLoc", "gewerke"],
    attributesToHighlight: ["name", "description"],
    highlightPreTag: "<mark>",
    highlightPostTag: "</mark>",
  })
}

export async function getSearchSuggestions(query: string, limit = 5) {
  const index = searchClient.index(PRODUCTS_INDEX)
  return index.search<SearchableProduct>(query, {
    limit,
    attributesToRetrieve: ["id", "name", "handle", "categorySlug", "brand", "thumbnail", "price"],
  })
}
