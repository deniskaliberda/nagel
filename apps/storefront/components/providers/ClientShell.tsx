"use client"

import { type ReactNode } from "react"
import { CartProvider, useCartContext } from "./CartProvider"
import { CartDrawer } from "@/components/checkout/CartDrawer"

function CartDrawerConnected() {
  const { items, isOpen, closeCart, updateQuantity, removeItem } = useCartContext()

  const drawerItems = items.map((item) => ({
    id: item.variantId,
    title: item.name,
    brand: item.brand,
    price: item.price,
    quantity: item.quantity,
    thumbnail: item.image,
    sku: item.sku,
  }))

  return (
    <CartDrawer
      isOpen={isOpen}
      onClose={closeCart}
      items={drawerItems}
      onUpdateQuantity={(id, qty) => updateQuantity(id, qty)}
      onRemoveItem={(id) => removeItem(id)}
    />
  )
}

export function ClientShell({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawerConnected />
    </CartProvider>
  )
}
