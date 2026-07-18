'use client';

import { motion } from 'framer-motion';

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: 50000, label: 'Clients Satisfaits', suffix: '+' },
  { value: 1200, label: 'Pièces Créées', suffix: '+' },
  { value: 98, label: 'Taux de Satisfaction', suffix: '%' },
];

export default function StatsSection() {
  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-6xl md:text-7xl font-light tracking-widest"
                whileInView={{ scale: [0.9, 1.1, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {stat.value.toLocaleString('fr-FR')}
                <span className="text-4xl">{stat.suffix}</span>
              </motion.div>
              <p className="text-xs uppercase tracking-widest font-light opacity-80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
