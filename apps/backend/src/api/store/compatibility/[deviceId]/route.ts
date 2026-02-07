import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { COMPATIBILITY_MODULE } from "../../../../modules/compatibility"
import CompatibilityService from "../../../../modules/compatibility/service"

/**
 * GET /store/compatibility/:deviceId
 *
 * Returns all compatible fastener products for a given device ID.
 * Used by the storefront compatibility finder widget.
 */
export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const deviceId = req.params.deviceId as string

  const compatibilityService = req.scope.resolve<CompatibilityService>(
    COMPATIBILITY_MODULE
  )

  try {
    const fasteners = await compatibilityService.getFastenersForDevice(deviceId)

    res.json({
      device_id: deviceId,
      fasteners,
      count: fasteners.length,
    })
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve compatibility data",
      error: (error as Error).message,
    })
  }
}
