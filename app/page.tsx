'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, ArrowRight, Truck, Shield, RotateCcw } from 'lucide-react';
import { products } from '@/lib/products';


export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const items = JSON.parse(cart);
      setCartCount(items.length);
    }
  }, []);

  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <span className="text-white font-bold text-lg">in</span>
              </div>
              <span className="text-2xl font-bold hidden sm:inline">in & Co</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/shop" className="text-gray-700 hover:text-black font-medium transition">
                Boutique
              </Link>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition">
                Homme
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition">
                Femme
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition">
                Soldes
              </a>
            </div>

            {/* Cart and Menu */}
            <div className="flex items-center gap-4">
              <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
              <Link href="/shop" className="text-gray-700 hover:text-black py-2 font-medium">
                Boutique
              </Link>
              <a href="#" className="text-gray-700 hover:text-black py-2 font-medium">
                Homme
              </a>
              <a href="#" className="text-gray-700 hover:text-black py-2 font-medium">
                Femme
              </a>
              <a href="#" className="text-gray-700 hover:text-black py-2 font-medium">
                Soldes
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1506629082632-3bec3d3255a9?w=1600&h=900&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">in & Co</h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-xl">
              Les meilleurs vêtements pour votre style. Qualité premium, prix accessibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-center"
              >
                Découvrir
                <ArrowRight size={20} />
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition text-center"
              >
                Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Truck className="text-black flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-1">Livraison gratuite</h3>
                <p className="text-gray-600">À partir de 50€</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="text-black flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-1">Paiement sécurisé</h3>
                <p className="text-gray-600">100% protégé</p>
              </div>
            </div>
            <div className="flex gap-4">
              <RotateCcw className="text-black flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-lg mb-1">Retours gratuits</h3>
                <p className="text-gray-600">30 jours pour changer d'avis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Nos best-sellers</h2>
              <p className="text-gray-600">Les pièces que vous adorez</p>
            </div>
            <Link href="/shop" className="hidden sm:flex items-center gap-2 text-black hover:text-gray-600 font-medium transition">
              Voir tout
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="group cursor-pointer h-full">
                  <div className="relative overflow-hidden bg-gray-100 rounded-lg mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition"></div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-gray-600 transition">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-1">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-black">{product.price.toFixed(2)}€</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                        {product.colors.length} couleurs
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-black hover:text-gray-600 font-bold transition"
            >
              Voir la collection complète
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Restez à la mode</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Inscrivez-vous à notre newsletter pour les dernières collections et offres exclusives
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Merci de votre inscription !');
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
              S'inscrire
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">in</span>
                </div>
                <span className="font-bold text-white text-lg">in & Co</span>
              </div>
              <p className="text-sm">Vêtements de qualité pour tous les styles de vie.</p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Boutique</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/shop" className="hover:text-white transition">Tous les produits</Link></li>
                <li><a href="#" className="hover:text-white transition">Homme</a></li>
                <li><a href="#" className="hover:text-white transition">Femme</a></li>
                <li><a href="#" className="hover:text-white transition">Enfants</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">À propos</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Livraison</a></li>
                <li><a href="#" className="hover:text-white transition">Retours</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Contact</h3>
              <p className="text-sm mb-2">support@inandco.com</p>
              <p className="text-sm">+33 1 23 45 67 89</p>
              <p className="text-sm text-gray-500 mt-2">Lun-Ven 9h-19h</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 in & Co. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
