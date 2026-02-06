import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Checkout | Nagel Paul",
  description: "Bestellung abschließen – sicher bezahlen bei Nagel Paul.",
  robots: { index: false, follow: false },
}

const CHECKOUT_STEPS = [
  { label: "Adresse", description: "Liefer- und Rechnungsadresse" },
  { label: "Versand", description: "Versandart wählen" },
  { label: "Zahlung", description: "Zahlungsart wählen" },
  { label: "Bestätigung", description: "Bestellung prüfen" },
]

export default function CheckoutPage() {
  const currentStep = 0

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Logo link */}
        <div className="mb-8 text-center">
          <Link href="/" className="text-xl font-bold text-[#1a1a2e]">
            NAGEL PAUL
          </Link>
        </div>

        {/* Steps indicator */}
        <nav aria-label="Checkout-Fortschritt" className="mb-10">
          <ol className="flex items-center justify-between">
            {CHECKOUT_STEPS.map((step, index) => {
              const isCurrent = index === currentStep
              const isUpcoming = index > currentStep

              return (
                <li key={step.label} className="relative flex flex-1 flex-col items-center">
                  {index > 0 && (
                    <div className="absolute left-0 right-1/2 top-4 h-0.5 -translate-y-1/2 bg-[#e5e7eb]" />
                  )}
                  {index < CHECKOUT_STEPS.length - 1 && (
                    <div className="absolute left-1/2 right-0 top-4 h-0.5 -translate-y-1/2 bg-[#e5e7eb]" />
                  )}
                  <div
                    className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                      isCurrent
                        ? "border-2 border-[#e94560] bg-white text-[#e94560]"
                        : "border-2 border-[#e5e7eb] bg-white text-[#6b7280]"
                    }`}
                    aria-current={isCurrent ? "step" : undefined}
                  >
                    {index + 1}
                  </div>
                  <span className={`mt-2 text-xs font-medium sm:text-sm ${isUpcoming ? "text-[#6b7280]" : "text-[#1a1a1a]"}`}>
                    {step.label}
                  </span>
                </li>
              )
            })}
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form area */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
              <h1 className="text-xl font-bold text-[#1a1a1a]">Lieferadresse</h1>
              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-[#1a1a1a]">Vorname *</label>
                    <input id="firstName" type="text" className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm focus:border-[#e94560] focus:outline-none focus:ring-1 focus:ring-[#e94560]" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-[#1a1a1a]">Nachname *</label>
                    <input id="lastName" type="text" className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm focus:border-[#e94560] focus:outline-none focus:ring-1 focus:ring-[#e94560]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="mb-1 block text-sm font-medium text-[#1a1a1a]">Firma (optional)</label>
                  <input id="company" type="text" className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm focus:border-[#e94560] focus:outline-none focus:ring-1 focus:ring-[#e94560]" />
                </div>
                <div>
                  <label htmlFor="street" className="mb-1 block text-sm font-medium text-[#1a1a1a]">Straße und Hausnummer *</label>
                  <input id="street" type="text" className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm focus:border-[#e94560] focus:outline-none focus:ring-1 focus:ring-[#e94560]" />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="zip" className="mb-1 block text-sm font-medium text-[#1a1a1a]">PLZ *</label>
                    <input id="zip" type="text" className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm focus:border-[#e94560] focus:outline-none focus:ring-1 focus:ring-[#e94560]" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="city" className="mb-1 block text-sm font-medium text-[#1a1a1a]">Ort *</label>
                    <input id="city" type="text" className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm focus:border-[#e94560] focus:outline-none focus:ring-1 focus:ring-[#e94560]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#1a1a1a]">E-Mail *</label>
                  <input id="email" type="email" className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm focus:border-[#e94560] focus:outline-none focus:ring-1 focus:ring-[#e94560]" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#1a1a1a]">Telefon (optional)</label>
                  <input id="phone" type="tel" className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm focus:border-[#e94560] focus:outline-none focus:ring-1 focus:ring-[#e94560]" />
                </div>
              </div>
              <button className="mt-8 w-full rounded-lg bg-[#e94560] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]">
                Weiter zu Versand
              </button>
            </div>
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#1a1a1a]">Bestellübersicht</h2>
              <p className="mt-4 text-sm text-[#6b7280]">Ihr Warenkorb ist leer.</p>
              <hr className="my-4 border-[#e5e7eb]" />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b7280]">Zwischensumme</span>
                  <span>0,00 €</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b7280]">Versand</span>
                  <span className="text-[#6b7280]">wird berechnet</span>
                </div>
                <hr className="border-[#e5e7eb]" />
                <div className="flex justify-between font-bold">
                  <span>Gesamt</span>
                  <span>0,00 €</span>
                </div>
                <p className="text-xs text-[#6b7280]">inkl. 19% MwSt.</p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-center text-xs text-[#6b7280]">
              <div className="flex items-center justify-center gap-4">
                <span>Kreditkarte</span>
                <span>PayPal</span>
                <span>SEPA</span>
                <span>Rechnung</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                SSL-verschlüsselt
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
