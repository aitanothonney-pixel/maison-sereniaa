import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import NotifyForm from '@/components/NotifyForm'

export const metadata: Metadata = {
  title: 'Info',
  description: 'Tempered — comment fonctionnent les drops, les matières, le contact.',
}

const BLOCKS = [
  {
    t: 'Le nom',
    d: 'On tempère l’acier et le verre pour les rendre plus résistants : un passage au feu, puis un refroidissement lent qu’on ne peut pas brusquer. C’est la manière dont nous abordons chaque pièce, et c’est aussi ce que dit la devise.',
  },
  {
    t: 'Les drops',
    d: 'Nous ne tenons pas de boutique ouverte en permanence. Chaque drop est produit en série fermée, annoncé à l’avance, et vendu sur une fenêtre courte. Ce qui part ne revient pas : pas de réassort, pas de réédition.',
  },
  {
    t: 'Les matières',
    d: 'Coton biologique filé au Portugal, laine européenne, polyester issu de bouteilles recyclées. Les grammages sont indiqués sur chaque pièce parce que c’est ce qui détermine sa tenue dans le temps.',
  },
  {
    t: 'Livraison et retours',
    d: 'Expédition depuis Genève sous 48 heures ouvrées après la clôture d’un drop. Trente jours pour renvoyer une pièce non portée, frais de retour à notre charge.',
  },
]

export default function Info() {
  return (
    <>
      <Nav current="info" />

      <main className="px-5 sm:px-8 pt-12 sm:pt-16">
        <p className="tech mb-6">Trust the process</p>

        <h1 className="headline text-[13vw] sm:text-[8vw] lg:text-[104px] max-w-5xl mb-12">
          Peu de pièces, reprises jusqu’à ce qu’elles tombent juste.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-4xl border-t border-line pt-12">
          {BLOCKS.map((b) => (
            <section key={b.t}>
              <h2 className="headline text-[15px] mb-4">{b.t}</h2>
              <p className="text-[12px] text-muted leading-[1.9]">{b.d}</p>
            </section>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-line max-w-md">
          <p className="tech mb-5">Nous écrire</p>
          <a
            href="mailto:contact@tempered.com"
            className="headline link-underline text-2xl sm:text-3xl inline-block mb-12"
          >
            contact@tempered.com
          </a>
          <NotifyForm compact />
        </div>

        <div className="mt-16">
          <Link href="/drops" className="tech link-underline hover:text-foreground">
            Voir les drops →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
