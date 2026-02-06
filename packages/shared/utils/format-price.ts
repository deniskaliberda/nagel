/**
 * Format a price in cents to a EUR string.
 * Example: 8990 → "89,90 €"
 */
export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(priceInCents / 100)
}
