'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Truck, MapPin, Clock, Package } from 'lucide-react';

export default function Livraison() {
  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={0} />

      {/* Hero */}
      <section className="bg-black text-white py-16 md:py-24 pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Livraison & Délais</h1>
          <p className="text-lg font-light opacity-80 max-w-2xl mx-auto">
            Nous assurons une livraison rapide, sécurisée et soignée de votre commande.
          </p>
        </div>
      </section>

      {/* Tableau de livraison */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-light tracking-wide mb-12">Options de Livraison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-light uppercase tracking-wide text-xs">Mode</th>
                  <th className="text-left py-4 px-4 font-light uppercase tracking-wide text-xs">Délai</th>
                  <th className="text-left py-4 px-4 font-light uppercase tracking-wide text-xs">Tarif</th>
                  <th className="text-left py-4 px-4 font-light uppercase tracking-wide text-xs">Conditions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Colissimo Standard</td>
                  <td className="py-4 px-4">3-5 jours</td>
                  <td className="py-4 px-4">Gratuit {'>'} 80 CHF</td>
                  <td className="py-4 px-4 text-gray-600 text-xs">France, Suisse, Belgique</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Colissimo Express 24h</td>
                  <td className="py-4 px-4">24 heures</td>
                  <td className="py-4 px-4">12.90 CHF</td>
                  <td className="py-4 px-4 text-gray-600 text-xs">Commande avant 13h</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">Livraison Europe</td>
                  <td className="py-4 px-4">5-10 jours</td>
                  <td className="py-4 px-4">14.90 CHF</td>
                  <td className="py-4 px-4 text-gray-600 text-xs">UE complète</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">International</td>
                  <td className="py-4 px-4">10-21 jours</td>
                  <td className="py-4 px-4">À partir de 24.90 CHF</td>
                  <td className="py-4 px-4 text-gray-600 text-xs">Monde entier</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Suivi de commande */}
            <div>
              <h3 className="text-2xl font-light tracking-wide mb-6 flex items-center gap-3">
                <Package size={24} /> Suivi de Commande
              </h3>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Chaque commande est expédiée avec un numéro de suivi unique. Vous recevrez un email immédiatement avec le lien pour suivre votre colis en temps réel.
              </p>
              <p className="text-gray-700 font-light leading-relaxed">
                Aucun frais caché, pas de mauvaise surprise à la livraison. Tous nos colis sont assurés contre la perte, le vol ou les dommages.
              </p>
            </div>

            {/* Emballage premium */}
            <div>
              <h3 className="text-2xl font-light tracking-wide mb-6 flex items-center gap-3">
                <Truck size={24} /> Emballage Premium
              </h3>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Chaque commande est soigneusement emballée dans du papier de soie premium et une boîte design réutilisable.
              </p>
              <p className="text-gray-700 font-light leading-relaxed">
                Service client disponible 7j/7 pour toute question sur votre livraison. Livraison offerte dès 80 CHF d'achat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info supplémentaire */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Clock size={32} className="mb-4" />
              <h4 className="text-lg font-light mb-3 tracking-wide">Expédition Rapide</h4>
              <p className="text-sm text-gray-700 font-light">
                Les commandes sont traitées et expédiées sous 24-48h ouvrables.
              </p>
            </div>
            <div>
              <MapPin size={32} className="mb-4" />
              <h4 className="text-lg font-light mb-3 tracking-wide">Couverture Géographique</h4>
              <p className="text-sm text-gray-700 font-light">
                France, Europe, et bientôt le monde. Tarifs dégressifs pour les livraisons internationales.
              </p>
            </div>
            <div>
              <Truck size={32} className="mb-4" />
              <h4 className="text-lg font-light mb-3 tracking-wide">Assurance Livraison</h4>
              <p className="text-sm text-gray-700 font-light">
                Tous les colis sont assurés. Perte, vol ou dommages couverts à 100%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
