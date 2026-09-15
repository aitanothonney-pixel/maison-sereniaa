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
  grey: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=1200&q=80',
  black: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
  blue: 'https://images.unsplash.com/photo-1506629082632-a8b9db8b5c4c?w=1200&q=80',
  red: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=1200&q=80',
}

export const products: Product[] = [
  {
    id: 'tracksuit-grey',
    name: 'Tracksuit Gris',
    price: 195,
    description: 'Ensemble jogging premium TEMPORED. Comprend un pull hoodie oversize et un jogging ample en French terry 450 GSM. Chaque pièce peut avoir sa propre taille.',
    material: 'French Terry Brushed Fleece 450-500 GSM, 100% Coton Bio',
    care: 'Laver à 30°C à l\'envers. Ne pas sécher en machine. Repassage délicat.',
    images: [IMAGES.grey, IMAGES.grey],
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
    images: [IMAGES.black, IMAGES.black],
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
    images: [IMAGES.blue, IMAGES.blue],
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
    images: [IMAGES.red, IMAGES.red],
    color: 'Rouge',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 16,
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
