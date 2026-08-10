'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Heart, ShoppingBag, ChevronRight } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { useAnnouncementBarVisible } from '@/components/AnnouncementBar';
import { products } from '@/lib/products';

interface HeaderPremiumProps {
  /** Number of items in the cart — drives the gold badge. */
  cartCount?: number;
  /** True on pages whose first section is a full-bleed hero: the header
   *  starts transparent and turns white once the user scrolls. */
  overHero?: boolean;
}

const CATEGORY_LINKS = [
  { label: 'Running', desc: 'Chaussures de course', href: '/shop?category=running' },
  { label: 'Basketball', desc: 'Performance sur parquet', href: '/shop?category=basketball' },
  { label: 'Casual', desc: 'Sneakers lifestyle', href: '/shop?category=casual' },
  { label: 'T-Shirts', desc: 'Essentiels & technique', href: '/shop?category=tshirt' },
  { label: 'Hoodies', desc: 'Sweats & polaires', href: '/shop?category=hoodie' },
  { label: 'Accessoires', desc: 'Sacs, casquettes, montres', href: '/shop?category=accessories' },
];

// ─── Side Menu Drawer ─────────────────────────────────────────────────────────

function SideMenuDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[90]"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-0 top-0 bottom-0 w-[86vw] max-w-sm bg-white z-[95] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-neutral-100">
              <Logo size="sm" onClick={onClose} />
              <button
                onClick={onClose}
                aria-label="Fermer le menu"
                className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-7">
              {/* ACCUEIL */}
              <Link
                href="/"
                onClick={onClose}
                className="block text-sm font-medium text-black hover:text-neutral-500 transition-colors mb-7"
              >
                Accueil
              </Link>

              {/* NOS COLLECTIONS */}
              <div className="mb-8">
                <p className="text-[10px] tracking-[0.35em] uppercase text-neutral-400 mb-5">
                  Nos collections
                </p>
                <ul className="space-y-4">
                  {CATEGORY_LINKS.map((c) => (
                    <li key={c.label}>
                      <Link
                        href={c.href}
                        onClick={onClose}
                        className="group flex items-start justify-between gap-3"
                      >
                        <span>
                          <span className="block text-sm text-black group-hover:underline">
                            {c.label}
                          </span>
                          <span className="block text-[11px] text-neutral-400">{c.desc}</span>
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-neutral-300 mt-1 group-hover:text-black transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* OFFRE EXCLUSIVE */}
              <Link
                href="/shop"
                onClick={onClose}
                className="block bg-black text-white p-5 mb-8"
              >
                <p className="text-[10px] tracking-[0.35em] uppercase text-white/60 mb-2">
                  Offre exclusive
                </p>
                <p className="text-lg mb-1" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
                  Jusqu&apos;à −60%
                </p>
                <p className="text-[11px] text-white/60">Sur la collection Performance</p>
              </Link>

              {/* AIDE & SERVICES */}
              <div className="mb-8">
                <p className="text-[10px] tracking-[0.35em] uppercase text-neutral-400 mb-4">
                  Aide &amp; Services
                </p>
                <ul className="space-y-3">
                  {[
                    { label: 'Livraison', href: '/livraison' },
                    { label: 'Retours & échanges', href: '/retours' },
                    { label: 'FAQ', href: '/faq' },
                    { label: 'Contactez-nous', href: '/contact' },
                    { label: 'À propos', href: '/a-propos' },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-sm text-neutral-600 hover:text-black transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-100 px-6 py-5">
              <p className="text-[11px] text-neutral-500">Livraison offerte dès 80 CHF</p>
              <p className="text-[11px] text-neutral-400 mt-1.5">© 2026 in &amp; Co</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export default function HeaderPremium({ cartCount = 0, overHero = false }: HeaderPremiumProps) {
  const hasBar = useAnnouncementBarVisible();
  const [scrolled, setScrolled] = useState(!overHero);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQ, setSearchQ] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const searchWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [overHero]);

  useEffect(() => {
    if (!searchFocused) return;
    const handleClick = (e: MouseEvent) => {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [searchFocused]);

  const hoverBg = scrolled ? 'hover:bg-black/5' : 'hover:bg-white/15';
  const textColor = scrolled ? 'text-black' : 'text-white';
  const iconColor = scrolled ? 'text-black' : 'text-white';

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${hasBar ? 'top-10' : 'top-0'} ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-3 items-center h-16 lg:h-[68px]">
          {/* LEFT — Menu + Search */}
          <div className="flex items-center gap-2 lg:gap-3">
            <button
              onClick={() => setDrawerOpen(true)}
              className={`flex items-center gap-2 px-2.5 py-2 transition-colors ${hoverBg}`}
              aria-label="Menu"
            >
              <span className="flex flex-col gap-[3px]">
                <span className={`block w-4 h-[1.5px] ${scrolled ? 'bg-black' : 'bg-white'}`} />
                <span className={`block w-4 h-[1.5px] ${scrolled ? 'bg-black' : 'bg-white'}`} />
                <span className={`block w-4 h-[1.5px] ${scrolled ? 'bg-black' : 'bg-white'}`} />
              </span>
              <span
                className={`hidden sm:inline text-[11px] tracking-[0.25em] uppercase font-medium ${textColor}`}
              >
                Menu
              </span>
            </button>

            {/* Inline search — desktop only */}
            <div ref={searchWrapRef} className="hidden lg:block relative">
              <div
                className={`flex items-center gap-2 px-3 py-2 border transition-colors ${
                  scrolled
                    ? 'border-neutral-200 bg-white hover:border-neutral-300'
                    : 'border-white/25 bg-white/5 hover:bg-white/10'
                }`}
              >
                <Search className={`w-4 h-4 ${scrolled ? 'text-neutral-400' : 'text-white/70'}`} />
                <input
                  type="text"
                  placeholder="Que recherchez-vous ?"
                  value={searchQ}
                  onFocus={() => setSearchFocused(true)}
                  onChange={(e) => {
                    setSearchQ(e.target.value);
                    setSearchFocused(true);
                  }}
                  className={`w-52 xl:w-64 text-xs outline-none bg-transparent ${
                    scrolled
                      ? 'text-black placeholder:text-neutral-400'
                      : 'text-white placeholder:text-white/60'
                  }`}
                />
                {searchQ && (
                  <button onClick={() => setSearchQ('')} aria-label="Effacer">
                    <X className={`w-3.5 h-3.5 ${scrolled ? 'text-neutral-400' : 'text-white/60'}`} />
                  </button>
                )}
              </div>

              {/* Suggestions dropdown */}
              <AnimatePresence>
                {searchFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-[420px] max-w-[92vw] bg-white border border-neutral-100 shadow-xl z-50"
                  >
                    <div className="p-4">
                      {!searchQ && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {['Running', 'Basketball', 'Hoodie', 'T-Shirt', 'Sneakers'].map((s) => (
                            <button
                              key={s}
                              onClick={() => setSearchQ(s)}
                              className="text-[11px] border border-neutral-200 rounded-full px-3 py-1 hover:border-black hover:text-black transition-colors text-neutral-500"
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}
                      {(() => {
                        const q = searchQ.toLowerCase().trim();
                        const isMatch = (p: (typeof products)[0]) => {
                          if (!q) return false;
                          const hay = `${p.name} ${p.category} ${p.subcategory}`.toLowerCase();
                          if (hay.includes(q)) return true;
                          return q.split(' ').every((word) => hay.includes(word));
                        };
                        const hasQuery = q.length >= 1;
                        const sorted = hasQuery
                          ? [...products].sort((a, b) => (isMatch(b) ? 1 : 0) - (isMatch(a) ? 1 : 0))
                          : products;
                        return (
                          <div className="space-y-1 max-h-80 overflow-y-auto">
                            {sorted.slice(0, 20).map((p) => {
                              const matched = hasQuery && isMatch(p);
                              const dimmed = hasQuery && !matched;
                              return (
                                <Link
                                  key={p.id}
                                  href={`/product/${p.id}`}
                                  onClick={() => {
                                    setSearchFocused(false);
                                    setSearchQ('');
                                  }}
                                  className={`flex items-center gap-3 p-2 transition-all duration-200 group ${
                                    matched ? 'bg-neutral-50 ring-1 ring-black/10' : 'hover:bg-neutral-50'
                                  } ${dimmed ? 'opacity-30' : 'opacity-100'}`}
                                >
                                  <div
                                    className={`w-11 h-11 overflow-hidden bg-white border flex-shrink-0 ${
                                      matched ? 'border-neutral-300' : 'border-neutral-100'
                                    }`}
                                  >
                                    <img
                                      src={p.images[0]}
                                      alt={p.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p
                                      className={`text-sm truncate group-hover:underline ${
                                        matched ? 'font-bold text-black' : 'font-semibold text-black'
                                      }`}
                                    >
                                      {p.name}
                                    </p>
                                    <p className="text-[11px] text-neutral-400 capitalize">{p.subcategory}</p>
                                  </div>
                                  <p className="text-sm font-bold text-black flex-shrink-0 price-luxe">
                                    {p.price.toFixed(2)} CHF
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        );
                      })()}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CENTER — Logo */}
          <div className="flex justify-center">
            <Logo color={scrolled ? 'black' : 'white'} size="md" />
          </div>

          {/* RIGHT — Contact + wishlist + cart */}
          <div className="flex items-center gap-1 justify-end">
            <Link
              href="/contact"
              className={`hidden lg:inline-block text-[11px] tracking-[0.25em] uppercase font-medium px-3 py-2 transition-colors ${textColor} ${hoverBg}`}
            >
              Contactez-nous
            </Link>

            <Link
              href="/shop"
              className={`relative w-9 h-9 items-center justify-center border transition-all duration-300 hidden sm:flex ${
                scrolled ? 'border-black/15 hover:border-black' : 'border-white/30 hover:border-white'
              }`}
              aria-label="Favoris"
            >
              <Heart className={`w-4 h-4 ${iconColor}`} strokeWidth={1.3} />
            </Link>

            <Link
              href="/cart"
              className={`relative w-9 h-9 flex items-center justify-center border transition-all duration-300 ${
                scrolled ? 'border-black/15 hover:border-black' : 'border-white/30 hover:border-white'
              }`}
              aria-label="Panier"
            >
              <ShoppingBag className={`w-4 h-4 ${iconColor}`} strokeWidth={1.5} />
              {mounted && cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none"
                  style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #A07840 100%)' }}
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Spacer so page content clears the fixed header on non-hero pages */}
      {!overHero && <div className={hasBar ? 'h-[108px]' : 'h-[68px]'} />}

      <SideMenuDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
