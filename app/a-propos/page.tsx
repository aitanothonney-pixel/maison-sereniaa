'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Globe, Heart, Zap } from 'lucide-react';

export default function APropos() {
  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={0} />

      {/* Hero */}
      <section className="bg-black text-white py-16 md:py-24 pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6">in & Co</h1>
          <p className="text-lg font-light opacity-80 max-w-2xl mx-auto">
            L'art du vêtement de luxe à la portée de tous
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-light tracking-wide mb-8">Notre Histoire</h2>
          <div className="space-y-6 text-gray-700 font-light leading-relaxed">
            <p>
              in & Co est née d'une simple conviction : le luxe doit être accessible. En 2024, nous avons fondé cette maison avec l'ambition de réinventer le rapport au vêtement de qualité, en proposant des pièces intemporelles au meilleur prix.
            </p>
            <p>
              Chaque création respire l'essence du luxe minimaliste. Nous privilégions la qualité des matériaux, la finition impeccable et le design épuré. Pas de superflu, que l'essentiel.
            </p>
            <p>
              Aujourd'hui, des milliers de clients nous font confiance pour leurs pièces du quotidien. De la robe parfaite au pull incontournable, in & Co accompagne vos moments importants avec élégance.
            </p>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-light tracking-wide mb-16 text-center">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Heart size={32} className="text-black" />
              <h3 className="text-lg font-light tracking-wide">Authenticité</h3>
              <p className="text-sm text-gray-700 font-light leading-relaxed">
                Nous créons des vêtements vrais, sincères et durables. Pas de tendances éphémères.
              </p>
            </div>
            <div className="space-y-4">
              <Award size={32} className="text-black" />
              <h3 className="text-lg font-light tracking-wide">Qualité</h3>
              <p className="text-sm text-gray-700 font-light leading-relaxed">
                Chaque pièce est contrôlée avant de vous arriver. Zéro défaut, 100% satisfaction.
              </p>
            </div>
            <div className="space-y-4">
              <Zap size={32} className="text-black" />
              <h3 className="text-lg font-light tracking-wide">Innovation</h3>
              <p className="text-sm text-gray-700 font-light leading-relaxed">
                Nous innovons sans cesse pour vous proposer les meilleures expériences shopping.
              </p>
            </div>
            <div className="space-y-4">
              <Globe size={32} className="text-black" />
              <h3 className="text-lg font-light tracking-wide">Durabilité</h3>
              <p className="text-sm text-gray-700 font-light leading-relaxed">
                Responsabilité envers la planète. Matériaux éco-responsables et production éthique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-light mb-2">50K+</p>
              <p className="text-sm uppercase tracking-widest font-light text-gray-600">
                Clients Satisfaits
              </p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-light mb-2">1200+</p>
              <p className="text-sm uppercase tracking-widest font-light text-gray-600">
                Pièces Créées
              </p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-light mb-2">98%</p>
              <p className="text-sm uppercase tracking-widest font-light text-gray-600">
                Taux de Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Collections */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-light tracking-wide mb-16 text-center">Nos Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light tracking-wide mb-4">Collection Homme</h3>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Pour l'homme moderne qui cherche l'élégance et le confort. T-shirts épurés, chemises intemporelles, pulls minimalistes.
              </p>
              <Link href="/shop" className="text-black hover:opacity-60 transition font-light text-sm uppercase tracking-widest">
                Explorer →
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-light tracking-wide mb-4">Collection Femme</h3>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                L'essence de la féminité raffinée. Robes fluides, tops délicats, vêtements qui mettent en valeur sans en faire trop.
              </p>
              <Link href="/shop" className="text-black hover:opacity-60 transition font-light text-sm uppercase tracking-widest">
                Explorer →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Durabilité */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-light tracking-wide mb-8">Engagement Durabilité</h2>
          <div className="space-y-6 text-gray-700 font-light leading-relaxed">
            <p>
              Nous nous engageons à réduire notre impact environnemental. Tous nos vêtements sont fabriqués à partir de matériaux responsables et respectueux de l'environnement.
            </p>
            <p>
              Chaque année, 1% de nos ventes est reversé à des organisations environnementales. Notre emballage est 100% recyclable et biodégradable.
            </p>
            <p>
              Notre chaîne de production respecte les normes éthiques les plus strictes. Nos partenaires de fabrication sont audités régulièrement pour garantir les meilleures conditions de travail.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-8">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-lg font-light opacity-80 mb-8">
            Découvrez les pièces qui définissent votre style personnel.
          </p>
          <Link
            href="/shop"
            className="inline-block px-12 py-3 border border-white text-white uppercase text-xs tracking-widest font-light hover:bg-white hover:text-black transition duration-300"
          >
            Découvrir la Collection
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
