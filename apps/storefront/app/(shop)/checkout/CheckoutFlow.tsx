"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { useCartContext } from "@/components/providers/CartProvider"

function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(priceInCents / 100)
}

const CHECKOUT_STEPS = [
  { label: "Adresse", description: "Liefer- und Rechnungsadresse" },
  { label: "Versand", description: "Versandart wählen" },
  { label: "Zahlung", description: "Zahlungsart wählen" },
  { label: "Bestätigung", description: "Bestellung prüfen" },
]

const SHIPPING_OPTIONS = [
  { id: "standard", label: "DHL Standard", price: 590, time: "3-5 Werktage" },
  { id: "express", label: "DHL Express", price: 1290, time: "1-2 Werktage" },
  { id: "pickup", label: "Abholung in München", price: 0, time: "Sofort" },
]

const PAYMENT_METHODS = [
  { id: "card", label: "Kreditkarte", icon: "💳" },
  { id: "paypal", label: "PayPal", icon: "🅿️" },
  { id: "sepa", label: "SEPA-Lastschrift", icon: "🏦" },
  { id: "invoice", label: "Rechnung (Klarna)", icon: "📄" },
]

interface AddressData {
  firstName: string
  lastName: string
  company: string
  street: string
  zip: string
  city: string
  email: string
  phone: string
}

const inputClass =
  "w-full rounded-lg border border-[#e5e7eb] px-3 py-2.5 text-sm focus:border-[#e94560] focus:outline-none focus:ring-1 focus:ring-[#e94560]"

