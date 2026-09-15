import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Shell from '@/components/Shell'
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
    <Shell>
      <div className="pt-6">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className={`stamp ${isSoldOut ? 'text-muted' : 'text-foreground'}`}>
            {STATUS_LABEL[drop.status]}
          </span>
          <span className="meta">Drop {drop.number}</span>
          <span className="meta text-dim">{formatDate(drop.releaseAt)}</span>
        </div>

        <h1 className="page-title mb-8">{drop.name}</h1>

        <div className="relative w-full max-w-4xl aspect-[16/10] mb-10 overflow-hidden">
          <Image
            src={drop.cover}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            preload
            className={`object-cover ${isSoldOut ? 'opacity-45 grayscale' : 'opacity-80'}`}
          />
        </div>

        <p className="max-w-xl leading-[1.9]">{drop.statement}</p>
      </div>

      {/* Compte à rebours : seulement si le drop n'est pas encore ouvert */}
      {isUpcoming && (
        <section className="pt-14">
          <p className="meta mb-4">Ouverture dans</p>
          <div className="mb-8">
            <DropCountdown releaseAt={drop.releaseAt} />
          </div>
          <NotifyForm />
        </section>
      )}

      {/* ── Contenu du drop ──────────────────────────────────── */}
      <section className="pt-20">
        <div className="flex items-baseline justify-between gap-6 mb-8 max-w-4xl">
          <h2 className="page-title">Contenu</h2>
          <p className="meta shrink-0">
            {drop.pieces.length} {drop.pieces.length > 1 ? 'pièces' : 'pièce'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12 max-w-5xl">
          {drop.pieces.map((piece) => (
            <article key={piece.name}>
              <div className="relative aspect-[4/5] mb-4 overflow-hidden">
                <Image
                  src={piece.image}
                  alt={piece.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className={`object-cover ${isSoldOut ? 'opacity-35 grayscale' : 'opacity-80'}`}
                />
                {isSoldOut && (
                  <span className="stamp absolute top-3 left-3 bg-background">Épuisé</span>
                )}
              </div>

              <p className="nav-item">{piece.name}</p>
              <p className="tabular-nums">{formatPrice(piece.price)}</p>
              <p className="meta text-dim mt-2">
                {piece.colors.join(' / ')} · {piece.sizes.join(' ')}
              </p>
            </article>
          ))}
        </div>

        {/* Pas de panier : le site annonce, il ne vend pas. */}
        <p className="meta text-dim mt-12 max-w-md leading-[1.9]">
          {isUpcoming
            ? 'Prix et tailles donnés à titre indicatif. La vente ouvre à la date annoncée.'
            : 'Ce drop est clos. Aucun réassort n’est prévu.'}
        </p>
      </section>

      <div className="pt-16">
        <Link href="/drops" className="meta link-accent">
          ← Tous les drops
        </Link>
      </div>

      <p className="meta text-dim text-center pt-24">
        Copyright © {new Date().getFullYear()}, Tempered · TTP
      </p>
    </Shell>
  )
}
