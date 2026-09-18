import Image from 'next/image'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import DropTabs from '@/components/DropTabs'
import Footer from '@/components/Footer'

const HERO =
  'https://i.ibb.co/DfNvXyrm/3-A0-C1226-5-C9-E-4-FBD-BD10-AC94772268-E0.jpg'

// `focus` décide quelle partie de la photo survit au recadrage : la bande
// reste plus large que haute sur écran, donc une photo verticale y perd du
// haut et du bas. 'center' garde le milieu, '30%' remonte, '70%' descend.
const EDITORIAL: { src: string; focus: string }[] = [
  { src: 'https://i.ibb.co/1t314nKQ/IMG-5755.jpg', focus: 'center' },
  { src: 'https://i.ibb.co/qFMJK90v/IMG-5753.jpg', focus: 'center' },
  { src: 'https://i.ibb.co/V0HX0qKC/IMG-5979.jpg', focus: 'center' },
  { src: 'https://i.ibb.co/0jpr3MQP/IMG-5924.jpg', focus: 'center' },
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
        {EDITORIAL.map(({ src, focus }, i) => (
          <section
            key={src}
            className="relative w-full h-[58vh] md:h-[calc(100vh-7.5rem)] min-h-[380px] bg-surface"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="100vw"
              quality={90}
              style={{ objectPosition: focus }}
              className="object-cover"
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
