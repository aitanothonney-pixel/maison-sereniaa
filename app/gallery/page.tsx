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
        <ImageGallery />
      </main>
      <Footer />
    </>
  )
}
