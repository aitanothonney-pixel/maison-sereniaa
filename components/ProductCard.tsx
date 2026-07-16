"use client";

import { Product } from "@/lib/products";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer">
        <div
          className="relative overflow-hidden bg-white mb-6 aspect-square"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />

          {/* View Label - Slides up on hover */}
          <div className={`absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <span className="text-xs uppercase tracking-widest font-light text-black bg-white px-4 py-2 rounded">
              Voir →
            </span>
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-6 right-6 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Heart
              size={20}
              className={isFavorite ? "fill-red-600 text-red-600" : "text-black"}
            />
          </button>
        </div>

        <div className="space-y-2">
          <p className="text-xs tracking-widest uppercase text-gray-600 font-light">{product.category}</p>
          <h3 className="text-sm font-light text-black group-hover:text-gray-600 transition leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-gray-700 font-light line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-light text-black">{product.price.toFixed(2)} CHF</span>
            <span className="text-xs text-gray-600">— </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
