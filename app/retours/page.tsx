import Link from 'next/link'
import type { Metadata } from 'next'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Remboursements & retours',
  description: 'Conditions de remboursement, de retour et de livraison TEMPERED.',
}

export default function ReturnsPage() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12">
        <h1 className="display text-[10vw] sm:text-[6vw] lg:text-[64px] leading-[1.05] mb-8 max-w-4xl">
          REMBOURSEMENTS & RETOURS
        </h1>

        <section className="space-y-12 max-w-3xl">
          <a
            href="mailto:tempered@gmail.com"
            className="display text-xl hover:opacity-60 transition-opacity inline-block"
          >
            tempered@gmail.com
          </a>

          <div>
            <h2 className="display text-2xl mb-4">COMMANDES EXPÉDIÉES</h2>
            <p className="text-sm leading-relaxed text-muted">
              Toutes les commandes sont considérées comme définitives une fois expédiées. Aucun
              retour ni échange de taille ne pourra être effectué après l&apos;expédition de votre
              commande.
            </p>
          </div>

          <div>
            <h2 className="display text-2xl mb-4">ARTICLE REÇU INCORRECT</h2>
            <p className="text-sm leading-relaxed text-muted">
              Si vous constatez une erreur concernant l&apos;article reçu ou sa taille, notre équipe
              TEMPERED reste disponible pour vous accompagner et vous aider à trouver une solution.{' '}
              <Link href="/contact" className="font-bold text-foreground underline hover:opacity-60">
                Nous contacter
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="display text-2xl mb-4">PROBLÈMES LIÉS AU TRANSPORT</h2>
            <p className="text-sm leading-relaxed text-muted">
              <span className="font-bold text-foreground">
                TEMPERED ne pourra être tenue responsable
              </span>{' '}
              des colis égarés, non récupérés ou endommagés pendant leur transport. Pour toute
              question relative à l&apos;acheminement de votre commande, nous vous invitons à
              contacter directement le transporteur concerné.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
