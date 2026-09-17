import Link from 'next/link'
import Image from 'next/image'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import DropTabs from '@/components/DropTabs'
import Footer from '@/components/Footer'

const HERO =
  'https://i.ibb.co/DfNvXyrm/3-A0-C1226-5-C9-E-4-FBD-BD10-AC94772268-E0.jpg'

const EDITORIAL = [
  'https://i.ibb.co/d4G5RsLh/IMG-7956.jpg',
  'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=2400&q=80',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=2400&q=80',
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=2400&q=80',
]

export default function Home() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      {/* 1 — Ouverture : un seul visuel plein cadre */}
      <section className="relative h-[58vh] md:h-[calc(100vh-7.5rem)] min-h-[380px] bg-surface">
        <Image
          src={HERO}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          preload
          className="object-cover object-center"
        />
      </section>

      {/* 2 — Les pièces, filtrables par drop */}
      <DropTabs />

      {/* 3 — Série éditoriale : aperçu des pièces à venir */}
      <div className="mt-20 space-y-4">
        {EDITORIAL.map((src) => (
          <section key={src} className="relative w-full h-[70vh] min-h-[420px] bg-surface">
            <Image
              src={src}
              alt=""
              fill
              sizes="100vw"
              quality={90}
              className="object-cover object-center"
            />
          </section>
        ))}
      </div>

      {/* Rappel du fonctionnement, sans panier : le site n'encaisse pas */}
      <section className="px-5 lg:px-8 pt-16">
        <div className="flex items-baseline justify-between gap-6 mb-6">
          <h2 className="display text-2xl sm:text-3xl">Comment ça marche</h2>
          <Link href="/info" className="ui-label text-muted hover:text-foreground transition-colors shrink-0">
            + Tout voir
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-line pt-8">
          {[
            {
              t: 'Série fermée',
              d: 'Chaque drop est produit en quantité fixe. Ce qui part ne revient pas.',
            },
            {
              t: 'Aucun réassort',
              d: 'Pas de réédition. La pièce vit sur une seule fenêtre de vente.',
            },
            {
              t: 'Annoncé en amont',
              d: 'La date part par mail et sur Instagram. Rien d’autre à surveiller.',
            },
          ].map((item) => (
            <div key={item.t}>
              <p className="ui-label mb-2">{item.t}</p>
              <p className="text-[13px] text-muted leading-[1.7]">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
