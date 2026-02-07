import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework"

/**
 * Subscriber: product.created
 *
 * Syncs newly created products to Meilisearch for storefront search.
 */
export default async function productCreatedHandler({
  event,
  container,
}: SubscriberArgs<{ id: string }>) {
  const productId = event.data.id

  try {
    const productService = container.resolve("productModuleService") as any
    const product = await productService.retrieveProduct(productId, {
      relations: ["variants", "categories", "images"],
    })

    const searchDocument = {
      id: product.id,
      title: product.title,
      description: product.description,
      handle: product.handle,
      status: product.status,
      thumbnail: product.thumbnail,
      categories: product.categories?.map((c: any) => c.name) ?? [],
      tags: product.tags?.map((t: any) => t.value) ?? [],
      metadata: product.metadata ?? {},
      created_at: product.created_at,
    }

    try {
      const searchService = container.resolve("searchService") as any
      await searchService.addDocuments("products", [searchDocument])
      console.log(`[product-created] Indexed product ${productId} in Meilisearch`)
    } catch {
      console.log(`[product-created] Product ${productId} created (Meilisearch not configured)`)
    }
  } catch (error) {
    console.error(`[product-created] Failed to process product ${productId}:`, error)
  }
}

export const config: SubscriberConfig = {
  event: "product.created",
}
