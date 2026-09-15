import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import DropCountdown from '@/components/DropCountdown'
import NotifyForm from '@/components/NotifyForm'
import PieceCard from '@/components/PieceCard'
import { drops, getDrop, STATUS_LABEL, formatDate } from '@/lib/drops'

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

  return (
    <>
      <Marquee />
      <SiteHeader />

      {/* Visuel d'ouverture pleine largeur */}
      <section className="relative w-full h-[62vh] min-h-[380px] bg-surface">
        <Image
          src={drop.cover}
          alt=""
          fill
          sizes="100vw"
          preload
          className={`object-cover ${drop.status === 'sold-out' ? 'opacity-70' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white">
          <p className="ui-label mb-2 tracking-[0.06em]">
            Drop {drop.number} · {formatDate(drop.releaseAt)} · {STATUS_LABEL[drop.status]}
          </p>
          <h1 className="display text-[13vw] sm:text-[7vw] leading-[0.88]">{drop.name}</h1>
        </div>
      </section>

      <main className="px-5 lg:px-8 pt-12">
        <p className="text-[14px] leading-[1.8] max-w-xl mb-14">{drop.statement}</p>

        {/* Compte à rebours : seulement si le drop n'est pas encore ouvert */}
        {isUpcoming && (
          <section className="border-t border-line pt-10 mb-16">
            <p className="ui-label text-muted mb-5">Ouverture dans</p>
            <div className="mb-9">
              <DropCountdown releaseAt={drop.releaseAt} />
            </div>
            <NotifyForm />
          </section>
        )}

        {/* Contenu du drop */}
        <section className="border-t border-line pt-10">
          <div className="flex items-baseline justify-between gap-6 mb-8">
            <h2 className="display text-2xl sm:text-3xl">Contenu</h2>
            <p className="ui-label text-muted shrink-0">
              {drop.pieces.length} {drop.pieces.length > 1 ? 'pièces' : 'pièce'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
            {drop.pieces.map((piece, i) => (
              <PieceCard
                key={piece.name}
                piece={piece}
                dropId={drop.id}
                status={drop.status}
                priority={i < 5}
              />
            ))}
          </div>

          {/* Pas de panier : le site annonce, il ne vend pas. */}
          <p className="text-[13px] text-muted mt-10 max-w-md leading-[1.7]">
            {isUpcoming
              ? 'Prix et tailles donnés à titre indicatif. La vente ouvre à la date annoncée.'
              : 'Ce drop est clos. Aucun réassort n’est prévu.'}
          </p>
        </section>

        <div className="pt-12">
          <Link href="/drops" className="ui-label text-muted hover:text-foreground transition-colors">
            ← Tous les drops
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
