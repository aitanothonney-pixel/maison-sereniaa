'use client'

import { useState, useEffect } from 'react'

/** Fenêtre glissante : le compte à rebours ne tombe jamais à zéro. */
const WINDOW_HOURS = 48
const ANCHOR = Date.UTC(2026, 0, 1)

function remaining(): { days: number; hours: number; mins: number; secs: number } {
  const period = WINDOW_HOURS * 3600 * 1000
  const elapsed = (Date.now() - ANCHOR) % period
  const left = period - elapsed

  return {
    days: Math.floor(left / 86400000),
    hours: Math.floor(left / 3600000) % 24,
    mins: Math.floor(left / 60000) % 60,
    secs: Math.floor(left / 1000) % 60,
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

export default function CountdownBar() {
  const [visible, setVisible] = useState(true)
  // Rendu différé : l'heure du serveur et celle du client diffèrent,
  // afficher le compte à rebours au premier rendu casserait l'hydratation.
  const [time, setTime] = useState<ReturnType<typeof remaining> | null>(null)

  useEffect(() => {
    setTime(remaining())
    const id = setInterval(() => setTime(remaining()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!visible) return null

  const units = time
    ? [
        { v: pad(time.days), l: 'jours' },
        { v: pad(time.hours), l: 'heures' },
        { v: pad(time.mins), l: 'min' },
        { v: pad(time.secs), l: 'sec' },
      ]
    : null

  return (
    <div className="relative bg-foreground text-background">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-1.5 px-12 py-3.5">
        <div className="text-center sm:text-right">
          <p className="headline text-lg sm:text-xl leading-none">Livraison offerte</p>
          <p className="text-[11px] text-background/60 mt-1">Se termine dans :</p>
        </div>

        {/* Hauteur réservée même avant l'hydratation, pour éviter un saut. */}
        <div className="flex items-start gap-3 sm:gap-4 min-h-[38px]">
          {units?.map((u, i) => (
            <div key={u.l} className="flex items-start gap-3 sm:gap-4">
              <div className="text-center min-w-[30px]">
                <p className="headline text-xl sm:text-2xl leading-none tabular-nums">{u.v}</p>
                <p className="text-[9px] text-background/50 mt-1 lowercase">{u.l}</p>
              </div>
              {i < units.length - 1 && (
                <span className="headline text-lg sm:text-xl leading-none pt-px" aria-hidden>
                  :
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setVisible(false)}
        aria-label="Fermer"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-background/50 hover:text-background transition-colors text-xl leading-none"
      >
        ×
      </button>
    </div>
  )
}
