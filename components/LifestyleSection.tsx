'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const lifestyles = [
  {
    id: 1,
    title: 'Performance',
    subtitle: 'Pour les Athlètes',
    description: 'Technologie de pointe pour repousser vos limites et atteindre l\'excellence',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    link: '/shop',
  },
  {
    id: 2,
    title: 'Urban',
    subtitle: 'Lifestyle Quotidien',
    description: 'Élégance et confort pour votre vie de tous les jours',
    image: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=800&h=600&fit=crop',
    link: '/shop',
  },
  {
    id: 3,
    title: 'Heritage',
    subtitle: 'Classics Intemporels',
    description: 'Des pièces iconiques qui transcendent les saisons et les tendances',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&h=600&fit=crop',
    link: '/shop',
  },
];

export default function LifestyleSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.p
              className="text-xs uppercase tracking-[0.2em] text-gray-600 font-light"
              variants={itemVariants}
            >
              Nos Collections
            </motion.p>
            <motion.h2
              className="text-5xl md:text-6xl font-light tracking-wide"
              variants={itemVariants}
            >
              Mode de Vie
            </motion.h2>
            <motion.div
              className="w-12 h-px bg-black mx-auto"
              variants={itemVariants}
            />
            <motion.p
              className="text-lg font-light text-gray-600 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Découvrez nos collections conçues pour chaque moment de votre vie
            </motion.p>
          </motion.div>
        </div>

        {/* Lifestyle Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {lifestyles.map((lifestyle) => (
            <motion.div
              key={lifestyle.id}
              className="group cursor-pointer"
              variants={itemVariants}
            >
              <Link href={lifestyle.link}>
                <div className="relative h-96 overflow-hidden rounded-lg mb-6">
                  <img
                    src={lifestyle.image}
                    alt={lifestyle.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-gray-600 font-light">
                    {lifestyle.subtitle}
                  </p>
                  <h3 className="text-2xl font-light tracking-wide group-hover:translate-x-2 transition duration-300">
                    {lifestyle.title}
                  </h3>
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {lifestyle.description}
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-xs uppercase tracking-widest font-light">En Savoir Plus</span>
                    <span className="text-lg group-hover:translate-x-1 transition duration-300">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
