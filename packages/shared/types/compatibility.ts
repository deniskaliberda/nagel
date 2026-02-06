export type CompatibilityStatus = "compatible" | "recommended" | "incompatible"

export interface DeviceFastenerCompatibility {
  id: string
  deviceId: string
  fastenerId: string
  isRecommended: boolean
  notes?: string
  status: CompatibilityStatus
}

export interface CompatibilityResult {
  device: {
    id: string
    title: string
    brand: string
    slug: string
  }
  fasteners: {
    id: string
    title: string
    brand: string
    slug: string
    isRecommended: boolean
    notes?: string
  }[]
}
