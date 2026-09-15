import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import DropCountdown from '@/components/DropCountdown'
import NotifyForm from '@/components/NotifyForm'
import { drops, getDrop, STATUS_LABEL, formatPrice, formatDate } from '@/lib/drops'

export function generateStaticParams() {
  return drops.map((d) => ({ id: d.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const drop = getDrop(id)
  if (!drop) return { title: 'Drop introuvable' }
  return { title: `Drop ${drop.number} — ${drop.name}`, description: drop.statement }
}

export default async function DropPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const drop = getDrop(id)
  if (!drop) notFound()

  const isUpcoming = drop.status === 'upcoming'
  const isSoldOut = drop.status === 'sold-out'

  return (
    <>
      <Nav current="drops" />

      <main>
        {/* ── Ouverture ────────────────────────────────────────── */}
        <section className="relative min-h-[62vh] flex flex-col justify-end overflow-hidden">
          <Image
            src={drop.cover}
            alt=""
            fill
            sizes="100vw"
            preload
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

          <div className="relative px-5 sm:px-8 pb-12 pt-20">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className={`stamp ${isSoldOut ? 'text-muted' : 'text-foreground'}`}>
                {STATUS_LABEL[drop.status]}
              </span>
              <span className="tech">Drop {drop.number}</span>
              <span className="tech text-subtle">{formatDate(drop.releaseAt)}</span>
            </div>

            <h1 className="headline text-[16vw] sm:text-[11vw] lg:text-[128px] mb-8">
              {drop.name}
            </h1>

            <p className="text-[13px] sm:text-[15px] text-muted leading-relaxed max-w-lg">
              {drop.statement}
            </p>
          </div>
        </section>

        {/* ── Compte à rebours, uniquement si le drop est à venir ─ */}
        {isUpcoming && (
          <section className="px-5 sm:px-8 pt-16 border-t border-line">
            <p className="tech mb-4">Ouverture dans</p>
            <div className="mb-10">
              <DropCountdown releaseAt={drop.releaseAt} />
            </div>
            <NotifyForm />
          </section>
        )}

        {/* ── Pièces ───────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex items-baseline justify-between gap-6 mb-10">
            <h2 className="headline text-[10vw] sm:text-[6vw] lg:text-[56px]">Contenu</h2>
            <p className="tech shrink-0">
              {drop.pieces.length} {drop.pieces.length > 1 ? 'pièces' : 'pièce'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
            {drop.pieces.map((piece) => (
              <article key={piece.name}>
                <div className="relative aspect-[4/5] bg-[#0d0d0d] overflow-hidden mb-4">
                  <Image
                    src={piece.image}
                    alt={piece.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover ${isSoldOut ? 'opacity-40 grayscale' : 'opacity-85'}`}
                  />
                  {isSoldOut && (
                    <span className="stamp absolute top-4 left-4 text-foreground bg-black">
                      Épuisé
                    </span>
                  )}
                </div>

                <h3 className="headline text-[15px] mb-2">{piece.name}</h3>
                <p className="headline text-[13px] tabular-nums mb-3">
                  {formatPrice(piece.price)}
                </p>
                <p className="tech text-subtle">
                  {piece.colors.join(' / ')} · {piece.sizes.join(' ')}
                </p>
              </article>
            ))}
          </div>

          {/* Pas de panier : le site annonce, il ne vend pas. */}
          <p className="tech text-subtle mt-12 max-w-md leading-relaxed">
            {isUpcoming
              ? 'Les prix et les tailles sont donnés à titre indicatif. La vente ouvre à la date annoncée.'
              : 'Ce drop est clos. Aucun réassort n’est prévu.'}
          </p>
        </section>

        <div className="px-5 sm:px-8 pt-16">
          <Link href="/drops" className="tech link-underline hover:text-foreground">
            ← Tous les drops
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
