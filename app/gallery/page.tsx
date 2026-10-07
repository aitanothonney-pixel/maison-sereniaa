import type { Metadata } from 'next'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import { ImageGallery } from '@/components/ui/image-gallery'

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Galerie photos TEMPERED',
}

export default function GalleryPage() {
  return (
    <>
      <Marquee />
      <SiteHeader />
      <main>
        <div className="px-5 lg:px-8 pt-12 pb-8 border-b border-line">
          <h1 className="display text-3xl sm:text-4xl">Nos créations</h1>
        </div>
        <ImageGallery imageCount={60} showViewMore={false} />
      </main>
      <Footer />
    </>
  )
}
