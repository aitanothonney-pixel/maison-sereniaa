'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler l'envoi du formulaire
    console.log('Formulaire envoyé:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12">
        <h1 className="display text-[13vw] sm:text-[7vw] lg:text-[80px] mb-12">CONTACT</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl">
          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="ui-label mb-3 block">
                NOM
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-line bg-background focus:outline-none focus:border-foreground"
                placeholder="Ton nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="ui-label mb-3 block">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-line bg-background focus:outline-none focus:border-foreground"
                placeholder="toi@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="ui-label mb-3 block">
                SUJET
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-line bg-background focus:outline-none focus:border-foreground"
                placeholder="À quoi ça concerne?"
              />
            </div>

            <div>
              <label htmlFor="message" className="ui-label mb-3 block">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-line bg-background focus:outline-none focus:border-foreground resize-none"
                placeholder="Ton message..."
              />
            </div>

            <button
              type="submit"
              className={`w-full py-4 text-center ui-label transition-all ${
                submitted
                  ? 'bg-foreground text-background'
                  : 'bg-foreground text-background hover:opacity-80'
              }`}
            >
              {submitted ? '✓ MESSAGE ENVOYÉ' : 'ENVOYER'}
            </button>
          </form>

          {/* Infos de contact */}
          <div className="space-y-12">
            <div>
              <h2 className="display text-2xl mb-4">NOUS ÉCRIRE</h2>
              <a href="mailto:contact@tempored.com" className="display text-xl hover:opacity-60 transition-opacity inline-block mb-4">
                contact@tempored.com
              </a>
              <p className="text-sm text-muted">Réponse sous 24h (jours ouvrés).</p>
            </div>

            <div>
              <h2 className="ui-label mb-4">QUESTIONS FRÉQUENTES</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold mb-2">Délais de livraison?</p>
                  <p className="text-muted">1 à 2 semaines ouvrées. Expédition 48h après achat.</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Problème avec ma commande?</p>
                  <p className="text-muted">Contacte-nous avec numéro de commande. On règle ça vite.</p>
                </div>
                <div>
                  <p className="font-bold mb-2">Retours gratuits?</p>
                  <p className="text-muted">Oui, 30 jours. Frais offerts Suisse/EU.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="ui-label mb-4">RÉSEAUX</h2>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/temperedgarments/" target="_blank" rel="noopener" className="text-muted hover:text-foreground transition-colors">
                  Instagram
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener" className="text-muted hover:text-foreground transition-colors">
                  Twitter
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener" className="text-muted hover:text-foreground transition-colors">
                  Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
