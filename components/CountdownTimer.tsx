'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set promotion end to 7 days from now
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 7);

      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-light opacity-80 mb-3">Offre Limitée</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">Jusqu'à −30% d'Ici {timeLeft.days + 1} Jours</h2>
            <p className="text-lg font-light opacity-80">Saisissez cette opportunité avant la fin de la promotion</p>
          </div>

          <div className="flex gap-4 justify-center text-center">
            <div className="space-y-2">
              <div className="bg-white/10 border border-white/20 rounded px-6 py-4 min-w-[80px]">
                <p className="text-3xl font-light">{String(timeLeft.days).padStart(2, '0')}</p>
              </div>
              <p className="text-xs uppercase tracking-widest font-light">Jours</p>
            </div>
            <div className="text-3xl font-light opacity-40">:</div>
            <div className="space-y-2">
              <div className="bg-white/10 border border-white/20 rounded px-6 py-4 min-w-[80px]">
                <p className="text-3xl font-light">{String(timeLeft.hours).padStart(2, '0')}</p>
              </div>
              <p className="text-xs uppercase tracking-widest font-light">Heures</p>
            </div>
            <div className="text-3xl font-light opacity-40">:</div>
            <div className="space-y-2">
              <div className="bg-white/10 border border-white/20 rounded px-6 py-4 min-w-[80px]">
                <p className="text-3xl font-light">{String(timeLeft.minutes).padStart(2, '0')}</p>
              </div>
              <p className="text-xs uppercase tracking-widest font-light">Minutes</p>
            </div>
            <div className="text-3xl font-light opacity-40">:</div>
            <div className="space-y-2">
              <div className="bg-white/10 border border-white/20 rounded px-6 py-4 min-w-[80px]">
                <p className="text-3xl font-light">{String(timeLeft.seconds).padStart(2, '0')}</p>
              </div>
              <p className="text-xs uppercase tracking-widest font-light">Secondes</p>
            </div>
          </div>

          <a
            href="/shop"
            className="inline-block mt-6 px-12 py-3 border border-white text-white uppercase text-xs tracking-widest font-light hover:bg-white hover:text-black transition duration-300"
          >
            Découvrir les Offres
          </a>
        </div>
      </div>
    </div>
  );
}
