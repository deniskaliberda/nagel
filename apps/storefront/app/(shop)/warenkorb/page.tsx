import type { Metadata } from "next"
import Link from "next/link"
import { WarenkorbClient } from "@/components/checkout/WarenkorbClient"

export const metadata: Metadata = {
  title: "Warenkorb | Nagel Paul",
  description: "Ihr Warenkorb bei Nagel Paul. Prüfen Sie Ihre Auswahl und gehen Sie zur Kasse.",
}

export default function WarenkorbPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-[#6b7280]">
            <li><Link href="/" className="hover:text-[#1a1a1a]">Home</Link></li>
            <li><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg></li>
            <li className="font-medium text-[#1a1a1a]">Warenkorb</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-[#1a1a1a]">Warenkorb</h1>

        <WarenkorbClient />
      </div>
    </main>
  )
}
