import Link from 'next/link'
import type { Metadata } from 'next'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Retours, échanges et livraison',
  description:
    'Conditions de retour, d’échange et de livraison TEMPERED.',
}

export default function ReturnsPage() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12">
        <h1 className="display text-[9vw] sm:text-[5.5vw] lg:text-[56px] leading-[1.05] mb-12 max-w-4xl">
          RETOURS, ÉCHANGES ET LIVRAISON
        </h1>

        <section className="space-y-12 max-w-3xl">
          <div>
            <h2 className="display text-2xl mb-4">COMMANDES EXPÉDIÉES</h2>
            <p className="text-sm leading-relaxed text-muted">
              Une fois votre commande expédiée, celle-ci est considérée comme définitive. Il n&apos;est
              donc plus possible de demander un retour ou un échange de taille après son expédition.
            </p>
          </div>

          <div>
            <h2 className="display text-2xl mb-4">ARTICLE REÇU INCORRECT</h2>
            <p className="text-sm leading-relaxed text-muted">
              Si votre commande ne correspond pas à celle passée — notamment en cas d&apos;erreur de
              taille ou de produit — nous vous invitons à{' '}
              <Link href="/contact" className="font-bold text-foreground underline hover:opacity-60">
                contacter TEMPERED
              </Link>
              . Notre équipe examinera votre situation et vous accompagnera afin de trouver une
              solution adaptée.
            </p>
          </div>

          <div>
            <h2 className="display text-2xl mb-4">PROBLÈMES LIÉS AU TRANSPORT</h2>
            <p className="text-sm leading-relaxed text-muted mb-4">
              Une fois le colis confié au service de livraison,{' '}
              <span className="font-bold text-foreground">
                TEMPERED ne saurait être tenue responsable
              </span>{' '}
              en cas de perte, de colis non réclamé ou de détérioration survenue pendant
              l&apos;acheminement.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Pour toute question concernant le suivi ou la livraison d&apos;un colis, nous vous
              recommandons de contacter directement le transporteur ou le service postal en charge de
              votre livraison.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
