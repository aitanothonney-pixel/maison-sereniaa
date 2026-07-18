'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HeaderPremium from '@/components/HeaderPremium';
import Footer from '@/components/Footer';
import { Trash2, ArrowRight, ShoppingBag, Heart, Award, Zap, Globe } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
    setLoading(false);
  }, []);

  const handleRemoveItem = (index: number) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleUpdateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const newCart = [...cartItems];
    newCart[index].quantity = newQuantity;
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleApplyPromo = () => {
    if (promoCode === 'BIENVENUE10') {
      setDiscount(10);
    } else if (promoCode === 'SUMMER20') {
      setDiscount(20);
    } else {
      alert('Code promo invalide');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discount) / 100;
  const shipping = subtotal > 80 ? 0 : 12.90;
  const total = subtotal - discountAmount + shipping;

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <HeaderPremium cartCount={cartItems.length} />
        <div className="flex-1 flex items-center justify-center">
          <p>Chargement...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderPremium cartCount={cartItems.length} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Votre Panier</h1>
          <div className="w-12 h-px bg-black mb-6"></div>
          <p className="text-gray-600 font-light text-lg">{cartItems.length} article{cartItems.length !== 1 ? 's' : ''}</p>
        </div>

        {cartItems.length === 0 ? (
          <>
            <div className="text-center py-32">
              <ShoppingBag className="w-20 h-20 text-gray-200 mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">Votre panier est vide</h2>
              <p className="text-gray-600 font-light text-lg mb-12 max-w-md mx-auto">Explorez notre collection et trouvez les articles parfaits pour vous</p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 font-light uppercase tracking-widest text-sm hover:bg-gray-900 transition"
              >
                Découvrir la Boutique
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Trust Badges Section */}
            <div className="border-t border-gray-200 mt-24 pt-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4 text-center">
                  <div className="flex justify-center">
                    <Heart size={32} className="text-black" />
                  </div>
                  <h3 className="text-sm font-light uppercase tracking-widest text-black">Authenticité</h3>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">Tous nos produits sont 100% authentiques et garantis</p>
                </div>

                <div className="space-y-4 text-center">
                  <div className="flex justify-center">
                    <Award size={32} className="text-black" />
                  </div>
                  <h3 className="text-sm font-light uppercase tracking-widest text-black">Qualité</h3>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">Sélection rigoureuse de produits premium</p>
                </div>

                <div className="space-y-4 text-center">
                  <div className="flex justify-center">
                    <Zap size={32} className="text-black" />
                  </div>
                  <h3 className="text-sm font-light uppercase tracking-widest text-black">Innovation</h3>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">Dernières technologies et designs</p>
                </div>

                <div className="space-y-4 text-center">
                  <div className="flex justify-center">
                    <Globe size={32} className="text-black" />
                  </div>
                  <h3 className="text-sm font-light uppercase tracking-widest text-black">Durabilité</h3>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">Engagement pour l'environnement</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex gap-6 pb-8 border-b border-gray-200">
                    <div className="w-28 h-28 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Link href={`/product/${item.id}`} className="text-base font-light hover:text-gray-600 transition">
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-600 font-light mt-2">
                            {item.color} • Taille {item.size}
                          </p>
                        </div>
                        <span className="text-base font-light">{(item.price * item.quantity).toFixed(2)} CHF</span>
                      </div>

                      <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center border border-gray-300 w-fit">
                          <button
                            onClick={() => handleUpdateQuantity(index, item.quantity - 1)}
                            className="px-4 py-2 text-gray-600 hover:text-black transition font-light"
                          >
                            −
                          </button>
                          <span className="px-6 py-2 font-light border-r border-l border-gray-300">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(index, item.quantity + 1)}
                            className="px-4 py-2 text-gray-600 hover:text-black transition font-light"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemoveItem(index)}
                          className="text-gray-600 hover:text-red-600 transition flex items-center gap-2 font-light text-sm uppercase tracking-widest"
                        >
                          <Trash2 size={16} />
                          <span>Supprimer</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="border border-gray-200 p-8 sticky top-24">
                <h2 className="text-sm font-light uppercase tracking-widest text-black mb-8">Résumé de la commande</h2>

                <div className="space-y-4 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700 font-light">Sous-total</span>
                    <span className="font-light">{subtotal.toFixed(2)} CHF</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-700">
                      <span className="font-light">Réduction ({discount}%)</span>
                      <span className="font-light">-{discountAmount.toFixed(2)} CHF</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700 font-light">Livraison</span>
                    <span className="font-light">
                      {shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)} CHF`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8 text-xl">
                  <span className="font-light">Total</span>
                  <span className="font-light">{total.toFixed(2)} CHF</span>
                </div>

                {/* Promo Code */}
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <label className="text-xs font-light uppercase tracking-widest text-black mb-4 block">Code promo</label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      placeholder="Entrez un code"
                      className="flex-1 px-4 py-3 border-b border-gray-300 bg-transparent text-sm font-light focus:outline-none focus:border-black transition"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-6 py-3 bg-black text-white text-sm font-light uppercase tracking-widest hover:bg-gray-900 transition"
                    >
                      OK
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 font-light">
                    Essayez: <span className="font-light">BIENVENUE10</span> ou <span className="font-light">SUMMER20</span>
                  </p>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-black text-white py-4 font-light uppercase tracking-widest text-sm hover:bg-gray-900 transition mb-3">
                  Passer la commande
                </button>

                <Link
                  href="/shop"
                  className="block w-full text-center py-4 border border-black text-black font-light uppercase tracking-widest text-sm hover:bg-gray-50 transition"
                >
                  Continuer le shopping
                </Link>

                {/* Info */}
                <div className="mt-8 pt-8 border-t border-gray-200 text-xs text-gray-600 space-y-3 font-light">
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5">✓</span>
                    <span>Livraison gratuite dès 80 CHF</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5">✓</span>
                    <span>Retours gratuits pendant 30 jours</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5">✓</span>
                    <span>Paiement 100% sécurisé (SSL)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
