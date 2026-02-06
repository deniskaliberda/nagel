import type { ExecArgs } from "@medusajs/framework"

/**
 * Seed script: Import products from Shopware data export.
 *
 * Usage:
 *   medusa exec ./src/scripts/seed-products.ts
 *   medusa exec ./src/scripts/seed-products.ts -- --compatibility-only
 *
 * This script reads exported Shopware data (JSON/CSV) and seeds:
 * - Products with variants and pricing
 * - Application areas (Gewerk / Anwendung mappings)
 * - Device-fastener compatibility data
 */
export default async function seedProducts({ container, args }: ExecArgs) {
  const compatibilityOnly = args?.includes("--compatibility-only")

  console.log("[seed-products] Starting product seed...")
  console.log(`[seed-products] Mode: ${compatibilityOnly ? "compatibility only" : "full import"}`)

  // TODO: Resolve services
  // const productService = container.resolve("productModuleService")
  // const compatibilityService = container.resolve("compatibility")
  // const applicationService = container.resolve("application")

  if (!compatibilityOnly) {
    // ------------------------------------------------------------------
    // Phase 1: Import products from Shopware export
    // ------------------------------------------------------------------
    console.log("[seed-products] Phase 1: Importing products...")

    // TODO: Read Shopware export file
    // const shopwareData = JSON.parse(
    //   fs.readFileSync("./data/shopware-export.json", "utf-8")
    // )

    // TODO: Create product categories / collections
    // for (const category of shopwareData.categories) { ... }

    // TODO: Create products with variants
    // for (const product of shopwareData.products) { ... }

    // ------------------------------------------------------------------
    // Phase 2: Set up application areas (Gewerk -> Anwendung)
    // ------------------------------------------------------------------
    console.log("[seed-products] Phase 2: Seeding application areas...")

    // Example Gewerk/Anwendung structure for Nagel Paul:
    const _applicationAreas = [
      {
        gewerk: "Dachdecker",
        anwendung: "Dachbahn befestigen",
        description: "Befestigungsmittel fuer Dachbahnen und Dachabdichtungen",
        product_ids: [],
      },
      {
        gewerk: "Dachdecker",
        anwendung: "Daemmstoff befestigen",
        description: "Befestigungsmittel fuer Daemstoffe auf Flachdaechern",
        product_ids: [],
      },
      {
        gewerk: "Fassadenbauer",
        anwendung: "Fassadenplatten befestigen",
        description: "Befestigungsmittel fuer vorgehaengte hinterlueftete Fassaden",
        product_ids: [],
      },
      {
        gewerk: "Zimmerer",
        anwendung: "Holzkonstruktion verbinden",
        description: "Verbindungsmittel fuer Holzbau und Zimmererarbeiten",
        product_ids: [],
      },
    ]

    // TODO: Upsert application areas
    // for (const area of applicationAreas) {
    //   await applicationService.createApplicationAreas(area)
    // }
  }

  // ------------------------------------------------------------------
  // Phase 3: Import compatibility data
  // ------------------------------------------------------------------
  console.log("[seed-products] Phase 3: Seeding compatibility data...")

  // TODO: Read compatibility matrix from data file
  // const compatibilityData = JSON.parse(
  //   fs.readFileSync("./data/compatibility-matrix.json", "utf-8")
  // )

  // TODO: Upsert device-fastener compatibility records
  // for (const entry of compatibilityData) {
  //   await compatibilityService.createDeviceFasteners({
  //     device_id: entry.deviceId,
  //     device_name: entry.deviceName,
  //     device_manufacturer: entry.manufacturer,
  //     fastener_product_id: entry.productId,
  //     fastener_sku: entry.sku,
  //     compatible: entry.compatible,
  //     notes: entry.notes,
  //   })
  // }

  console.log("[seed-products] Seed complete.")
}
