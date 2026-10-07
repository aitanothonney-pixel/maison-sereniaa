import Image from 'next/image'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import DropTabs from '@/components/DropTabs'
import Footer from '@/components/Footer'

const HERO = 'https://i.ibb.co/tpHNLbTG/IMG-0466.jpg'

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
          unoptimized
          preload
          className="object-cover object-[center_20%]"
        />
      </section>

      {/* 2 — Les pièces, filtrables par drop */}
      <DropTabs />

      <Footer />
    </>
  )
}
