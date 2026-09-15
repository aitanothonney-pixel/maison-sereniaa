'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import { getProduct, products } from '@/lib/products'
import { useCart } from '@/lib/cart-context'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)
  const router = useRouter()
  const { addItem } = useCart()

  const [hoodieSize, setHoodieSize] = useState('')
  const [pantsSize, setPantsSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [imageIndex, setImageIndex] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <>
        <Marquee />
        <SiteHeader />
        <main className="px-5 lg:px-8 py-12 text-center min-h-screen flex items-center justify-center">
          <div className="max-w-md">
            <div className="animate-pulse mb-8">
              <div className="h-32 bg-surface rounded mb-4"></div>
              <div className="h-4 bg-surface rounded mb-2"></div>
              <div className="h-4 bg-surface rounded w-2/3 mx-auto"></div>
            </div>
            <p className="text-muted mb-4">Produit en cours de chargement...</p>
            <Link href="/shop" className="ui-label inline-block hover:opacity-60">
              ← Retour à la boutique
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handleAddToCart = () => {
    if (!hoodieSize || !pantsSize) {
      alert('Sélectionnez la taille du hoodie et du pantalon')
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      hoodieSizeSize: hoodieSize,
      pantsSizeSize: pantsSize,
      color: product.color,
      quantity,
      image: product.images[0],
    })

    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3)

  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12">
        <Link href="/shop" className="ui-label text-muted hover:text-foreground mb-8 inline-block transition-opacity">
          ← Retour à la boutique
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Galerie — Amélioration visuelle */}
          <div className="space-y-6">
            <div className="bg-surface aspect-square overflow-hidden group cursor-zoom-in">
              <img
                src={product.images[imageIndex]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImageIndex(i)}
                    className={`w-20 h-20 bg-surface border-2 overflow-hidden hover:opacity-80 transition-all ${
                      i === imageIndex ? 'border-foreground' : 'border-line'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Infos — Design amélioré */}
          <div className="space-y-8 flex flex-col justify-between">
            <div>
              <h1 className="display text-5xl sm:text-6xl mb-6 leading-tight">{product.name}</h1>
              <div className="flex items-baseline gap-4 mb-4">
                <p className="text-3xl font-bold">{product.price} CHF</p>
                {product.stock < 10 && product.stock > 0 && (
                  <p className="text-sm text-yellow-600 font-medium">Plus que {product.stock} en stock</p>
                )}
                {product.stock === 0 && (
                  <p className="text-sm text-red-600 font-medium">Épuisé</p>
                )}
              </div>
              <p className="text-sm leading-relaxed text-muted mb-2">{product.description}</p>
            </div>

            {/* Couleur */}
            <div>
              <p className="ui-label mb-4 text-xs tracking-widest">COULEUR</p>
              <div className="inline-block px-5 py-3 border-2 border-foreground bg-foreground text-background text-sm font-bold">
                {product.color}
              </div>
            </div>

            {/* Tailles Hoodie et Pantalon */}
            <div className="space-y-6">
              <div>
                <p className="ui-label mb-4 text-xs tracking-widest">TAILLE HOODIE</p>
                <div className="grid grid-cols-6 gap-2 mb-3">
                  {product.sizes.map((size) => (
                    <button
                      key={`hoodie-${size}`}
                      onClick={() => setHoodieSize(size)}
                      className={`py-3 border text-sm font-bold transition-all ${
                        hoodieSize === size
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-line hover:border-foreground'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="ui-label mb-4 text-xs tracking-widest">TAILLE PANTALON</p>
                <div className="grid grid-cols-6 gap-2 mb-3">
                  {product.sizes.map((size) => (
                    <button
                      key={`pants-${size}`}
                      onClick={() => setPantsSize(size)}
                      className={`py-3 border text-sm font-bold transition-all ${
                        pantsSize === size
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-line hover:border-foreground'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/tailles" className="text-xs text-muted hover:text-foreground transition-colors">
              Guide des tailles complet →
            </Link>

            {/* Quantité */}
            <div>
              <p className="ui-label mb-4 text-xs tracking-widest">QUANTITÉ</p>
              <div className="flex items-center gap-4 mb-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 border border-line flex items-center justify-center hover:bg-surface transition-colors text-lg font-bold"
                >
                  −
                </button>
                <span className="w-8 text-center text-xl font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 border border-line flex items-center justify-center hover:bg-surface transition-colors text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Bouton ajouter */}
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`w-full py-5 text-center ui-label font-bold tracking-widest transition-all ${
                added
                  ? 'bg-foreground text-background'
                  : product.stock === 0
                  ? 'bg-surface text-muted cursor-not-allowed'
                  : 'bg-foreground text-background hover:opacity-80'
              }`}
            >
              {added ? '✓ AJOUTÉ AU PANIER' : product.stock === 0 ? 'ÉPUISÉ' : 'AJOUTER AU PANIER'}
            </button>

            {/* Détails */}
            <div className="border-t border-line pt-8 space-y-6 text-sm">
              <div>
                <p className="ui-label mb-2 text-xs tracking-widest">COMPOSITION</p>
                <p className="text-muted leading-relaxed">{product.material}</p>
              </div>
              <div>
                <p className="ui-label mb-2 text-xs tracking-widest">ENTRETIEN</p>
                <p className="text-muted leading-relaxed">{product.care}</p>
              </div>
              <div>
                <p className="ui-label mb-2 text-xs tracking-widest">GARANTIE</p>
                <p className="text-muted leading-relaxed">Garantie à vie sur les défauts de fabrication. Réparations gratuites sur demande.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Produits connexes */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-line">
            <h2 className="display text-3xl mb-12">DÉCOUVRIR AUSSI</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/shop/${p.id}`} className="group">
                  <div className="relative bg-surface overflow-hidden mb-4 aspect-square">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="ui-label text-sm mb-2 group-hover:opacity-60 transition-opacity">{p.name}</h3>
                  <p className="text-sm font-bold">{p.price} CHF</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
