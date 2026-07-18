'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Heart, ShoppingCart, User } from 'lucide-react';
import SearchBar from './SearchBar';

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
              <SearchBar />
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center gap-6">
              {/* Search Mobile */}
              <motion.button
                className="md:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                whileHover={{ scale: 1.1 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-black"/>
                  <path d="M14.5 14.5L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-black"/>
                </svg>
              </motion.button>

              {/* Wishlist */}
              <Link href="#" className="group relative">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C12 21 3 16 3 9C3 5.5 5.5 3 8 3C9.5 3 11 4 12 5C13 4 14.5 3 16 3C18.5 3 21 5.5 21 9C21 16 12 21 12 21Z"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="text-black"/>
                  </svg>
                </motion.div>
              </Link>

              {/* Account */}
              <Link href="#" className="group relative">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" className="text-black"/>
                    <path d="M4 20C4 16.134 7.582 13 12 13C16.418 13 20 16.134 20 20"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-black"/>
                  </svg>
                </motion.div>
              </Link>

              {/* Cart */}
              <Link href="/cart" className="group relative">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7H21L19 15C19 15.5 18.5 16 18 16H7C6.5 16 6 15.5 6 15L4 7"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black"/>
                    <path d="M7 20C7.5 20 8 20.5 8 21C8 21.5 7.5 22 7 22C6.5 22 6 21.5 6 21C6 20.5 6.5 20 7 20Z"
                          fill="currentColor" className="text-black"/>
                    <path d="M18 20C18.5 20 19 20.5 19 21C19 21.5 18.5 22 18 22C17.5 22 17 21.5 17 21C17 20.5 17.5 20 18 20Z"
                          fill="currentColor" className="text-black"/>
                  </svg>
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

              {/* Mobile Menu Button */}
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
            </div>
          </div>

          {/* Mobile Search */}
          {isSearchOpen && (
            <motion.div
              className="md:hidden mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SearchBar />
            </motion.div>
          )}
        </div>

        {/* Mobile Menu - Sidebar Style */}
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-24 bg-black/50 md:hidden z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        <motion.div
          className="md:hidden fixed left-0 top-24 h-screen w-80 bg-white shadow-lg z-40 overflow-y-auto"
          initial={{ x: '-100%' }}
          animate={{ x: isMenuOpen ? 0 : '-100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="px-6 py-8 space-y-8">
            {/* NOS COLLECTIONS */}
            <div>
              <p className="text-xs uppercase tracking-widest font-light text-gray-600 mb-4">
                Nos Collections
              </p>
              <nav className="space-y-3">
                {[
                  { name: 'Tous Les Produits', href: '/shop' },
                  { name: 'Homme', href: '/shop' },
                  { name: 'Femme', href: '/shop' },
                  { name: 'Nouveautés', href: '/shop' },
                ].map((item) => (
                  <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)}>
                    <motion.span
                      className="block text-sm font-light text-black hover:text-gray-600 transition"
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* OFFRES SPÉCIALES */}
            <div>
              <p className="text-xs uppercase tracking-widest font-light text-gray-600 mb-4">
                Offres Spéciales
              </p>
              <div className="bg-black text-white p-4 rounded space-y-2">
                <h3 className="text-sm font-light">Promotions du Moment</h3>
                <p className="text-xs font-light opacity-80">Jusqu'à -30% sur les collections</p>
              </div>
            </div>

            {/* AIDE & SERVICES */}
            <div>
              <p className="text-xs uppercase tracking-widest font-light text-gray-600 mb-4">
                Aide & Services
              </p>
              <nav className="space-y-3">
                {[
                  { name: 'Contactez-Nous', href: '/contact' },
                  { name: 'Suivi de Commande', href: '/contact' },
                  { name: 'Questions Fréquentes', href: '/faq' },
                  { name: 'Retours & Échanges', href: '/retours' },
                  { name: 'Livraison & Délais', href: '/livraison' },
                  { name: 'À Propos de Nous', href: '/a-propos' },
                ].map((item) => (
                  <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)}>
                    <motion.span
                      className="block text-sm font-light text-black hover:text-gray-600 transition"
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* INFORMATIONS */}
            <div>
              <p className="text-xs uppercase tracking-widest font-light text-gray-600 mb-4">
                Informations
              </p>
              <nav className="space-y-3">
                {[
                  { name: 'Mentions Légales', href: '#' },
                  { name: 'Politique de Confidentialité', href: '#' },
                  { name: 'Conditions Générales', href: '#' },
                  { name: 'Gestion des Cookies', href: '#' },
                ].map((item) => (
                  <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)}>
                    <motion.span
                      className="block text-xs font-light text-gray-700 hover:text-black transition"
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Footer Info */}
            <div className="pt-8 border-t border-gray-200 space-y-3">
              <p className="text-xs font-light text-gray-600">
                📦 Livraison gratuite dès 80 CHF • Suisse
              </p>
              <p className="text-xs font-light text-gray-600">
                © 2026 in & Co | Boutique de Vêtements Premium
              </p>
            </div>
          </div>
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
