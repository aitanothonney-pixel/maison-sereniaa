'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import {
  getProduct,
  products,
  fromPrice,
  productVariants,
  VARIANT_LABELS,
  type Variant,
} from '@/lib/products'
import { useCart } from '@/lib/cart-context'

export default function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const product = getProduct(id)
  const { addItem } = useCart()

  const [variant, setVariant] = useState<Variant | null>(null)
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [imageIndex, setImageIndex] = useState(0)
  const [touchX, setTouchX] = useState<number | null>(null)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <>
        <Marquee />
        <SiteHeader />
        <main className="px-5 lg:px-8 py-12 text-center min-h-screen flex items-center justify-center">
          <div className="max-w-md">
            <h1 className="display text-3xl mb-4">PRODUIT INTROUVABLE</h1>
            <p className="text-muted mb-8">Ce produit n&apos;existe pas ou n&apos;est plus disponible.</p>
            <Link href="/shop" className="ui-label inline-block hover:opacity-60">
              ← Retour à la boutique
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const showImage = (step: number) =>
    setImageIndex((i) => (i + step + product.images.length) % product.images.length)

  const variants = productVariants(product)
  const selected = variant ?? variants[0]
  const price = product.prices[selected] ?? fromPrice(product)
  const sameCategory = products.filter((p) => p.category === product.category)

  const handleAddToCart = () => {
    if (!size) {
      alert('Sélectionnez une taille')
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price,
      variant: selected,
      size,
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

      <main className="px-5 lg:px-8 py-8 lg:py-12">
        <Link href="/shop" className="ui-label text-muted hover:text-foreground mb-8 inline-block py-2 -my-2 transition-opacity">
          ← RETOUR À LA BOUTIQUE
        </Link>

        {/* Grille principale — Thumbnails | Image principale | Infos */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8">
          {/* THUMBNAILS GAUCHE */}
          {product.images.length > 1 && (
            <div className="lg:col-span-1 flex lg:flex-col gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImageIndex(i)}
                  className={`relative aspect-square bg-surface overflow-hidden border-2 transition-all flex-1 lg:flex-none ${
                    i === imageIndex ? 'border-foreground' : 'border-transparent hover:border-line'
                  }`}
                >
                  <Image src={img} alt="" fill sizes="120px" unoptimized quality={100} className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* IMAGE PRINCIPALE CENTRE */}
          <div className={product.images.length > 1 ? "lg:col-span-2" : "lg:col-span-2"}>
            <div
              className="relative bg-surface aspect-[4/5] overflow-hidden touch-pan-y"
              onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchX === null) return
                const dx = e.changedTouches[0].clientX - touchX
                if (Math.abs(dx) > 40) showImage(dx < 0 ? 1 : -1)
                setTouchX(null)
              }}
            >
              <Image
                src={product.images[imageIndex]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                unoptimized
                quality={100}
                priority
                className="object-cover object-[center_30%]"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => showImage(-1)}
                    aria-label="Photo précédente"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 hover:bg-background transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden>
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => showImage(1)}
                    aria-label="Photo suivante"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 hover:bg-background transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/80 px-2 py-0.5 text-xs tabular-nums">
                    {imageIndex + 1} / {product.images.length}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* INFOS PRODUIT DROITE */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="mb-4">
                <p className="text-xs tracking-widest text-muted mb-2">{product.category.toUpperCase()}</p>
                <h1 className="display text-4xl lg:text-5xl leading-tight">{product.name}</h1>
              </div>

              <div className="flex items-baseline gap-6 mb-6 pt-4 border-t border-line">
                <p className="text-3xl lg:text-4xl font-bold">{price} CHF</p>
                {product.stock > 0 && (
                  <span className="text-xs text-green-600 font-medium">● En stock • Livraison 1 à 2 semaines</span>
                )}
                {product.stock === 0 && (
                  <span className="text-xs text-red-600 font-medium">● Épuisé</span>
                )}
              </div>

              <p className="text-sm leading-relaxed text-muted max-w-md">{product.description}</p>
            </div>

            {/* Couleurs — chaque teinte est une fiche distincte */}
            {sameCategory.length > 1 && (
              <div>
                <p className="text-xs tracking-widest ui-label mb-3">
                  COULEUR — <span className="text-muted">{product.color}</span>
                </p>
                <div className="flex gap-3 items-center">
                  {sameCategory.map((p) =>
                    p.id === product.id ? (
                      <span
                        key={p.id}
                        aria-current="true"
                        title={p.color}
                        style={{ backgroundColor: p.swatch }}
                        className="w-10 h-10 ring-2 ring-foreground ring-offset-2 ring-offset-background"
                      />
                    ) : (
                      <Link
                        key={p.id}
                        href={`/shop/${p.id}`}
                        aria-label={`Voir ${p.name}`}
                        title={p.color}
                        style={{ backgroundColor: p.swatch }}
                        className="w-10 h-10 ring-1 ring-line hover:ring-foreground transition-shadow"
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {/* Options proposées par ce produit */}
            {variants.length > 1 && (
              <div>
                <p className="text-xs tracking-widest ui-label mb-3">VOTRE CHOIX</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`p-4 text-left border-2 transition-all ${
                        selected === v
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-line hover:border-foreground'
                      }`}
                    >
                      <span className="block text-sm font-bold">{VARIANT_LABELS[v]}</span>
                      <span className="block text-xs mt-1 opacity-70">{product.prices[v]} CHF</span>
                    </button>
                  ))}
                </div>
                {selected === 'set' &&
                  product.prices.hoodie !== undefined &&
                  product.prices.pants !== undefined &&
                  product.prices.set !== undefined && (
                    <p className="text-xs text-muted mt-3">
                      Économie de{' '}
                      {product.prices.hoodie + product.prices.pants - product.prices.set} CHF par
                      rapport aux pièces achetées séparément.
                    </p>
                  )}
              </div>
            )}

            {/* Taille — unique, elle vaut pour l'article entier */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <p className="text-xs tracking-widest ui-label">TAILLE</p>
                {size && <p className="text-xs text-muted">Sélectionné: {size}</p>}
              </div>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-3 text-sm font-bold border-2 transition-all ${
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

            <Link href="/tailles" className="text-xs text-muted hover:text-foreground transition-colors inline-block py-2 -my-2">
              Consulter le guide des tailles →
            </Link>

            {/* Quantité & Bouton d'achat */}
            <div className="space-y-4">
              <div>
                <p className="text-xs tracking-widest ui-label mb-3">QUANTITÉ</p>
                <div className="flex items-center gap-3 border border-line w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-surface transition-colors"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-surface transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`w-full py-4 text-center ui-label font-bold tracking-widest transition-all ${
                  added
                    ? 'bg-foreground text-background'
                    : product.stock === 0
                    ? 'bg-surface text-muted cursor-not-allowed'
                    : 'bg-foreground text-background hover:opacity-85'
                }`}
              >
                {added ? '✓ AJOUTÉ AU PANIER' : product.stock === 0 ? 'ÉPUISÉ' : 'AJOUTER AU PANIER'}
              </button>
            </div>

            {/* Détails supplémentaires */}
            <div className="border-t border-line pt-8 space-y-6 text-xs">
              <div>
                <p className="ui-label mb-2">COMPOSITION</p>
                <p className="text-muted">{product.material}</p>
              </div>
              <div>
                <p className="ui-label mb-2">ENTRETIEN</p>
                <p className="text-muted">{product.care}</p>
              </div>
              <div>
                <p className="ui-label mb-2">GARANTIE & RETOURS</p>
                <p className="text-muted">Garantie à vie sur défauts de fabrication. Retours gratuits 30 jours.</p>
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
                  <div className="relative bg-surface overflow-hidden mb-4 aspect-[3/4]">
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      unoptimized
                      quality={100}
                      className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="ui-label text-sm mb-2 group-hover:opacity-60 transition-opacity">{p.name}</h3>
                  <p className="text-sm font-bold">Dès {fromPrice(p)} CHF</p>
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
