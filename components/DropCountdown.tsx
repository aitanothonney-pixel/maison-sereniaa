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

export default function DropCountdown({
  releaseAt,
  size = 'lg',
}: {
  releaseAt: string
  size?: 'lg' | 'sm'
}) {
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
        { v: pad(left.days), l: 'j' },
        { v: pad(left.hours), l: 'h' },
        { v: pad(left.mins), l: 'm' },
        { v: pad(left.secs), l: 's' },
      ]
    : null

  // 16vw débordait de la fenêtre en 390 px : quatre unités de deux chiffres,
  // leur suffixe et les écarts dépassaient la largeur utile.
  const numClass =
    size === 'lg'
      ? 'headline text-[12vw] sm:text-[11vw] lg:text-[112px]'
      : 'headline text-3xl sm:text-4xl'

  // Hauteur réservée avant l'hydratation pour éviter un saut de mise en page.
  const reserve = size === 'lg' ? 'min-h-[18vw] sm:min-h-[12vw] lg:min-h-[120px]' : 'min-h-[44px]'

  if (mounted && !left) {
    return (
      <p className={`${numClass} ${reserve} flex items-center`} role="status">
        00:00:00:00
      </p>
    )
  }

  return (
    <div className={`flex items-start gap-3 sm:gap-7 ${reserve}`} role="timer">
      {units?.map((u) => (
        <div key={u.l} className="flex items-start">
          <span className={`${numClass} tabular-nums`}>{u.v}</span>
          <span className="tech text-subtle mt-1 ml-1">{u.l}</span>
        </div>
      ))}
    </div>
  )
}
