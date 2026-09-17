'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { featuredDrop } from '@/lib/drops'
import CartSlideOver from '@/components/CartSlideOver'
import { IconSearch, IconMail, IconInstagram } from '@/components/Icons'

const NAV = [
  { label: 'Shop now', href: '/shop' },
  { label: 'Track your order', href: '/suivi' },
  { label: 'Refunds/Returns', href: '/retours' },
  { label: 'Contact us', href: '/contact' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
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

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus()
    }
  }, [searchOpen])

  return (
    <>
      <header className="bg-background border-b border-line">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 lg:px-8 h-16">
          {/* Gauche — navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="ui-label whitespace-nowrap hover:opacity-60 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className="lg:hidden flex flex-col gap-[5px] w-6 justify-self-start"
          >
            <span className="block h-[2px] w-6 bg-foreground" />
            <span className="block h-[2px] w-6 bg-foreground" />
            <span className="block h-[2px] w-4 bg-foreground" />
          </button>

          {/* Centre — nom */}
          <Link href="/" aria-label="Tempered — accueil" className="justify-self-center">
            <span className="display text-xl sm:text-2xl">Tempered</span>
          </Link>

          {/* Droite — pas de panier : le site n'encaisse pas */}
          <div className="flex items-center justify-end gap-5">
            <Link
              href={`/drops/${next.id}`}
              className="ui-label hidden sm:inline hover:opacity-60 transition-opacity"
            >
              Drop {next.number}
              <span className="sup-new">Bientôt</span>
            </Link>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Rechercher"
              className="hover:opacity-60 transition-opacity"
            >
              <IconSearch />
            </button>
            <CartSlideOver />
            <Link href="/contact" aria-label="Nous écrire" className="hover:opacity-60 transition-opacity">
              <IconMail />
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-60 transition-opacity"
            >
              <IconInstagram />
            </a>
          </div>
        </div>
      </header>

      {/* Barre de recherche animée */}
      {searchOpen && (
        <div className="absolute inset-x-0 top-16 bg-background border-b border-line z-40 animate-search">
          <div className="flex items-center gap-3 px-5 lg:px-8 py-4">
            <IconSearch />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="SEARCH FOR..."
              className="flex-1 bg-transparent outline-none placeholder:text-dim text-foreground ui-label"
            />
            <button
              onClick={() => setSearchOpen(false)}
              aria-label="Fermer la recherche"
              className="text-dim hover:text-foreground transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Panneau mobile */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden flex flex-col">
          <div className="flex items-center justify-between h-16 px-5 border-b border-line">
            <span className="display text-xl">Tempered</span>
            <button onClick={() => setOpen(false)} className="ui-label" aria-label="Fermer le menu">
              Fermer
            </button>
          </div>
          <nav className="flex flex-col px-5 pt-8 gap-6">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display text-3xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
