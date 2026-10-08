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
    id: 'tshirt-black',
    name: 'T-shirt Noir',
    prices: { tee: 29.99 },
    description:
      'T-shirt TEMPERED en jersey lourd, coupe droite légèrement oversize. Col côtelé renforcé et épaules tombantes.',
    material: 'Jersey 240 GSM, 100% Coton Bio',
    care: CARE,
    images: [
      'https://i.ibb.co/Xrkw1DqR/C9958-D8-B-907-B-4-C08-BA6-F-433-D6-ACFD725.jpg',
    ],
    color: 'Noir',
    swatch: '#1a1a1a',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 30,
    featured: true,
    category: 'tshirt',
  },
  {
    id: 'tshirt-white',
    name: 'T-shirt Blanc',
    prices: { tee: 29.99 },
    description:
      'T-shirt TEMPERED en jersey lourd, coupe droite légèrement oversize. Col côtelé renforcé et épaules tombantes.',
    material: 'Jersey 240 GSM, 100% Coton Bio',
    care: CARE,
    images: [
      'https://i.ibb.co/C3d9f8t0/F32565-E7-6-CF8-40-E3-9-B82-BA42-CD9-E1-F06.jpg',
      'https://i.ibb.co/wrb3TLkM/F32565-E7-6-CF8-40-E3-9-B82-BA42-CD9-E1-F06.jpg',
    ],
    color: 'Blanc',
    swatch: '#ffffff',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 25,
    featured: true,
    category: 'tshirt',
  },
  {
    id: 'tshirt-grey',
    name: 'T-shirt Gris',
    prices: { tee: 29.99 },
    description:
      'T-shirt TEMPERED en jersey lourd, coupe droite légèrement oversize. Col côtelé renforcé et épaules tombantes.',
    material: 'Jersey 240 GSM, 100% Coton Bio',
    care: CARE,
    images: [
      'https://i.ibb.co/35HqF5Gq/65-E707-E6-5122-4-E56-9-A28-6-CFDF9-CD3-D44.jpg',
    ],
    color: 'Gris',
    swatch: '#808080',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 28,
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
