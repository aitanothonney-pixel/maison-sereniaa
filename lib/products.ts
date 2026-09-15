export interface Product {
  id: string
  name: string
  price: number
  description: string
  material: string
  care: string
  images: string[]
  colors: string[]
  sizes: string[]
  stock: number
  featured?: boolean
  category: 'hoodie' | 'tee' | 'pants' | 'jacket' | 'accessories'
}

const IMAGES = {
  hoodie1: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=1200&q=80',
  hoodie2: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=1200&q=80',
  tee1: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
  tee2: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
  pants1: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=80',
  pants2: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=80',
  jacket1: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80',
  jacket2: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80',
}

export const products: Product[] = [
  {
    id: 'hoodie-001',
    name: 'Heavyweight Hoodie',
    price: 145,
    description: 'Hoodie oversize en French terry brushed fleece. Coupe ample, poches kangaroo, drawcords en cuir noir. Pièce signature TEMPORED, poids lourd 450-500 GSM.',
    material: 'French Terry Brushed Fleece 450-500 GSM, 100% Coton Bio',
    care: 'Laver à 30°C à l\'envers. Ne pas sécher en machine. Repassage délicat.',
    images: [IMAGES.hoodie1, IMAGES.hoodie2],
    colors: ['Noir', 'Gris anthracite'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 24,
    featured: true,
    category: 'hoodie',
  },
  {
    id: 'tee-001',
    name: 'Classic Heavy T-Shirt',
    price: 55,
    description: 'T-shirt coton lourd 280 GSM. Coupe classique, coutures renforcées. Couleurs solides teintées à la pièce.',
    material: '100% Coton Bio 280 GSM',
    care: 'Laver à 40°C. Séchage modéré recommandé.',
    images: [IMAGES.tee1, IMAGES.tee2],
    colors: ['Noir', 'Blanc cassé', 'Gris'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 48,
    featured: false,
    category: 'tee',
  },
  {
    id: 'pants-001',
    name: 'Cargo Trousers',
    price: 125,
    description: 'Pantalon cargo coupe large. Poches latérales fonctionnelles, ceinture réglable. Toile 100% coton durable.',
    material: '100% Coton Durable 320 GSM',
    care: 'Laver à 40°C. Séchage modéré.',
    images: [IMAGES.pants1, IMAGES.pants2],
    colors: ['Noir', 'Kaki'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 18,
    featured: false,
    category: 'pants',
  },
  {
    id: 'jacket-001',
    name: 'Coach Jacket',
    price: 165,
    description: 'Veste coach oversize en toile épaisse. Col polo, fermeture boutons, poches avant. Pièce de collection.',
    material: '100% Coton 350 GSM',
    care: 'Nettoyage à sec recommandé.',
    images: [IMAGES.jacket1, IMAGES.jacket2],
    colors: ['Noir'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 12,
    featured: false,
    category: 'jacket',
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
