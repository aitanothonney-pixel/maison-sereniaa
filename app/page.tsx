'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, Truck, Shield, RotateCcw, Star } from 'lucide-react';
import HeaderPremium from '@/components/HeaderPremium';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

// ─── FadeIn wrapper ───────────────────────────────────────────────────────────

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=1200&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E] mb-5"
        >
          Collection Performance 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6"
        >
          La performance,
          <br />
          sans compromis.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="divider-gold w-32 mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-white/70 text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Sneakers, hoodies et équipement sélectionnés pour celles et ceux qui
          repoussent leurs limites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/shop"
            className="bg-white text-black text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#C9A96E] hover:text-white transition-colors"
          >
            Découvrir la boutique
          </Link>
          <a
            href="#promo"
            className="border border-white/50 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-black transition-colors"
          >
            Voir les promotions
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Promo banner + countdown ─────────────────────────────────────────────────

function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 21);
    const target = endDate.getTime();

    const calc = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <FadeInSection>
      <section id="promo" className="w-full overflow-hidden relative scroll-mt-24">
        <div className="relative min-h-[560px] md:min-h-[600px] py-14 md:py-16">
          <img
            src="https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=1920&h=1200&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-6 h-full">
            <p className="text-xs tracking-[0.35em] uppercase mb-3 text-[#C9A96E]">Édition limitée</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              Jusqu&apos;à −60% sur
              <br className="hidden md:block" /> la collection Performance
            </h2>
            <p className="text-white/70 text-sm mb-8 max-w-md">
              Offre valable seulement 3 semaines — dans la limite des stocks disponibles.
            </p>

            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E] mb-4">
              Offre se termine dans
            </p>
            <div className="flex gap-3 md:gap-5 mb-10">
              {[
                { value: pad(timeLeft.days), label: 'Jours' },
                { value: pad(timeLeft.hours), label: 'Heures' },
                { value: pad(timeLeft.minutes), label: 'Min' },
                { value: pad(timeLeft.seconds), label: 'Sec' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm border-2 border-[#C9A96E] px-4 md:px-6 py-3 md:py-4 min-w-[70px] md:min-w-[90px] shadow-2xl"
                >
                  <span
                    className="text-white text-3xl md:text-5xl font-bold leading-none tabular-nums"
                    style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
                  >
                    {value}
                  </span>
                  <span className="text-[9px] md:text-[10px] text-[#C9A96E] uppercase tracking-[0.25em] mt-2 md:mt-3">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/shop"
              className="bg-white text-black text-xs font-bold tracking-widest uppercase px-8 py-3.5 hover:bg-[#C9A96E] hover:text-white transition-colors"
            >
              Voir les produits en promotion
            </Link>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHead({
  eyebrow,
  title,
  href,
}: {
  eyebrow: string;
  title: string;
  href?: string;
}) {
  return (
    <div className="flex items-end justify-between mb-10">
      <div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-2">{eyebrow}</p>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-black">{title}</h2>
      </div>
      {href && (
        <Link
          href={href}
          className="hidden sm:flex items-center gap-1 text-xs tracking-widest uppercase text-neutral-500 hover:text-black transition-colors border-b border-neutral-200 pb-0.5"
        >
          Tout voir <ChevronRight className="w-3 h-3" />
        </Link>
      )}
    </div>
  );
}

// ─── Bestsellers ──────────────────────────────────────────────────────────────

function Bestsellers() {
  const bestsellers = products.filter((p) => p.badge === 'bestseller').slice(0, 8);

  return (
    <FadeInSection>
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHead eyebrow="Top ventes" title="Coups de cœur" href="/shop" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}

// ─── Categories ───────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    label: 'Running',
    desc: 'Chaussures de course',
    href: '/shop?category=running',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&h=1100&fit=crop',
  },
  {
    label: 'Basketball',
    desc: 'Performance sur parquet',
    href: '/shop?category=basketball',
    img: 'https://images.unsplash.com/photo-1539038919170-14bc4e45c047?w=900&h=1100&fit=crop',
  },
  {
    label: 'Lifestyle',
    desc: 'Sneakers & essentiels',
    href: '/shop?category=casual',
    img: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=900&h=1100&fit=crop',
  },
];

function Categories() {
  return (
    <FadeInSection>
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-2">
            Nos univers
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-black">
            Explorer les collections
          </h2>
          <div className="divider-gold w-24 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CATEGORIES.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={c.href} className="group block relative h-[420px] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-2">
                    {c.desc}
                  </p>
                  <h3 className="text-2xl font-serif font-bold mb-3">{c.label}</h3>
                  <span className="inline-flex items-center gap-1 text-[10px] tracking-[0.25em] uppercase border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
                    Découvrir <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}

// ─── New arrivals ─────────────────────────────────────────────────────────────

function NewArrivals() {
  const items = products.filter((p) => p.badge === 'new').slice(0, 4);
  if (items.length === 0) return null;

  return (
    <FadeInSection>
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHead eyebrow="Vient d'arriver" title="Nouveautés" href="/shop" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {items.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    text: "Les Quantum Flow sont d'un confort incroyable, même sur 15 km. Rapport qualité-prix imbattable.",
    name: 'Julien M.',
    role: 'Marathonien amateur',
  },
  {
    text: 'Commande reçue en 3 jours, emballage soigné. Le hoodie est exactement comme sur les photos.',
    name: 'Sarah L.',
    role: 'Cliente vérifiée',
  },
  {
    text: "J'ai pris deux paires pour la salle. La qualité est au rendez-vous, je recommande sans hésiter.",
    name: 'Thomas R.',
    role: 'Coach sportif',
  },
];

function Testimonials() {
  return (
    <FadeInSection>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
            <div className="border border-black text-black py-1 px-4 text-xs tracking-[0.2em] uppercase">
              Témoignages
            </div>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl mt-5 text-center uppercase"
              style={{
                fontFamily: 'var(--font-cinzel, Georgia, serif)',
                letterSpacing: '0.12em',
                fontWeight: 500,
              }}
            >
              Ce que disent nos clients
            </h2>
            <p className="text-center mt-5 text-neutral-500 text-sm">
              Des centaines de sportifs font confiance à IN &amp; CO pour leur équipement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-neutral-100 p-7 bg-white card-premium"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed mb-6">“{t.text}”</p>
                <p className="text-sm font-semibold text-black">{t.name}</p>
                <p className="text-[11px] text-neutral-400">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

// ─── Trust strip ──────────────────────────────────────────────────────────────

function TrustStrip() {
  const items = [
    { icon: Truck, title: 'Livraison offerte', desc: 'Dès 80 CHF d\'achat' },
    { icon: Shield, title: 'Paiement sécurisé', desc: 'SSL 256-bit' },
    { icon: RotateCcw, title: 'Retours gratuits', desc: '30 jours pour changer d\'avis' },
    { icon: Star, title: 'Qualité vérifiée', desc: 'Sélection rigoureuse' },
  ];

  return (
    <FadeInSection>
      <section className="border-t border-neutral-100 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <Icon className="w-6 h-6 text-[#C9A96E]" strokeWidth={1.4} />
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-black">{title}</h3>
              <p className="text-[11px] text-neutral-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <section className="w-full bg-black py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E] mb-4">
          Inscription newsletter
        </p>
        <h2 className="text-3xl md:text-4xl text-white font-serif font-bold mb-4">
          Restez en avance
        </h2>
        <div className="divider-gold w-24 mx-auto mb-6" />
        <p className="text-white/60 text-sm mb-8 leading-relaxed">
          Nouveautés, réassorts et offres exclusives — directement dans votre boîte mail.
        </p>

        {sent ? (
          <p className="text-white/80 text-sm">Merci pour votre inscription !</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) {
                setSent(true);
                setEmail('');
              }
            }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
              className="flex-1 max-w-xs bg-white/5 border border-white/20 text-white text-sm px-4 py-3 outline-none focus:ring-1 focus:ring-[#C9A96E] placeholder:text-white/30 transition-all"
            />
            <button
              type="submit"
              className="bg-white text-black text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#C9A96E] hover:text-white transition-colors"
            >
              S&apos;inscrire
            </button>
          </form>
        )}

        <p className="text-[11px] text-white/30 mt-6">
          Désinscription possible à tout moment.
        </p>
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
      <HeaderPremium cartCount={cartCount} overHero />
      <Hero />
      <Bestsellers />
      <PromoBanner />
      <Categories />
      <NewArrivals />
      <Testimonials />
      <TrustStrip />
      <Newsletter />
      <Footer />
    </div>
  );
}
