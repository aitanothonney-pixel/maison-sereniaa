import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Italiana, Cinzel } from 'next/font/google'
import './globals.css'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import CookieBanner from '@/components/CookieBanner'
import ScrollProgress from '@/components/ScrollProgress'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-italiana',
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'in & Co | Sportswear & Sneakers Premium',
  description:
    'Découvrez in & Co : chaussures de running et basketball, hoodies, t-shirts et accessoires de sport. Livraison offerte dès 80 CHF, retours 30 jours.',
  keywords: ['sportswear', 'sneakers', 'running', 'basketball', 'hoodie', 'in & Co'],
  openGraph: {
    title: 'in & Co | Sportswear & Sneakers Premium',
    description:
      'Chaussures de running et basketball, hoodies, t-shirts et accessoires. Livraison offerte dès 80 CHF.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'in & Co | Sportswear Premium',
    description: 'Sneakers, hoodies et accessoires de sport livrés en Suisse.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${dmSans.variable} ${italiana.variable} ${cinzel.variable}`}
    >
      <body>
        <ScrollProgress />
        <AnnouncementBar>{children}</AnnouncementBar>
        <CookieBanner />
      </body>
    </html>
  )
}
