"use client"

import Link from "next/link"
import { useCartContext } from "@/components/providers/CartProvider"
import { formatPrice } from "@/lib/utils"

export function WarenkorbClient() {
  const { items, itemCount, subtotal, removeItem, updateQuantity } = useCartContext()

  if (items.length === 0) {
    return (
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
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
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
            <h2 className="text-lg font-semibold text-[#1a1a1a]">Bestellübersicht</h2>
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
            </div>
            <button disabled className="mt-6 w-full cursor-not-allowed rounded-lg bg-[#e5e7eb] px-4 py-3 text-sm font-semibold text-[#6b7280]">
              Zur Kasse
            </button>
          </div>
        </div>
      </div>
    )
  }

  const shipping = subtotal >= 10000 ? 0 : 690
  const total = subtotal + shipping

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-3">
      {/* Cart items */}
      <div className="lg:col-span-2 space-y-4">
        {items.map((item) => (
          <div
            key={item.variantId}
            className="flex gap-4 rounded-xl border border-[#e5e7eb] bg-white p-4 sm:p-6"
          >
            {/* Image placeholder */}
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-28 sm:w-28">
              <div className="flex h-full items-center justify-center">
                <svg className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[#6b7280]">{item.brand}</p>
                  <h3 className="mt-0.5 text-sm font-semibold text-[#1a1a1a] sm:text-base">{item.name}</h3>
                  <p className="mt-0.5 font-mono text-xs text-[#6b7280]">Art.-Nr.: {item.sku}</p>
                </div>
                <button
                  onClick={() => removeItem(item.variantId)}
                  className="flex-shrink-0 p-1 text-[#6b7280] hover:text-[#e94560]"
                  aria-label={`${item.name} entfernen`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>

              <div className="mt-auto flex items-end justify-between pt-3">
                {/* Quantity */}
                <div className="flex items-center rounded-lg border border-[#e5e7eb]">
                  <button
                    onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="px-3 py-1.5 text-sm text-[#6b7280] hover:text-[#1a1a1a] disabled:opacity-40"
                    aria-label="Menge verringern"
                  >
                    −
                  </button>
                  <span className="min-w-[2rem] text-center text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                    className="px-3 py-1.5 text-sm text-[#6b7280] hover:text-[#1a1a1a]"
                    aria-label="Menge erhöhen"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <div className="text-right">
                  <p className="text-lg font-bold text-[#1a1a1a]">{formatPrice(item.price * item.quantity)}</p>
                  {item.quantity > 1 && (
                    <p className="text-xs text-[#6b7280]">{formatPrice(item.price)} / Stk.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 rounded-xl border border-[#e5e7eb] bg-white p-6">
          <h2 className="text-lg font-semibold text-[#1a1a1a]">Bestellübersicht</h2>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#6b7280]">{itemCount} Artikel</span>
              <span className="text-[#1a1a1a]">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6b7280]">Versand</span>
              {shipping === 0 ? (
                <span className="font-medium text-[#0f9d58]">Kostenlos</span>
              ) : (
                <span className="text-[#1a1a1a]">{formatPrice(shipping)}</span>
              )}
            </div>
            {shipping > 0 && (
              <p className="text-xs text-[#0f9d58]">
                Noch {formatPrice(10000 - subtotal)} bis zum kostenlosen Versand
              </p>
            )}
            <hr className="border-[#e5e7eb]" />
            <div className="flex justify-between text-lg font-bold">
              <span>Gesamt</span>
              <span>{formatPrice(total)}</span>
            </div>
            <p className="text-xs text-[#6b7280]">inkl. 19% MwSt.</p>
          </div>
          <Link
            href="/checkout"
            className="mt-6 flex w-full items-center justify-center rounded-lg bg-[#e94560] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]"
          >
            Zur Kasse
          </Link>
          <Link
            href="/produkte"
            className="mt-3 flex w-full items-center justify-center rounded-lg border border-[#e5e7eb] px-4 py-3 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#f5f5f7]"
          >
            Weiter einkaufen
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
  )
}
