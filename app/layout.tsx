import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Bodoni_Moda, Cinzel, Fraunces, Abril_Fatface, EB_Garamond, Libre_Baskerville, DM_Serif_Display, Tangerine, Great_Vibes, Parisienne, Allura, Satisfy } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '900'],
  display: 'swap',
})

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display-alt1',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-display-alt2',
  weight: ['400', '500', '600', '700', '900'],
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display-alt3',
  weight: ['400', '500', '600', '700', '900'],
  display: 'swap',
})

const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  variable: '--font-display-alt4',
  weight: ['400'],
  display: 'swap',
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-display-alt5',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const libreBaskerille = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-display-alt6',
  weight: ['400', '700'],
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-display-alt7',
  weight: ['400'],
  display: 'swap',
})

const tangerine = Tangerine({
  subsets: ['latin'],
  variable: '--font-script-1',
  weight: ['400', '700'],
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-script-2',
  weight: ['400'],
  display: 'swap',
})

const parisienne = Parisienne({
  subsets: ['latin'],
  variable: '--font-script-3',
  weight: ['400'],
  display: 'swap',
})

const allura = Allura({
  subsets: ['latin'],
  variable: '--font-script-4',
  weight: ['400'],
  display: 'swap',
})

const satisfy = Satisfy({
  subsets: ['latin'],
  variable: '--font-script-5',
  weight: ['400'],
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
    <html lang="fr" className={`${playfair.variable} ${bodoni.variable} ${cinzel.variable} ${fraunces.variable} ${abrilFatface.variable} ${ebGaramond.variable} ${libreBaskerille.variable} ${dmSerif.variable} ${tangerine.variable} ${greatVibes.variable} ${parisienne.variable} ${allura.variable} ${satisfy.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
