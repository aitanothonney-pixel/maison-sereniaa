'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';
import { products } from '@/lib/products';
import ProductCard from './ProductCard';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof products>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const popularSearches = ['Running', 'Basketball', 'Hoodies', 'T-Shirts', 'Accessories', 'Shoes'];

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length === 0) {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filtered);
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto bg-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-8 right-8 text-black hover:text-gray-600 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={28} />
              </motion.button>

              {/* Logo */}
              <motion.h1
                className="text-center text-4xl md:text-5xl font-light tracking-widest mb-16 uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                in & Co
              </motion.h1>

              {/* Search Input */}
              <motion.div
                className="max-w-2xl mx-auto mb-16"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Que recherchez-vous ?"
                    className="w-full text-lg font-light placeholder-gray-400 bg-transparent border-b-2 border-gray-300 py-4 px-0 focus:outline-none focus:border-black transition"
                  />
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400"
                    whileHover={{ scale: 1.1 }}
                  >
                    <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M14.5 14.5L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </motion.svg>
                </div>
              </motion.div>

              {/* Popular Searches */}
              {query.trim() === '' && (
                <motion.div
                  className="mb-20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <p className="text-xs uppercase tracking-widest text-gray-600 font-light mb-6">Recherches populaires</p>
                  <div className="flex flex-wrap gap-3">
                    {popularSearches.map((search, index) => (
                      <motion.button
                        key={search}
                        onClick={() => handleSearch(search)}
                        className="px-6 py-3 border border-gray-300 text-sm font-light hover:border-black hover:text-black transition rounded"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                      >
                        {search}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Search Results */}
              {query.trim() !== '' && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm uppercase tracking-widest text-gray-600 font-light mb-8">
                    {suggestions.length} résultat{suggestions.length !== 1 ? 's' : ''}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {suggestions.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        onClick={onClose}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* No Results */}
              {query.trim() !== '' && suggestions.length === 0 && (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg font-light text-gray-600 mb-8">
                    Aucun résultat pour "{query}"
                  </p>
                  <Link
                    href="/shop"
                    className="inline-block px-8 py-3 bg-black text-white font-light uppercase tracking-widest text-sm hover:bg-gray-900 transition"
                    onClick={onClose}
                  >
                    Parcourir tous les produits
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
