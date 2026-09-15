'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'

export default function CartSlideOver() {
  const [open, setOpen] = useState(false)
  const { items, removeItem, updateQuantity, total } = useCart()

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative hover:opacity-60 transition-opacity"
        aria-label="Panier"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[22px] h-[22px]">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-foreground text-background text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {items.length}
          </span>
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-over */}
      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-background border-l border-line z-50 transform transition-transform duration-300 flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 lg:p-8 border-b border-line">
          <h2 className="display text-xl">PANIER</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-foreground hover:opacity-60 transition-opacity"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 lg:p-8 space-y-6">
          {items.length === 0 ? (
            <p className="text-muted text-sm">Votre panier est vide</p>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.hoodieSizeSize}-${item.pantsSizeSize}-${item.color}`} className="border-b border-line pb-6">
                <div className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 bg-surface object-cover" />
                  <div className="flex-1">
                    <p className="ui-label text-sm">{item.name}</p>
                    <p className="text-xs text-muted mt-1">
                      {item.color}
                    </p>
                    <p className="text-xs text-muted">
                      Hoodie: {item.hoodieSizeSize} / Pantalon: {item.pantsSizeSize}
                    </p>
                    <p className="text-sm font-bold mt-2">{item.price * item.quantity} CHF</p>
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.hoodieSizeSize, item.pantsSizeSize, item.color, item.quantity - 1)}
                        className="w-6 h-6 border border-line flex items-center justify-center text-xs hover:bg-surface"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.hoodieSizeSize, item.pantsSizeSize, item.color, item.quantity + 1)}
                        className="w-6 h-6 border border-line flex items-center justify-center text-xs hover:bg-surface"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.hoodieSizeSize, item.pantsSizeSize, item.color)}
                        className="ml-auto text-xs text-muted hover:text-foreground"
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-line p-5 lg:p-8 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Sous-total</span>
              <span className="font-bold">{total} CHF</span>
            </div>
            <p className="text-xs text-muted">Livraison calculée au checkout</p>
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="block w-full bg-foreground text-background py-3 text-center ui-label hover:opacity-80 transition-opacity"
            >
              PROCÉDER AU PAIEMENT
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="w-full border border-line py-3 text-center ui-label hover:bg-surface transition-colors"
            >
              CONTINUER LES ACHATS
            </button>
          </div>
        )}
      </div>
    </>
  )
}
