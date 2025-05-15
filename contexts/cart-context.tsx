"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { products } from "@/data/products"

interface CartItem {
  id: number
  quantity: number
  size: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number, size: string) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartItems: () => Array<{
    product: typeof products[0]
    quantity: number
    size: string
  }>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (productId: number, size: string) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === productId)
      if (existingItem) {
        return currentItems.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...currentItems, { id: productId, quantity: 1, size }]
    })
  }

  const removeFromCart = (productId: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getCartTotal = () => {
    return items.reduce((total, item) => {
      const product = products.find(p => p.id === item.id)
      if (!product) return total
      const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ""))
      return total + price * item.quantity
    }, 0)
  }

  const getCartItems = () => {
    return items.map(item => {
      const product = products.find(p => p.id === item.id)
      if (!product) throw new Error("Product not found")
      return {
        product,
        quantity: item.quantity,
        size: item.size
      }
    })
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
} 