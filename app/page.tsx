'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HeaderPremium from '@/components/HeaderPremium';
import Footer from '@/components/Footer';
import { Truck, Lock, RotateCcw, Star } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const items = JSON.parse(cart);
      setCartCount(items.length);
    }
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterEmail);
    setNewsletterSubmitted(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderPremium cartCount={cartCount} />

      {/* Hero Section - Animated Carousel */}
      <HeroSection />

      {/* Category Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Shoes Category */}
            <Link href="/shop">
              <div className="group relative h-80 md:h-96 overflow-hidden rounded-lg cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop"
                  alt="Chaussures"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-light mb-2">Chaussures</h3>
                  <p className="text-sm opacity-80 font-light">Explorer</p>
                </div>
              </div>
            </Link>

            {/* Clothing Category */}
            <Link href="/shop">
              <div className="group relative h-80 md:h-96 overflow-hidden rounded-lg cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=800&h=600&fit=crop"
                  alt="Vêtements"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-light mb-2">Vêtements</h3>
                  <p className="text-sm opacity-80 font-light">Découvrir</p>
                </div>
              </div>
            </Link>

            {/* Accessories Category */}
            <Link href="/shop">
              <div className="group relative h-80 md:h-96 overflow-hidden rounded-lg cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&h=600&fit=crop"
                  alt="Accessoires"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-light mb-2">Accessoires</h3>
                  <p className="text-sm opacity-80 font-light">Parcourir</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Promotion */}
      <CountdownTimer />

      {/* Trust Strip */}
      <section className="bg-white py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <Truck size={28} className="text-black" />
              <h3 className="text-sm font-light uppercase tracking-widest">Livraison Gratuite</h3>
              <p className="text-xs text-gray-600 font-light">Dès 80 CHF d'achat</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <Lock size={28} className="text-black" />
              <h3 className="text-sm font-light uppercase tracking-widest">100% Sécurisé</h3>
              <p className="text-xs text-gray-600 font-light">Paiement SSL 256-bit</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <RotateCcw size={28} className="text-black" />
              <h3 className="text-sm font-light uppercase tracking-widest">Retours Gratuits</h3>
              <p className="text-xs text-gray-600 font-light">30 jours pour changer d'avis</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <Star size={28} className="text-black" />
              <h3 className="text-sm font-light uppercase tracking-widest">Qualité Premium</h3>
              <p className="text-xs text-gray-600 font-light">Produits de luxe accessibles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Animated */}
      <StatsSection />

      {/* Newsletter Premium */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center space-y-8">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-4 font-light opacity-80">Inscription Newsletter</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-wide">L'Art de Vivre</h2>
          </div>

          <p className="text-lg font-light opacity-80">
            Recevez nos nouvelles collections, offres exclusives et inspiration mode directement dans votre boîte mail.
          </p>

          {newsletterSubmitted ? (
            <div className="max-w-md mx-auto bg-white/10 border border-white/30 rounded p-6 space-y-3">
              <p className="text-white font-light">✓ Merci pour votre inscription !</p>
              <p className="text-sm text-white/70 font-light">
                Vérifiez votre email pour confirmer votre abonnement.
              </p>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  className="flex-1 bg-white/10 border-b border-white text-white placeholder-white/50 py-3 px-2 focus:outline-none focus:border-white/80 transition"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-black uppercase text-xs tracking-widest font-light hover:bg-gray-100 transition"
                >
                  S'inscrire
                </button>
              </div>
            </form>
          )}

          <p className="text-xs text-white/60">
            Nous respectons votre vie privée. Vos données sont sécurisées. Désinscrivez-vous à tout moment.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
