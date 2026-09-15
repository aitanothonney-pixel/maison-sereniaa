'use client'

import Link from 'next/link'
import { products } from '@/lib/products'

export default function DropTabs() {
  return (
    <section className="pt-14 sm:pt-20">
      <div className="px-5 lg:px-8 border-b border-line pb-8 mb-8">
        <h2 className="display text-2xl sm:text-3xl">Pièces en vente</h2>
      </div>

      {/* Grille de produits */}
      <div className="px-5 lg:px-8">
        {products.length === 0 ? (
          <p className="text-muted text-[13px] py-16">Aucune pièce disponible.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="group"
              >
                <div className="relative bg-surface overflow-hidden mb-4 aspect-square">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.stock < 10 && (
                    <div className="absolute top-3 left-3 bg-foreground text-background text-xs px-2 py-1">
                      Plus que {product.stock}
                    </div>
                  )}
                </div>
                <h3 className="ui-label text-sm mb-2 group-hover:opacity-60 transition-opacity">{product.name}</h3>
                <div className="flex justify-between items-baseline">
                  <p className="text-sm font-bold">{product.price} CHF</p>
                  <p className="text-xs text-muted">{product.colors.length} couleurs</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
