'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeaderPremium from '@/components/HeaderPremium';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { ChevronDown } from 'lucide-react';

export default function Shop() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedSize, setSelectedSize] = useState('Tous');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['Tous', ...new Set(products.map(p => p.category))];

  let filtered = products;

  if (selectedCategory !== 'Tous') {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'newest') {
    filtered = [...filtered].reverse();
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderPremium cartCount={cartCount} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Boutique</h1>
          <p className="text-gray-600">Explorez notre collection complète de vêtements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Catégories</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                        selectedCategory === cat
                          ? 'bg-black text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Prix</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" value="all" defaultChecked />
                    <span>Tous les prix</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" value="0-50" />
                    <span>Moins de 50€</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" value="50-100" />
                    <span>50€ - 100€</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="price" value="100+" />
                    <span>Plus de 100€</span>
                  </label>
                </div>
              </div>

              {/* Size */}
              <div>
                <h3 className="font-bold text-lg mb-4">Taille</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="size" value="all" defaultChecked onChange={() => setSelectedSize('Tous')} />
                    <span>Toutes les tailles</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="size" value="xs" onChange={() => setSelectedSize('XS')} />
                    <span>XS</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="size" value="s" onChange={() => setSelectedSize('S')} />
                    <span>S</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="size" value="m" onChange={() => setSelectedSize('M')} />
                    <span>M</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="size" value="l" onChange={() => setSelectedSize('L')} />
                    <span>L</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="size" value="xl" onChange={() => setSelectedSize('XL')} />
                    <span>XL</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="size" value="xxl" onChange={() => setSelectedSize('XXL')} />
                    <span>XXL</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            {/* Sort */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">{filtered.length} produit{filtered.length > 1 ? 's' : ''}</p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black cursor-pointer pr-10"
                >
                  <option value="popular">Les plus populaires</option>
                  <option value="newest">Nouveautés</option>
                  <option value="price-low">Prix croissant</option>
                  <option value="price-high">Prix décroissant</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={18} />
              </div>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg mb-4">Aucun produit trouvé</p>
                <button
                  onClick={() => {
                    setSelectedCategory('Tous');
                    setSortBy('popular');
                  }}
                  className="text-black hover:text-gray-600 font-medium transition"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
