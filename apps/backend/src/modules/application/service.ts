import { MedusaService } from "@medusajs/framework/utils"
import { ApplicationArea } from "./models/application-area"

type ApplicationAreaDTO = {
  id: string
  gewerk: string
  anwendung: string
  description: string | null
  product_ids: string[]
}

class ApplicationService extends MedusaService({
  ApplicationArea,
}) {
  /**
   * Get all application areas for a given Gewerk (trade/profession).
   */
  async getApplicationsByGewerk(gewerk: string): Promise<ApplicationAreaDTO[]> {
    const entries = await this.listApplicationAreas({
      gewerk,
    })

    return entries as unknown as ApplicationAreaDTO[]
  }

  /**
   * Get all product IDs associated with a specific application area.
   */
  async getProductsForApplication(applicationId: string): Promise<string[]> {
    const area = await this.retrieveApplicationArea(applicationId)
    return (area as unknown as ApplicationAreaDTO).product_ids ?? []
  }

  /**
   * Get all distinct Gewerke in the system.
   */
  async listGewerke(): Promise<string[]> {
    const allAreas = await this.listApplicationAreas()
    const gewerke = new Set(
      (allAreas as unknown as ApplicationAreaDTO[]).map((a) => a.gewerk)
    )
    return Array.from(gewerke).sort()
  }

  /**
   * Bulk upsert application areas from the applications.json data file.
   */
  async bulkUpsertApplications(
    areas: Array<{
      gewerk: string
      anwendung: string
      description?: string | null
      product_ids?: string[]
    }>
  ): Promise<number> {
    let count = 0

    for (const area of areas) {
      const existing = await this.listApplicationAreas({
        gewerk: area.gewerk,
        anwendung: area.anwendung,
      })

      if (existing.length > 0) {
        await this.updateApplicationAreas({
          id: (existing[0] as unknown as ApplicationAreaDTO).id,
          ...area,
          product_ids: area.product_ids ?? [],
        })
      } else {
        await this.createApplicationAreas({
          ...area,
          product_ids: area.product_ids ?? [],
        })
      }
      count++
    }

    return count
  }
}

export default ApplicationService
