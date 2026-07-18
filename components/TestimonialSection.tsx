'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  avatar: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophie M.',
    rating: 5,
    text: 'Qualité exceptionnelle, livraison impeccable. Une vraie maison de luxe qui comprend le service client.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    initials: 'SM',
  },
  {
    name: 'Jean D.',
    rating: 5,
    text: 'Le meilleur rapport qualité-prix du marché. Les pièces durent longtemps et restent élégantes.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jean',
    initials: 'JD',
  },
  {
    name: 'Marie R.',
    rating: 5,
    text: 'Service client impeccable et produits de très haute qualité. Je recommande vivement !',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marie',
    initials: 'MR',
  },
];

export default function TestimonialSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-gray-50 py-24 md:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-gray-600 mb-4 font-light">Témoignages</p>
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Ils Nous Font Confiance</h2>
          <div className="w-12 h-px bg-black mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-white p-8 rounded space-y-4 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <motion.span
                      key={j}
                      className="text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.1 }}
                      viewport={{ once: true }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-700 font-light italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-xs uppercase tracking-widest font-light">{testimonial.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
