import type { Metadata } from "next"
import Link from "next/link"
import { CheckoutClient } from "@/components/checkout/CheckoutClient"

export const metadata: Metadata = {
  title: "Checkout | Nagel Paul",
  description: "Bestellung abschließen – sicher bezahlen bei Nagel Paul.",
  robots: { index: false, follow: false },
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Logo link */}
        <div className="mb-8 text-center">
          <Link href="/" className="text-xl font-bold text-[#1a1a2e]">
            NAGEL PAUL
          </Link>
        </div>

        <CheckoutClient />
      </div>
    </main>
  )
}
