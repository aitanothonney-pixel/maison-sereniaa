'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RotateCcw, PackageX, CheckCircle, AlertCircle } from 'lucide-react';

export default function Retours() {
  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={0} />

      {/* Hero */}
      <section className="bg-black text-white py-16 md:py-24 pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Retours & Échanges</h1>
          <p className="text-lg font-light opacity-80 max-w-2xl mx-auto">
            Vous avez 30 jours pour changer d'avis. C'est simple, gratuit et sans condition.
          </p>
        </div>
      </section>

      {/* Politique de retour */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="space-y-12">

            {/* Délai de retour */}
            <div>
              <h2 className="text-3xl font-light tracking-wide mb-6 flex items-center gap-3">
                <RotateCcw size={28} /> Délai de Retour
              </h2>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Vous avez <span className="font-medium">30 jours à compter de la réception</span> de votre commande pour effectuer un retour ou un échange.
              </p>
              <p className="text-gray-700 font-light leading-relaxed">
                Le délai commence le jour où votre colis est livré. Passé ce délai, nous ne pouvons plus accepter les retours.
              </p>
            </div>

            {/* Conditions de retour */}
            <div>
              <h2 className="text-3xl font-light tracking-wide mb-6 flex items-center gap-3">
                <CheckCircle size={28} /> Conditions de Retour
              </h2>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Pour que votre retour soit accepté, les articles doivent être :
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-700 font-light leading-relaxed flex gap-3">
                  <span className="text-black">—</span> Non portés, non lavés et en parfait état
                </li>
                <li className="text-gray-700 font-light leading-relaxed flex gap-3">
                  <span className="text-black">—</span> Avec l'étiquette d'origine intacte
                </li>
                <li className="text-gray-700 font-light leading-relaxed flex gap-3">
                  <span className="text-black">—</span> Accompagnés de leur emballage original
                </li>
                <li className="text-gray-700 font-light leading-relaxed flex gap-3">
                  <span className="text-black">—</span> Avec le bon de retour imprimé ou en photo
                </li>
              </ul>
            </div>

            {/* Processus de retour */}
            <div>
              <h2 className="text-3xl font-light tracking-wide mb-6 flex items-center gap-3">
                <PackageX size={28} /> Comment Effectuer un Retour
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded">
                  <p className="text-sm uppercase tracking-widest font-light text-gray-600 mb-2">Étape 1</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Rendez-vous sur votre compte client, sélectionnez la commande et demandez un retour.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded">
                  <p className="text-sm uppercase tracking-widest font-light text-gray-600 mb-2">Étape 2</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Imprimez l'étiquette de retour (ou nous la fournirons). Aucun frais de port à votre charge.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded">
                  <p className="text-sm uppercase tracking-widest font-light text-gray-600 mb-2">Étape 3</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Emballez votre colis et déposez-le à la Poste ou auprès de notre transporteur.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded">
                  <p className="text-sm uppercase tracking-widest font-light text-gray-600 mb-2">Étape 4</p>
                  <p className="text-gray-700 font-light leading-relaxed">
                    Une fois reçu, nous contrôlons l'article et vous remboursons sous 7 jours ouvrables.
                  </p>
                </div>
              </div>
            </div>

            {/* Frais de retour */}
            <div>
              <h2 className="text-3xl font-light tracking-wide mb-6 flex items-center gap-3">
                <AlertCircle size={28} /> Frais de Retour
              </h2>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                <span className="font-medium">Les retours sont gratuits</span> pour tous les clients. Nous prenons en charge les frais de port à votre réception.
              </p>
              <p className="text-gray-700 font-light leading-relaxed">
                Si l'article ne répond pas aux conditions de retour (porté, taché, déchirure), nous vous contacterons avant de procéder au remboursement.
              </p>
            </div>

            {/* Échanges */}
            <div className="bg-gray-50 p-8 rounded">
              <h3 className="text-2xl font-light tracking-wide mb-4">Préférez un Échange ?</h3>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Vous n'êtes pas satisfait de la taille ou de la couleur ? Échangez gratuitement pour un autre article.
              </p>
              <p className="text-gray-700 font-light leading-relaxed">
                L'échange est immédiat une fois votre colis reçu. Pas d'attente, pas de frais supplémentaires.
              </p>
            </div>

            {/* Contact Support */}
            <div>
              <h2 className="text-3xl font-light tracking-wide mb-6">Questions ?</h2>
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Notre équipe support est disponible 7j/7 pour vous aider avec votre retour.
              </p>
              <Link
                href="#"
                className="inline-block px-8 py-3 border border-black text-black uppercase text-xs tracking-widest font-light hover:bg-black hover:text-white transition duration-300"
              >
                Contacter le Support
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
