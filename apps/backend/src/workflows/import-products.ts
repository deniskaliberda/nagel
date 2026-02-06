import {
  createWorkflow,
  createStep,
  StepResponse,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"

/**
 * Step: Fetch products from external source (e.g., Shopware export, CSV, JSON).
 */
const fetchExternalProductsStep = createStep(
  "fetch-external-products",
  async (input: { sourceUrl?: string; filePath?: string }, { container }) => {
    // TODO: Implement fetching from Shopware export or file
    // This could read from a JSON dump, CSV, or call the Shopware API

    console.log("[import-products] Fetching external product data...")

    const rawProducts: Record<string, unknown>[] = []

    // Placeholder: parse source data into normalized product records
    // rawProducts = await parseShopwareExport(input.filePath)

    return new StepResponse(rawProducts)
  }
)

/**
 * Step: Transform external product data into Medusa product format.
 */
const transformProductsStep = createStep(
  "transform-products",
  async (rawProducts: Record<string, unknown>[], { container }) => {
    console.log(`[import-products] Transforming ${rawProducts.length} products...`)

    // TODO: Map Shopware fields to Medusa product fields
    // - title, handle, description
    // - variants with prices
    // - images / thumbnails
    // - categories -> collections
    // - custom metadata (Gewerk, Anwendung, compatibility)

    const medusaProducts = rawProducts.map((raw) => ({
      title: raw.name as string ?? "Untitled",
      handle: raw.slug as string ?? "",
      description: raw.description as string ?? "",
      // ... map remaining fields
    }))

    return new StepResponse(medusaProducts)
  }
)

/**
 * Step: Upsert products into Medusa catalog.
 */
const upsertProductsStep = createStep(
  "upsert-products",
  async (
    products: Array<{ title: string; handle: string; description: string }>,
    { container }
  ) => {
    console.log(`[import-products] Upserting ${products.length} products into Medusa...`)

    // TODO: Use the product module service to create or update products
    // const productService = container.resolve("productModuleService")
    //
    // for (const product of products) {
    //   await productService.upsertProducts([product])
    // }

    return new StepResponse({ imported: products.length })
  }
)

/**
 * Workflow: import-products
 *
 * Orchestrates the full product import pipeline:
 * 1. Fetch raw data from external source
 * 2. Transform into Medusa format
 * 3. Upsert into catalog
 */
export const importProductsWorkflow = createWorkflow(
  "import-products",
  (input: { sourceUrl?: string; filePath?: string }) => {
    const rawProducts = fetchExternalProductsStep(input)
    const transformedProducts = transformProductsStep(rawProducts)
    const result = upsertProductsStep(transformedProducts)

    return new WorkflowResponse(result)
  }
)
