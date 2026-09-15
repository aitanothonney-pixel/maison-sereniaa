import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import DropCountdown from '@/components/DropCountdown'
import NotifyForm from '@/components/NotifyForm'
import { drops, featuredDrop, STATUS_LABEL, formatDate } from '@/lib/drops'

export default function Home() {
  const next = featuredDrop()
  const past = drops.filter((d) => d.id !== next.id)

  return (
    <>
      <Nav />

      <main>
        {/* ── Prochain drop ────────────────────────────────────────
            Toute la page d'accueil tient sur une question : quand.
            ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-end overflow-hidden">
          <Image
            src={next.cover}
            alt=""
            fill
            sizes="100vw"
            preload
            className="object-cover object-center opacity-45"
          />
          {/* Assombrit le bas : le compteur et le formulaire s'y posent. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

          <div className="relative px-5 sm:px-8 pb-12 sm:pb-16 pt-24">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="stamp">{STATUS_LABEL[next.status]}</span>
              <span className="tech">Drop {next.number}</span>
              <span className="tech text-subtle">{formatDate(next.releaseAt)}</span>
            </div>

            <h1 className="headline text-[18vw] sm:text-[13vw] lg:text-[150px] mb-8">
              {next.name}
            </h1>

            <p className="text-[13px] sm:text-[15px] text-muted leading-relaxed max-w-lg mb-12">
              {next.statement}
            </p>

            <p className="tech mb-4">Ouverture dans</p>
            <div className="mb-12">
              <DropCountdown releaseAt={next.releaseAt} />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-16">
              <NotifyForm />
              <Link
                href={`/drops/${next.id}`}
                className="headline inline-block self-start border border-foreground text-[12px] px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
              >
                Voir le drop
              </Link>
            </div>
          </div>
        </section>

        {/* ── Drops passés ─────────────────────────────────────── */}
        <section className="px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex items-baseline justify-between gap-6 mb-8">
            <h2 className="headline text-[10vw] sm:text-[6vw] lg:text-[56px]">Archives</h2>
            <Link href="/drops" className="tech link-underline hover:text-foreground shrink-0">
              Tout voir
            </Link>
          </div>

          <ul className="border-t border-line">
            {past.map((d) => (
              <li key={d.id}>
                <Link
                  href={`/drops/${d.id}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-8 py-7 border-b border-line"
                >
                  <span className="tech text-subtle w-10">{d.number}</span>
                  <span className="min-w-0">
                    <span className="headline block text-2xl sm:text-4xl group-hover:opacity-60 transition-opacity">
                      {d.name}
                    </span>
                    <span className="tech block mt-2">{formatDate(d.releaseAt)}</span>
                  </span>
                  <span className="stamp text-muted shrink-0">{STATUS_LABEL[d.status]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Fonctionnement ───────────────────────────────────── */}
        <section className="px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 border-t border-line pt-10">
            {[
              {
                t: 'Quantités fixes',
                d: 'Chaque drop est produit en série fermée. Ce qui part ne revient pas.',
              },
              {
                t: 'Aucun réassort',
                d: 'Pas de réédition, pas de retour en stock. La pièce vit sur une seule fenêtre.',
              },
              {
                t: 'Annonce en amont',
                d: 'Date communiquée à l’avance par mail et sur Instagram. Rien d’autre à surveiller.',
              },
            ].map((item) => (
              <div key={item.t}>
                <p className="headline text-[14px] mb-3">{item.t}</p>
                <p className="text-[12px] text-muted leading-[1.8]">{item.d}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
