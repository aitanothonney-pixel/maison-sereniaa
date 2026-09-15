import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'ASTR4 — comment nous dessinons, choisissons nos matières et travaillons.',
}

const SECTIONS = [
  {
    t: 'Peu de pièces',
    d: 'Dix-sept références au catalogue. Nous préférons reprendre un patron pendant six mois plutôt que sortir six nouveautés. Une pièce reste tant qu’elle nous paraît la meilleure version possible ; sinon elle est corrigée, ou retirée.',
  },
  {
    t: 'Des matières qui tiennent',
    d: 'Coton biologique filé au Portugal, laine européenne, polyester issu de bouteilles recyclées. Les grammages sont indiqués sur chaque fiche parce que c’est ce qui détermine la tenue d’un vêtement dans le temps.',
  },
  {
    t: 'Un prix lisible',
    d: 'Nous produisons en petites séries et vendons en direct. Pas de démarque saisonnière : le prix affiché est celui que nous jugeons juste toute l’année.',
  },
  {
    t: 'Livraison et retours',
    d: 'Expédition sous 48 heures ouvrées depuis Genève, offerte dès 150 CHF. Trente jours pour renvoyer une pièce non portée, frais de retour à notre charge.',
  },
]

export default function APropos() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-12 sm:pt-16">
        <div className="max-w-3xl">
          <p className="label mb-5">À propos</p>
          <h1 className="text-[30px] sm:text-[46px] font-light leading-[1.1] mb-8">
            Nous dessinons peu de pièces, et nous les reprenons jusqu’à ce qu’elles
            tombent juste.
          </h1>
          <p className="text-[13px] text-muted leading-[1.9] max-w-xl">
            ASTR4 est une marque de vêtements essentiels basée à Genève. Nous
            travaillons sur un catalogue restreint, pensé pour se porter toute
            l’année et se compléter d’une saison à l’autre.
          </p>
        </div>

        <div className="relative w-full h-[42vh] sm:h-[60vh] bg-surface mt-14 sm:mt-20">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=2000&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-16 sm:mt-24 max-w-4xl">
          {SECTIONS.map((s) => (
            <section key={s.t}>
              <h2 className="text-[13px] tracking-[0.06em] mb-4 pb-4 border-b border-line">
                {s.t}
              </h2>
              <p className="text-[12px] text-muted leading-[1.9]">{s.d}</p>
            </section>
          ))}
        </div>

        <div className="mt-20 sm:mt-28 pt-10 border-t border-line">
          <p className="label mb-4">Une question</p>
          <p className="text-[13px] text-muted mb-5 max-w-md leading-relaxed">
            Écrivez-nous, nous répondons sous un jour ouvré.
          </p>
          <a
            href="mailto:contact@astr4.com"
            className="link-underline text-[13px] tracking-[0.06em]"
          >
            contact@astr4.com
          </a>
        </div>

        <div className="mt-16">
          <Link href="/boutique" className="link-underline text-[12px] tracking-[0.06em]">
            Voir la collection
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
