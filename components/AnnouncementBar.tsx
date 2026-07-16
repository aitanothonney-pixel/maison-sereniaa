'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const announcements = [
  '🚚 Livraison offerte dès 80€ d\'achat',
  '✨ Collection 2026 — Jusqu\'à −30%',
  '🔒 Paiement 100% sécurisé · SSL 256-bit',
  '📦 Expédition sous 24-48h · Suivi inclus',
];

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-black text-white h-9 flex items-center justify-center">
      <div className="flex-1 text-center text-sm font-light tracking-wide">
        {announcements[currentIndex]}
      </div>
      <button
        onClick={() => {
          setIsVisible(false);
          sessionStorage.setItem('announcement-closed', 'true');
        }}
        className="pr-4 hover:opacity-50 transition"
      >
        <X size={16} />
      </button>
    </div>
  );
}
