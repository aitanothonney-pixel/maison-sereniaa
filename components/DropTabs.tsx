'use client'

import { useState } from 'react'
import PieceCard from './PieceCard'
import { drops, Drop } from '@/lib/drops'

type Tab = { key: string; label: string; isNew?: boolean }

const ALL = 'tout'

/**
 * Onglets au-dessus de la grille. Le filtrage se fait en mémoire :
 * le catalogue est statique et tient largement en une page.
 */
export default function DropTabs() {
  const [active, setActive] = useState(ALL)

  const tabs: Tab[] = [
    { key: ALL, label: 'Tout' },
    ...drops.map((d) => ({
      key: d.id,
      label: d.name,
      isNew: d.status === 'upcoming',
    })),
  ]

  const visible: Drop[] = active === ALL ? drops : drops.filter((d) => d.id === active)
  const entries = visible.flatMap((d) =>
    d.pieces.map((piece) => ({ piece, dropId: d.id, status: d.status }))
  )

  return (
    <section className="pt-14 sm:pt-20">
      {/* Onglets */}
      <div className="px-5 lg:px-8 border-b border-line">
        <div className="flex items-center gap-7 overflow-x-auto" role="tablist">
          {tabs.map((t) => {
            const isActive = active === t.key
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.key)}
                className={`ui-label whitespace-nowrap pb-3 -mb-px border-b-2 transition-colors ${
                  isActive ? 'border-foreground' : 'border-transparent text-muted hover:text-foreground'
                }`}
              >
                {t.label}
                {t.isNew && <span className="sup-new">Nouveau</span>}
              </button>
            )
          })}
        </div>
      </div>

      {/* Grille */}
      <div className="px-5 lg:px-8 pt-8">
        {entries.length === 0 ? (
          <p className="text-muted text-[13px] py-16">Aucune pièce dans cette sélection.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
            {entries.map(({ piece, dropId, status }, i) => (
              <PieceCard
                key={`${dropId}-${piece.name}`}
                piece={piece}
                dropId={dropId}
                status={status}
                priority={i < 5}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
