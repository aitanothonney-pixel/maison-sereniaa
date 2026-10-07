'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Variant, Piece } from '@/lib/products'

export interface CartItem {
  id: string
  name: string
  price: number
  variant: Variant
  // Une taille par pièce commandée : deux pour un ensemble, une sinon.
  sizes: Partial<Record<Piece, string>>
  color: string
  quantity: number
  image: string
}

export function cartItemKey(item: CartItem): string {
  const sizes = Object.entries(item.sizes)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([piece, size]) => `${piece}:${size}`)
    .join(',')
  return [item.id, item.variant, sizes, item.color].join('|')
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (key: string) => void
  updateQuantity: (key: string, quantity: number) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('tempered-cart-v3')
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tempered-cart-v3', JSON.stringify(items))
  }, [items])

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const key = cartItemKey(newItem)
      if (prev.some((item) => cartItemKey(item) === key)) {
        return prev.map((item) =>
          cartItemKey(item) === key
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      }
      return [...prev, newItem]
    })
  }

  const removeItem = (key: string) => {
    setItems((prev) => prev.filter((item) => cartItemKey(item) !== key))
  }

  const updateQuantity = (key: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(key)
      return
    }
    setItems((prev) =>
      prev.map((item) => (cartItemKey(item) === key ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => setItems([])

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
