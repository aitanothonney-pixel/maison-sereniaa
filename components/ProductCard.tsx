'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

const BADGE_LABEL: Record<string, string> = {
  new: 'Nouveau',
  bestseller: 'Top vente',
  sale: 'Promo',
  limited: 'Édition limitée',
};

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const hasDiscount = Boolean(product.originalPrice && product.originalPrice > product.price);

  return (
    <div className="group card-premium bg-white border border-neutral-100">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-neutral-50 aspect-square">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.discount ? (
              <span className="bg-black text-white text-[9px] font-bold tracking-widest uppercase px-2 py-0.5">
                −{product.discount}%
              </span>
            ) : null}
            {product.badge && (
              <span className="bg-white text-black text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 border border-neutral-200">
                {BADGE_LABEL[product.badge] ?? product.badge}
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            aria-label="Ajouter aux favoris"
            className={`absolute top-3 right-3 bg-white/70 backdrop-blur-sm p-1.5 transition-all duration-300 hover:bg-white ${
              isFavorite ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            <Heart
              className={`w-3.5 h-3.5 transition-all ${
                isFavorite ? 'fill-[#C9A96E] text-[#C9A96E]' : 'text-black'
              }`}
            />
          </button>

          {/* Quick view overlay — thin bottom bar */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="block w-full text-center bg-black text-white text-[9px] tracking-widest uppercase py-2.5">
              Voir le produit
            </span>
          </div>
        </div>

        <div className="p-4">
          <p className="text-[9px] tracking-[0.2em] uppercase text-neutral-400 mb-0.5 capitalize">
            {product.subcategory}
          </p>
          <h3 className="font-serif font-semibold text-black text-sm mb-1 leading-snug">
            {product.name}
          </h3>
          <p className="text-neutral-400 text-[11px] mb-2.5 line-clamp-1">{product.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-black font-bold text-sm price-luxe">
                {product.price.toFixed(2)} CHF
              </span>
              {hasDiscount && (
                <span className="text-neutral-400 line-through text-xs price-luxe">
                  {product.originalPrice!.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-[9px] font-semibold tracking-wider uppercase text-neutral-300 group-hover:text-black transition-colors">
              Voir →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
