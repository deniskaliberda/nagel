export type Gewerk =
  | "zimmerer"
  | "dachdecker"
  | "trockenbauer"
  | "schreiner"
  | "bodenleger"
  | "heimwerker"

export interface ApplicationArea {
  id: string
  gewerk: Gewerk
  gewerkLabel: string
  slug: string
  name: string
  description: string
  icon?: string
  sortOrder: number
}

export interface ApplicationMapping {
  id: string
  applicationArea: ApplicationArea
  recommendedProducts: ApplicationProduct[]
}

export interface ApplicationProduct {
  productId: string
  category: "device" | "fastener" | "accessory"
  reason: string
  lignolocAlternativeId?: string
  sortOrder: number
}
