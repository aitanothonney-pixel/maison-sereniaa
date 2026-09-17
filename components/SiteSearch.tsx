'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { products, fromPrice } from '@/lib/products'
import { IconSearch } from '@/components/Icons'

export default function SiteSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const trimmed = query.trim().toLowerCase()

  const results = useMemo(() => {
    if (!trimmed) return products
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(trimmed) ||
        p.color.toLowerCase().includes(trimmed) ||
        p.category.toLowerCase().includes(trimmed)
    )
  }, [trimmed])

  const close = () => {
    setOpen(false)
    setQuery('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (results.length > 0) {
      const target = results[0].id
      close()
      router.push(`/shop/${target}`)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Rechercher"
        className="hover:opacity-60 transition-opacity"
      >
        <IconSearch />
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={close} />

          <div className="relative bg-background border-b border-line">
            <form onSubmit={handleSubmit} className="px-5 lg:px-8 pt-6 pb-5">
              <div className="flex items-center gap-4 border-b border-foreground pb-3">
                <IconSearch />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Rechercher une pièce, une couleur…"
                  className="search-field flex-1 bg-transparent text-lg placeholder:text-dim"
                />
                <button
                  type="button"
                  onClick={close}
                  className="ui-label text-muted hover:text-foreground transition-colors shrink-0"
                >
                  Fermer
                </button>
              </div>
            </form>

            <div className="px-5 lg:px-8 pb-8 max-h-[60vh] overflow-y-auto">
              <p className="ui-label text-muted mb-5">
                {trimmed
                  ? `${results.length} résultat${results.length > 1 ? 's' : ''}`
                  : 'Toutes les pièces'}
              </p>

              {results.length === 0 ? (
                <p className="text-sm text-muted pb-4">
                  Aucune pièce ne correspond à « {query.trim()} ».
                </p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                  {results.map((p) => (
                    <Link key={p.id} href={`/shop/${p.id}`} onClick={close} className="group">
                      <div className="relative bg-surface overflow-hidden mb-3 aspect-square">
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="ui-label text-sm mb-1 group-hover:opacity-60 transition-opacity">
                        {p.name}
                      </h3>
                      <div className="flex justify-between items-baseline">
                        <p className="text-sm font-bold">Dès {fromPrice(p)} CHF</p>
                        <p className="text-xs text-muted">{p.color}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
