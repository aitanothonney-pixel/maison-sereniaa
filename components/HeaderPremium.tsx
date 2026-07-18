'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Search, Heart, ShoppingCart, User } from 'lucide-react';

interface HeaderPremiumProps {
  cartCount: number;
}

export default function HeaderPremium({ cartCount }: HeaderPremiumProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-black text-white py-2 text-center border-b border-gray-800">
        <p className="text-xs font-light tracking-widest">
          ✦ EXPÉDITION SOUS 24-48H • SUIVI INCLUS ✦
        </p>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-9 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between gap-8">
            {/* Left: Menu Button */}
            <motion.button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X size={24} className="text-black" />
              ) : (
                <Menu size={24} className="text-black" />
              )}
            </motion.button>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8">
              {[
                { name: 'Boutique', href: '/shop' },
                { name: 'Homme', href: '/shop' },
                { name: 'Femme', href: '/shop' },
              ].map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    className="text-sm font-light uppercase tracking-widest text-black hover:text-gray-600 transition cursor-pointer"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}
            </nav>

            {/* Center: Logo */}
            <Link href="/" className="flex-1 md:flex-none text-center">
              <motion.div
                className="space-y-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-6 border-2 border-black flex items-center justify-center">
                    <span className="text-xs font-light">in</span>
                  </div>
                </div>
                <p className="text-xs font-light tracking-[0.3em] uppercase">in & Co</p>
              </motion.div>
            </Link>

            {/* Search Bar - Center Right */}
            <div className="hidden md:flex flex-1 max-w-xs">
              <motion.div
                className="flex-1 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <input
                  type="text"
                  placeholder="Que recherchez-vous ?"
                  className="w-full text-sm font-light placeholder-gray-400 bg-transparent border-b border-gray-300 py-2 px-0 focus:outline-none focus:border-black transition"
                />
                <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </motion.div>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center gap-6">
              {/* Search Mobile */}
              <motion.button
                className="md:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                whileHover={{ scale: 1.1 }}
              >
                <Search size={20} className="text-black" />
              </motion.button>

              {/* Wishlist */}
              <Link href="#" className="group relative">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Heart size={20} className="text-black" />
                </motion.div>
              </Link>

              {/* Account */}
              <Link href="#" className="group relative">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <User size={20} className="text-black" />
                </motion.div>
              </Link>

              {/* Cart */}
              <Link href="/cart" className="group relative">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <ShoppingCart size={20} className="text-black" />
                  {cartCount > 0 && (
                    <motion.span
                      className="absolute -top-3 -right-3 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-light"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Mobile Search */}
          <motion.div
            className="md:hidden mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isSearchOpen ? 1 : 0, height: isSearchOpen ? 'auto' : 0 }}
            transition={{ duration: 0.2 }}
          >
            <input
              type="text"
              placeholder="Que recherchez-vous ?"
              className="w-full text-sm font-light placeholder-gray-400 bg-transparent border-b border-gray-300 py-2 px-0 focus:outline-none focus:border-black transition"
            />
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="px-6 py-4 space-y-4 bg-gray-50">
            {[
              { name: 'Boutique', href: '/shop' },
              { name: 'Homme', href: '/shop' },
              { name: 'Femme', href: '/shop' },
              { name: 'Contactez-Nous', href: '/contact' },
              { name: 'À Propos', href: '/a-propos' },
            ].map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.span
                  className="block text-sm font-light uppercase tracking-widest text-black hover:text-gray-600 transition"
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </nav>
        </motion.div>
      </header>

      {/* Contact Bar - Hidden on mobile */}
      <div className="hidden md:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 text-right">
          <Link href="/contact">
            <motion.span
              className="text-xs font-light uppercase tracking-widest text-black hover:text-gray-600 transition cursor-pointer"
              whileHover={{ x: -5 }}
            >
              CONTACTEZ-NOUS →
            </motion.span>
          </Link>
        </div>
      </div>
    </>
  );
}
