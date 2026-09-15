'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const NAV = [
  { label: 'Boutique', href: '/boutique' },
  { label: 'Nouveautés', href: '/boutique?filtre=nouveautes' },
  { label: 'Livraison & retours', href: '/a-propos' },
  { label: 'Contact', href: '/a-propos' },
]

export default function Header({
  /** Pose le header par-dessus le visuel d'ouverture, en blanc. */
  overlay = false,
}: {
  overlay?: boolean
}) {
  const [menuOpen, setMenuOpen] = useState(false)

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

  const tone = overlay ? 'text-white' : 'text-foreground'
  const shell = overlay
    ? 'absolute top-0 left-0 right-0 z-30'
    : 'relative bg-background border-b border-line'

  const linkClass = `headline text-[12px] tracking-[0.01em] hover:opacity-60 transition-opacity`

  return (
    <>
      <header className={shell}>
        <div className="px-5 sm:px-8">
          <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-3 items-center h-16 gap-4">
            {/* Gauche — navigation */}
            <nav className={`hidden lg:flex items-center gap-7 ${tone}`}>
              {NAV.map((item) => (
                <Link key={item.label} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className={`lg:hidden flex flex-col gap-[5px] w-6 ${tone}`}
            >
              <span className="block h-[2px] w-6 bg-current" />
              <span className="block h-[2px] w-6 bg-current" />
              <span className="block h-[2px] w-4 bg-current" />
            </button>

            {/* Centre — nom */}
            <div className={`flex justify-center ${tone}`}>
              <Logo size="md" />
            </div>

            {/* Droite — compte et panier */}
            <div className={`flex items-center justify-end gap-6 ${tone}`}>
              <Link href="/a-propos" className={`hidden sm:inline ${linkClass}`}>
                Compte
              </Link>
              <Link href="/panier" className={linkClass}>
                Panier (0)
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Panneau mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col lg:hidden">
          <div className="flex items-center justify-between h-16 px-5 border-b border-line">
            <Logo size="md" onClick={() => setMenuOpen(false)} />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
              className="headline text-[12px]"
            >
              Fermer
            </button>
          </div>

          <nav className="flex flex-col px-5 pt-10 gap-6">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="headline text-3xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto px-5 pb-8">
            <Link
              href="/panier"
              onClick={() => setMenuOpen(false)}
              className="headline text-[12px]"
            >
              Panier (0)
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
