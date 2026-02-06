export interface Product {
  id: string
  name: string
  handle: string
  description: string
  brand: string
  sku: string
  categorySlug: string
  categoryName: string
  price: number // cents
  compareAtPrice?: number
  images: string[]
  thumbnail?: string
  isLignoLoc: boolean
  availability: "in_stock" | "low_stock" | "out_of_stock"
  techSpecs: TechSpec[]
  variants: ProductVariant[]
}

export interface ProductVariant {
  id: string
  title: string
  sku: string
  price: number
  inventoryQuantity: number
}

export interface TechSpec {
  label: string
  value: string
}

export interface Category {
  id: string
  name: string
  handle: string
  description: string
  parentId?: string
  productCount: number
}

export interface Brand {
  slug: string
  name: string
  description: string
  logo?: string
  productCount: number
}

export interface Gewerk {
  slug: string
  name: string
  description: string
  icon: string
  anwendungen: Anwendung[]
}

export interface Anwendung {
  slug: string
  name: string
  description: string
  gewerk: string
}

export interface ApplicationRecommendation {
  category: "device" | "fastener" | "accessory"
  product: Product
  reason: string
  lignolocAlternative?: Product
}
