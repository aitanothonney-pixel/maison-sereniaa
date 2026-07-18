'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/lib/products';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof products>([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (query.trim().length === 0) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 6);

    setSuggestions(filtered);
    setIsOpen(filtered.length > 0);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
      setIsOpen(false);
    }
  };

  const handleSelectProduct = (productId: string) => {
    router.push(`/product/${productId}`);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="flex-1 relative">
      <form onSubmit={handleSearch} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Que recherchez-vous ?"
          className="w-full text-sm font-light placeholder-gray-400 bg-transparent border-b border-gray-300 py-2 px-0 focus:outline-none focus:border-black transition"
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black transition"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M14.5 14.5L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-50">
          <div className="max-h-96 overflow-y-auto">
            {suggestions.map((product) => (
              <button
                key={product.id}
                onClick={() => handleSelectProduct(product.id)}
                className="w-full px-4 py-3 text-left border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition flex items-center gap-3 group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-light text-black group-hover:text-gray-600 truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-600 font-light">
                    {product.price.toFixed(2)} CHF
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* View All Results */}
          {query.trim() && (
            <div className="px-4 py-3 border-t border-gray-200">
              <button
                onClick={handleSearch}
                className="w-full text-center text-sm font-light uppercase tracking-widest text-black hover:text-gray-600 transition py-2"
              >
                Voir tous les résultats
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
