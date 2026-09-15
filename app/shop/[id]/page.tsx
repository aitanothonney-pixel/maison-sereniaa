'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { Metadata } from 'next'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import { getProduct } from '@/lib/products'
import { useCart } from '@/lib/cart-context'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)
  const router = useRouter()
  const { addItem } = useCart()

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '')
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [imageIndex, setImageIndex] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <>
        <Marquee />
        <SiteHeader />
        <main className="px-5 lg:px-8 py-12 text-center">
          <p>Produit non trouvé</p>
          <Link href="/shop" className="ui-label mt-6 inline-block hover:opacity-60">
            Retour à la boutique
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Sélectionnez une taille')
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity,
      image: product.images[0],
    })

    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12">
        <Link href="/shop" className="ui-label text-muted hover:text-foreground mb-8 inline-block">
          ← Retour
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Galerie */}
          <div className="space-y-4">
            <div className="bg-surface aspect-square overflow-hidden">
              <img
                src={product.images[imageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImageIndex(i)}
                    className={`w-16 h-16 bg-surface border-2 ${i === imageIndex ? 'border-foreground' : 'border-line'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Infos */}
          <div className="space-y-8">
            <div>
              <h1 className="display text-4xl sm:text-5xl mb-4">{product.name}</h1>
              <p className="text-2xl font-bold">{product.price} CHF</p>
              {product.stock < 10 && (
                <p className="text-sm text-muted mt-2">Plus que {product.stock} en stock</p>
              )}
            </div>

            <p className="text-sm leading-relaxed">{product.description}</p>

            {/* Couleurs */}
            <div>
              <p className="ui-label mb-3">COULEUR</p>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 text-sm ${
                      selectedColor === color
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-line hover:border-foreground'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Tailles */}
            <div>
              <p className="ui-label mb-3">TAILLE</p>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border text-sm font-bold ${
                      selectedSize === size
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-line hover:border-foreground'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Link href="/tailles" className="text-xs text-muted hover:text-foreground mt-2 inline-block">
                Guide des tailles →
              </Link>
            </div>

            {/* Quantité */}
            <div>
              <p className="ui-label mb-3">QUANTITÉ</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-line flex items-center justify-center hover:bg-surface"
                >
                  −
                </button>
                <span className="w-8 text-center text-lg font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-line flex items-center justify-center hover:bg-surface"
                >
                  +
                </button>
              </div>
            </div>

            {/* Bouton ajouter */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-center ui-label transition-all ${
                added
                  ? 'bg-foreground text-background'
                  : 'bg-foreground text-background hover:opacity-80'
              }`}
            >
              {added ? '✓ AJOUTÉ AU PANIER' : 'AJOUTER AU PANIER'}
            </button>

            {/* Détails */}
            <div className="border-t border-line pt-8 space-y-4 text-sm">
              <div>
                <p className="ui-label mb-2">MATIÈRE</p>
                <p className="text-muted">{product.material}</p>
              </div>
              <div>
                <p className="ui-label mb-2">ENTRETIEN</p>
                <p className="text-muted">{product.care}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Produits connexes */}
        <div className="mt-20 pt-12 border-t border-line">
          <h2 className="display text-2xl mb-8">VOIR AUSSI</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* À remplir avec d'autres produits */}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
