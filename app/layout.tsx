import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '900'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Tempered — Trust the process',
    template: '%s — Tempered',
  },
  description: 'Tempered. Drops limités, aucun réassort. Trust the process.',
  openGraph: {
    title: 'Tempered — Trust the process',
    description: 'Drops limités, aucun réassort.',
    type: 'website',
    locale: 'fr_CH',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
