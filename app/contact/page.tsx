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
      <section className="bg-black text-white py-16 md:py-24 pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Nous Contacter</h1>
          <p className="text-lg font-light opacity-80 max-w-2xl mx-auto">
            Une question ? Notre équipe est là pour vous aider 7 jours sur 7.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            {/* Email */}
            <div className="space-y-4">
              <Mail size={32} className="text-black" />
              <h3 className="text-lg font-light tracking-wide">Email</h3>
              <p className="text-sm text-gray-700 font-light">
                <a href="mailto:support@inetrco.ch" className="hover:text-black transition">
                  support@inetco.ch
                </a>
              </p>
              <p className="text-xs text-gray-600 font-light">Réponse sous 24h</p>
            </div>

            {/* Téléphone */}
            <div className="space-y-4">
              <Phone size={32} className="text-black" />
              <h3 className="text-lg font-light tracking-wide">Téléphone</h3>
              <p className="text-sm text-gray-700 font-light">
                <a href="tel:+41225551234" className="hover:text-black transition">
                  +41 22 555 1234
                </a>
              </p>
              <p className="text-xs text-gray-600 font-light">Lun-Ven 9h-18h</p>
            </div>

            {/* Adresse */}
            <div className="space-y-4">
              <MapPin size={32} className="text-black" />
              <h3 className="text-lg font-light tracking-wide">Adresse</h3>
              <p className="text-sm text-gray-700 font-light">
                Rue de la Paix 42<br />1200 Genève, Suisse
              </p>
            </div>

            {/* Horaires */}
            <div className="space-y-4">
              <Clock size={32} className="text-black" />
              <h3 className="text-lg font-light tracking-wide">Horaires</h3>
              <p className="text-sm text-gray-700 font-light">
                Lun-Ven: 9h-18h<br />
                Sam: 10h-16h<br />
                Dim: Fermé
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light tracking-wide mb-8">Envoyez-nous un Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs uppercase tracking-widest font-light text-gray-600 block mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-black bg-transparent py-3 px-0 focus:outline-none transition text-gray-700 font-light placeholder-gray-400"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest font-light text-gray-600 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-black bg-transparent py-3 px-0 focus:outline-none transition text-gray-700 font-light placeholder-gray-400"
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest font-light text-gray-600 block mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-black bg-transparent py-3 px-0 focus:outline-none transition text-gray-700 font-light placeholder-gray-400"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest font-light text-gray-600 block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border-b border-black bg-transparent py-3 px-0 focus:outline-none transition text-gray-700 font-light placeholder-gray-400 resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 border border-black text-black uppercase text-xs tracking-widest font-light hover:bg-black hover:text-white transition duration-300"
                  >
                    Envoyer
                  </button>
                </div>

                {submitted && (
                  <div className="text-sm text-green-700 font-light">
                    ✓ Merci ! Nous vous répondrons sous 24h.
                  </div>
                )}
              </form>
            </div>

            {/* FAQ Link */}
            <div>
              <h2 className="text-3xl font-light tracking-wide mb-8">Questions Fréquentes ?</h2>
              <div className="space-y-6 bg-gray-50 p-8 rounded">
                <p className="text-gray-700 font-light leading-relaxed">
                  Avant de nous contacter, vérifiez si votre question figure dans notre FAQ. Vous y trouverez peut-être la réponse immédiatement.
                </p>
                <Link
                  href="/faq"
                  className="inline-block px-6 py-2 border border-black text-black uppercase text-xs tracking-widest font-light hover:bg-black hover:text-white transition duration-300"
                >
                  Consulter la FAQ
                </Link>
                <div className="pt-4 border-t border-gray-200 mt-8">
                  <p className="text-xs uppercase tracking-widest font-light text-gray-600 mb-3">
                    Besoin d'aide rapide ?
                  </p>
                  <p className="text-sm text-gray-700 font-light mb-4">
                    Consultez également nos pages :
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/livraison" className="text-gray-700 hover:text-black transition font-light">
                        → Livraison & Délais
                      </Link>
                    </li>
                    <li>
                      <Link href="/retours" className="text-gray-700 hover:text-black transition font-light">
                        → Retours & Échanges
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
