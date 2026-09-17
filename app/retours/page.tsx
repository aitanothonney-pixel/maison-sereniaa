import Link from 'next/link'
import type { Metadata } from 'next'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Retours & remboursements',
  description: 'Conditions de retour et de remboursement TEMPORED — 30 jours, retours gratuits.',
}

export default function ReturnsPage() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12">
        <h1 className="display text-[13vw] sm:text-[7vw] lg:text-[80px] mb-12">RETOURS</h1>

        <section className="space-y-12 max-w-3xl">
          <div>
            <p className="text-sm leading-relaxed">
              Une pièce ne tombe pas comme prévu ? Vous avez 30 jours pour la renvoyer, sans avoir à
              vous justifier. Le retour est gratuit depuis la Suisse et l&apos;UE.
            </p>
          </div>

          <div>
            <h2 className="display text-2xl mb-6">CONDITIONS</h2>
            <div className="space-y-4 text-sm">
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">Délai</p>
                <p className="text-muted">30 jours à partir de la réception de votre commande.</p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">État de la pièce</p>
                <p className="text-muted">
                  Non portée, non lavée, étiquettes attachées, dans son emballage TEMPORED d&apos;origine.
                </p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">Frais de retour</p>
                <p className="text-muted">
                  Gratuits pour la Suisse et l&apos;UE — le label de retour vous est envoyé par e-mail.
                  Hors UE, les frais restent à votre charge.
                </p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">Pièces personnalisées</p>
                <p className="text-muted">
                  Les pièces customisées sur demande ne sont ni reprises ni échangées, sauf défaut de fabrication.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="display text-2xl mb-6">COMMENT RENVOYER</h2>
            <div className="space-y-4 text-sm">
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">1 · Écrivez-nous</p>
                <p className="text-muted">
                  Envoyez un e-mail avec votre numéro de commande et la pièce concernée.
                </p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">2 · Recevez le label</p>
                <p className="text-muted">On vous renvoie un label de retour prépayé sous 24h ouvrées.</p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">3 · Déposez le colis</p>
                <p className="text-muted">
                  Remballez la pièce, collez le label et déposez-la au point de dépôt de votre choix.
                </p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">4 · Remboursement</p>
                <p className="text-muted">
                  Après réception et contrôle, le remboursement part sous 7-10 jours ouvrés sur votre
                  moyen de paiement d&apos;origine.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="display text-2xl mb-6">ÉCHANGES</h2>
            <p className="text-sm leading-relaxed mb-4">
              Pour changer de taille ou de couleur, le plus rapide reste de renvoyer la pièce en
              retour classique et de repasser commande — cela évite qu&apos;elle parte entre-temps,
              nos séries étant fermées.
            </p>
            <Link href="/tailles" className="text-sm underline hover:opacity-60">
              Consulter le guide des tailles →
            </Link>
          </div>

          <div>
            <h2 className="display text-2xl mb-6">PIÈCE ABÎMÉE OU ERREUR DE COLIS</h2>
            <p className="text-sm leading-relaxed">
              Envoyez-nous des photos de la pièce et du colis. On expédie un remplacement ou on
              rembourse intégralement, frais de port compris — sans retour à votre charge.
            </p>
          </div>

          <div className="border-t border-line pt-12">
            <h2 className="display text-2xl mb-4">LANCER UN RETOUR</h2>
            <p className="text-sm leading-relaxed mb-6">
              Indiquez votre numéro de commande, on vous envoie le label de retour.
            </p>
            <a
              href="mailto:contact@tempored.com?subject=Demande%20de%20retour"
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
