"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"

interface CartItem {
  id: string
  title: string
  brand: string
  price: number
  quantity: number
  thumbnail?: string
  sku: string
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemoveItem: (id: string) => void
}

function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(priceInCents / 100)
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, handleKeyDown])

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="absolute bottom-0 right-0 top-0 w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#e5e7eb] px-4 py-4">
            <h2 className="text-lg font-semibold text-[#1a1a1a]">
              Warenkorb ({items.length})
            </h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-[#6b7280] transition-colors hover:bg-gray-100 hover:text-[#1a1a1a]"
              aria-label="Warenkorb schließen"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <svg className="mb-4 h-16 w-16 text-[#e5e7eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-[#6b7280]">Ihr Warenkorb ist leer</p>
                <button
                  onClick={onClose}
                  className="mt-4 text-sm font-medium text-[#e94560] hover:underline"
                >
                  Weiter einkaufen
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-4 rounded-lg border border-[#e5e7eb] p-3"
                  >
                    {/* Thumbnail */}
                    <div className="h-20 w-20 flex-shrink-0 rounded-md bg-gray-100" />

                    {/* Details */}
                    <div className="flex flex-1 flex-col">
                      <p className="text-xs text-[#6b7280]">{item.brand}</p>
                      <p className="text-sm font-medium text-[#1a1a1a]">
                        {item.title}
                      </p>
                      <p className="mt-0.5 font-mono text-xs text-[#6b7280]">
                        Art.-Nr.: {item.sku}
                      </p>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            className="flex h-7 w-7 items-center justify-center rounded border border-[#e5e7eb] text-sm hover:bg-gray-50"
                            aria-label="Menge verringern"
                          >
                            -
                          </button>
                          <span className="min-w-[2ch] text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded border border-[#e5e7eb] text-sm hover:bg-gray-50"
                            aria-label="Menge erhöhen"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[#6b7280] transition-colors hover:text-[#e94560]"
                            aria-label={`${item.title} entfernen`}
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-[#e5e7eb] px-4 py-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">
                  Zwischensumme (inkl. MwSt.)
                </span>
                <span className="text-lg font-bold text-[#1a1a1a]">
                  {formatPrice(total)}
                </span>
              </div>
              <Link
                href="/checkout"
                onClick={onClose}
                className="block w-full rounded-lg bg-[#e94560] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]"
              >
                Zur Kasse
              </Link>
              <button
                onClick={onClose}
                className="mt-2 block w-full py-2 text-center text-sm text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
              >
                Weiter einkaufen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
