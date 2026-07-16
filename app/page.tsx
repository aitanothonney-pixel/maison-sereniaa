'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const items = JSON.parse(cart);
      setCartCount(items.length);
    }
  }, []);

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} />

      {/* Hero Section - Cinematic */}
      <section className="relative h-[600px] md:h-screen bg-gray-100 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506629082632-3bec3d3255a9?w=1920&h=1080&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <div className="space-y-6 max-w-3xl">
            <p className="text-xs tracking-[0.2em] uppercase font-light opacity-90">Nouvelle Collection</p>
            <h1 className="text-6xl md:text-8xl font-light tracking-widest">in & Co</h1>
            <p className="text-lg md:text-2xl font-light tracking-wide opacity-90">
              L'art du vêtement de luxe à la portée de tous
            </p>
            <Link
              href="/shop"
              className="inline-block mt-8 px-12 py-3 border border-white text-white uppercase text-xs tracking-widest font-light hover:bg-white hover:text-black transition duration-300"
            >
              Découvrir la Collection
            </Link>
          </div>
        </div>
      </section>

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

      {/* Luxury Features */}
      <section className="bg-white py-24 md:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center space-y-4">
              <div className="text-4xl font-light">✦</div>
              <h3 className="text-lg font-light uppercase tracking-widest">Livraison Premium</h3>
              <p className="text-sm text-gray-700 font-light leading-relaxed">
                Livraison gratuite à partir de 100 CHF. Emballage luxe inclus.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-light">✦</div>
              <h3 className="text-lg font-light uppercase tracking-widest">Garantie 2 Ans</h3>
              <p className="text-sm text-gray-700 font-light leading-relaxed">
                Chaque pièce est garantie 2 ans contre tout défaut de fabrication.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl font-light">✦</div>
              <h3 className="text-lg font-light uppercase tracking-widest">Retours Gratuits</h3>
              <p className="text-sm text-gray-700 font-light leading-relaxed">
                Retours gratuits pendant 30 jours. Service client 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24 md:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-600 mb-4 font-light">Témoignages</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Ils Nous Font Confiance</h2>
            <div className="w-12 h-px bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sophie M.", rating: 5, text: "Qualité exceptionnelle, livraison impeccable. Une vraie maison de luxe." },
              { name: "Jean D.", rating: 5, text: "Le meilleur rapport qualité-prix du marché. Très impressionné." },
              { name: "Marie R.", rating: 5, text: "Service client impeccable et produits de très haute qualité." },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 font-light italic">"{testimonial.text}"</p>
                <p className="text-xs uppercase tracking-widest font-light">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Newsletter */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center space-y-8">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-4 font-light opacity-80">Newsletter</p>
            <h2 className="text-5xl md:text-6xl font-light tracking-wide">L'Art de Vivre</h2>
          </div>

          <p className="text-lg font-light opacity-80">
            Recevez nos nouvelles collections et offres exclusives directement dans votre boîte mail.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 bg-white/10 border-b border-white text-white placeholder-white/50 py-3 px-2 focus:outline-none transition"
            />
            <button className="px-8 py-3 bg-white text-black uppercase text-xs tracking-widest font-light hover:bg-gray-100 transition">
              S'inscrire
            </button>
          </form>

          <p className="text-xs text-white/60">Nous respectons votre vie privée. Désinscrivez-vous à tout moment.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
