"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">in</span>
            </div>
            <span className="text-xl font-bold">in & Co</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="text-gray-700 hover:text-black transition">
              Boutique
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black transition">
              Homme
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black transition">
              Femme
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black transition">
              Soldes
            </Link>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-lg transition">
              <Search size={20} />
            </button>
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
            <Link href="/shop" className="text-gray-700 hover:text-black py-2">
              Boutique
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black py-2">
              Homme
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black py-2">
              Femme
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black py-2">
              Soldes
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
