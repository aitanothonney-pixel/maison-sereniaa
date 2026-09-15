import Link from 'next/link'
import type { Metadata } from 'next'
import Shell from '@/components/Shell'
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
    <Shell>
      <div className="max-w-2xl mx-auto pt-6">
        <h1 className="page-title text-center mb-16">Info</h1>

        {SECTIONS.map((s) => (
          <section key={s.t} className="mb-12">
            <h2 className="nav-item mb-4">{s.t}</h2>
            <ul className="space-y-2">
              {s.lines.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="text-dim shrink-0" aria-hidden>
                    •
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mb-12">
          <h2 className="nav-item mb-4">Nous écrire</h2>
          <a href="mailto:contact@tempered.com" className="link-accent">
            contact@tempered.com
          </a>
          <p className="meta text-dim mt-2">Réponse sous un jour ouvré.</p>
        </section>

        <section className="mb-16">
          <NotifyForm compact />
        </section>

        <p className="meta text-center">
          <Link href="/drops" className="link-accent">
            Voir les drops
          </Link>
        </p>

        <p className="meta text-dim text-center pt-20">
          Copyright © {new Date().getFullYear()}, Tempered · TTP
        </p>
      </div>
    </Shell>
  )
}
