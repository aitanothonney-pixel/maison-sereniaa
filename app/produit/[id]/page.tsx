import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CountdownBar from '@/components/CountdownBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import ProductPurchase from '@/components/ProductPurchase'
import { products, getProduct, formatPrice, categoryLabel } from '@/lib/products'

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(id)
  if (!product) return { title: 'Pièce introuvable' }
  return { title: product.name, description: product.detail }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProduct(id)
  if (!product) notFound()

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <>
      <CountdownBar />
      <Header />

      <main className="px-5 sm:px-8 pt-8 sm:pt-12">
        {/* Fil d'ariane */}
        <nav className="flex items-center gap-2 label mb-8">
          <Link href="/boutique" className="hover:text-foreground transition-colors">
            Boutique
          </Link>
          <span aria-hidden>/</span>
          <Link
            href={`/boutique?categorie=${product.category}`}
            className="hover:text-foreground transition-colors"
          >
            {categoryLabel(product.category)}
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Visuel */}
          <div className="relative aspect-[4/5] bg-surface">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              preload
              className="object-cover"
            />
          </div>

          {/* Informations */}
          <div className="md:pt-4 md:max-w-md">
            <p className="label mb-3">{categoryLabel(product.category)}</p>
            <h1 className="headline text-[30px] sm:text-[40px] mb-3">{product.name}</h1>
            <p className="headline text-[15px] tabular-nums mb-8">{formatPrice(product.price)}</p>

            <p className="text-[13px] text-muted leading-[1.8] mb-10">{product.detail}</p>

            <ProductPurchase product={product} />

            {/* Détails — filets, pas d'accordéon décoratif */}
            <dl className="mt-12 border-t border-line">
              <div className="py-5 border-b border-line">
                <dt className="label mb-2">Composition</dt>
                <dd className="text-[12px] text-muted leading-relaxed">{product.composition}</dd>
              </div>
              <div className="py-5 border-b border-line">
                <dt className="label mb-2">Entretien</dt>
                <dd className="text-[12px] text-muted leading-relaxed">
                  {product.care.join(' · ')}
                </dd>
              </div>
              <div className="py-5 border-b border-line">
                <dt className="label mb-2">Livraison</dt>
                <dd className="text-[12px] text-muted leading-relaxed">
                  Offerte dès 150 CHF · Retours sous 30 jours
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Pièces liées */}
        {related.length > 0 && (
          <section className="pt-24 sm:pt-32">
            <h2 className="headline text-[8vw] sm:text-[5vw] lg:text-[42px] mb-8 sm:mb-10">
              Dans la même famille
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
