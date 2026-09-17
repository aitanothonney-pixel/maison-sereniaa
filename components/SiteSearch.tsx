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
          <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px] animate-veil" onClick={close} />

          <div className="relative bg-background border-b border-line animate-search">
            <div className="px-5 lg:px-8 pt-5 pb-4">
              <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center gap-4 border-b border-line pb-3">
                    <span className="text-muted shrink-0">
                      <IconSearch />
                    </span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Rechercher une pièce, une couleur…"
                      className="search-field flex-1 bg-transparent text-base placeholder:text-dim"
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

                <div className="pt-5 pb-1">
                  <p className="ui-label text-[11px] text-dim mb-1">
                    {trimmed
                      ? `${results.length} résultat${results.length > 1 ? 's' : ''}`
                      : 'Toutes les pièces'}
                  </p>

                  {results.length === 0 ? (
                    <p className="text-sm text-muted py-4">
                      Aucune pièce ne correspond à « {query.trim()} ».
                    </p>
                  ) : (
                    <ul>
                      {results.map((p) => (
                        <li key={p.id}>
                          <Link
                            href={`/shop/${p.id}`}
                            onClick={close}
                            className="flex items-center gap-4 -mx-3 px-3 py-3 hover:bg-surface transition-colors"
                          >
                            <img
                              src={p.images[0]}
                              alt=""
                              className="w-12 h-12 shrink-0 bg-surface object-cover"
                            />
                            <span className="flex-1 min-w-0">
                              <span className="ui-label block text-[13px] truncate">{p.name}</span>
                              <span className="block text-xs text-muted">{p.color}</span>
                            </span>
                            <span className="text-[13px] font-bold shrink-0">
                              Dès {fromPrice(p)} CHF
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
