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
   * E.g., gewerk = "Dachdecker" returns all roofing applications.
   */
  async getApplicationsByGewerk(gewerk: string): Promise<ApplicationAreaDTO[]> {
    // TODO: query ApplicationArea model filtered by gewerk
    const entries = await this.listApplicationAreas({
      gewerk,
    })

    return entries as unknown as ApplicationAreaDTO[]
  }

  /**
   * Get all product IDs associated with a specific application area.
   * Used to drive the storefront filter: Gewerk -> Anwendung -> Products.
   */
  async getProductsForApplication(applicationId: string): Promise<string[]> {
    // TODO: retrieve the application area and return its product_ids
    const area = await this.retrieveApplicationArea(applicationId)

    return (area as unknown as ApplicationAreaDTO).product_ids ?? []
  }
}

export default ApplicationService
