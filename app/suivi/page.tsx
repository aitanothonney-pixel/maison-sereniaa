import Link from 'next/link'
import type { Metadata } from 'next'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Suivi de commande',
  description: 'Suivez votre commande TEMPORED et retrouvez votre numéro de suivi.',
}

export default function TrackOrderPage() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12">
        <h1 className="display text-[13vw] sm:text-[7vw] lg:text-[80px] mb-12">SUIVI</h1>

        <section className="space-y-12 max-w-3xl">
          <div>
            <h2 className="display text-2xl mb-6">OÙ TROUVER VOTRE NUMÉRO DE SUIVI</h2>
            <p className="text-sm leading-relaxed mb-4">
              Dès que votre colis quitte notre atelier, un e-mail part automatiquement à l&apos;adresse
              utilisée lors de la commande. Il contient votre numéro de suivi et le lien direct vers
              le transporteur, où l&apos;état du colis est mis à jour en temps réel.
            </p>
            <p className="text-sm text-muted">
              Cet e-mail arrive en général dans les 48h suivant votre achat.
            </p>
          </div>

          <div>
            <h2 className="display text-2xl mb-6">LES ÉTAPES</h2>
            <div className="space-y-4 text-sm">
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">1 · Commande confirmée</p>
                <p className="text-muted">Un e-mail de confirmation vous parvient immédiatement après le paiement.</p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">2 · Préparation</p>
                <p className="text-muted">Votre commande est préparée et emballée sous 48h ouvrées.</p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">3 · Expédition</p>
                <p className="text-muted">Le numéro de suivi vous est envoyé par e-mail dès la remise au transporteur.</p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">4 · Livraison</p>
                <p className="text-muted">
                  1 à 2 semaines ouvrées après l&apos;expédition.{' '}
                  <Link href="/livraison" className="underline hover:opacity-60">
                    Voir tous les délais
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="display text-2xl mb-6">PAS REÇU D&apos;E-MAIL ?</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold mb-2">Vérifiez vos spams</p>
                <p className="text-muted">L&apos;e-mail de suivi y atterrit souvent. Cherchez « TEMPORED ».</p>
              </div>
              <div>
                <p className="font-bold mb-2">Patientez 48h</p>
                <p className="text-muted">Avant ce délai, votre commande est encore en préparation — c&apos;est normal.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Au-delà, écrivez-nous</p>
                <p className="text-muted">
                  Indiquez votre numéro de commande, on retrouve votre colis et on vous répond sous 24h ouvrées.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-line pt-12">
            <h2 className="display text-2xl mb-4">RETROUVER VOTRE COLIS</h2>
            <p className="text-sm leading-relaxed mb-6">
              Écrivez-nous avec votre numéro de commande et on s&apos;occupe du reste.
            </p>
            <a
              href="mailto:contact@tempored.com?subject=Suivi%20de%20commande"
              className="inline-block bg-foreground text-background px-6 py-3 ui-label hover:opacity-80"
            >
              NOUS ÉCRIRE
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
