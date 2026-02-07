"use client"

import Link from "next/link"
import { useCartContext } from "@/components/providers/CartProvider"
import { formatPrice } from "@/lib/utils"

export default function WarenkorbPage() {
  const { items, itemCount, subtotal, removeItem, updateQuantity } = useCartContext()
  const isEmpty = items.length === 0
  const shippingThreshold = 14900
  const freeShipping = subtotal >= shippingThreshold
  const shippingCost = freeShipping ? 0 : 690
  const total = subtotal + shippingCost

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

        <h1 className="text-3xl font-bold text-[#1a1a1a]">
          Warenkorb {!isEmpty && <span className="text-lg font-normal text-[#6b7280]">({itemCount} {itemCount === 1 ? "Artikel" : "Artikel"})</span>}
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Cart items */}
          <div className="lg:col-span-2">
            {isEmpty ? (
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
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.variantId}
                    className="flex gap-4 rounded-xl border border-[#e5e7eb] bg-white p-4 sm:p-6"
                  >
                    {/* Image placeholder */}
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-gray-100 sm:h-24 sm:w-24">
                      <svg
                        className="h-8 w-8 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                        />
                      </svg>
                    </div>

                    {/* Item details */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-[#6b7280]">
                          {item.brand}
                        </p>
                        <h3 className="mt-0.5 text-sm font-semibold text-[#1a1a1a] sm:text-base">
                          {item.name}
                        </h3>
                        {item.sku && (
                          <p className="mt-0.5 font-mono text-xs text-[#6b7280]">
                            Art.-Nr.: {item.sku}
                          </p>
                        )}
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        {/* Quantity controls */}
                        <div className="flex items-center rounded-lg border border-[#e5e7eb]">
                          <button
                            type="button"
                            onClick={() => {
                              if (item.quantity <= 1) {
                                removeItem(item.variantId)
                              } else {
                                updateQuantity(item.variantId, item.quantity - 1)
                              }
                            }}
                            className="flex h-8 w-8 items-center justify-center text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
                            aria-label="Menge verringern"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="flex h-8 w-10 items-center justify-center text-sm font-medium text-[#1a1a1a]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
                            aria-label="Menge erhöhen"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>

                        {/* Price + remove */}
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-bold text-[#1a1a1a]">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.variantId)}
                            className="text-[#6b7280] transition-colors hover:text-[#e94560]"
                            aria-label={`${item.name} entfernen`}
                          >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Continue shopping */}
                <div className="pt-2">
                  <Link
                    href="/produkte"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#e94560] hover:underline"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Weiter einkaufen
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-[#e5e7eb] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#1a1a1a]">
                Bestellübersicht
              </h2>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b7280]">Zwischensumme</span>
                  <span className="text-[#1a1a1a]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b7280]">Versand</span>
                  {isEmpty ? (
                    <span className="text-[#6b7280]">wird berechnet</span>
                  ) : freeShipping ? (
                    <span className="font-medium text-[#0f9d58]">Kostenlos</span>
                  ) : (
                    <span className="text-[#1a1a1a]">{formatPrice(shippingCost)}</span>
                  )}
                </div>
                {!isEmpty && !freeShipping && (
                  <p className="text-xs text-[#0f9d58]">
                    Noch {formatPrice(shippingThreshold - subtotal)} bis zum kostenlosen Versand
                  </p>
                )}
                <hr className="border-[#e5e7eb]" />
                <div className="flex justify-between font-semibold">
                  <span>Gesamt</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <p className="text-xs text-[#6b7280]">inkl. 19% MwSt.</p>
              </div>
              <Link
                href={isEmpty ? "#" : "/checkout"}
                className={`mt-6 block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
                  isEmpty
                    ? "pointer-events-none bg-[#e5e7eb] text-[#6b7280]"
                    : "bg-[#e94560] text-white hover:bg-[#c81e45]"
                }`}
                aria-disabled={isEmpty}
              >
                Zur Kasse
              </Link>
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
