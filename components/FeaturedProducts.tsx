'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '@/lib/products';

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show top-rated and featured products, sorted by rating
  const featured = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 20);

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, featured.length - itemsPerPage);

  const next = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleProducts = featured.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-4 font-light">
              Essentiels
            </p>
            <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-2">
              Nouveautés & Bestsellers
            </h2>
            <div className="w-12 h-px bg-black"></div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex gap-2">
            <motion.button
              onClick={prev}
              disabled={currentIndex === 0}
              className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous products"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={next}
              disabled={currentIndex === maxIndex}
              className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next products"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Products Grid - Fixed visible items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-4 text-center py-12">
              <p className="text-gray-600 font-light">Produits à venir...</p>
            </div>
          )}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-black w-8'
                  : 'bg-gray-300 w-2 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex gap-2 justify-center mt-8">
          <motion.button
            onClick={prev}
            disabled={currentIndex === 0}
            className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous products"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            onClick={next}
            disabled={currentIndex === maxIndex}
            className="p-3 border border-black rounded-full hover:bg-black hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next products"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/shop">
            <motion.button
              className="px-12 py-4 bg-black text-white uppercase text-xs tracking-widest font-light hover:bg-gray-900 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir Tous les Produits
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
