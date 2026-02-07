"use client"

import Link from "next/link"
import { useCartContext } from "@/components/providers/CartProvider"

function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(priceInCents / 100)
}

export function WarenkorbContent() {
  const { items, itemCount, subtotal, updateQuantity, removeItem, clearCart } = useCartContext()

  const hasItems = items.length > 0

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

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#1a1a1a]">
            Warenkorb {hasItems && <span className="text-lg font-normal text-[#6b7280]">({itemCount} Artikel)</span>}
          </h1>
          {hasItems && (
            <button
              onClick={clearCart}
              className="text-sm text-[#6b7280] hover:text-[#e94560] transition-colors"
            >
              Warenkorb leeren
            </button>
          )}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Cart items */}
          <div className="lg:col-span-2">
            {!hasItems ? (
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
                    {/* Thumbnail */}
                    <div className="h-24 w-24 flex-shrink-0 rounded-lg bg-gray-50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="h-10 w-10 text-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>
                    </div>

                    {/* Details */}
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-[#6b7280]">{item.brand}</p>
                          <h3 className="mt-0.5 text-sm font-semibold text-[#1a1a1a] sm:text-base">{item.name}</h3>
                          <p className="mt-0.5 font-mono text-xs text-[#6b7280]">Art.-Nr.: {item.sku}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.variantId)}
                          className="ml-4 rounded-md p-1.5 text-[#6b7280] transition-colors hover:bg-red-50 hover:text-[#e94560]"
                          aria-label={`${item.name} entfernen`}
                        >
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-3">
                        {/* Quantity controls */}
                        <div className="flex items-center rounded-lg border border-[#e5e7eb]">
                          <button
                            onClick={() => updateQuantity(item.variantId, Math.max(1, item.quantity - 1))}
                            className="flex h-9 w-9 items-center justify-center text-sm text-[#6b7280] hover:bg-gray-50 hover:text-[#1a1a1a] transition-colors rounded-l-lg"
                            aria-label="Menge verringern"
                          >
                            -
                          </button>
                          <span className="flex h-9 w-12 items-center justify-center border-x border-[#e5e7eb] text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                            className="flex h-9 w-9 items-center justify-center text-sm text-[#6b7280] hover:bg-gray-50 hover:text-[#1a1a1a] transition-colors rounded-r-lg"
                            aria-label="Menge erhoehen"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-base font-bold text-[#1a1a1a]">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-[#6b7280]">
                              {formatPrice(item.price)} / Stk.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-[#e5e7eb] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#1a1a1a]">
                Bestelluebersicht
              </h2>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b7280]">Zwischensumme</span>
                  <span className="text-[#1a1a1a]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b7280]">Versand</span>
                  <span className="text-[#6b7280]">{hasItems ? "ab 5,90 \u20AC" : "wird berechnet"}</span>
                </div>
                <hr className="border-[#e5e7eb]" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Gesamt</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-[#6b7280]">inkl. 19% MwSt.</p>
              </div>
              <Link
                href={hasItems ? "/checkout" : "#"}
                className={`mt-6 block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
                  hasItems
                    ? "bg-[#e94560] text-white hover:bg-[#c81e45]"
                    : "bg-[#e5e7eb] text-[#6b7280] cursor-not-allowed pointer-events-none"
                }`}
              >
                Zur Kasse
              </Link>
              {hasItems && (
                <Link
                  href="/produkte"
                  className="mt-3 block w-full py-2 text-center text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
                >
                  Weiter einkaufen
                </Link>
              )}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#6b7280]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Sichere Zahlung mit SSL-Verschluesselung
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
