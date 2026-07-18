'use client';

import Link from 'next/link';
import HeaderPremium from '@/components/HeaderPremium';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderPremium cartCount={0} />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Nous Contacter</h1>
          <div className="w-12 h-px bg-black mx-auto mb-8"></div>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Une question ? Notre équipe est là pour vous aider 7 jours sur 7.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-28">
            {/* Email */}
            <div className="space-y-6 pb-12 md:pb-0 md:border-r md:border-gray-200">
              <Mail size={28} className="text-black" />
              <div>
                <h3 className="text-sm font-light uppercase tracking-widest mb-3">Email</h3>
                <p className="text-base text-gray-700 font-light mb-2">
                  <a href="mailto:support@inetrco.ch" className="hover:text-gray-600 transition">
                    support@inetco.ch
                  </a>
                </p>
                <p className="text-xs text-gray-600 font-light">Réponse sous 24h</p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="space-y-6 pb-12 md:pb-0 md:border-r md:border-gray-200 md:px-12">
              <Phone size={28} className="text-black" />
              <div>
                <h3 className="text-sm font-light uppercase tracking-widest mb-3">Téléphone</h3>
                <p className="text-base text-gray-700 font-light mb-2">
                  <a href="tel:+41225551234" className="hover:text-gray-600 transition">
                    +41 22 555 1234
                  </a>
                </p>
                <p className="text-xs text-gray-600 font-light">Lun-Ven 9h-18h</p>
              </div>
            </div>

            {/* Adresse */}
            <div className="space-y-6 pb-12 md:pb-0 md:border-r md:border-gray-200 md:px-12">
              <MapPin size={28} className="text-black" />
              <div>
                <h3 className="text-sm font-light uppercase tracking-widest mb-3">Adresse</h3>
                <p className="text-base text-gray-700 font-light">
                  Rue de la Paix 42<br />1200 Genève, Suisse
                </p>
              </div>
            </div>

            {/* Horaires */}
            <div className="space-y-6 md:px-12">
              <Clock size={28} className="text-black" />
              <div>
                <h3 className="text-sm font-light uppercase tracking-widest mb-3">Horaires</h3>
                <p className="text-base text-gray-700 font-light">
                  Lun-Ven: 9h-18h<br />
                  Sam: 10h-16h<br />
                  Dim: Fermé
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-gray-200 pt-28">
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-12">Envoyez-nous un Message</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="text-xs uppercase tracking-widest font-light text-gray-700 block mb-3">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-3 px-0 focus:outline-none focus:border-black transition text-gray-700 font-light placeholder-gray-400"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest font-light text-gray-700 block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-3 px-0 focus:outline-none focus:border-black transition text-gray-700 font-light placeholder-gray-400"
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest font-light text-gray-700 block mb-3">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-3 px-0 focus:outline-none focus:border-black transition text-gray-700 font-light placeholder-gray-400"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest font-light text-gray-700 block mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border-b border-gray-300 bg-transparent py-3 px-0 focus:outline-none focus:border-black transition text-gray-700 font-light placeholder-gray-400 resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-black text-white uppercase text-xs tracking-widest font-light hover:bg-gray-900 transition duration-300"
                  >
                    Envoyer
                  </button>
                </div>

                {submitted && (
                  <div className="text-sm text-green-700 font-light flex items-center gap-2">
                    <span>✓</span>
                    <span>Merci ! Nous vous répondrons sous 24h.</span>
                  </div>
                )}
              </form>
            </div>

            {/* FAQ Link */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-12">Questions Fréquentes ?</h2>
              <div className="space-y-8 border border-gray-200 p-12">
                <p className="text-gray-700 font-light leading-relaxed text-base">
                  Avant de nous contacter, vérifiez si votre question figure dans notre FAQ. Vous y trouverez peut-être la réponse immédiatement.
                </p>
                <Link
                  href="/faq"
                  className="inline-block px-8 py-3 bg-black text-white uppercase text-xs tracking-widest font-light hover:bg-gray-900 transition duration-300"
                >
                  Consulter la FAQ
                </Link>
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-xs uppercase tracking-widest font-light text-gray-700 mb-4">
                    Besoin d'aide rapide ?
                  </p>
                  <p className="text-sm text-gray-700 font-light mb-6">
                    Consultez également nos pages :
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/livraison" className="text-gray-700 hover:text-black transition font-light text-base flex items-center gap-2">
                        <span>→</span>
                        <span>Livraison & Délais</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/retours" className="text-gray-700 hover:text-black transition font-light text-base flex items-center gap-2">
                        <span>→</span>
                        <span>Retours & Échanges</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
