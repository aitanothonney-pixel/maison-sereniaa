import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-tech',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Tempered — Trust the process',
    template: '%s — Tempered',
  },
  description:
    'Tempered. Drops limités, aucun réassort. Trust the process.',
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
    <html lang="fr" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
