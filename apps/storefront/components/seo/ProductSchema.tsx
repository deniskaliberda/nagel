interface ProductSchemaProps {
  name: string
  description: string
  image: string[]
  sku: string
  brand: string
  price: number // cents
  compareAtPrice?: number
  availability: "in_stock" | "low_stock" | "out_of_stock"
  url: string
}

const AVAILABILITY_MAP = {
  in_stock: "https://schema.org/InStock",
  low_stock: "https://schema.org/LimitedAvailability",
  out_of_stock: "https://schema.org/OutOfStock",
}

export function ProductSchema({
  name,
  description,
  image,
  sku,
  brand,
  price,
  compareAtPrice,
  availability,
  url,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    sku,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "EUR",
      price: (price / 100).toFixed(2),
      ...(compareAtPrice && {
        priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      }),
      availability: AVAILABILITY_MAP[availability],
      seller: {
        "@type": "Organization",
        name: "Nagel Paul",
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
