'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowLeft, Star, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import HeaderPremium from '@/components/HeaderPremium';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

// ─── Reveal wrapper ───────────────────────────────────────────────────────────

function Reveal({
  children,
  delay = 0,
  y = 32,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  /** Applied to the animated wrapper — required when the wrapper is itself a
   *  grid item, since layout classes on the child would not reach the grid. */
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── 1. Hero — split éditorial ────────────────────────────────────────────────

function HeroSplit() {
  const spotlight = [...products].sort((a, b) => b.rating - a.rating)[0];

  return (
    <section className="relative bg-[#FAF8F5]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] min-h-[calc(100vh-108px)]">
        {/* LEFT — editorial panel */}
        <div className="flex flex-col justify-center px-7 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] tracking-[0.45em] uppercase text-[#A07840] mb-7"
          >
            Édition 01 — Automne 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-black leading-[0.95] text-[13vw] sm:text-[9vw] lg:text-[5.4vw] xl:text-[76px] mb-8"
          >
            Courir.
            <br />
            <span className="italic font-normal text-neutral-400">Puis</span> recommencer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed max-w-md mb-11"
          >
            Une sélection resserrée de sneakers, de pièces techniques et
            d&apos;accessoires. Rien de superflu — seulement ce qui tient la distance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="flex flex-wrap items-center gap-3 mb-14"
          >
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 bg-black text-white text-[11px] font-semibold tracking-[0.22em] uppercase px-9 py-4 hover:bg-[#C9A96E] transition-colors"
            >
              La boutique
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/shop?category=running"
              className="text-[11px] font-semibold tracking-[0.22em] uppercase text-black border-b border-black/25 pb-1 hover:border-black transition-colors"
            >
              Voir le running
            </Link>
          </motion.div>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 max-w-md border-t border-black/10 pt-7"
          >
            {[
              { k: '49', v: 'Références' },
              { k: '4.7', v: 'Note moyenne' },
              { k: '48h', v: 'Expédition' },
            ].map((s) => (
              <div key={s.v}>
                <p className="text-2xl text-black price-luxe leading-none mb-1.5">{s.k}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">{s.v}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — image + floating product card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[62vh] lg:min-h-full overflow-hidden bg-neutral-200"
        >
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&h=1800&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          {/* Floating spotlight card */}
          {spotlight && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-5 right-5 bottom-5 sm:left-auto sm:right-8 sm:bottom-8 sm:w-[300px]"
            >
              <Link
                href={`/product/${spotlight.id}`}
                className="group block bg-white/95 backdrop-blur-md p-5 hover:bg-white transition-colors"
              >
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#A07840] mb-2.5">
                  Pièce du moment
                </p>
                <p className="font-serif font-semibold text-black text-[15px] leading-snug mb-1.5">
                  {spotlight.name}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-black price-luxe text-sm font-bold">
                    {spotlight.price.toFixed(2)} CHF
                  </span>
                  <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Marquee band ──────────────────────────────────────────────────────────

function MarqueeBand() {
  const words = ['Running', 'Basketball', 'Lifestyle', 'Training', 'Hoodies', 'Accessoires'];
  // .animate-marquee translates by -50%, so the strip must be two identical
  // halves for the loop to be seamless. Each half is doubled so a single half
  // is wider than any viewport, leaving no gap on large screens.
  const half = [...words, ...words];
  const strip = [...half, ...half];

  return (
    <div className="bg-black py-5 overflow-hidden border-y border-neutral-800">
      <div className="animate-marquee">
        {strip.map((w, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-white/85 text-[11px] tracking-[0.35em] uppercase px-8">{w}</span>
            <span className="h-1 w-1 rounded-full bg-[#C9A96E] shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── 3. Spotlight — le choix de la maison ─────────────────────────────────────

function Spotlight() {
  const hero = [...products]
    .filter((p) => p.badge === 'bestseller')
    .sort((a, b) => b.reviewCount - a.reviewCount)[0];
  if (!hero) return null;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <Link href={`/product/${hero.id}`} className="group block relative aspect-[4/5] overflow-hidden bg-neutral-50">
              <img
                src={hero.images[0]}
                alt={hero.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <span className="absolute top-5 left-5 bg-black text-white text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5">
                Le choix de la maison
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="lg:pl-4">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#A07840] mb-5">
                {hero.subcategory}
              </p>
              <h2 className="font-serif font-bold text-black text-3xl md:text-[42px] leading-[1.1] mb-5">
                {hero.name}
              </h2>

              <div className="flex items-center gap-2.5 mb-6">
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.round(hero.rating)
                          ? 'fill-[#C9A96E] text-[#C9A96E]'
                          : 'text-neutral-200'
                      }`}
                    />
                  ))}
                </span>
                <span className="text-[11px] text-neutral-400">
                  {hero.rating} · {hero.reviewCount.toLocaleString('fr-CH')} avis
                </span>
              </div>

              <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-lg">
                {hero.longDescription}
              </p>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-9 max-w-md">
                {hero.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[12px] text-neutral-600">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-[#C9A96E] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-end gap-4 mb-8">
                <span className="text-3xl text-black price-luxe font-bold leading-none">
                  {hero.price.toFixed(2)} CHF
                </span>
                {hero.originalPrice && (
                  <span className="text-neutral-400 line-through price-luxe text-sm mb-1">
                    {hero.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <Link
                href={`/product/${hero.id}`}
                className="group inline-flex items-center gap-3 bg-black text-white text-[11px] font-semibold tracking-[0.22em] uppercase px-10 py-4 hover:bg-[#C9A96E] transition-colors"
              >
                Découvrir
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── 4. Mosaïque de catégories ────────────────────────────────────────────────

const TILES = [
  {
    label: 'Running',
    desc: 'Route, trail et compétition',
    href: '/shop?category=running',
    img: 'https://images.unsplash.com/photo-1460353581641-a1af1d3ba3c1?w=1200&h=1400&fit=crop',
    className: 'lg:col-span-2 lg:row-span-2 min-h-[320px] lg:min-h-[560px]',
  },
  {
    label: 'Basketball',
    desc: 'Sur le parquet',
    href: '/shop?category=basketball',
    img: 'https://images.unsplash.com/photo-1539038919170-14bc4e45c047?w=900&h=700&fit=crop',
    className: 'lg:col-span-2 min-h-[260px]',
  },
  {
    label: 'Hoodies',
    desc: 'Sweats & polaires',
    href: '/shop?category=hoodie',
    img: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=700&h=700&fit=crop',
    className: 'min-h-[260px]',
  },
  {
    label: 'Accessoires',
    desc: 'Sacs, casquettes',
    href: '/shop?category=accessories',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&h=700&fit=crop',
    className: 'min-h-[260px]',
  },
];

function CategoryMosaic() {
  return (
    <section className="py-20 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#A07840] mb-3">
                Nos univers
              </p>
              <h2 className="font-serif font-bold text-black text-3xl md:text-[40px] leading-tight">
                Quatre terrains de jeu
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-[11px] font-semibold tracking-[0.22em] uppercase text-black border-b border-black/25 pb-1 hover:border-black transition-colors self-start"
            >
              Tout parcourir
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[270px]">
          {TILES.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.08} className={t.className}>
              <Link
                href={t.href}
                className="group relative block overflow-hidden w-full h-full"
              >
                <img
                  src={t.img}
                  alt={t.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[#E8D5B0] mb-1.5">
                    {t.desc}
                  </p>
                  <h3 className="font-serif font-bold text-xl lg:text-2xl mb-2">{t.label}</h3>
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Découvrir <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Rail horizontal ───────────────────────────────────────────────────────

function ProductRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const items = [...products].sort((a, b) => b.rating - a.rating).slice(0, 12);

  const scrollBy = (dir: 1 | -1) => {
    railRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-end justify-between gap-5 mb-10">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#A07840] mb-3">
                Les mieux notés
              </p>
              <h2 className="font-serif font-bold text-black text-3xl md:text-[40px] leading-tight">
                La sélection
              </h2>
            </div>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Précédent"
                className="w-11 h-11 border border-black/15 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Suivant"
                className="w-11 h-11 border border-black/15 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={railRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 pb-2"
        >
          {items.map((p) => (
            <div key={p.id} className="snap-start shrink-0 w-[260px] sm:w-[290px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <p className="text-[11px] text-neutral-400 mt-5 sm:hidden">Faites glisser pour explorer →</p>
      </div>
    </section>
  );
}

// ─── 6. Manifeste ─────────────────────────────────────────────────────────────

const PILLARS = [
  {
    n: '01',
    t: 'Sélection resserrée',
    d: "Chaque référence est retenue pour une raison précise. Pas de catalogue interminable, pas de remplissage.",
  },
  {
    n: '02',
    t: 'Prix juste',
    d: "Nous travaillons en direct pour supprimer les intermédiaires. La qualité reste, la marge superflue disparaît.",
  },
  {
    n: '03',
    t: 'Sans risque',
    d: "Trente jours pour changer d'avis, retours gratuits. Si la paire ne vous va pas, elle repart.",
  },
];

function Manifesto() {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-5">
              Notre approche
            </p>
            <h2 className="font-serif font-bold text-white text-3xl md:text-[42px] leading-[1.15]">
              Trois principes, appliqués sans exception.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.12}>
              <div className="bg-black p-8 lg:p-10 h-full">
                <p
                  className="text-[#C9A96E] text-4xl mb-6 leading-none"
                  style={{ fontFamily: 'var(--font-cinzel, Georgia, serif)' }}
                >
                  {p.n}
                </p>
                <h3 className="font-serif font-semibold text-white text-xl mb-4">{p.t}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Reassurance row */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-neutral-800">
            {[
              { Icon: Truck, t: 'Livraison offerte', d: 'Dès 80 CHF' },
              { Icon: RotateCcw, t: 'Retours gratuits', d: '30 jours' },
              { Icon: ShieldCheck, t: 'Paiement sécurisé', d: 'SSL 256-bit' },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex items-center gap-4">
                <Icon className="w-5 h-5 text-[#C9A96E] shrink-0" strokeWidth={1.4} />
                <div>
                  <p className="text-white text-[11px] tracking-[0.2em] uppercase">{t}</p>
                  <p className="text-white/40 text-[11px] mt-0.5">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── 7. Nouveautés ────────────────────────────────────────────────────────────

function NewIn() {
  const items = products.filter((p) => p.badge === 'new').slice(0, 4);
  if (items.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-end justify-between gap-5 mb-10">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#A07840] mb-3">
                Vient d&apos;arriver
              </p>
              <h2 className="font-serif font-bold text-black text-3xl md:text-[40px] leading-tight">
                Nouveautés
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-[11px] font-semibold tracking-[0.22em] uppercase text-black border-b border-black/25 pb-1 hover:border-black transition-colors"
            >
              Tout voir
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 8. Newsletter — split éditorial ──────────────────────────────────────────

function NewsletterSplit() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-[#FAF8F5] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#A07840] mb-5">
                La lettre
              </p>
              <h2 className="font-serif font-bold text-black text-3xl md:text-[40px] leading-[1.15] mb-5">
                Les réassorts partent
                <br className="hidden sm:block" /> en quelques heures.
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                Inscrivez-vous pour être prévenu avant tout le monde des nouvelles
                pièces, des retours en stock et des ventes privées.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="lg:pl-8">
              {sent ? (
                <div className="border border-black/10 bg-white p-8">
                  <p className="font-serif text-black text-xl mb-2">Bienvenue.</p>
                  <p className="text-neutral-500 text-sm">
                    Votre inscription est confirmée — à très vite.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) {
                      setSent(true);
                      setEmail('');
                    }
                  }}
                >
                  <div className="flex items-center border-b border-black/25 focus-within:border-black transition-colors pb-3 mb-5">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="flex-1 bg-transparent text-black text-sm outline-none placeholder:text-neutral-400"
                    />
                    <button
                      type="submit"
                      aria-label="S'inscrire"
                      className="text-black hover:text-[#C9A96E] transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Un message par semaine au maximum. Désinscription en un clic.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      try {
        setCartCount(JSON.parse(cart).length);
      } catch {
        setCartCount(0);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeaderPremium cartCount={cartCount} />
      <HeroSplit />
      <MarqueeBand />
      <Spotlight />
      <CategoryMosaic />
      <ProductRail />
      <Manifesto />
      <NewIn />
      <NewsletterSplit />
      <Footer />
    </div>
  );
}
