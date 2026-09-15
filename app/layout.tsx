import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import './globals.css'

/**
 * Une seule famille sur tout le site : une monospace de type machine
 * à écrire. C'est elle qui porte l'identité, pas un accent décoratif.
 */
const mono = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono-tech',
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
    <html lang="fr" className={mono.variable}>
      <body>{children}</body>
    </html>
  )
}
