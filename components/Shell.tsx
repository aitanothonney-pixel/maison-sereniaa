'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { drops, featuredDrop } from '@/lib/drops'

/** Compteur compact affiché dans la barre utilitaire. */
function MiniCountdown({ releaseAt }: { releaseAt: string }) {
  const target = new Date(releaseAt).getTime()
  const [text, setText] = useState<string | null>(null)

  // Calculé après montage : l'heure du serveur et celle du client
  // diffèrent et casseraient l'hydratation.
  useEffect(() => {
    const tick = () => {
      const diff = target - Date.now()
      if (diff <= 0) return setText('00:00:00:00')
      const p = (n: number) => String(n).padStart(2, '0')
      setText(
        [
          p(Math.floor(diff / 86400000)),
          p(Math.floor(diff / 3600000) % 24),
          p(Math.floor(diff / 60000) % 60),
          p(Math.floor(diff / 1000) % 60),
        ].join(':')
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <span className="meta text-foreground tabular-nums">{text ?? '--:--:--:--'}</span>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="w-[18px] h-[18px]"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const secondary = [
    { label: 'Tous les drops', href: '/drops' },
    { label: 'Info', href: '/info' },
    { label: 'Livraison', href: '/info' },
    { label: 'Conditions', href: '/info' },
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Nom de la marque, en blanc comme point d'ancrage visuel */}
      <Link
        href="/"
        onClick={onNavigate}
        aria-label="Tempered — accueil"
        className="block mb-12"
      >
        <span className="block text-white text-[19px] tracking-[0.3em] uppercase leading-none">
          Tempered
        </span>
        <span className="meta block mt-2 text-dim">Trust the process</span>
      </Link>

      {/* Les drops tiennent lieu de rayons */}
      <nav className="flex flex-col items-start">
        {drops.map((d) => (
          <Link
            key={d.id}
            href={`/drops/${d.id}`}
            onClick={onNavigate}
            className="nav-item"
          >
            {d.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-14">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-block mb-4 text-foreground hover:text-white transition-colors"
        >
          <InstagramIcon />
        </a>

        <nav className="flex flex-col items-start">
          {secondary.map((s) => (
            <Link key={s.label} href={s.href} onClick={onNavigate} className="nav-item">
              {s.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const next = featuredDrop()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Filet rouge en tête de page */}
      <div className="fixed top-0 left-0 right-0 h-[5px] bg-accent z-50" aria-hidden />

      {/* Barre utilitaire — prochain drop, pas de panier : le site ne vend pas */}
      <div className="fixed top-[5px] left-0 right-0 z-40 h-12 flex items-center justify-between lg:justify-end gap-6 px-5 lg:px-8 bg-background">
        <button
          onClick={() => setOpen(true)}
          className="meta lg:hidden text-foreground"
          aria-label="Ouvrir le menu"
        >
          Menu
        </button>

        <div className="flex items-center gap-3">
          <span className="meta hidden sm:inline">Prochain drop</span>
          <MiniCountdown releaseAt={next.releaseAt} />
        </div>
      </div>

      {/* Colonne fixe — masquée sous lg, remplacée par un panneau */}
      <aside className="hidden lg:flex fixed left-0 top-[5px] bottom-0 w-60 flex-col px-8 py-14 overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Panneau mobile */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-background lg:hidden flex flex-col px-6 py-8 overflow-y-auto">
          <button
            onClick={() => setOpen(false)}
            className="meta self-end mb-8 text-foreground"
            aria-label="Fermer le menu"
          >
            Fermer ✕
          </button>
          <SidebarContent onNavigate={() => setOpen(false)} />
        </div>
      )}

      <main className="lg:ml-60 pt-[68px] px-5 lg:px-10 pb-24">{children}</main>
    </>
  )
}
