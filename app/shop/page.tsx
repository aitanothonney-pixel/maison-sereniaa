import Link from 'next/link'
import type { Metadata } from 'next'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Streetwear premium TEMPORED. Pièces limitées, coupes amples, matières lourdes.',
}

export default function ShopPage() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12">
        <h1 className="display text-[13vw] sm:text-[7vw] lg:text-[80px] mb-12">SHOP</h1>

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
              <h3 className="ui-label text-sm mb-2">{product.name}</h3>
              <div className="flex justify-between items-baseline">
                <p className="text-sm font-bold">{product.price} CHF</p>
                <p className="text-xs text-muted">{product.color}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
