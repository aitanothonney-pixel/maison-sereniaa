'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

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
  const shipping = subtotal > 50 ? 0 : 8.99;
  const total = subtotal - discountAmount + shipping;

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header cartCount={cartItems.length} />
        <div className="flex-1 flex items-center justify-center">
          <p>Chargement...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartItems.length} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Panier</h1>
        <p className="text-gray-600 mb-12">{cartItems.length} article{cartItems.length !== 1 ? 's' : ''}</p>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Votre panier est vide</h2>
            <p className="text-gray-600 mb-8">Ajoutez des articles pour commencer vos achats</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition"
            >
              Continuer vos achats
              <ArrowRight size={20} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex gap-6 pb-6 border-b border-gray-200">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Link href={`/product/${item.id}`} className="font-bold hover:text-gray-600 transition">
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">
                            {item.color} • Taille {item.size}
                          </p>
                        </div>
                        <span className="font-bold text-lg">{(item.price * item.quantity).toFixed(2)}€</span>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-200 rounded-lg w-fit">
                          <button
                            onClick={() => handleUpdateQuantity(index, item.quantity - 1)}
                            className="px-3 py-1 text-gray-600 hover:text-black transition"
                          >
                            −
                          </button>
                          <span className="px-4 py-1 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(index, item.quantity + 1)}
                            className="px-3 py-1 text-gray-600 hover:text-black transition"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemoveItem(index)}
                          className="text-red-600 hover:text-red-800 transition flex items-center gap-2"
                        >
                          <Trash2 size={18} />
                          <span className="hidden sm:inline">Supprimer</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h2 className="font-bold text-lg mb-6">Résumé de la commande</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sous-total</span>
                    <span className="font-medium">{subtotal.toFixed(2)}€</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Réduction ({discount}%)</span>
                      <span className="font-medium">-{discountAmount.toFixed(2)}€</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-700">Livraison</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)}€`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6 text-lg font-bold">
                  <span>Total</span>
                  <span>{total.toFixed(2)}€</span>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="text-sm text-gray-700 mb-2 block">Code promo</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      placeholder="Entrez un code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-black transition"
                    >
                      OK
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Essayez: <span className="font-medium">BIENVENUE10</span> ou <span className="font-medium">SUMMER20</span>
                  </p>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition mb-3">
                  Passer la commande
                </button>

                <Link
                  href="/shop"
                  className="block w-full text-center py-3 border-2 border-black text-black rounded-lg font-bold hover:bg-gray-50 transition"
                >
                  Continuer le shopping
                </Link>

                {/* Info */}
                <div className="mt-6 pt-6 border-t border-gray-200 text-xs text-gray-600 space-y-2">
                  <p>✓ Livraison gratuite à partir de 50€</p>
                  <p>✓ Retours gratuits pendant 30 jours</p>
                  <p>✓ Paiement 100% sécurisé</p>
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
