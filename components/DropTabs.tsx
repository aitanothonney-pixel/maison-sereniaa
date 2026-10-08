'use client'

import Link from 'next/link'
import Image from 'next/image'
import { products, fromPrice } from '@/lib/products'

export default function DropTabs() {
  return (
    <section className="pt-20 sm:pt-28">
      <div className="px-5 lg:px-8 pb-20 mb-16">
        <h2 className="display text-3xl sm:text-4xl md:text-5xl">Pièces en vente</h2>
      </div>

      {/* Grille de produits */}
      <div className="px-5 lg:px-8">
        {products.length === 0 ? (
          <p className="text-muted text-[13px] py-16">Aucune pièce disponible.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="group"
              >
                <div className="relative bg-surface overflow-hidden mb-6 aspect-[4/5]">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                    quality={100}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.stock < 10 && (
                    <div className="absolute top-4 left-4 bg-foreground text-background text-xs px-3 py-1.5 tracking-wider">
                      PLUS QUE {product.stock}
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <h3 className="text-base tracking-wider font-medium" style={{ fontFamily: 'var(--font-nav)' }}>
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-baseline gap-4">
                    <p className="text-lg font-bold">{fromPrice(product)} CHF</p>
                    <p className="text-xs text-muted tracking-wide">{product.color.toUpperCase()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
