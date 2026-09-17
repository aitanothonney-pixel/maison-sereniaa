'use client'

import { useState } from 'react'
import Link from 'next/link'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import { useCart, cartItemKey } from '@/lib/cart-context'
import { VARIANT_LABELS } from '@/lib/products'

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postal, setPostal] = useState('')
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [processing, setProcessing] = useState(false)
  const [completed, setCompleted] = useState(false)

  const shipping = 10
  const finalTotal = total + shipping - discount

  const handlePromoCode = () => {
    if (promoCode === 'TEMPORED10') {
      setDiscount(total * 0.1)
    } else {
      alert('Code promo invalide')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    // Simuler un paiement Stripe
    setTimeout(() => {
      setCompleted(true)
      clearCart()
      setProcessing(false)
    }, 2000)
  }

  if (completed) {
    return (
      <>
        <Marquee />
        <SiteHeader />
        <main className="px-5 lg:px-8 py-20 text-center">
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-6xl">✓</div>
            <h1 className="display text-3xl">COMMANDE CONFIRMÉE</h1>
            <p className="text-muted">Merci pour votre achat. Un e-mail de confirmation a été envoyé.</p>
            <Link href="/shop" className="inline-block bg-foreground text-background px-6 py-3 ui-label hover:opacity-80">
              CONTINUER LES ACHATS
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (items.length === 0) {
    return (
      <>
        <Marquee />
        <SiteHeader />
        <main className="px-5 lg:px-8 py-12 text-center">
          <p className="mb-6">Votre panier est vide</p>
          <Link href="/shop" className="ui-label hover:opacity-60">
            Retour à la boutique
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12">
        <h1 className="display text-[13vw] sm:text-[7vw] lg:text-[80px] mb-12">PAIEMENT</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl">
          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            {/* Email */}
            <div>
              <label className="ui-label mb-2 block">EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-line bg-background focus:outline-none focus:border-foreground"
                placeholder="vous@example.com"
              />
            </div>

            {/* Infos livraison */}
            <div>
              <h2 className="ui-label mb-4">ADRESSE DE LIVRAISON</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="Prénom"
                  className="px-4 py-3 border border-line bg-background focus:outline-none focus:border-foreground"
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Nom"
                  className="px-4 py-3 border border-line bg-background focus:outline-none focus:border-foreground"
                />
              </div>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                placeholder="Rue et numéro"
                className="w-full px-4 py-3 border border-line bg-background focus:outline-none focus:border-foreground mb-4"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                  required
                  placeholder="Code postal"
                  className="px-4 py-3 border border-line bg-background focus:outline-none focus:border-foreground"
                />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  placeholder="Ville"
                  className="px-4 py-3 border border-line bg-background focus:outline-none focus:border-foreground"
                />
              </div>
            </div>

            {/* Code promo */}
            <div>
              <label className="ui-label mb-2 block">CODE PROMO (OPTIONNEL)</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  placeholder="TEMPORED10"
                  className="flex-1 px-4 py-3 border border-line bg-background focus:outline-none focus:border-foreground"
                />
                <button
                  type="button"
                  onClick={handlePromoCode}
                  className="px-4 py-3 border border-line hover:bg-surface transition-colors"
                >
                  Appliquer
                </button>
              </div>
              <p className="text-xs text-muted mt-2">Essayez TEMPORED10 pour 10% de réduction</p>
            </div>

            {/* Paiement */}
            <div>
              <h2 className="ui-label mb-4">PAIEMENT</h2>
              <p className="text-sm text-muted mb-4">Intégration Stripe — les détails de paiement seront ajoutés prochainement</p>
              <button
                type="submit"
                disabled={processing}
                className="w-full py-4 bg-foreground text-background ui-label hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                {processing ? 'TRAITEMENT...' : `PAYER ${finalTotal} CHF`}
              </button>
              <p className="text-xs text-muted mt-4">Paiement sécurisé par Stripe. Vos données sont chiffrées.</p>
            </div>
          </form>

          {/* Récap panier */}
          <div className="lg:col-span-1">
            <div className="border border-line p-6 sticky top-20">
              <h2 className="ui-label mb-6">RÉCAPITULATIF</h2>

              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={cartItemKey(item)} className="flex justify-between text-sm pb-4 border-b border-line">
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-xs text-muted">{VARIANT_LABELS[item.variant]} · {item.color}</p>
                      <p className="text-xs text-muted">
                        {[
                          item.hoodieSize && `Pull: ${item.hoodieSize}`,
                          item.pantsSize && `Jogging: ${item.pantsSize}`,
                        ]
                          .filter(Boolean)
                          .join(' / ')}
                      </p>
                      <p className="text-xs text-muted">x{item.quantity}</p>
                    </div>
                    <p className="font-bold">{item.price * item.quantity} CHF</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-line pt-6">
                <div className="flex justify-between text-sm">
                  <span>Sous-total</span>
                  <span className="font-bold">{total} CHF</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Livraison</span>
                  <span className="font-bold">{shipping} CHF</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Réduction</span>
                    <span className="font-bold">-{discount.toFixed(2)} CHF</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold pt-3 border-t border-line">
                  <span>TOTAL</span>
                  <span>{finalTotal.toFixed(2)} CHF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
