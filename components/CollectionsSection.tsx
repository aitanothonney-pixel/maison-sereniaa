'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const collections = [
  { name: 'Homme', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop' },
  { name: 'Femme', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=800&fit=crop' },
];

export default function CollectionsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-gray-600 mb-4 font-light">Collections</p>
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Nos Univers</h2>
          <div className="w-12 h-px bg-black mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, idx) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative group overflow-hidden h-96 md:h-[500px]">
                <motion.img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center text-white space-y-4">
                    <motion.h3
                      className="text-4xl md:text-5xl font-light tracking-widest"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {collection.name}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Link
                        href="/shop"
                        className="inline-block px-8 py-2 border border-white text-white uppercase text-xs tracking-widest font-light hover:bg-white hover:text-black transition"
                      >
                        Explorer
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
