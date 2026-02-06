export interface ProductCategory {
  id: string
  name: string
  slug: string
  description?: string
  parentCategoryId?: string
  children?: ProductCategory[]
  metadata?: Record<string, unknown>
}

export interface ProductVariant {
  id: string
  sku: string
  title: string
  price: number
  compareAtPrice?: number
  inventoryQuantity: number
  options: Record<string, string>
  metadata?: Record<string, unknown>
}

export interface Product {
  id: string
  title: string
  slug: string
  description: string
  shortDescription?: string
  brand: string
  sku: string
  categories: ProductCategory[]
  variants: ProductVariant[]
  images: ProductImage[]
  thumbnail?: string
  techSpecs: TechSpec[]
  isLignoLoc: boolean
  metadata?: Record<string, unknown>
  createdAt: string
  updatedAt: string
}

export interface ProductImage {
  id: string
  url: string
  alt: string
  width?: number
  height?: number
}

export interface TechSpec {
  label: string
  value: string
  unit?: string
}
