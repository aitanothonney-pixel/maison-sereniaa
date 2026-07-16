"use client";

import { Product } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden bg-gray-100 rounded-lg mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition"
          >
            <Heart
              size={18}
              className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}
            />
          </button>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition"></div>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">{product.category}</p>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-gray-600 transition">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-black">{product.price.toFixed(2)}€</span>
            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
              {product.sizes.length} tailles
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
