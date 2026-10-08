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
      <header className="bg-background border-b border-line sticky top-0 z-40">
        <div className="flex flex-col items-center justify-center px-5 lg:px-8 py-4 min-h-20">
          {/* Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 mb-2">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm tracking-wide hover:opacity-60 transition-opacity font-medium"
                style={{ fontFamily: 'var(--font-nav)' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className="lg:hidden absolute left-5 top-1/2 -translate-y-1/2 flex flex-col gap-[5px] py-3 -my-3"
          >
            <span className="block h-[2px] w-6 bg-foreground" />
            <span className="block h-[2px] w-6 bg-foreground" />
            <span className="block h-[2px] w-4 bg-foreground" />
          </button>

          {/* Logo — centré */}
          <Link href="/" aria-label="Tempered — accueil" className="py-1 -my-1">
            <Image
              src="https://i.ibb.co/YBWh6wbN/FEB407-B9-897-E-409-F-BE5-F-41-AE612-E83-FF.png"
              alt="Tempered logo"
              width={170}
              height={56}
              unoptimized
              quality={100}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Icônes — centrées en bas, ou à droite sur desktop */}
          <div className="flex items-center justify-center gap-5 mt-2 lg:absolute lg:right-5 lg:top-1/2 lg:-translate-y-1/2 lg:mt-0">
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
          <div className="flex items-center justify-between h-20 px-5 border-b border-line">
            <Image
              src="https://i.ibb.co/YBWh6wbN/FEB407-B9-897-E-409-F-BE5-F-41-AE612-E83-FF.png"
              alt="Tempered logo"
              width={140}
              height={48}
              unoptimized
              quality={100}
              priority
              style={{ objectFit: 'contain' }}
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
