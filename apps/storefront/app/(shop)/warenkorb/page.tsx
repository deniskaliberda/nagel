import type { Metadata } from "next"
import Link from "next/link"

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

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Cart items */}
          <div className="lg:col-span-2">
            {/* Empty state */}
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-12 text-center">
              <svg className="mx-auto h-16 w-16 text-[#e5e7eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a]">
                Ihr Warenkorb ist leer
              </h2>
              <p className="mt-2 text-[#6b7280]">
                Entdecken Sie unser Sortiment an professioneller Befestigungstechnik.
              </p>
              <Link
                href="/produkte"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#e94560] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]"
              >
                Produkte entdecken
              </Link>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#1a1a1a]">
                Bestellübersicht
              </h2>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b7280]">Zwischensumme</span>
                  <span className="text-[#1a1a1a]">0,00 €</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b7280]">Versand</span>
                  <span className="text-[#6b7280]">wird berechnet</span>
                </div>
                <hr className="border-[#e5e7eb]" />
                <div className="flex justify-between font-semibold">
                  <span>Gesamt</span>
                  <span>0,00 €</span>
                </div>
                <p className="text-xs text-[#6b7280]">inkl. 19% MwSt.</p>
              </div>
              <button
                disabled
                className="mt-6 w-full rounded-lg bg-[#e5e7eb] px-4 py-3 text-sm font-semibold text-[#6b7280] cursor-not-allowed"
              >
                Zur Kasse
              </button>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#6b7280]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Sichere Zahlung mit SSL-Verschlüsselung
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
