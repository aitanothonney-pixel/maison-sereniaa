import Image from 'next/image'
import Link from 'next/link'
import { Piece, DropStatus, formatPrice } from '@/lib/drops'

export default function PieceCard({
  piece,
  dropId,
  status,
  priority = false,
}: {
  piece: Piece
  dropId: string
  status: DropStatus
  priority?: boolean
}) {
  const soldOut = status === 'sold-out'
  const upcoming = status === 'upcoming'

  return (
    <Link href={`/drops/${dropId}`} className="group block">
      <div className="relative aspect-square bg-surface overflow-hidden mb-3">
        <Image
          src={piece.image}
          alt={piece.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          preload={priority}
          className={`object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
            soldOut ? 'opacity-55' : ''
          }`}
        />

        <div className="absolute top-3 left-3 flex flex-col items-start gap-2">
          {soldOut && <span className="badge">Épuisé</span>}
          {upcoming && <span className="badge">Bientôt</span>}
        </div>
      </div>

      <h3 className="ui-label mb-1 group-hover:opacity-60 transition-opacity">{piece.name}</h3>
      <p className="text-[13px] tabular-nums">{formatPrice(piece.price)}</p>
    </Link>
  )
}
