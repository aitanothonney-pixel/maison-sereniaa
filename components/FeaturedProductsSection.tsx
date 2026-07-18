'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { products } from '@/lib/products';

export default function FeaturedProductsSection() {
  const featuredProducts = products.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="bg-white py-24 md:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-gray-600 mb-4 font-light">Sélection</p>
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Pièces Signatures</h2>
          <div className="w-12 h-px bg-black mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/shop">
            <motion.button
              className="px-12 py-3 border border-black text-black uppercase text-xs tracking-widest font-light hover:bg-black hover:text-white transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir la Collection Complète
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
