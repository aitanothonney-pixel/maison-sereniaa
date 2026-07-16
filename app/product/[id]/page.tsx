'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/lib/products';
import { Heart, ShoppingCart, ChevronLeft, Share2, Copy, Check, Truck, RotateCcw, Award } from 'lucide-react';

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
  const [shareLink, setShareLink] = useState('');
  const [shareCopied, setShareCopied] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState<any[]>([]);
  const [stock] = useState(12);

  useEffect(() => {
    if (product) {
      const recent = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
      const filtered = recent.filter((p: any) => p.id !== product.id);
      filtered.unshift(product);
      const limited = filtered.slice(0, 8);
      localStorage.setItem('recentlyViewed', JSON.stringify(limited));
      setRecentlyViewed(limited);
    }
  }, [product]);

  const handleShare = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    setShareLink(url);
  };

  const handleCopyLink = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    navigator.clipboard.writeText(url);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

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
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-4 font-light">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-6">{product.name}</h1>

            <div className="flex items-end gap-4 mb-8">
              <span className="text-4xl font-light tracking-wide text-black">{product.price.toFixed(2)} CHF</span>
              <span className={`text-sm px-3 py-1 rounded-full font-light ${
                stock > 5
                  ? 'bg-green-100 text-green-800'
                  : stock > 0
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {stock > 5 ? 'En stock' : stock > 0 ? 'Stock limité' : 'Rupture'}
              </span>
            </div>
            {stock <= 5 && stock > 0 && (
              <p className="text-xs text-gray-600 mb-4 font-light">
                Seulement {stock} articles disponibles
              </p>
            )}

            <p className="text-gray-700 font-light leading-relaxed mb-8">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-light uppercase tracking-widest mb-4">Taille</h3>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-2 transition border text-sm font-light uppercase tracking-widest ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-3 font-light">
                <Link href="#" className="hover:text-black transition">
                  Guide des tailles →
                </Link>
              </p>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-light uppercase tracking-widest mb-4">Couleur</h3>
              <div className="space-y-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-full py-3 px-4 transition border text-left font-light ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm font-light uppercase tracking-widest mb-4">Quantité</h3>
              <div className="flex items-center border border-gray-200 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-600 hover:text-black transition font-light"
                >
                  −
                </button>
                <span className="px-6 py-3 font-light border-r border-l border-gray-200">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-gray-600 hover:text-black transition font-light"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart & Actions */}
            <div className="space-y-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={stock === 0}
                className={`w-full py-4 font-light uppercase tracking-widest text-sm transition flex items-center justify-center gap-2 ${
                  stock === 0
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-900'
                }`}
              >
                <ShoppingCart size={20} />
                {addedToCart ? 'Ajouté ✓' : 'Ajouter au Panier'}
              </button>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`flex-1 py-3 border transition font-light uppercase tracking-widest text-xs ${
                    isFavorite
                      ? 'border-red-500 bg-red-50 text-red-600'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Heart
                    size={16}
                    className={`inline mr-2 ${isFavorite ? 'fill-red-600 text-red-600' : ''}`}
                  />
                  Wishlist
                </button>
                <button
                  onClick={handleCopyLink}
                  className="flex-1 py-3 border border-gray-200 text-gray-700 hover:border-gray-300 transition font-light uppercase tracking-widest text-xs"
                >
                  {shareCopied ? (
                    <>
                      <Check size={16} className="inline mr-2" />
                      Copié
                    </>
                  ) : (
                    <>
                      <Copy size={16} className="inline mr-2" />
                      Partager
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Reassurance Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center space-y-2 p-4 bg-gray-50 rounded">
                <Truck size={24} className="text-black" />
                <p className="text-xs uppercase tracking-widest font-light">Livraison Gratuite</p>
                <p className="text-xs text-gray-600 font-light">{'>'} 80 CHF</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 bg-gray-50 rounded">
                <RotateCcw size={24} className="text-black" />
                <p className="text-xs uppercase tracking-widest font-light">Retours Gratuits</p>
                <p className="text-xs text-gray-600 font-light">30 jours</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 bg-gray-50 rounded">
                <Award size={24} className="text-black" />
                <p className="text-xs uppercase tracking-widest font-light">Garantie</p>
                <p className="text-xs text-gray-600 font-light">2 ans</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        {recentlyViewed.length > 1 && (
          <div className="border-t pt-12 mb-16">
            <h2 className="text-3xl font-light tracking-wide mb-8">Vus récemment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {recentlyViewed.slice(1, 5).map(p => (
                <Link key={p.id} href={`/product/${p.id}`}>
                  <div className="group cursor-pointer">
                    <div className="bg-gray-100 rounded overflow-hidden mb-4 aspect-square">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-gray-600 font-light mb-1">{p.category}</p>
                    <h3 className="text-sm font-light group-hover:text-gray-600 transition mb-2 leading-tight">{p.name}</h3>
                    <span className="text-sm font-light text-black">{p.price.toFixed(2)} CHF</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        <div className="border-t pt-12">
          <h2 className="text-3xl font-light tracking-wide mb-8">Produits similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(p => (
                <Link key={p.id} href={`/product/${p.id}`}>
                  <div className="group cursor-pointer">
                    <div className="bg-gray-100 rounded mb-4 overflow-hidden aspect-square">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-gray-600 font-light mb-1">{p.category}</p>
                    <h3 className="text-sm font-light group-hover:text-gray-600 transition mb-2 leading-tight">{p.name}</h3>
                    <span className="text-sm font-light text-black">{p.price.toFixed(2)} CHF</span>
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
