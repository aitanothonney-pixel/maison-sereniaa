import Link from 'next/link'
import type { Metadata } from 'next'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import NotifyForm from '@/components/NotifyForm'

export const metadata: Metadata = {
  title: 'Info',
  description: 'Tempered — fonctionnement des drops, livraison, retours, contact.',
}

const SECTIONS = [
  {
    t: 'Le nom',
    lines: [
      'On tempère l’acier et le verre pour les rendre plus résistants : un passage au feu, puis un refroidissement lent qu’on ne peut pas brusquer.',
      'C’est la manière dont nous abordons chaque pièce, et c’est aussi ce que dit la devise.',
    ],
  },
  {
    t: 'Les drops',
    lines: [
      'Nous ne tenons pas de boutique ouverte en permanence.',
      'Chaque drop est produit en série fermée, annoncé à l’avance, et vendu sur une fenêtre courte.',
      'Aucun réassort, aucune réédition : ce qui part ne revient pas.',
    ],
  },
  {
    t: 'Livraison',
    lines: [
      'Expédition depuis Genève sous 48 heures ouvrées après la clôture d’un drop.',
      'Suisse : 3 à 5 jours ouvrés. Union européenne : 5 à 10 jours ouvrés.',
      'Les droits et taxes à l’import restent à la charge du destinataire.',
    ],
  },
  {
    t: 'Retours',
    lines: [
      'Trente jours pour renvoyer une pièce non portée, dans son emballage d’origine.',
      'Frais de retour à notre charge depuis la Suisse et l’Union européenne.',
      'Remboursement sous 14 jours après réception du colis.',
    ],
  },
  {
    t: 'Matières',
    lines: [
      'Coton biologique filé au Portugal, laine européenne, polyester issu de bouteilles recyclées.',
      'Les grammages sont indiqués sur chaque pièce : c’est ce qui détermine sa tenue dans le temps.',
    ],
  },
]

export default function Info() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 pt-12">
        <h1 className="display text-[13vw] sm:text-[7vw] lg:text-[80px] mb-12">Info</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10 max-w-4xl border-t border-line pt-10">
          {SECTIONS.map((s) => (
            <section key={s.t}>
              <h2 className="ui-label mb-3">{s.t}</h2>
              <ul className="space-y-2">
                {s.lines.map((line) => (
                  <li key={line} className="text-[13px] text-muted leading-[1.8]">
                    {line}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-16 pt-10 border-t border-line max-w-md">
          <h2 className="ui-label mb-3">Nous écrire</h2>
          <a
            href="mailto:contact@tempered.com"
            className="display text-xl sm:text-2xl hover:opacity-60 transition-opacity inline-block mb-2"
          >
            contact@tempered.com
          </a>
          <p className="text-[13px] text-muted mb-10">Réponse sous un jour ouvré.</p>
          <NotifyForm compact />
        </section>

        <div className="pt-12">
          <Link href="/drops" className="ui-label text-muted hover:text-foreground transition-colors">
            Voir les drops →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
