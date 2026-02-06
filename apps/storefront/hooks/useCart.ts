"use client"

import { useState, useCallback, useEffect } from "react"

export interface CartItem {
  id: string
  productId: string
  variantId: string
  name: string
  brand: string
  image?: string
  price: number // cents
  compareAtPrice?: number
  quantity: number
  sku: string
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

const CART_STORAGE_KEY = "nagel-paul-cart"

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Storage full or unavailable
  }
}

export function useCart() {
  const [state, setState] = useState<CartState>({
    items: [],
    isOpen: false,
  })

  useEffect(() => {
    setState((prev) => ({ ...prev, items: loadCart() }))
  }, [])

  const addItem = useCallback((item: Omit<CartItem, "quantity">, quantity = 1) => {
    setState((prev) => {
      const existing = prev.items.find(
        (i) => i.variantId === item.variantId
      )
      const newItems = existing
        ? prev.items.map((i) =>
            i.variantId === item.variantId
              ? { ...i, quantity: i.quantity + quantity }
              : i
          )
        : [...prev.items, { ...item, quantity }]
      saveCart(newItems)
      return { items: newItems, isOpen: true }
    })
  }, [])

  const removeItem = useCallback((variantId: string) => {
    setState((prev) => {
      const newItems = prev.items.filter((i) => i.variantId !== variantId)
      saveCart(newItems)
      return { ...prev, items: newItems }
    })
  }, [])

  const updateQuantity = useCallback((variantId: string, quantity: number) => {
    if (quantity < 1) return
    setState((prev) => {
      const newItems = prev.items.map((i) =>
        i.variantId === variantId ? { ...i, quantity } : i
      )
      saveCart(newItems)
      return { ...prev, items: newItems }
    })
  }, [])

  const clearCart = useCallback(() => {
    setState((prev) => {
      saveCart([])
      return { ...prev, items: [] }
    })
  }, [])

  const openCart = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: true }))
  }, [])

  const closeCart = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }))
  }, [])

  const toggleCart = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen }))
  }, [])

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return {
    items: state.items,
    isOpen: state.isOpen,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
  }
}
