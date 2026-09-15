import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ASTR4',
    template: '%s — ASTR4',
  },
  description:
    'ASTR4 — vêtements essentiels. Des pièces sobres, coupées net, faites pour durer.',
  openGraph: {
    title: 'ASTR4',
    description: 'Vêtements essentiels. Des pièces sobres, coupées net, faites pour durer.',
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
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
