"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, X, User, Heart } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="w-full px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Left - Menu */}
          <div className="flex items-center gap-8">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-sm tracking-widest uppercase hover:text-gray-600 transition hidden md:block">
              Menu
            </button>
            <button className="md:hidden p-1">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Center - Logo */}
          <Link href="/" className="text-2xl tracking-[0.3em] uppercase font-light text-black">
            in & Co
          </Link>

          {/* Right - Icons */}
          <div className="flex items-center gap-6">
            {searchOpen ? (
              <input
                type="text"
                placeholder="Rechercher..."
                className="text-sm outline-none border-b border-black w-32 px-2 py-1 placeholder-gray-400"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
            ) : (
              <button onClick={() => setSearchOpen(true)} className="p-1 hover:text-gray-600 transition">
                <Search size={18} />
              </button>
            )}

            <Link href="#" className="p-1 hover:text-gray-600 transition">
              <Heart size={18} />
            </Link>

            <Link href="#" className="p-1 hover:text-gray-600 transition">
              <User size={18} />
            </Link>

            <Link href="/cart" className="relative p-1 hover:text-gray-600 transition">
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-xs text-gray-600 font-light">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-gray-100 flex flex-col gap-4">
            <Link href="/shop" className="text-sm tracking-widest uppercase hover:text-gray-600 transition">
              Boutique
            </Link>
            <Link href="#" className="text-sm tracking-widest uppercase hover:text-gray-600 transition">
              Homme
            </Link>
            <Link href="#" className="text-sm tracking-widest uppercase hover:text-gray-600 transition">
              Femme
            </Link>
            <Link href="#" className="text-sm tracking-widest uppercase hover:text-gray-600 transition">
              À Propos
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
