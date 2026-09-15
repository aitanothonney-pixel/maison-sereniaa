'use client'

import { useState, useEffect } from 'react'

type Left = { days: number; hours: number; mins: number; secs: number } | null

function computeLeft(target: number): Left {
  const diff = target - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    mins: Math.floor(diff / 60000) % 60,
    secs: Math.floor(diff / 1000) % 60,
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

export default function DropCountdown({ releaseAt }: { releaseAt: string }) {
  const target = new Date(releaseAt).getTime()

  // Rendu différé : l'heure du serveur et celle du client diffèrent,
  // calculer au premier rendu casserait l'hydratation.
  const [left, setLeft] = useState<Left>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setLeft(computeLeft(target))
    const id = setInterval(() => setLeft(computeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = left
    ? [
        { v: pad(left.days), l: 'jours' },
        { v: pad(left.hours), l: 'heures' },
        { v: pad(left.mins), l: 'min' },
        { v: pad(left.secs), l: 'sec' },
      ]
    : null

  if (mounted && !left) {
    return (
      <p className="text-3xl sm:text-5xl tabular-nums tracking-[0.1em]" role="status">
        00:00:00:00
      </p>
    )
  }

  return (
    // Hauteur réservée avant l'hydratation pour éviter un saut de mise en page.
    <div className="flex items-start gap-5 sm:gap-8 min-h-[60px] sm:min-h-[76px]" role="timer">
      {units?.map((u) => (
        <div key={u.l}>
          <span className="block text-3xl sm:text-5xl tabular-nums leading-none">{u.v}</span>
          <span className="meta block mt-2 text-dim">{u.l}</span>
        </div>
      ))}
    </div>
  )
}
