'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1 space-y-2">
            <h3 className="font-light text-base tracking-wide">Respect de votre vie privée</h3>
            <p className="text-sm font-light text-white/80">
              Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu.{' '}
              <Link href="#" className="underline hover:text-white/60 transition">
                En savoir plus
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-6 py-3 border border-white/30 text-white uppercase text-xs tracking-widest font-light hover:border-white/60 transition"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-3 bg-white text-black uppercase text-xs tracking-widest font-light hover:bg-gray-100 transition"
            >
              Accepter
            </button>
          </div>

          <button
            onClick={handleReject}
            className="absolute top-4 right-4 md:hidden text-white/60 hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
