'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import HeaderPremium from '@/components/HeaderPremium';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { ChevronLeft } from 'lucide-react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = query
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-white">
      <HeaderPremium cartCount={0} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Breadcrumb */}
        <Link href="/shop" className="flex items-center gap-2 text-gray-600 hover:text-black mb-12 transition">
          <ChevronLeft size={18} />
          <span>Retour à la boutique</span>
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Résultats de recherche</h1>
          <div className="w-12 h-px bg-black mb-6"></div>
          <p className="text-gray-600 font-light text-lg">
            {results.length} résultat{results.length !== 1 ? 's' : ''} pour "{query}"
          </p>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-24">
            <h2 className="text-3xl font-light tracking-wide mb-4">Aucun résultat trouvé</h2>
            <p className="text-gray-600 font-light text-lg mb-8">
              Désolé, nous n'avons pas trouvé de produits correspondant à votre recherche.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 font-light uppercase tracking-widest text-sm hover:bg-gray-900 transition"
            >
              Parcourir tous les produits
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
