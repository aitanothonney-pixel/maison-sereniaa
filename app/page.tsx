'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { Truck, Lock, RotateCcw, Star } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import HeroSection from '@/components/HeroSection';
import TestimonialSection from '@/components/TestimonialSection';

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

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} />

      {/* Hero Section - Animated */}
      <HeroSection />

      {/* Countdown Promotion */}
      <CountdownTimer />

      {/* Collections Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-600 mb-4 font-light">Collections</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Nos Univers</h2>
            <div className="w-12 h-px bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Homme", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop" },
              { name: "Femme", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=800&fit=crop" },
            ].map((collection) => (
              <div key={collection.name} className="relative group overflow-hidden h-96 md:h-[500px]">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <h3 className="text-4xl md:text-5xl font-light tracking-widest">{collection.name}</h3>
                    <Link
                      href="/shop"
                      className="inline-block px-8 py-2 border border-white text-white uppercase text-xs tracking-widest font-light hover:bg-white hover:text-black transition"
                    >
                      Explorer
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-24 md:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-600 mb-4 font-light">Sélection</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Pièces Signatures</h2>
            <div className="w-12 h-px bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/shop"
              className="inline-block px-12 py-3 border border-black text-black uppercase text-xs tracking-widest font-light hover:bg-black hover:text-white transition duration-300"
            >
              Voir la Collection Complète
            </Link>
          </div>
        </div>
      </section>

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

      {/* Testimonials - Animated */}
      <TestimonialSection />

      {/* Payment Methods */}
      <section className="bg-white py-24 md:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Paiements Sécurisés</h2>
            <div className="w-12 h-px bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['Visa', 'Mastercard', 'Apple Pay', 'Google Pay', 'PayPal', 'Virement', '3x sans frais', 'Klarna'].map((method) => (
              <div key={method} className="p-6 border border-gray-200 space-y-2">
                <div className="text-2xl">💳</div>
                <p className="text-sm font-light uppercase tracking-wide">{method}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
