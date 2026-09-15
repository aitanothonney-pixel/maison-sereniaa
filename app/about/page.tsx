import Link from 'next/link'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À Propos',
  description: 'Découvrez l\'histoire et les valeurs de TEMPORED, marque de streetwear premium.',
}

export default function AboutPage() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12 max-w-3xl mx-auto">
        <h1 className="display text-[13vw] sm:text-[7vw] lg:text-[80px] mb-12">À PROPOS</h1>

        <section className="space-y-12">
          {/* Mission */}
          <div>
            <h2 className="display text-2xl mb-4">LA MARQUE</h2>
            <p className="text-sm leading-relaxed">
              TEMPORED est une marque de streetwear premium fondée sur le principe de la qualité intemporelle et des coupes justes. Chaque pièce est pensée pour durer — matières lourdes, coupes amples, détails cohérents.
            </p>
            <p className="text-sm leading-relaxed mt-4">
              Pas de Fast Fashion. Pas de nouveautés hebdomadaires. Seulement des vêtements qui comptent.
            </p>
          </div>

          {/* Valeurs */}
          <div>
            <h2 className="display text-2xl mb-4">NOS VALEURS</h2>
            <div className="space-y-6">
              <div>
                <p className="font-bold mb-2">Qualité</p>
                <p className="text-sm text-muted">Coton bio certifié, tissus 280+ GSM minimum. Chaque couture compte.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Rareté</p>
                <p className="text-sm text-muted">Production limitée, aucun réassort. Si tu le rates, tu le rates.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Transparence</p>
                <p className="text-sm text-muted">Matières clairement énoncées, prix justes, aucun greenwashing.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Durabilité</p>
                <p className="text-sm text-muted">Conçu pour durer des années, pas des mois. Réparable et évolutif.</p>
              </div>
            </div>
          </div>

          {/* Processus */}
          <div>
            <h2 className="display text-2xl mb-4">NOTRE PROCESSUS</h2>
            <div className="space-y-4 text-sm">
              <p>
                <strong>01. Développement:</strong> Chaque pièce est pensée pendant des mois. Matières testées, coupes affinées en fit sessions, variations de couleurs étudiées.
              </p>
              <p>
                <strong>02. Production:</strong> Partenaires de confiance, petites séries. Aucun sous-traitance cachée, aucun raccourci qualité.
              </p>
              <p>
                <strong>03. Drop:</strong> Annoncé à l'avance, vendus en fenêtre courte. Stock limité intentionnellement.
              </p>
              <p>
                <strong>04. Support:</strong> Garantie à vie sur les défauts de fabrication. Réparations gratuites sur demande.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-line pt-12">
            <h2 className="display text-2xl mb-4">CONTACT</h2>
            <p className="text-sm leading-relaxed mb-6">
              Des questions sur une pièce, une taille, une commande? On te répond sous 24h.
            </p>
            <Link href="/contact" className="inline-block bg-foreground text-background px-6 py-3 ui-label hover:opacity-80">
              NOUS ÉCRIRE
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
