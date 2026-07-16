import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AnnouncementBar from '@/components/AnnouncementBar'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'in & Co | Boutique de Vêtements Premium',
  description: "Découvrez notre collection exclusive de vêtements de qualité. in & Co, le style pour tous.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>
        <AnnouncementBar />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