export function CheckoutFlow() {
  const { items, subtotal } = useCartContext()
  const [currentStep, setCurrentStep] = useState(0)
  const [address, setAddress] = useState<AddressData>({
    firstName: "",
    lastName: "",
    company: "",
    street: "",
    zip: "",
    city: "",
    email: "",
    phone: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof AddressData, string>>>({})
  const [selectedShipping, setSelectedShipping] = useState("standard")
  const [selectedPayment, setSelectedPayment] = useState("card")

  const shippingCost = SHIPPING_OPTIONS.find((o) => o.id === selectedShipping)?.price ?? 590
  const total = subtotal + shippingCost

  const validateAddress = (): boolean => {
    const newErrors: Partial<Record<keyof AddressData, string>> = {}
    if (!address.firstName.trim()) newErrors.firstName = "Bitte Vorname eingeben"
    if (!address.lastName.trim()) newErrors.lastName = "Bitte Nachname eingeben"
    if (!address.street.trim()) newErrors.street = "Bitte Strasse eingeben"
    if (!address.zip.trim()) newErrors.zip = "Bitte PLZ eingeben"
    if (!address.city.trim()) newErrors.city = "Bitte Ort eingeben"
    if (!address.email.trim()) newErrors.email = "Bitte E-Mail eingeben"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address.email)) newErrors.email = "Ungueltige E-Mail"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = (e: FormEvent) => {
    e.preventDefault()
    if (currentStep === 0 && !validateAddress()) return
    if (currentStep < 3) setCurrentStep((s) => s + 1)
  }

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1)
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link href="/" className="text-xl font-bold text-[#1a1a2e]">
            NAGEL PAUL
          </Link>
        </div>

        {/* Steps */}
        <nav aria-label="Checkout-Fortschritt" className="mb-10">
          <ol className="flex items-center justify-between">
            {CHECKOUT_STEPS.map((step, index) => {
              const isCompleted = index < currentStep
              const isCurrent = index === currentStep
              const isUpcoming = index > currentStep

              return (
                <li key={step.label} className="relative flex flex-1 flex-col items-center">
                  {index > 0 && (
                    <div className={`absolute left-0 right-1/2 top-4 h-0.5 -translate-y-1/2 ${isCompleted ? "bg-[#0f9d58]" : "bg-[#e5e7eb]"}`} />
                  )}
                  {index < CHECKOUT_STEPS.length - 1 && (
                    <div className={`absolute left-1/2 right-0 top-4 h-0.5 -translate-y-1/2 ${isCompleted ? "bg-[#0f9d58]" : "bg-[#e5e7eb]"}`} />
                  )}
                  <button
                    type="button"
                    onClick={() => { if (isCompleted) setCurrentStep(index) }}
                    className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                      isCompleted
                        ? "bg-[#0f9d58] text-white cursor-pointer"
                        : isCurrent
                          ? "border-2 border-[#e94560] bg-white text-[#e94560]"
                          : "border-2 border-[#e5e7eb] bg-white text-[#6b7280] cursor-default"
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
                  </button>
                  <span className={`mt-2 text-xs font-medium sm:text-sm ${isUpcoming ? "text-[#6b7280]" : "text-[#1a1a1a]"}`}>
                    {step.label}
                  </span>
                  {step.description && (
                    <span className="mt-0.5 hidden text-xs text-[#6b7280] md:block">{step.description}</span>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form area */}
          <div className="lg:col-span-3">
            <form onSubmit={handleNext}>
              {/* Step 0: Address */}
              {currentStep === 0 && (
                <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
                  <h1 className="text-xl font-bold text-[#1a1a1a]">Lieferadresse</h1>
                  <div className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-[#1a1a1a]">Vorname *</label>
                        <input id="firstName" type="text" value={address.firstName} onChange={(e) => setAddress((a) => ({ ...a, firstName: e.target.value }))} className={inputClass} />
                        {errors.firstName && <p className="mt-1 text-xs text-[#e94560]">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-[#1a1a1a]">Nachname *</label>
                        <input id="lastName" type="text" value={address.lastName} onChange={(e) => setAddress((a) => ({ ...a, lastName: e.target.value }))} className={inputClass} />
                        {errors.lastName && <p className="mt-1 text-xs text-[#e94560]">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-1 block text-sm font-medium text-[#1a1a1a]">Firma (optional)</label>
                      <input id="company" type="text" value={address.company} onChange={(e) => setAddress((a) => ({ ...a, company: e.target.value }))} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="street" className="mb-1 block text-sm font-medium text-[#1a1a1a]">Strasse und Hausnummer *</label>
                      <input id="street" type="text" value={address.street} onChange={(e) => setAddress((a) => ({ ...a, street: e.target.value }))} className={inputClass} />
                      {errors.street && <p className="mt-1 text-xs text-[#e94560]">{errors.street}</p>}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label htmlFor="zip" className="mb-1 block text-sm font-medium text-[#1a1a1a]">PLZ *</label>
                        <input id="zip" type="text" value={address.zip} onChange={(e) => setAddress((a) => ({ ...a, zip: e.target.value }))} className={inputClass} />
                        {errors.zip && <p className="mt-1 text-xs text-[#e94560]">{errors.zip}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="city" className="mb-1 block text-sm font-medium text-[#1a1a1a]">Ort *</label>
                        <input id="city" type="text" value={address.city} onChange={(e) => setAddress((a) => ({ ...a, city: e.target.value }))} className={inputClass} />
                        {errors.city && <p className="mt-1 text-xs text-[#e94560]">{errors.city}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#1a1a1a]">E-Mail *</label>
                      <input id="email" type="email" value={address.email} onChange={(e) => setAddress((a) => ({ ...a, email: e.target.value }))} className={inputClass} />
                      {errors.email && <p className="mt-1 text-xs text-[#e94560]">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#1a1a1a]">Telefon (optional)</label>
                      <input id="phone" type="tel" value={address.phone} onChange={(e) => setAddress((a) => ({ ...a, phone: e.target.value }))} className={inputClass} />
                    </div>
                  </div>
                  <button type="submit" className="mt-8 w-full rounded-lg bg-[#e94560] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]">
                    Weiter zu Versand
                  </button>
                </div>
              )}

              {/* Step 1: Shipping */}
              {currentStep === 1 && (
                <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
                  <h1 className="text-xl font-bold text-[#1a1a1a]">Versandart</h1>
                  <div className="mt-6 space-y-3">
                    {SHIPPING_OPTIONS.map((option) => (
                      <label
                        key={option.id}
                        className={`flex cursor-pointer items-center justify-between rounded-lg border-2 p-4 transition-colors ${
                          selectedShipping === option.id
                            ? "border-[#e94560] bg-red-50/30"
                            : "border-[#e5e7eb] hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="shipping"
                            value={option.id}
                            checked={selectedShipping === option.id}
                            onChange={() => setSelectedShipping(option.id)}
                            className="h-4 w-4 text-[#e94560] focus:ring-[#e94560]"
                          />
                          <div>
                            <p className="text-sm font-semibold text-[#1a1a1a]">{option.label}</p>
                            <p className="text-xs text-[#6b7280]">{option.time}</p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-[#1a1a1a]">
                          {option.price === 0 ? "Kostenlos" : formatPrice(option.price)}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={handleBack} className="flex-1 rounded-lg border border-[#e5e7eb] px-4 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-gray-50">
                      Zurueck
                    </button>
                    <button type="submit" className="flex-1 rounded-lg bg-[#e94560] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]">
                      Weiter zu Zahlung
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Payment */}
              {currentStep === 2 && (
                <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
                  <h1 className="text-xl font-bold text-[#1a1a1a]">Zahlungsart</h1>
                  <div className="mt-6 space-y-3">
                    {PAYMENT_METHODS.map((method) => (
                      <label
                        key={method.id}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 p-4 transition-colors ${
                          selectedPayment === method.id
                            ? "border-[#e94560] bg-red-50/30"
                            : "border-[#e5e7eb] hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={selectedPayment === method.id}
                          onChange={() => setSelectedPayment(method.id)}
                          className="h-4 w-4 text-[#e94560] focus:ring-[#e94560]"
                        />
                        <span className="text-xl">{method.icon}</span>
                        <span className="text-sm font-semibold text-[#1a1a1a]">{method.label}</span>
                      </label>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={handleBack} className="flex-1 rounded-lg border border-[#e5e7eb] px-4 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-gray-50">
                      Zurueck
                    </button>
                    <button type="submit" className="flex-1 rounded-lg bg-[#e94560] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]">
                      Bestellung pruefen
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
                    <h1 className="text-xl font-bold text-[#1a1a1a]">Bestellung pruefen</h1>

                    {/* Address summary */}
                    <div className="mt-6 rounded-lg bg-[#f5f5f7] p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-[#1a1a1a]">Lieferadresse</h3>
                        <button type="button" onClick={() => setCurrentStep(0)} className="text-xs font-medium text-[#e94560] hover:underline">Bearbeiten</button>
                      </div>
                      <p className="mt-2 text-sm text-[#6b7280]">
                        {address.firstName} {address.lastName}<br />
                        {address.company && <>{address.company}<br /></>}
                        {address.street}<br />
                        {address.zip} {address.city}
                      </p>
                    </div>

                    {/* Shipping summary */}
                    <div className="mt-4 rounded-lg bg-[#f5f5f7] p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-[#1a1a1a]">Versandart</h3>
                        <button type="button" onClick={() => setCurrentStep(1)} className="text-xs font-medium text-[#e94560] hover:underline">Bearbeiten</button>
                      </div>
                      <p className="mt-2 text-sm text-[#6b7280]">
                        {SHIPPING_OPTIONS.find((o) => o.id === selectedShipping)?.label} - {SHIPPING_OPTIONS.find((o) => o.id === selectedShipping)?.time}
                      </p>
                    </div>

                    {/* Payment summary */}
                    <div className="mt-4 rounded-lg bg-[#f5f5f7] p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-[#1a1a1a]">Zahlung</h3>
                        <button type="button" onClick={() => setCurrentStep(2)} className="text-xs font-medium text-[#e94560] hover:underline">Bearbeiten</button>
                      </div>
                      <p className="mt-2 text-sm text-[#6b7280]">
                        {PAYMENT_METHODS.find((m) => m.id === selectedPayment)?.label}
                      </p>
                    </div>

                    {/* Items */}
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-[#1a1a1a]">Artikel ({items.length})</h3>
                      <div className="mt-3 space-y-3">
                        {items.map((item) => (
                          <div key={item.variantId} className="flex items-center justify-between text-sm">
                            <div>
                              <p className="font-medium text-[#1a1a1a]">{item.name}</p>
                              <p className="text-xs text-[#6b7280]">Menge: {item.quantity}</p>
                            </div>
                            <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button type="button" onClick={handleBack} className="flex-1 rounded-lg border border-[#e5e7eb] bg-white px-4 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-gray-50">
                      Zurueck
                    </button>
                    <button type="button" className="flex-1 rounded-lg bg-[#0f9d58] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d8c4d]">
                      Kostenpflichtig bestellen
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-xl border border-[#e5e7eb] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#1a1a1a]">Bestelluebersicht</h2>
              {items.length === 0 ? (
                <p className="mt-4 text-sm text-[#6b7280]">Ihr Warenkorb ist leer.</p>
              ) : (
                <div className="mt-4 space-y-3">
                  {items.map((item) => (
                    <div key={item.variantId} className="flex items-center gap-3">
                      <div className="h-12 w-12 flex-shrink-0 rounded-md bg-gray-50 flex items-center justify-center">
                        <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-medium text-[#1a1a1a]">{item.name}</p>
                        <p className="text-xs text-[#6b7280]">{item.quantity}x {formatPrice(item.price)}</p>
                      </div>
                      <span className="text-sm font-semibold">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
              )}
              <hr className="my-4 border-[#e5e7eb]" />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b7280]">Zwischensumme</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b7280]">Versand</span>
                  <span>{shippingCost === 0 ? "Kostenlos" : formatPrice(shippingCost)}</span>
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
                SSL-verschluesselt
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
