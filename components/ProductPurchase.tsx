'use client'

import { useState } from 'react'
import { Product, formatPrice } from '@/lib/products'

export default function ProductPurchase({ product }: { product: Product }) {
  const [size, setSize] = useState<string | null>(
    product.sizes.length === 1 ? product.sizes[0] : null
  )
  const [color, setColor] = useState(product.colors[0]?.name ?? '')
  const [added, setAdded] = useState(false)

  const singleSize = product.sizes.length === 1

  const handleAdd = () => {
    if (!size) return
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2500)
  }

  return (
    <div>
      {/* Couleur */}
      {product.colors.length > 0 && (
        <div className="mb-8">
          <div className="flex items-baseline justify-between mb-3">
            <p className="label">Couleur</p>
            <p className="text-[12px] text-muted">{color}</p>
          </div>
          <div className="flex items-center gap-2.5">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                aria-label={c.name}
                aria-pressed={color === c.name}
                className={`w-7 h-7 rounded-full border transition-all ${
                  color === c.name
                    ? 'border-foreground ring-1 ring-foreground ring-offset-2'
                    : 'border-line hover:border-subtle'
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Taille */}
      <div className="mb-8">
        <div className="flex items-baseline justify-between mb-3">
          <p className="label">Taille</p>
          {!singleSize && <p className="label">Guide des tailles</p>}
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              aria-pressed={size === s}
              className={`min-w-[52px] px-3 h-10 text-[12px] border transition-colors ${
                size === s
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-line hover:border-foreground'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleAdd}
        disabled={!size}
        className="w-full h-12 text-[12px] tracking-[0.12em] uppercase border border-foreground bg-foreground text-background transition-colors hover:bg-background hover:text-foreground disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:bg-foreground disabled:hover:text-background"
      >
        {added ? 'Ajouté au panier' : `Ajouter — ${formatPrice(product.price)}`}
      </button>

      {!size && (
        <p className="text-[11px] text-muted mt-3" role="status">
          Choisissez une taille pour continuer.
        </p>
      )}
    </div>
  )
}
