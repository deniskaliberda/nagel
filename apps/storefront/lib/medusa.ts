const MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

interface RequestOptions {
  method?: string
  body?: unknown
  headers?: Record<string, string>
  next?: NextFetchRequestConfig
}

async function medusaRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = "GET", body, headers = {}, next } = options

  const response = await fetch(`${MEDUSA_BACKEND_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    next,
  })

  if (!response.ok) {
    throw new Error(`Medusa API error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

export async function getProducts(params?: Record<string, string>) {
  const searchParams = new URLSearchParams(params)
  return medusaRequest(`/store/products?${searchParams}`, {
    next: { revalidate: 60 },
  })
}

export async function getProduct(handle: string) {
  return medusaRequest(`/store/products?handle=${handle}`, {
    next: { revalidate: 60 },
  })
}

export async function getCategories() {
  return medusaRequest("/store/product-categories", {
    next: { revalidate: 300 },
  })
}

export async function getCategory(handle: string) {
  return medusaRequest(`/store/product-categories?handle=${handle}`, {
    next: { revalidate: 300 },
  })
}

export async function getCompatibleFasteners(deviceId: string) {
  return medusaRequest(`/store/compatibility/${deviceId}`, {
    next: { revalidate: 300 },
  })
}

export async function getApplications(gewerk?: string) {
  const path = gewerk
    ? `/store/applications/${gewerk}`
    : "/store/applications"
  return medusaRequest(path, {
    next: { revalidate: 300 },
  })
}

export { MEDUSA_BACKEND_URL }
