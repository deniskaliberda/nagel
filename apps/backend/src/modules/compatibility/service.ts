import { MedusaService } from "@medusajs/framework/utils"
import { DeviceFastener } from "./models/device-fastener"

type DeviceFastenerDTO = {
  id: string
  device_id: string
  device_name: string
  device_manufacturer: string
  fastener_product_id: string
  fastener_sku: string
  compatible: boolean
  notes: string | null
}

class CompatibilityService extends MedusaService({
  DeviceFastener,
}) {
  /**
   * Get all compatible fasteners for a given device.
   * Returns a list of product IDs / SKUs that are compatible with the device.
   */
  async getFastenersForDevice(deviceId: string): Promise<DeviceFastenerDTO[]> {
    // TODO: query DeviceFastener model filtered by device_id
    // and join with product catalog for full product details
    const entries = await this.listDeviceFasteners({
      device_id: deviceId,
      compatible: true,
    })

    return entries as unknown as DeviceFastenerDTO[]
  }

  /**
   * Get all devices compatible with a given fastener product.
   * Useful for showing "works with" on a product page.
   */
  async getDevicesForFastener(fastenerProductId: string): Promise<DeviceFastenerDTO[]> {
    // TODO: query DeviceFastener model filtered by fastener_product_id
    const entries = await this.listDeviceFasteners({
      fastener_product_id: fastenerProductId,
      compatible: true,
    })

    return entries as unknown as DeviceFastenerDTO[]
  }
}

export default CompatibilityService
