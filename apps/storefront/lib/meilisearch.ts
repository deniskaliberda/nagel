import { MeiliSearch } from "meilisearch";

const MEILISEARCH_HOST =
  process.env.NEXT_PUBLIC_MEILISEARCH_HOST || "http://localhost:7700";
const MEILISEARCH_API_KEY =
  process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY || "";

export const meilisearchClient = new MeiliSearch({
  host: MEILISEARCH_HOST,
  apiKey: MEILISEARCH_API_KEY,
});

export const PRODUCTS_INDEX = "products";
