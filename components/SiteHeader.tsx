'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CartSlideOver from '@/components/CartSlideOver'
import SiteSearch from '@/components/SiteSearch'
import { IconInstagram } from '@/components/Icons'

const NAV = [
  { label: 'Shop now', href: '/shop' },
  { label: 'Track your order', href: '/suivi' },
  { label: 'Refunds/Returns', href: '/retours' },
  { label: 'Contact us', href: '/contact' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

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
            className="lg:hidden flex flex-col gap-[5px] justify-self-start py-3 -my-3 pr-3 -mr-3"
          >
            <span className="block h-[2px] w-6 bg-foreground" />
            <span className="block h-[2px] w-6 bg-foreground" />
            <span className="block h-[2px] w-4 bg-foreground" />
          </button>

          {/* Centre — logo */}
          <Link href="/" aria-label="Tempered — accueil" className="justify-self-center py-2 -my-2">
            <Image
              src="https://ibb.co/JjdHNgCc"
              alt="Tempered logo"
              width={120}
              height={40}
              unoptimized
              quality={100}
            />
          </Link>

          {/* Droite — recherche, panier, réseaux */}
          <div className="flex items-center justify-end gap-5">
            <SiteSearch />
            <CartSlideOver />
            <a
              href="https://www.instagram.com/temperedgarments/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 -m-2.5 hover:opacity-60 transition-opacity"
            >
              <IconInstagram />
            </a>
          </div>
        </div>
      </header>

      {/* Panneau mobile */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden flex flex-col">
          <div className="flex items-center justify-between h-16 px-5 border-b border-line">
            <Image
              src="https://ibb.co/JjdHNgCc"
              alt="Tempered logo"
              width={100}
              height={35}
              unoptimized
              quality={100}
            />
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
                className="display text-3xl py-1"
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
