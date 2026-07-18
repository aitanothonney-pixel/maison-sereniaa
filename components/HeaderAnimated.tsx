'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Search, Heart, User } from 'lucide-react';

interface HeaderAnimatedProps {
  cartCount: number;
}

export default function HeaderAnimated({ cartCount }: HeaderAnimatedProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Boutique', href: '/shop' },
    { name: 'Homme', href: '/shop' },
    { name: 'Femme', href: '/shop' },
    { name: 'À Propos', href: '/a-propos' },
  ];

  return (
    <motion.header
      className={`fixed top-9 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white text-sm font-light">in</span>
          </motion.div>
          <span className="text-black font-light tracking-widest text-sm">in & Co</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.span
                className="text-sm text-gray-700 font-light uppercase tracking-widest cursor-pointer relative group"
                whileHover={{ color: '#000' }}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-black"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Search size={20} className="text-gray-700" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Heart size={20} className="text-gray-700" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <User size={20} className="text-gray-700" />
          </motion.button>
          <Link href="/cart" className="relative">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <ShoppingCart size={20} className="text-gray-700" />
              {cartCount > 0 && (
                <motion.span
                  className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
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
            whileHover={{ rotate: 90 }}
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden bg-white border-t border-gray-100"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.span
                className="block text-sm text-gray-700 font-light uppercase tracking-widest"
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.span>
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
