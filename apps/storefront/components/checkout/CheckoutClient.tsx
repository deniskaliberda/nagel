"use client"

import { useState } from "react"
import Link from "next/link"
import { useCartContext } from "@/components/providers/CartProvider"
import { formatPrice } from "@/lib/utils"

const STEPS = [
  { label: "Adresse", description: "Liefer- und Rechnungsadresse" },
  { label: "Versand", description: "Versandart wählen" },
  { label: "Zahlung", description: "Zahlungsart wählen" },
  { label: "Bestätigung", description: "Bestellung prüfen" },
]

export function CheckoutClient() {
  const { items, itemCount, subtotal } = useCartContext()
  const [currentStep, setCurrentStep] = useState(0)
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [paymentMethod, setPaymentMethod] = useState("kreditkarte")

  const shippingCost = shippingMethod === "express" ? 1290 : subtotal >= 10000 ? 0 : 690
  const total = subtotal + shippingCost

  if (items.length === 0) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-xl font-semibold text-[#1a1a1a]">Ihr Warenkorb ist leer</h2>
        <p className="mt-2 text-[#6b7280]">Fügen Sie Produkte hinzu, um zur Kasse zu gehen.</p>
        <Link
          href="/produkte"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#e94560] px-6 py-3 text-sm font-semibold text-white hover:bg-[#c81e45]"
        >
          Produkte entdecken
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Steps indicator */}
      <nav aria-label="Checkout-Fortschritt" className="mb-10">
        <ol className="flex items-center justify-between">
          {STEPS.map((step, index) => {
            const isCompleted = index < currentStep
            const isCurrent = index === currentStep

            return (
              <li key={step.label} className="relative flex flex-1 flex-col items-center">
                {index > 0 && (
                  <div className={`absolute left-0 right-1/2 top-4 h-0.5 -translate-y-1/2 ${isCompleted ? "bg-[#0f9d58]" : "bg-[#e5e7eb]"}`} />
                )}
                {index < STEPS.length - 1 && (
                  <div className={`absolute left-1/2 right-0 top-4 h-0.5 -translate-y-1/2 ${isCompleted ? "bg-[#0f9d58]" : "bg-[#e5e7eb]"}`} />
                )}
                <div
                  className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                    isCompleted
                      ? "bg-[#0f9d58] text-white"
                      : isCurrent
                        ? "border-2 border-[#e94560] bg-white text-[#e94560]"
                        : "border-2 border-[#e5e7eb] bg-white text-[#6b7280]"
                  }`}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {isCompleted ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={`mt-2 text-xs font-medium sm:text-sm ${isCurrent ? "text-[#1a1a1a]" : "text-[#6b7280]"}`}>
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
          {/* Step 1: Address */}
          {currentStep === 0 && (
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
              <h2 className="text-xl font-bold text-[#1a1a1a]">Lieferadresse</h2>
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
              <button
                onClick={() => setCurrentStep(1)}
                className="mt-8 w-full rounded-lg bg-[#e94560] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]"
              >
                Weiter zu Versand
              </button>
            </div>
          )}

          {/* Step 2: Shipping */}
          {currentStep === 1 && (
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
              <h2 className="text-xl font-bold text-[#1a1a1a]">Versandart</h2>
              <div className="mt-6 space-y-3">
                {[
                  { id: "standard", label: "DHL Standard", description: "3-5 Werktage", price: subtotal >= 10000 ? 0 : 690 },
                  { id: "express", label: "DHL Express", description: "1-2 Werktage", price: 1290 },
                  { id: "palette", label: "Palettenversand", description: "Für Großbestellungen, 5-7 Werktage", price: 4900 },
                  { id: "abholung", label: "Abholung vor Ort", description: "München-Umgebung, nach Vereinbarung", price: 0 },
                ].map((option) => (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-center justify-between rounded-lg border-2 p-4 transition-colors ${
                      shippingMethod === option.id ? "border-[#e94560] bg-red-50/30" : "border-[#e5e7eb] hover:border-[#6b7280]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value={option.id}
                        checked={shippingMethod === option.id}
                        onChange={() => setShippingMethod(option.id)}
                        className="h-4 w-4 accent-[#e94560]"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#1a1a1a]">{option.label}</p>
                        <p className="text-xs text-[#6b7280]">{option.description}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-[#1a1a1a]">
                      {option.price === 0 ? "Kostenlos" : formatPrice(option.price)}
                    </span>
                  </label>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => setCurrentStep(0)}
                  className="flex-1 rounded-lg border border-[#e5e7eb] px-4 py-3 text-sm font-semibold text-[#1a1a1a] hover:bg-[#f5f5f7]"
                >
                  Zurück
                </button>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 rounded-lg bg-[#e94560] px-4 py-3 text-sm font-semibold text-white hover:bg-[#c81e45]"
                >
                  Weiter zu Zahlung
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {currentStep === 2 && (
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
              <h2 className="text-xl font-bold text-[#1a1a1a]">Zahlungsart</h2>
              <div className="mt-6 space-y-3">
                {[
                  { id: "kreditkarte", label: "Kreditkarte", description: "Visa, Mastercard, American Express", icon: "💳" },
                  { id: "paypal", label: "PayPal", description: "Bezahlen mit Ihrem PayPal-Konto", icon: "🅿️" },
                  { id: "sepa", label: "SEPA-Lastschrift", description: "Direkt von Ihrem Bankkonto", icon: "🏦" },
                  { id: "rechnung", label: "Rechnung (Klarna)", description: "Jetzt kaufen, in 30 Tagen bezahlen", icon: "📄" },
                ].map((option) => (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-colors ${
                      paymentMethod === option.id ? "border-[#e94560] bg-red-50/30" : "border-[#e5e7eb] hover:border-[#6b7280]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={option.id}
                      checked={paymentMethod === option.id}
                      onChange={() => setPaymentMethod(option.id)}
                      className="h-4 w-4 accent-[#e94560]"
                    />
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#1a1a1a]">{option.label}</p>
                      <p className="text-xs text-[#6b7280]">{option.description}</p>
                    </div>
                  </label>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 rounded-lg border border-[#e5e7eb] px-4 py-3 text-sm font-semibold text-[#1a1a1a] hover:bg-[#f5f5f7]"
                >
                  Zurück
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="flex-1 rounded-lg bg-[#e94560] px-4 py-3 text-sm font-semibold text-white hover:bg-[#c81e45]"
                >
                  Weiter zur Bestätigung
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
                <h2 className="text-xl font-bold text-[#1a1a1a]">Bestellung prüfen</h2>

                {/* Cart items summary */}
                <div className="mt-6 space-y-3">
                  {items.map((item) => (
                    <div key={item.variantId} className="flex items-center justify-between border-b border-[#e5e7eb] pb-3 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                          <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#1a1a1a]">{item.name}</p>
                          <p className="text-xs text-[#6b7280]">Menge: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                {/* Shipping & Payment summary */}
                <div className="mt-6 grid gap-4 rounded-lg bg-[#f5f5f7] p-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-[#6b7280]">Versandart</p>
                    <p className="mt-1 text-sm font-medium text-[#1a1a1a]">
                      {shippingMethod === "standard" ? "DHL Standard" : shippingMethod === "express" ? "DHL Express" : shippingMethod === "palette" ? "Palettenversand" : "Abholung vor Ort"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-[#6b7280]">Zahlungsart</p>
                    <p className="mt-1 text-sm font-medium text-[#1a1a1a]">
                      {paymentMethod === "kreditkarte" ? "Kreditkarte" : paymentMethod === "paypal" ? "PayPal" : paymentMethod === "sepa" ? "SEPA-Lastschrift" : "Rechnung (Klarna)"}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-[#e5e7eb] p-4">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#e94560]" />
                    <span className="text-xs text-[#6b7280]">
                      Ich habe die <a href="#" className="text-[#e94560] underline">AGB</a> und die{" "}
                      <a href="#" className="text-[#e94560] underline">Widerrufsbelehrung</a> gelesen und akzeptiere diese. *
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 rounded-lg border border-[#e5e7eb] bg-white px-4 py-3 text-sm font-semibold text-[#1a1a1a] hover:bg-[#f5f5f7]"
                >
                  Zurück
                </button>
                <button
                  className="flex-1 rounded-lg bg-[#e94560] px-4 py-4 text-base font-bold text-white hover:bg-[#c81e45]"
                >
                  Kostenpflichtig bestellen
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order summary sidebar */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 rounded-xl border border-[#e5e7eb] bg-white p-6">
            <h2 className="text-lg font-semibold text-[#1a1a1a]">Bestellübersicht</h2>

            {/* Compact item list */}
            <div className="mt-4 space-y-2">
              {items.map((item) => (
                <div key={item.variantId} className="flex justify-between text-sm">
                  <span className="truncate text-[#6b7280]">
                    {item.quantity}x {item.name}
                  </span>
                  <span className="ml-2 flex-shrink-0">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <hr className="my-4 border-[#e5e7eb]" />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#6b7280]">Zwischensumme ({itemCount} Artikel)</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#6b7280]">Versand</span>
                <span>{shippingCost === 0 ? <span className="text-[#0f9d58]">Kostenlos</span> : formatPrice(shippingCost)}</span>
              </div>
              <hr className="border-[#e5e7eb]" />
              <div className="flex justify-between text-lg font-bold">
                <span>Gesamt</span>
                <span>{formatPrice(total)}</span>
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
    </>
  )
}
