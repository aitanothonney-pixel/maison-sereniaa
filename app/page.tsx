import Link from 'next/link'
import Image from 'next/image'
import CountdownBar from '@/components/CountdownBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products, CATEGORIES, getProduct } from '@/lib/products'

export default function Home() {
  const hero = getProduct('pantalon-cargo') ?? products[0]

  const latest = [...products.filter((p) => p.isNew), ...products.filter((p) => !p.isNew)].slice(
    0,
    8
  )

  return (
    <>
      <CountdownBar />

      {/* ── Ouverture ──────────────────────────────────────────────
          Le header se pose sur le visuel, le titre occupe le bas.
          ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[78vh] min-h-[520px] bg-surface">
        <Image
          src="https://i.ibb.co/k2hjGqdF/IMG-1501.avif"
          alt=""
          fill
          sizes="100vw"
          preload
          // Cadrage centré : sur un large bandeau, une photo verticale est
          // fortement rognée en hauteur. Centrer garde le sujet ; l'ancrer en
          // haut ne laisserait voir que la bande supérieure du cliché.
          className="object-cover object-center"
        />
        {/* Voile bas : garantit le contraste du titre quelle que soit la photo. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />

        <Header overlay />

        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-8 pb-10 sm:pb-14">
          <h1 className="headline text-white text-[13vw] sm:text-[8vw] lg:text-[76px] mb-6">
            {hero.name}
          </h1>
          <Link
            href={`/produit/${hero.id}`}
            className="headline inline-block bg-foreground text-background text-[12px] px-8 py-4 hover:bg-background hover:text-foreground transition-colors"
          >
            Acheter
          </Link>
        </div>
      </section>

      <main>
        {/* ── Dernières arrivées ─────────────────────────────────── */}
        <section className="px-5 sm:px-8 pt-16 sm:pt-24">
          <h2 className="headline text-[10vw] sm:text-[6vw] lg:text-[56px] mb-10 sm:mb-14">
            Les dernières arrivées
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-6">
            {latest.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i < 4} />
            ))}
          </div>

          <div className="mt-14 sm:mt-16">
            <Link
              href="/boutique"
              className="headline inline-block border-2 border-foreground text-[12px] px-10 py-4 hover:bg-foreground hover:text-background transition-colors"
            >
              Voir toute la collection
            </Link>
          </div>
        </section>

        {/* ── Catégories ─────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 pt-20 sm:pt-32">
          <h2 className="headline text-[10vw] sm:text-[6vw] lg:text-[56px] mb-10 sm:mb-14">
            Catégories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => {
              const first = products.find((p) => p.category === cat.slug)
              return (
                <Link
                  key={cat.slug}
                  href={`/boutique?categorie=${cat.slug}`}
                  className="group relative block aspect-[4/5] bg-surface overflow-hidden"
                >
                  {first && (
                    <Image
                      src={first.images[0]}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
                  <span className="headline absolute bottom-5 left-5 right-5 text-white text-xl sm:text-2xl">
                    {cat.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── Services ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 border-t border-line pt-10">
            {[
              {
                t: 'Livraison offerte',
                d: 'Dès 150 CHF en Suisse. Expédition sous 48 heures ouvrées.',
              },
              {
                t: 'Retours 30 jours',
                d: 'Renvoyez une pièce non portée, frais de retour à notre charge.',
              },
              {
                t: 'Paiement sécurisé',
                d: 'Transaction chiffrée. Carte, TWINT et virement acceptés.',
              },
            ].map((item) => (
              <div key={item.t}>
                <p className="headline text-[13px] mb-3">{item.t}</p>
                <p className="text-[12px] text-muted leading-[1.8] max-w-xs">{item.d}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
