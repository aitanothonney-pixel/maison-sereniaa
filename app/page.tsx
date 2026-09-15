import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products, CATEGORIES } from '@/lib/products'

const SEASON = 'Collection 01 — Automne 2026'

export default function Home() {
  const selection = products.filter((p) => p.isNew).slice(0, 4)
  const rest = products.filter((p) => !p.isNew).slice(0, 4)
  const featured = selection.length >= 4 ? selection : [...selection, ...rest].slice(0, 4)

  return (
    <>
      <Header />

      <main>
        {/* ── Ouverture ────────────────────────────────────────────────
            Une image, rien par-dessus. Le texte vient dessous.
            ──────────────────────────────────────────────────────────── */}
        <section>
          <div className="relative w-full h-[62vh] sm:h-[78vh] bg-surface">
            <Image
              src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=2000&q=80"
              alt=""
              fill
              sizes="100vw"
              preload
              className="object-cover"
            />
          </div>

          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-end py-8 sm:py-10 border-b border-line">
              <div>
                <p className="label mb-3">{SEASON}</p>
                <h1 className="text-[28px] sm:text-[40px] lg:text-[52px] leading-[1.05] font-light max-w-2xl">
                  Des pièces sobres,
                  <br />
                  coupées net.
                </h1>
              </div>

              <div className="md:text-right md:pb-2">
                <p className="text-[12px] text-muted max-w-xs mb-4 md:ml-auto leading-relaxed">
                  Dix-sept essentiels en coton, laine et matières recyclées. Rien de
                  plus que ce qui se porte.
                </p>
                <Link href="/boutique" className="link-underline text-[12px] tracking-[0.06em]">
                  Voir la collection
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sélection ────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-16 sm:pt-24">
          <div className="flex items-baseline justify-between mb-8 sm:mb-10">
            <h2 className="text-[13px] tracking-[0.06em]">Sélection</h2>
            <Link href="/boutique" className="link-underline text-[12px] text-muted">
              Tout voir
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i < 2} />
            ))}
          </div>
        </section>

        {/* ── Note de maison ───────────────────────────────────────────
            Bloc éditorial : image à gauche, texte court à droite.
            ──────────────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-20 sm:pt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Hauteur plafonnée : en 4/5 pur, la colonne image dépasse
                850 px sur grand écran et creuse un vide face au texte. */}
            <div className="relative aspect-[4/5] md:aspect-auto md:h-[560px] bg-surface">
              <Image
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&q=80"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="md:pr-12">
              <p className="label mb-6">Notre approche</p>
              <p className="text-[19px] sm:text-[24px] leading-[1.45] font-light mb-8">
                Nous dessinons peu de pièces, et nous les reprenons jusqu’à ce
                qu’elles tombent juste.
              </p>
              <p className="text-[13px] text-muted leading-[1.8] mb-10 max-w-md">
                Pas de saison à rattraper, pas de nouveauté pour la nouveauté. Chaque
                référence reste au catalogue tant qu’elle nous paraît la meilleure
                version possible. Les matières sont choisies pour leur tenue dans le
                temps : coton biologique, laine, polyester recyclé.
              </p>
              <Link href="/a-propos" className="link-underline text-[12px] tracking-[0.06em]">
                En savoir plus
              </Link>
            </div>
          </div>
        </section>

        {/* ── Catégories ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-20 sm:pt-32">
          <h2 className="text-[13px] tracking-[0.06em] mb-8 sm:mb-10">Catégories</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-line">
            {CATEGORIES.map((cat) => {
              const count = products.filter((p) => p.category === cat.slug).length
              return (
                <Link
                  key={cat.slug}
                  href={`/boutique?categorie=${cat.slug}`}
                  className="group flex items-baseline justify-between gap-3 py-6 px-1 border-b border-line md:border-r last:border-r-0 md:px-5 md:first:pl-0"
                >
                  <span className="text-[13px] group-hover:opacity-60 transition-opacity">
                    {cat.label}
                  </span>
                  <span className="label tabular-nums">{count}</span>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 border-t border-line pt-10">
            {[
              {
                t: 'Livraison',
                d: 'Offerte dès 150 CHF en Suisse. Expédition sous 48 heures ouvrées.',
              },
              {
                t: 'Retours',
                d: 'Trente jours pour renvoyer une pièce non portée, frais à notre charge.',
              },
              {
                t: 'Matières',
                d: 'Coton biologique, laine et polyester recyclé, tracés du fil au vêtement.',
              },
            ].map((item) => (
              <div key={item.t}>
                <p className="label mb-3">{item.t}</p>
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
