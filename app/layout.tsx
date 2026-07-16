import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AnnouncementBar from '@/components/AnnouncementBar'
import CookieBanner from '@/components/CookieBanner'
import ScrollProgress from '@/components/ScrollProgress'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'in & Co | Boutique de Vêtements Premium de Luxe Minimaliste',
  description: 'Découvrez in & Co, notre boutique de vêtements de luxe minimaliste. Qualité premium, prix accessibles. Livraison gratuite, retours 30 jours. Collections Homme & Femme.',
  keywords: ['vêtements luxe', 'boutique en ligne', 'mode premium', 'vêtements minimaliste', 'in & Co'],
  metadataBase: new URL('https://inetco.com'),
  openGraph: {
    title: 'in & Co | Vêtements de Luxe Minimaliste',
    description: 'Découvrez nos collections de vêtements premium. Livraison gratuite dès 80 CHF.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>
        <ScrollProgress />
        <AnnouncementBar />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
