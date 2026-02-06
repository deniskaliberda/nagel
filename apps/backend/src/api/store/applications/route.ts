import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { APPLICATION_MODULE } from "../../../modules/application"
import ApplicationService from "../../../modules/application/service"

/**
 * GET /store/applications
 *
 * Returns all application areas, optionally filtered by query params.
 * Used by the storefront Gewerk/Anwendung navigation.
 */
export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const applicationService = req.scope.resolve<ApplicationService>(
    APPLICATION_MODULE
  )

  try {
    const applications = await applicationService.listApplicationAreas()

    // Group by gewerk for easier consumption by the storefront
    const grouped = applications.reduce<
      Record<string, typeof applications>
    >((acc, app) => {
      const gewerk = (app as any).gewerk as string
      if (!acc[gewerk]) {
        acc[gewerk] = []
      }
      acc[gewerk].push(app)
      return acc
    }, {})

    res.json({
      applications,
      by_gewerk: grouped,
      count: applications.length,
    })
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve applications",
      error: (error as Error).message,
    })
  }
}
