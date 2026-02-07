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
   */
  async getFastenersForDevice(deviceId: string): Promise<DeviceFastenerDTO[]> {
    const entries = await this.listDeviceFasteners({
      device_id: deviceId,
      compatible: true,
    })

    return entries as unknown as DeviceFastenerDTO[]
  }

  /**
   * Get all devices compatible with a given fastener product.
   */
  async getDevicesForFastener(fastenerProductId: string): Promise<DeviceFastenerDTO[]> {
    const entries = await this.listDeviceFasteners({
      fastener_product_id: fastenerProductId,
      compatible: true,
    })

    return entries as unknown as DeviceFastenerDTO[]
  }

  /**
   * Check if a specific device-fastener combination is compatible.
   */
  async checkCompatibility(
    deviceId: string,
    fastenerProductId: string
  ): Promise<{ compatible: boolean; notes: string | null }> {
    const entries = await this.listDeviceFasteners({
      device_id: deviceId,
      fastener_product_id: fastenerProductId,
    })

    if (entries.length === 0) {
      return { compatible: false, notes: null }
    }

    const entry = entries[0] as unknown as DeviceFastenerDTO
    return { compatible: entry.compatible, notes: entry.notes }
  }

  /**
   * Bulk upsert compatibility entries from the compatibility matrix data file.
   */
  async bulkUpsertCompatibility(
    entries: Array<{
      device_id: string
      device_name: string
      device_manufacturer: string
      fastener_product_id: string
      fastener_sku: string
      compatible: boolean
      notes?: string | null
    }>
  ): Promise<number> {
    let count = 0

    for (const entry of entries) {
      const existing = await this.listDeviceFasteners({
        device_id: entry.device_id,
        fastener_product_id: entry.fastener_product_id,
      })

      if (existing.length > 0) {
        await this.updateDeviceFasteners({
          id: (existing[0] as unknown as DeviceFastenerDTO).id,
          ...entry,
        })
      } else {
        await this.createDeviceFasteners(entry)
      }
      count++
    }

    return count
  }
}

export default CompatibilityService
