export type Variant = 'set' | 'hoodie' | 'pants' | 'tee'

export const VARIANT_LABELS: Record<Variant, string> = {
  set: 'Ensemble complet',
  hoodie: 'Pull seul',
  pants: 'Jogging seul',
  tee: 'T-shirt',
}

// Ordre d'affichage des options sur la fiche produit.
export const VARIANT_ORDER: Variant[] = ['set', 'hoodie', 'pants', 'tee']

export interface Product {
  id: string
  name: string
  prices: Partial<Record<Variant, number>>
  description: string
  material: string
  care: string
  images: string[]
  color: string
  // Teinte de la pastille en boutique : la nuance réelle du vêtement, pas
  // la couleur pure, sinon les pastilles jurent avec les photos.
  swatch: string
  sizes: string[]
  stock: number
  featured?: boolean
  category: 'tracksuit' | 'tshirt'
}

const TRACKSUIT_DESCRIPTION =
  'Ensemble jogging premium TEMPERED. Comprend un pull hoodie oversize et un jogging ample en French terry 450 GSM.'
const TRACKSUIT_MATERIAL = 'French Terry Brushed Fleece 450-500 GSM, 100% Coton Bio'
const CARE = 'Laver à 30°C à l\'envers. Ne pas sécher en machine. Repassage délicat.'

export const products: Product[] = [
  {
    id: 'tracksuit-black',
    name: 'Tracksuit Noir',
    prices: { set: 195, hoodie: 120, pants: 95 },
    description: TRACKSUIT_DESCRIPTION,
    material: TRACKSUIT_MATERIAL,
    care: CARE,
    images: [
      'https://i.ibb.co/tpHNLbTG/IMG-0466.jpg',
      'https://i.ibb.co/x8MprMXk/IMG-0435.jpg',
    ],
    color: 'Noir',
    swatch: '#1a1a1a',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 24,
    featured: true,
    category: 'tracksuit',
  },
  {
    id: 'tracksuit-grey',
    name: 'Tracksuit Gris',
    prices: { set: 195, hoodie: 120, pants: 95 },
    description: TRACKSUIT_DESCRIPTION,
    material: TRACKSUIT_MATERIAL,
    care: CARE,
    images: [
      'https://i.ibb.co/Ppgd5rK/IMG-0420.jpg',
      'https://i.ibb.co/wNGfkQLL/IMG-0397.jpg',
    ],
    color: 'Gris',
    swatch: '#9b9b9b',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 20,
    featured: true,
    category: 'tracksuit',
  },
  {
    id: 'tshirt-black',
    name: 'T-shirt Noir',
    prices: { tee: 65 },
    description:
      'T-shirt TEMPERED en jersey lourd, coupe droite légèrement oversize. Col côtelé renforcé et épaules tombantes.',
    material: 'Jersey 240 GSM, 100% Coton Bio',
    care: CARE,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
    ],
    color: 'Noir',
    swatch: '#1a1a1a',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 30,
    featured: true,
    category: 'tshirt',
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function productVariants(product: Product): Variant[] {
  return VARIANT_ORDER.filter((v) => product.prices[v] !== undefined)
}

export function fromPrice(product: Product): number {
  return Math.min(...Object.values(product.prices))
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
