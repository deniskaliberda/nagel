import type { MedusaContainer } from "@medusajs/framework/types"
import * as fs from "fs"
import * as path from "path"

interface SeedArgs {
  container: MedusaContainer
  args?: string[]
}

interface CompatibilityEntry {
  device_id: string
  device_name: string
  device_manufacturer: string
  fastener_product_id: string
  fastener_sku: string
  compatible: boolean
  notes: string | null
}

interface ApplicationsFileGewerk {
  id: string
  label: string
  icon: string
  anwendungen: Array<{
    slug: string
    name: string
    description: string
    products: string[]
  }>
}

interface ApplicationsFile {
  gewerke: ApplicationsFileGewerk[]
}

interface CompatibilityFile {
  entries: CompatibilityEntry[]
}

/**
 * Seed script: Import products, application areas, and compatibility data.
 *
 * Usage:
 *   medusa exec ./src/scripts/seed-products.ts
 *   medusa exec ./src/scripts/seed-products.ts -- --compatibility-only
 */
export default async function seedProducts({ container, args }: SeedArgs) {
  const compatibilityOnly = args?.includes("--compatibility-only")

  console.log("[seed-products] Starting product seed...")
  console.log(`[seed-products] Mode: ${compatibilityOnly ? "compatibility only" : "full import"}`)

  const compatibilityService = container.resolve("compatibility") as any
  const applicationService = container.resolve("application") as any

  if (!compatibilityOnly) {
    // ------------------------------------------------------------------
    // Phase 1: Import products from Shopware export
    // ------------------------------------------------------------------
    console.log("[seed-products] Phase 1: Checking for product data...")

    const productDataPath = path.resolve(process.cwd(), "../../data/products")
    if (fs.existsSync(productDataPath)) {
      const files = fs.readdirSync(productDataPath).filter(
        (f: string) => f.endsWith(".json") && f !== ".gitkeep"
      )

      if (files.length > 0) {
        console.log(`[seed-products] Found ${files.length} product data file(s)`)
        const productService = container.resolve("productModuleService") as any

        for (const file of files) {
          const filePath = path.join(productDataPath, file)
          const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))

          if (Array.isArray(data.products)) {
            for (const product of data.products) {
              try {
                await productService.upsertProducts([{
                  title: product.title || product.name,
                  handle: product.handle || product.slug,
                  description: product.description || "",
                  status: "published",
                  metadata: product.metadata || {},
                }])
              } catch (err) {
                console.warn(`[seed-products] Failed to upsert product: ${product.title || product.name}`, err)
              }
            }
          }
        }
      } else {
        console.log("[seed-products] No product data files found, skipping product import")
      }
    } else {
      console.log("[seed-products] Product data directory not found, skipping")
    }

    // ------------------------------------------------------------------
    // Phase 2: Set up application areas (Gewerk -> Anwendung)
    // ------------------------------------------------------------------
    console.log("[seed-products] Phase 2: Seeding application areas...")

    const applicationsPath = path.resolve(process.cwd(), "../../data/applications.json")
    if (fs.existsSync(applicationsPath)) {
      const applicationsFile: ApplicationsFile = JSON.parse(
        fs.readFileSync(applicationsPath, "utf-8")
      )

      const areas: Array<{
        gewerk: string
        anwendung: string
        description: string
        product_ids: string[]
      }> = []

      for (const gewerk of applicationsFile.gewerke) {
        for (const anwendung of gewerk.anwendungen) {
          areas.push({
            gewerk: gewerk.label,
            anwendung: anwendung.name,
            description: anwendung.description,
            product_ids: anwendung.products || [],
          })
        }
      }

      const count = await applicationService.bulkUpsertApplications(areas)
      console.log(`[seed-products] Seeded ${count} application areas`)
    } else {
      console.log("[seed-products] applications.json not found, skipping")
    }
  }

  // ------------------------------------------------------------------
  // Phase 3: Import compatibility data
  // ------------------------------------------------------------------
  console.log("[seed-products] Phase 3: Seeding compatibility data...")

  const compatibilityPath = path.resolve(process.cwd(), "../../data/compatibility-matrix.json")
  if (fs.existsSync(compatibilityPath)) {
    const compatibilityFile: CompatibilityFile = JSON.parse(
      fs.readFileSync(compatibilityPath, "utf-8")
    )

    if (compatibilityFile.entries.length > 0) {
      const count = await compatibilityService.bulkUpsertCompatibility(
        compatibilityFile.entries
      )
      console.log(`[seed-products] Seeded ${count} compatibility entries`)
    } else {
      console.log("[seed-products] No compatibility entries found in data file")
    }
  } else {
    console.log("[seed-products] compatibility-matrix.json not found, skipping")
  }

  console.log("[seed-products] Seed complete.")
}
