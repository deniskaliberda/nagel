import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework"

/**
 * Subscriber: product.created
 *
 * Triggered whenever a new product is created in the catalog.
 * Intended to sync the product to Meilisearch for storefront search.
 */
export default async function productCreatedHandler({
  event,
  container,
}: SubscriberArgs<{ id: string }>) {
  const productId = event.data.id

  // TODO: Resolve Meilisearch client from container
  // const searchService = container.resolve("searchService")

  // TODO: Fetch full product data
  // const productService = container.resolve("productModuleService")
  // const product = await productService.retrieveProduct(productId)

  // TODO: Index product in Meilisearch
  // await searchService.addDocuments("products", [
  //   {
  //     id: product.id,
  //     title: product.title,
  //     description: product.description,
  //     handle: product.handle,
  //     // ... additional fields for search
  //   },
  // ])

  console.log(`[product-created] Product ${productId} created - Meilisearch sync pending`)
}

export const config: SubscriberConfig = {
  event: "product.created",
}
