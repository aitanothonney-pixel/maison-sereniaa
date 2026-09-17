'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart, cartItemKey } from '@/lib/cart-context'
import { VARIANT_LABELS } from '@/lib/products'
import { IconBag } from '@/components/Icons'

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
        <IconBag />
        {items.length > 0 && (
          <span className="absolute -top-1.5 -right-2 bg-foreground text-background text-[10px] leading-none w-[17px] h-[17px] rounded-full flex items-center justify-center font-bold">
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
            items.map((item) => {
              const key = cartItemKey(item)
              return (
              <div key={key} className="border-b border-line pb-6">
                <div className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 bg-surface object-cover" />
                  <div className="flex-1">
                    <p className="ui-label text-sm">{item.name}</p>
                    <p className="text-xs text-muted mt-1">
                      {VARIANT_LABELS[item.variant]} · {item.color}
                    </p>
                    <p className="text-xs text-muted">
                      {[
                        item.hoodieSize && `Pull: ${item.hoodieSize}`,
                        item.pantsSize && `Jogging: ${item.pantsSize}`,
                      ]
                        .filter(Boolean)
                        .join(' / ')}
                    </p>
                    <p className="text-sm font-bold mt-2">{item.price * item.quantity} CHF</p>
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => updateQuantity(key, item.quantity - 1)}
                        className="w-6 h-6 border border-line flex items-center justify-center text-xs hover:bg-surface"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(key, item.quantity + 1)}
                        className="w-6 h-6 border border-line flex items-center justify-center text-xs hover:bg-surface"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(key)}
                        className="ml-auto text-xs text-muted hover:text-foreground"
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              )
            })
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
