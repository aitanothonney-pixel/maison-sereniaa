'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta1: { text: string; href: string };
  cta2: { text: string; href: string };
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides: HeroSlide[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=1080&fit=crop',
      title: 'PERFORMANCE ABSOLUE',
      subtitle: 'Chaussures de Running',
      description: 'Technologie dernière génération pour dépasser vos limites',
      cta1: { text: 'Acheter', href: '/shop' },
      cta2: { text: 'Découvrir', href: '/shop' },
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=1920&h=1080&fit=crop',
      title: 'STYLE INTEMPOREL',
      subtitle: 'Collection Basiques',
      description: 'Les essentiels revisités pour un look urbain et sophistiqué',
      cta1: { text: 'Explorer', href: '/shop' },
      cta2: { text: 'En Savoir Plus', href: '/shop' },
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1539038919170-14bc4e45c047?w=1920&h=1080&fit=crop',
      title: 'CONFORT PREMIUM',
      subtitle: 'Hoodies & Sweats',
      description: 'Matières douces et designs exclusifs pour votre bien-être',
      cta1: { text: 'Acheter', href: '/shop' },
      cta2: { text: 'Collection', href: '/shop' },
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const slide = slides[current];

  return (
    <section className="relative h-[600px] md:h-[800px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="space-y-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.15em] uppercase font-light opacity-80">
              {slide.subtitle}
            </p>

            <h1 className="text-5xl md:text-7xl font-light tracking-wider leading-tight">
              {slide.title}
            </h1>

            <p className="text-base md:text-lg font-light opacity-90 max-w-xl mx-auto">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href={slide.cta1.href}>
                <motion.button
                  className="px-10 py-3 bg-white text-black uppercase text-xs tracking-widest font-light hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slide.cta1.text}
                </motion.button>
              </Link>
              <Link href={slide.cta2.href}>
                <motion.button
                  className="px-10 py-3 border border-white text-white uppercase text-xs tracking-widest font-light hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slide.cta2.text}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition p-2"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrent(index);
              setIsAutoPlay(false);
            }}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? 'bg-white w-8'
                : 'bg-white/50 w-2 hover:bg-white/80'
            }`}
            whileHover={{ scale: 1.1 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute bottom-8 right-8 z-10 text-white hover:text-gray-300 transition p-2"
        aria-label="Toggle autoplay"
      >
        {isAutoPlay ? <Pause size={24} /> : <Play size={24} />}
      </button>
    </section>
  );
}
