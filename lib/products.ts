export interface Product {
  id: string
  name: string
  price: number
  description: string
  material: string
  care: string
  images: string[]
  color: string
  sizes: string[]
  stock: number
  featured?: boolean
  category: 'tracksuit'
}

const IMAGES = {
  tracksuit: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=1200&q=80',
}

export const products: Product[] = [
  {
    id: 'tracksuit-grey',
    name: 'Tracksuit Gris',
    price: 195,
    description: 'Ensemble jogging premium TEMPORED. Comprend un pull hoodie oversize et un jogging ample en French terry 450 GSM. Chaque pièce peut avoir sa propre taille.',
    material: 'French Terry Brushed Fleece 450-500 GSM, 100% Coton Bio',
    care: 'Laver à 30°C à l\'envers. Ne pas sécher en machine. Repassage délicat.',
    images: [IMAGES.tracksuit, IMAGES.tracksuit],
    color: 'Gris',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 20,
    featured: true,
    category: 'tracksuit',
  },
  {
    id: 'tracksuit-black',
    name: 'Tracksuit Noir',
    price: 195,
    description: 'Ensemble jogging premium TEMPORED. Comprend un pull hoodie oversize et un jogging ample en French terry 450 GSM. Chaque pièce peut avoir sa propre taille.',
    material: 'French Terry Brushed Fleece 450-500 GSM, 100% Coton Bio',
    care: 'Laver à 30°C à l\'envers. Ne pas sécher en machine. Repassage délicat.',
    images: [IMAGES.tracksuit, IMAGES.tracksuit],
    color: 'Noir',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 24,
    featured: true,
    category: 'tracksuit',
  },
  {
    id: 'tracksuit-blue',
    name: 'Tracksuit Bleu',
    price: 195,
    description: 'Ensemble jogging premium TEMPORED. Comprend un pull hoodie oversize et un jogging ample en French terry 450 GSM. Chaque pièce peut avoir sa propre taille.',
    material: 'French Terry Brushed Fleece 450-500 GSM, 100% Coton Bio',
    care: 'Laver à 30°C à l\'envers. Ne pas sécher en machine. Repassage délicat.',
    images: [IMAGES.tracksuit, IMAGES.tracksuit],
    color: 'Bleu',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 18,
    featured: true,
    category: 'tracksuit',
  },
  {
    id: 'tracksuit-red',
    name: 'Tracksuit Rouge',
    price: 195,
    description: 'Ensemble jogging premium TEMPORED. Comprend un pull hoodie oversize et un jogging ample en French terry 450 GSM. Chaque pièce peut avoir sa propre taille.',
    material: 'French Terry Brushed Fleece 450-500 GSM, 100% Coton Bio',
    care: 'Laver à 30°C à l\'envers. Ne pas sécher en machine. Repassage délicat.',
    images: [IMAGES.tracksuit, IMAGES.tracksuit],
    color: 'Rouge',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 16,
    featured: true,
    category: 'tracksuit',
  },
  {
    id: 'tracksuit-white',
    name: 'Tracksuit Blanc Premium',
    price: 220,
    description: 'Édition limitée — Ensemble jogging ultra-premium en écru brut. Hoodie oversize avec drawcords en cuir cognac et jogging ample. Chaque pièce peut avoir sa propre taille. Production limitée à 50 sets.',
    material: 'French Terry Brushed Fleece 450-500 GSM, 100% Coton Bio Certifié',
    care: 'Laver à 30°C à l\'envers. Ne pas sécher en machine. Repassage délicat. Éviter les produits de blanchiment.',
    images: [IMAGES.tracksuit, IMAGES.tracksuit],
    color: 'Blanc',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 8,
    featured: true,
    category: 'tracksuit',
  },
  {
    id: 'tracksuit-brown',
    name: 'Tracksuit Marron',
    price: 195,
    description: 'Ensemble jogging premium TEMPORED en marron chocolat. Hoodie oversize et jogging ample en French terry 450 GSM. Chaque pièce peut avoir sa propre taille.',
    material: 'French Terry Brushed Fleece 450-500 GSM, 100% Coton Bio',
    care: 'Laver à 30°C à l\'envers. Ne pas sécher en machine. Repassage délicat.',
    images: [IMAGES.tracksuit, IMAGES.tracksuit],
    color: 'Marron',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 14,
    featured: true,
    category: 'tracksuit',
  },
  {
    id: 'tracksuit-olive',
    name: 'Tracksuit Vert Olive',
    price: 195,
    description: 'Ensemble jogging premium TEMPORED en vert olive militaire. Hoodie oversize et jogging ample en French terry 450 GSM. Chaque pièce peut avoir sa propre taille.',
    material: 'French Terry Brushed Fleece 450-500 GSM, 100% Coton Bio',
    care: 'Laver à 30°C à l\'envers. Ne pas sécher en machine. Repassage délicat.',
    images: [IMAGES.tracksuit, IMAGES.tracksuit],
    color: 'Vert Olive',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 12,
    featured: true,
    category: 'tracksuit',
  },
  {
    id: 'tracksuit-burgundy',
    name: 'Tracksuit Bordeaux',
    price: 195,
    description: 'Ensemble jogging premium TEMPORED en bordeaux profond. Hoodie oversize et jogging ample en French terry 450 GSM. Chaque pièce peut avoir sa propre taille.',
    material: 'French Terry Brushed Fleece 450-500 GSM, 100% Coton Bio',
    care: 'Laver à 30°C à l\'envers. Ne pas sécher en machine. Repassage délicat.',
    images: [IMAGES.tracksuit, IMAGES.tracksuit],
    color: 'Bordeaux',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 10,
    featured: true,
    category: 'tracksuit',
  },
  {
    id: 'tracksuit-cream',
    name: 'Tracksuit Crème',
    price: 195,
    description: 'Ensemble jogging premium TEMPORED en crème naturel. Hoodie oversize et jogging ample en French terry 450 GSM. Chaque pièce peut avoir sa propre taille.',
    material: 'French Terry Brushed Fleece 450-500 GSM, 100% Coton Bio',
    care: 'Laver à 30°C à l\'envers. Ne pas sécher en machine. Repassage délicat.',
    images: [IMAGES.tracksuit, IMAGES.tracksuit],
    color: 'Crème',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 15,
    featured: true,
    category: 'tracksuit',
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getLowStockProducts(): Product[] {
  return products.filter((p) => p.stock < 10)
}
