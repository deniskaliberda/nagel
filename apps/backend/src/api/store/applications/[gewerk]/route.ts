import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { APPLICATION_MODULE } from "../../../../modules/application"
import ApplicationService from "../../../../modules/application/service"

/**
 * GET /store/applications/:gewerk
 *
 * Returns all application areas for a specific Gewerk (trade/profession).
 * E.g., /store/applications/Dachdecker returns all roofing-related applications.
 */
export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const gewerk = req.params.gewerk as string

  const applicationService = req.scope.resolve<ApplicationService>(
    APPLICATION_MODULE
  )

  try {
    const applications = await applicationService.getApplicationsByGewerk(gewerk)

    res.json({
      gewerk,
      applications,
      count: applications.length,
    })
  } catch (error) {
    res.status(500).json({
      message: `Failed to retrieve applications for Gewerk: ${gewerk}`,
      error: (error as Error).message,
    })
  }
}
