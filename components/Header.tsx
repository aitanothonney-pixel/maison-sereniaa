'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const NAV = [
  { label: 'Boutique', href: '/boutique' },
  { label: 'Nouveautés', href: '/boutique?filtre=nouveautes' },
  { label: 'À propos', href: '/a-propos' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Verrouille le défilement du corps tant que le panneau mobile est ouvert.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      {/* Bandeau de service — une seule ligne, sans animation. */}
      <div className="border-b border-line">
        <p className="label text-center py-2.5 px-4">
          Livraison offerte dès 150 CHF · Retours sous 30 jours
        </p>
      </div>

      <header className="sticky top-0 z-40 bg-background border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-14 sm:h-16">
            {/* Gauche — navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="link-underline text-[12px] tracking-[0.06em]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="md:hidden flex flex-col gap-[5px] w-6 justify-self-start"
            >
              <span className="block h-px w-5 bg-foreground" />
              <span className="block h-px w-5 bg-foreground" />
            </button>

            {/* Centre — nom */}
            <Logo size="md" />

            {/* Droite — panier */}
            <div className="flex items-center justify-end gap-6">
              <Link
                href="/boutique"
                className="hidden sm:inline link-underline text-[12px] tracking-[0.06em]"
              >
                Rechercher
              </Link>
              <Link href="/panier" className="link-underline text-[12px] tracking-[0.06em]">
                Panier <span className="text-muted">(0)</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Panneau mobile — plein écran, sans fioriture. */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden flex flex-col">
          <div className="flex items-center justify-between h-14 px-5 border-b border-line">
            <Logo size="md" onClick={() => setMenuOpen(false)} />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
              className="text-[12px] tracking-[0.06em]"
            >
              Fermer
            </button>
          </div>

          <nav className="flex flex-col px-5 pt-10 gap-7">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-light"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto px-5 pb-8">
            <p className="label">Livraison offerte dès 150 CHF</p>
          </div>
        </div>
      )}
    </>
  )
}
