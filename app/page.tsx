import Image from 'next/image'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import DropTabs from '@/components/DropTabs'
import Footer from '@/components/Footer'

const HERO = 'https://i.ibb.co/ymHvhhHH/IMG-0288.jpg'

export default function Home() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      {/* 1 — Ouverture : un seul visuel plein cadre */}
      <section className="relative h-[58vh] md:h-[calc(100vh-7.5rem)] min-h-[380px] bg-surface overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-[center_20%]"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </section>

      {/* 2 — Les pièces, filtrables par drop */}
      <DropTabs />

      <Footer />
    </>
  )
}
