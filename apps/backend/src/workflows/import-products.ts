import {
  createWorkflow,
  createStep,
  StepResponse,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import * as fs from "fs"
import * as path from "path"

interface RawProduct {
  name: string
  slug: string
  description: string
  sku?: string
  price?: number
  images?: string[]
  category?: string
  brand?: string
  metadata?: Record<string, unknown>
}

/**
 * Step: Fetch products from external source (Shopware export JSON/CSV).
 */
const fetchExternalProductsStep = createStep(
  "fetch-external-products",
  async (input: { sourceUrl?: string; filePath?: string }) => {
    console.log("[import-products] Fetching external product data...")

    const rawProducts: RawProduct[] = []

    const filePath = input.filePath
      ? path.resolve(input.filePath)
      : path.resolve(process.cwd(), "../../data/products/shopware-export.json")

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8")
      const parsed = JSON.parse(fileContent)

      if (Array.isArray(parsed)) {
        rawProducts.push(...parsed)
      } else if (parsed.products && Array.isArray(parsed.products)) {
        rawProducts.push(...parsed.products)
      }

      console.log(`[import-products] Loaded ${rawProducts.length} products from ${filePath}`)
    } else {
      console.log(`[import-products] File not found: ${filePath}`)
    }

    return new StepResponse(rawProducts)
  }
)

/**
 * Step: Transform external product data into Medusa product format.
 */
const transformProductsStep = createStep(
  "transform-products",
  async (rawProducts: RawProduct[]) => {
    console.log(`[import-products] Transforming ${rawProducts.length} products...`)

    const medusaProducts = rawProducts.map((raw) => ({
      title: raw.name ?? "Untitled",
      handle: raw.slug ?? "",
      description: raw.description ?? "",
      status: "published" as const,
      metadata: {
        brand: raw.brand,
        imported_sku: raw.sku,
        ...(raw.metadata || {}),
      },
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
    products: Array<{
      title: string
      handle: string
      description: string
      status: string
      metadata: Record<string, unknown>
    }>,
    { container }
  ) => {
    console.log(`[import-products] Upserting ${products.length} products into Medusa...`)

    const productService = container.resolve("productModuleService") as any
    let imported = 0

    for (const product of products) {
      try {
        await productService.upsertProducts([product])
        imported++
      } catch (err) {
        console.warn(`[import-products] Failed to upsert: ${product.title}`, err)
      }
    }

    console.log(`[import-products] Successfully imported ${imported}/${products.length} products`)
    return new StepResponse({ imported, total: products.length })
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
