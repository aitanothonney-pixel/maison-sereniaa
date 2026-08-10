'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeaderPremium from '@/components/HeaderPremium';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { ChevronDown } from 'lucide-react';

const CATEGORY_LABEL: Record<string, string> = {
  shoes: 'Chaussures',
  clothing: 'Vêtements',
  accessories: 'Accessoires',
  equipment: 'Équipement',
};

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

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Boutique</h1>
          <div className="w-12 h-px bg-black mb-6"></div>
          <p className="text-gray-600 font-light text-lg">Explorez notre collection complète de vêtements et accessoires premium</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h3 className="text-sm font-light uppercase tracking-widest text-black mb-6">Catégories</h3>
                <div className="space-y-3">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-0 py-2 font-light transition border-b-2 ${
                        selectedCategory === cat
                          ? 'border-black text-black'
                          : 'border-transparent text-gray-600 hover:text-black'
                      }`}
                    >
                      {CATEGORY_LABEL[cat] ?? cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h3 className="text-sm font-light uppercase tracking-widest text-black mb-6">Prix</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Tous les prix', value: 'all' },
                    { label: 'Moins de 50 CHF', value: '0-50' },
                    { label: '50 - 100 CHF', value: '50-100' },
                    { label: 'Plus de 100 CHF', value: '100+' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-black transition">
                        <input type="radio" name="price" value={option.value} defaultChecked={option.value === 'all'} className="hidden" />
                        <div className="w-2.5 h-2.5 bg-black rounded-full hidden group-hover:block"></div>
                      </div>
                      <span className="text-sm font-light text-gray-700 group-hover:text-black transition">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <h3 className="text-sm font-light uppercase tracking-widest text-black mb-6">Taille</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Toutes les tailles', value: 'all' },
                    { label: 'XS', value: 'xs' },
                    { label: 'S', value: 's' },
                    { label: 'M', value: 'm' },
                    { label: 'L', value: 'l' },
                    { label: 'XL', value: 'xl' },
                    { label: 'XXL', value: 'xxl' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-black transition">
                        <input type="radio" name="size" value={option.value} defaultChecked={option.value === 'all'} onChange={() => setSelectedSize(option.value === 'all' ? 'Tous' : option.label)} className="hidden" />
                        <div className="w-2.5 h-2.5 bg-black rounded-full hidden group-hover:block"></div>
                      </div>
                      <span className="text-sm font-light text-gray-700 group-hover:text-black transition">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-4">
            {/* Sort */}
            <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-200">
              <p className="text-sm font-light text-gray-600">{filtered.length} produit{filtered.length > 1 ? 's' : ''}</p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border-b border-gray-300 px-0 py-2 font-light text-sm focus:outline-none focus:border-black transition cursor-pointer pr-6"
                >
                  <option value="popular">Les plus populaires</option>
                  <option value="newest">Nouveautés</option>
                  <option value="price-low">Prix croissant</option>
                  <option value="price-high">Prix décroissant</option>
                </select>
                <ChevronDown className="absolute right-0 top-2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-gray-600 font-light text-lg mb-6">Aucun produit trouvé</p>
                <button
                  onClick={() => {
                    setSelectedCategory('Tous');
                    setSortBy('popular');
                  }}
                  className="text-sm font-light uppercase tracking-widest text-black hover:text-gray-600 transition border-b border-black hover:border-gray-600 pb-1"
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
