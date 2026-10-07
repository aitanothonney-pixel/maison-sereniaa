import Image from 'next/image'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import DropTabs from '@/components/DropTabs'
import { ImageGallery } from '@/components/ui/image-gallery'
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

      {/* 3 — Galerie photo preview */}
      <section className="py-12 lg:py-24">
        <div className="px-5 lg:px-8 mb-8">
          <h2 className="display text-2xl sm:text-3xl">Nos créations</h2>
        </div>
        <ImageGallery imageCount={9} showViewMore={true} />
      </section>

      <Footer />
    </>
  )
}
