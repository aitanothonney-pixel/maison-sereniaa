import Link from 'next/link'
import type { Metadata } from 'next'
import CountdownBar from '@/components/CountdownBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products, CATEGORIES, Product } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Boutique',
  description: 'Tous les essentiels ASTR4 : hauts, bas, pièces d’extérieur et accessoires.',
}

export default async function Boutique({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string; filtre?: string }>
}) {
  const { categorie, filtre } = await searchParams

  const activeCategory = CATEGORIES.find((c) => c.slug === categorie)?.slug
  const onlyNew = filtre === 'nouveautes'

  let visible: Product[] = products
  if (activeCategory) visible = visible.filter((p) => p.category === activeCategory)
  if (onlyNew) visible = visible.filter((p) => p.isNew)

  const heading = onlyNew
    ? 'Nouveautés'
    : activeCategory
      ? CATEGORIES.find((c) => c.slug === activeCategory)!.label
      : 'Tout'

  return (
    <>
      <CountdownBar />
      <Header />

      <main className="px-5 sm:px-8 pt-12 sm:pt-16">
        <div className="flex items-baseline justify-between gap-6 mb-8">
          <h1 className="headline text-[10vw] sm:text-[6vw] lg:text-[56px]">{heading}</h1>
          <p className="label tabular-nums shrink-0">
            {visible.length} {visible.length > 1 ? 'pièces' : 'pièce'}
          </p>
        </div>

        {/* Filtres — texte seul, séparés par des filets */}
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-line py-4 mb-10 sm:mb-14">
          <FilterLink href="/boutique" active={!activeCategory && !onlyNew}>
            Tout
          </FilterLink>
          <FilterLink href="/boutique?filtre=nouveautes" active={onlyNew}>
            Nouveautés
          </FilterLink>
          {CATEGORIES.map((cat) => (
            <FilterLink
              key={cat.slug}
              href={`/boutique?categorie=${cat.slug}`}
              active={activeCategory === cat.slug}
            >
              {cat.label}
            </FilterLink>
          ))}
        </nav>

        {visible.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-[13px] text-muted mb-5">Aucune pièce dans cette sélection.</p>
            <Link href="/boutique" className="link-underline text-[12px] tracking-[0.06em]">
              Revenir à la collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-6">
            {visible.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i < 4} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`text-[12px] tracking-[0.06em] transition-opacity ${
        active ? 'underline underline-offset-4' : 'text-muted hover:text-foreground'
      }`}
    >
      {children}
    </Link>
  )
}
