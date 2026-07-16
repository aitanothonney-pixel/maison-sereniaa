'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/lib/products';
import { Heart, ShoppingCart, ChevronLeft } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find(p => p.id === productId);

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || 'Noir');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header cartCount={cartCount} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Produit non trouvé</h1>
            <Link href="/shop" className="text-black hover:text-gray-600 font-medium transition">
              Retour à la boutique
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity,
      image: product.image,
    };

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    setAddedToCart(true);
    setCartCount(cart.length);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link href="/shop" className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition">
          <ChevronLeft size={18} />
          <span>Retour à la boutique</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="sticky top-24 h-fit">
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 md:h-[500px] object-cover"
              />
            </div>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-16 h-16 bg-gray-100 rounded-lg cursor-pointer hover:opacity-75 transition">
                  <img src={product.image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-black">{product.price.toFixed(2)}€</span>
              <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                En stock
              </span>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="font-bold mb-3">Taille</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-lg font-medium transition border-2 ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                <Link href="#" className="underline hover:no-underline">
                  Guide des tailles
                </Link>
              </p>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="font-bold mb-3">Couleur</h3>
              <div className="space-y-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition border-2 text-left ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-bold mb-3">Quantité</h3>
              <div className="flex items-center border border-gray-200 rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-600 hover:text-black transition"
                >
                  −
                </button>
                <span className="px-6 py-2 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-600 hover:text-black transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                {addedToCart ? 'Ajouté au panier ✓' : 'Ajouter au panier'}
              </button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="px-6 py-4 border-2 border-gray-200 rounded-lg font-bold hover:border-gray-300 transition"
              >
                <Heart
                  size={20}
                  className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                />
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Livraison gratuite</span>
                <span className="font-medium">À partir de 50€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Retours gratuits</span>
                <span className="font-medium">30 jours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Garantie</span>
                <span className="font-medium">1 an</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t pt-12">
          <h2 className="text-3xl font-bold mb-8">Produits similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(p => (
                <Link key={p.id} href={`/product/${p.id}`}>
                  <div className="group cursor-pointer">
                    <div className="bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{p.category}</p>
                    <h3 className="font-bold mb-2 group-hover:text-gray-600 transition">{p.name}</h3>
                    <span className="text-lg font-bold">{p.price.toFixed(2)}€</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
