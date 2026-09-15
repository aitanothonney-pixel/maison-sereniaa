import Link from 'next/link'
import Image from 'next/image'
import Shell from '@/components/Shell'
import DropCountdown from '@/components/DropCountdown'
import NotifyForm from '@/components/NotifyForm'
import { drops, featuredDrop, STATUS_LABEL, formatDate } from '@/lib/drops'

export default function Home() {
  const next = featuredDrop()
  const past = drops.filter((d) => d.id !== next.id)

  return (
    <Shell>
      {/* ── Drop en tête ─────────────────────────────────────────
          La page d'accueil répond à une seule question : quand.
          ─────────────────────────────────────────────────────── */}
      <section className="pt-6">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="stamp">{STATUS_LABEL[next.status]}</span>
          <span className="meta">Drop {next.number}</span>
          <span className="meta text-dim">{formatDate(next.releaseAt)}</span>
        </div>

        <h1 className="page-title mb-8">{next.name}</h1>

        <Link href={`/drops/${next.id}`} className="block relative w-full max-w-4xl aspect-[16/10] mb-10 overflow-hidden">
          <Image
            src={next.cover}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            preload
            className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
          />
        </Link>

        <p className="max-w-xl mb-12 leading-[1.9]">{next.statement}</p>

        <p className="meta mb-4">Ouverture dans</p>
        <div className="mb-10">
          <DropCountdown releaseAt={next.releaseAt} />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-12">
          <NotifyForm />
          <Link
            href={`/drops/${next.id}`}
            className="nav-item border border-foreground px-7 py-3 hover:bg-foreground hover:text-background transition-colors self-start"
          >
            Voir le drop
          </Link>
        </div>
      </section>

      {/* ── Archives ─────────────────────────────────────────── */}
      <section className="pt-20">
        <div className="flex items-baseline justify-between gap-6 mb-8">
          <h2 className="page-title">Archives</h2>
          <Link href="/drops" className="meta link-accent shrink-0">
            Tout voir
          </Link>
        </div>

        <ul className="border-t border-line max-w-4xl">
          {past.map((d) => (
            <li key={d.id}>
              <Link
                href={`/drops/${d.id}`}
                className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-5 border-b border-line"
              >
                <span className="meta text-dim">{d.number}</span>
                <span className="min-w-0">
                  <span className="nav-item block group-hover:text-white">{d.name}</span>
                  <span className="meta block text-dim">{formatDate(d.releaseAt)}</span>
                </span>
                <span className="stamp text-muted shrink-0">{STATUS_LABEL[d.status]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Fonctionnement ───────────────────────────────────── */}
      <section className="pt-20 max-w-3xl">
        <h2 className="page-title mb-8">Fonctionnement</h2>
        <ul className="space-y-3">
          {[
            'Chaque drop est produit en série fermée.',
            'Aucun réassort, aucune réédition : ce qui part ne revient pas.',
            'La date est annoncée à l’avance par mail et sur Instagram.',
            'Expédition depuis Genève sous 48 heures ouvrées après clôture.',
            'Trente jours pour renvoyer une pièce non portée.',
          ].map((line) => (
            <li key={line} className="flex gap-3">
              <span className="text-dim shrink-0" aria-hidden>
                •
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <p className="meta text-dim mt-10">
          Voir les{' '}
          <Link href="/info" className="link-accent">
            conditions complètes
          </Link>
        </p>
      </section>

      <p className="meta text-dim text-center pt-24">
        Copyright © {new Date().getFullYear()}, Tempered · TTP
      </p>
    </Shell>
  )
}
