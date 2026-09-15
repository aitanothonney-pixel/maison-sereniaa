import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Livraison',
  description: 'Informations de livraison et conditions de retour TEMPORED.',
}

export default function ShippingPage() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12 max-w-3xl mx-auto">
        <h1 className="display text-[13vw] sm:text-[7vw] lg:text-[80px] mb-12">LIVRAISON</h1>

        <section className="space-y-12">
          {/* Délais de livraison */}
          <div>
            <h2 className="display text-2xl mb-6">DÉLAIS DE LIVRAISON</h2>
            <div className="space-y-4 text-sm">
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">Suisse</p>
                <p className="text-muted">3-5 jours ouvrés. Expédition 48h après votre achat.</p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">Union Européenne</p>
                <p className="text-muted">5-10 jours ouvrés. Expédition 48h après votre achat.</p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">Autres pays</p>
                <p className="text-muted">10-21 jours ouvrés. Délais variables selon le pays de destination.</p>
              </div>
              <p className="text-xs text-muted mt-4">Les délais commencent après confirmation du paiement. Les weekends et jours fériés ne sont pas comptés.</p>
            </div>
          </div>

          {/* Frais de livraison */}
          <div>
            <h2 className="display text-2xl mb-6">FRAIS DE LIVRAISON</h2>
            <div className="space-y-4 text-sm">
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">Suisse</p>
                <p className="text-muted">10 CHF. Livraison gratuite à partir de 150 CHF.</p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">UE</p>
                <p className="text-muted">15 EUR. Livraison gratuite à partir de 200 EUR.</p>
              </div>
              <div className="border-b border-line pb-4">
                <p className="font-bold mb-2">Autres pays</p>
                <p className="text-muted">Tarifs variables. Contactez-nous pour un devis personnalisé.</p>
              </div>
            </div>
          </div>

          {/* Suivi de commande */}
          <div>
            <h2 className="display text-2xl mb-6">SUIVI DE COMMANDE</h2>
            <p className="text-sm leading-relaxed mb-4">
              Une fois votre commande expédiée, vous recevrez un e-mail avec un numéro de suivi. Vous pourrez suivre votre colis en temps réel grâce à ce lien.
            </p>
            <p className="text-sm text-muted">
              Si vous n'avez pas reçu d'e-mail de suivi 48h après votre achat, vérifiez votre dossier spam ou contactez-nous.
            </p>
          </div>

          {/* Retours */}
          <div>
            <h2 className="display text-2xl mb-6">POLITIQUE DE RETOUR</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold mb-2">Délai de rétractation</p>
                <p className="text-muted">30 jours à partir de la réception de votre commande. Aucune question posée.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Conditions</p>
                <p className="text-muted">Les articles doivent être retournés dans leur état d'origine, avec étiquettes attachées et dans l'emballage TEMPORED.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Frais de retour</p>
                <p className="text-muted">Gratuit pour la Suisse et l'UE. Un label de retour vous sera envoyé par e-mail.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Remboursement</p>
                <p className="text-muted">Une fois reçu et inspecté, remboursement sous 7-10 jours ouvrés. Frais d'expédition initiaux non remboursés.</p>
              </div>
            </div>
          </div>

          {/* Emballage */}
          <div>
            <h2 className="display text-2xl mb-6">EMBALLAGE & CONDITIONS</h2>
            <div className="space-y-4 text-sm">
              <p>
                Tous les colis TEMPORED sont emballés avec soin dans une boîte kraft minimaliste. Aucun plastique — respectueux de l'environnement.
              </p>
              <p className="text-muted">
                Les articles sont protégés par du papier de soie biodégradable. Chaque commande contient une carte de remerciement personnalisée.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="border-t border-line pt-12">
            <h2 className="display text-2xl mb-6">QUESTIONS FRÉQUENTES</h2>
            <div className="space-y-6">
              <div>
                <p className="font-bold mb-2">Puis-je modifier ma commande après l'avoir passée?</p>
                <p className="text-sm text-muted">Oui, si elle n'a pas encore été expédiée (48h après achat). Contacte-nous immédiatement.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Que faire si mon colis est endommagé?</p>
                <p className="text-sm text-muted">Contacte-nous avec photos du colis et du contenu. Nous enverrons un remplacement ou un remboursement.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Livrez-vous aux boîtes postales?</p>
                <p className="text-sm text-muted">Non. Nous livrons uniquement aux adresses résidentielles ou commerciales avec accès physique.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Puis-je offrir une commande?</p>
                <p className="text-sm text-muted">Oui. Laisse une note lors du paiement et on n'inclura pas la facture dans le colis.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Livraison en dehors de la Suisse et l'UE?</p>
                <p className="text-sm text-muted">Oui, mais les tarifs sont élevés. Contacte-nous pour un devis. Frais de douane à charge du client.</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-line pt-12">
            <h2 className="display text-2xl mb-4">BESOIN D'AIDE?</h2>
            <p className="text-sm leading-relaxed mb-6">
              Des questions sur ta livraison ou ton retour? Notre équipe est là pour toi.
            </p>
            <a href="mailto:contact@tempored.com" className="inline-block bg-foreground text-background px-6 py-3 ui-label hover:opacity-80">
              NOUS ÉCRIRE
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
