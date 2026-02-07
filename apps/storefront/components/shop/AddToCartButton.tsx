"use client"

import { useState } from "react"
import { useCartContext } from "@/components/providers/CartProvider"

interface AddToCartButtonProps {
  productId: string
  variantId: string
  name: string
  brand: string
  price: number
  compareAtPrice?: number
  sku: string
  image?: string
  disabled?: boolean
}

export function AddToCartButton({
  productId,
  variantId,
  name,
  brand,
  price,
  compareAtPrice,
  sku,
  image,
  disabled = false,
}: AddToCartButtonProps) {
  const { addItem } = useCartContext()
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(
      {
        id: variantId,
        productId,
        variantId,
        name,
        brand,
        price,
        compareAtPrice,
        sku,
        image,
      },
      quantity
    )
    setTimeout(() => setIsAdding(false), 600)
  }

  return (
    <div className="flex gap-3">
      {/* Quantity selector */}
      <div className="flex h-12 items-center rounded-lg border border-border">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="flex h-12 w-12 items-center justify-center text-text-muted transition-colors hover:text-primary"
          aria-label="Menge verringern"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
          </svg>
        </button>
        <span className="flex h-12 w-10 items-center justify-center border-x border-border text-sm font-medium">
          {quantity}
        </span>
        <button
          type="button"
          onClick={() => setQuantity((q) => q + 1)}
          className="flex h-12 w-12 items-center justify-center text-text-muted transition-colors hover:text-primary"
          aria-label="Menge erhöhen"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Add to cart button */}
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={disabled || isAdding}
        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-base font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {isAdding ? (
          <>
            <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Hinzugefügt!
          </>
        ) : (
          <>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            In den Warenkorb
          </>
        )}
      </button>
    </div>
  )
}
