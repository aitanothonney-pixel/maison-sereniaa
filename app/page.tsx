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
      <div className="mt-20">
        {EDITORIAL.map((src, i) => (
          <section key={src} className="relative w-full h-[70vh] min-h-[420px] bg-surface">
            <Image
              src={src}
              alt=""
              fill
              sizes="100vw"
              quality={90}
              className="object-cover object-center"
            />
            {/* Adoucit la jointure : deux photos sans rapport se coupent net. */}
            {i > 0 && (
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-t from-transparent to-black/20" />
            )}
            {i < EDITORIAL.length - 1 && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-black/20" />
            )}
          </section>
        ))}
      </div>

      <Footer />
    </>
  )
}
