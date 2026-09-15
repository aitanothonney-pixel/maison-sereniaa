'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface CartItem {
  id: string
  name: string
  price: number
  size: string
  color: string
  quantity: number
  image: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, size: string, color: string) => void
  updateQuantity: (id: string, size: string, color: string, quantity: number) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Charger le panier depuis localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('tempered-cart')
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  // Sauvegarder le panier dans localStorage
  useEffect(() => {
    localStorage.setItem('tempered-cart', JSON.stringify(items))
  }, [items])

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
      )
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      }
      return [...prev, newItem]
    })
  }

  const removeItem = (id: string, size: string, color: string) => {
    setItems((prev) => prev.filter((item) => !(item.id === id && item.size === size && item.color === color)))
  }

  const updateQuantity = (id: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, size, color)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size && item.color === color ? { ...item, quantity } : item
      )
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
