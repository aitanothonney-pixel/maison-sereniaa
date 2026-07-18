'use client';

import HeaderPremium from '@/components/HeaderPremium';
import Footer from '@/components/Footer';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'shipping-1',
    category: 'Livraison',
    question: 'Quel est le délai de livraison ?',
    answer: 'Le délai dépend de votre mode de livraison. Colissimo Standard: 3-5 jours. Express 24h: 24 heures (commande avant 13h). Europe: 5-10 jours. International: 10-21 jours. Les délais commencent après la confirmation de votre paiement.'
  },
  {
    id: 'shipping-2',
    category: 'Livraison',
    question: 'La livraison est-elle gratuite ?',
    answer: 'Oui, la livraison est gratuite pour les commandes de 80 CHF et plus en France, Suisse et Belgique avec Colissimo Standard. Pour les autres destinations ou modes de livraison, des frais s\'appliquent.'
  },
  {
    id: 'shipping-3',
    category: 'Livraison',
    question: 'Puis-je suivre ma commande ?',
    answer: 'Absolument ! Vous recevrez un email avec un numéro de suivi dès l\'expédition. Vous pouvez suivre votre colis en temps réel sur le site du transporteur.'
  },
  {
    id: 'returns-1',
    category: 'Retours',
    question: 'Quel est le délai de retour ?',
    answer: 'Vous avez 30 jours à partir de la réception de votre commande pour effectuer un retour ou un échange. Passé ce délai, nous ne pouvons plus accepter les retours.'
  },
  {
    id: 'returns-2',
    category: 'Retours',
    question: 'Les frais de retour sont-ils à ma charge ?',
    answer: 'Non, tous les retours sont gratuits. Nous prenons en charge les frais de port à votre réception. Une étiquette de retour est fournie avec chaque commande.'
  },
  {
    id: 'returns-3',
    category: 'Retours',
    question: 'Comment puis-je initier un retour ?',
    answer: 'Connectez-vous à votre compte client, sélectionnez la commande et cliquez sur "Demander un retour". Imprimez l\'étiquette fournie et déposez votre colis à la Poste. Une fois reçu, vous serez remboursé sous 7 jours ouvrables.'
  },
  {
    id: 'products-1',
    category: 'Produits',
    question: 'Quelle est la garantie sur les produits ?',
    answer: 'Tous nos produits sont garantis 2 ans contre tout défaut de fabrication. Si vous constatez un problème, contactez notre service client qui vous proposera une solution (réparation, échange ou remboursement).'
  },
  {
    id: 'products-2',
    category: 'Produits',
    question: 'Comment choisir la bonne taille ?',
    answer: 'Consultez notre guide des tailles disponible sur chaque page produit. Les mesures sont précises et correspondent aux standards internatio naux. Si vous avez un doute, n\'hésitez pas à nous contacter.'
  },
  {
    id: 'products-3',
    category: 'Produits',
    question: 'Les produits sont-ils en stock ?',
    answer: 'Oui, tous les produits affichés sur le site sont en stock. Si une rupture survient, vous en serez informé immédiatement et votre commande sera annulée avec remboursement intégral.'
  },
  {
    id: 'account-1',
    category: 'Compte',
    question: 'Comment créer un compte ?',
    answer: 'Cliquez sur "Mon Compte" dans le menu, puis sélectionnez "Créer un compte". Remplissez le formulaire avec vos coordonnées et validez. Vous pouvez alors passer des commandes plus rapidement.'
  },
  {
    id: 'account-2',
    category: 'Compte',
    question: 'Comment réinitialiser mon mot de passe ?',
    answer: 'Cliquez sur "Mot de passe oublié" sur la page de connexion. Entrez votre email et vous recevrez un lien pour réinitialiser votre mot de passe en quelques minutes.'
  },
  {
    id: 'payment-1',
    category: 'Paiement',
    question: 'Quels modes de paiement sont acceptés ?',
    answer: 'Nous acceptons Visa, Mastercard, Apple Pay, Google Pay, PayPal, virement bancaire, et aussi 3x sans frais avec Klarna.'
  },
  {
    id: 'payment-2',
    category: 'Paiement',
    question: 'Mon paiement est-il sécurisé ?',
    answer: 'Oui, 100% sécurisé. Nous utilisons le protocole SSL 256-bit pour chiffrer toutes les transactions. Vos données bancaires ne sont jamais stockées sur nos serveurs.'
  },
];

const categories = ['Livraison', 'Retours', 'Produits', 'Compte', 'Paiement'];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Livraison');

  const filteredFAQ = faqItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <HeaderPremium cartCount={0} />

      {/* Hero */}
      <section className="bg-black text-white py-16 md:py-24 pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Questions Fréquentes</h1>
          <p className="text-lg font-light opacity-80 max-w-2xl mx-auto">
            Vous avez une question ? Consultez notre FAQ ou contactez notre équipe support 7j/7.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 mb-16 border-b border-gray-200 pb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setOpenId(null);
                }}
                className={`text-sm uppercase tracking-widest font-light transition ${
                  selectedCategory === category
                    ? 'text-black border-b-2 border-black pb-2'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQ.map((item) => (
              <div key={item.id} className="border border-gray-200">
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full text-left px-6 py-4 hover:bg-gray-50 transition flex items-center justify-between gap-4"
                >
                  <span className="font-light text-gray-900">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      openId === item.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openId === item.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 font-light leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Need Help */}
          <div className="mt-16 bg-gray-50 p-8 rounded text-center">
            <h3 className="text-2xl font-light tracking-wide mb-4">Vous n'avez pas trouvé votre réponse ?</h3>
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Notre équipe support est disponible 7j/7 pour répondre à vos questions.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 border border-black text-black uppercase text-xs tracking-widest font-light hover:bg-black hover:text-white transition duration-300"
            >
              Contacter le Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
