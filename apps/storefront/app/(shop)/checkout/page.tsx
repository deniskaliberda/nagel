import type { Metadata } from "next"
import { CheckoutFlow } from "./CheckoutFlow"

export const metadata: Metadata = {
  title: "Checkout | Nagel Paul",
  description: "Bestellung abschließen – sicher bezahlen bei Nagel Paul.",
  robots: { index: false, follow: false },
}

export default function CheckoutPage() {
  return <CheckoutFlow />
}
