'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header cartCount={0} />

      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-8 px-6">
          <div>
            <p className="text-9xl md:text-[150px] font-light tracking-widest text-black mb-4">404</p>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-light mb-6">Page Non Trouvée</p>
          </div>

          <div className="space-y-4 max-w-md mx-auto">
            <p className="text-lg font-light text-gray-700">
              Désolé, la page que vous recherchez n'existe pas ou a été supprimée.
            </p>
            <p className="text-sm text-gray-600 font-light">
              Peut-être que l'un de nos articles vous intéressera ?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/"
              className="px-12 py-3 border border-black text-black uppercase text-xs tracking-widest font-light hover:bg-black hover:text-white transition duration-300"
            >
              Accueil
            </Link>
            <Link
              href="/shop"
              className="px-12 py-3 bg-black text-white uppercase text-xs tracking-widest font-light hover:bg-gray-900 transition duration-300"
            >
              Boutique
            </Link>
          </div>

          <div className="pt-8 text-gray-600">
            <p className="text-xs font-light mb-4">Besoin d'aide ?</p>
            <Link href="/contact" className="text-black hover:opacity-60 transition font-light text-sm">
              Contacter le support →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
