import Link from 'next/link'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Panier',
}

export default function Panier() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-12 sm:pt-16">
        <h1 className="text-[28px] sm:text-[36px] font-light leading-none mb-10 pb-8 border-b border-line">
          Panier
        </h1>

        <div className="py-20 sm:py-28 max-w-sm">
          <p className="text-[13px] mb-3">Votre panier est vide.</p>
          <p className="text-[12px] text-muted leading-relaxed mb-8">
            Les pièces ajoutées depuis une fiche produit apparaîtront ici.
          </p>
          <Link href="/boutique" className="link-underline text-[12px] tracking-[0.06em]">
            Voir la collection
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
