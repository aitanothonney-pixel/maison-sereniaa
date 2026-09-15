export interface Color {
  name: string
  hex: string
}

export interface Product {
  id: string
  name: string
  category: 'hauts' | 'bas' | 'exterieur' | 'accessoires'
  price: number
  /** Une ligne, affichée sous le nom dans la grille. */
  description: string
  /** Paragraphe de la fiche produit. */
  detail: string
  composition: string
  care: string[]
  sizes: string[]
  colors: Color[]
  images: string[]
  isNew?: boolean
}

export const CATEGORIES: { slug: Product['category']; label: string }[] = [
  { slug: 'hauts', label: 'Hauts' },
  { slug: 'bas', label: 'Bas' },
  { slug: 'exterieur', label: 'Pièces d’extérieur' },
  { slug: 'accessoires', label: 'Accessoires' },
]

export function categoryLabel(slug: Product['category']): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug
}

const APPAREL_SIZES = ['XS', 'S', 'M', 'L', 'XL']

const NOIR: Color = { name: 'Noir', hex: '#121212' }
const ECRU: Color = { name: 'Écru', hex: '#EFEAE0' }
const GRIS: Color = { name: 'Gris chiné', hex: '#9B9B9B' }
const ENCRE: Color = { name: 'Bleu encre', hex: '#232B38' }
const KAKI: Color = { name: 'Kaki', hex: '#5A5B4B' }

export const products: Product[] = [
  // ── Hauts ───────────────────────────────────────────────────────────────
  {
    id: 'tee-coton-lourd',
    name: 'T-shirt coton lourd',
    category: 'hauts',
    price: 45,
    description: 'Jersey 240 g, coupe droite',
    detail:
      'Un t-shirt épais qui garde sa forme lavage après lavage. Épaules nettes, col côtelé renforcé, corps droit sans excès de volume.',
    composition: '100 % coton biologique, 240 g/m²',
    care: ['Lavage 30°', 'Ne pas sécher en machine', 'Repassage doux'],
    sizes: APPAREL_SIZES,
    colors: [NOIR, ECRU, GRIS],
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1000&q=80'],
    isNew: true,
  },
  {
    id: 'tee-manches-longues',
    name: 'T-shirt manches longues',
    category: 'hauts',
    price: 58,
    description: 'Jersey 220 g, poignets côtelés',
    detail:
      'La même base que notre t-shirt court, allongée aux poignets. Se porte seul ou sous une surchemise.',
    composition: '100 % coton biologique, 220 g/m²',
    care: ['Lavage 30°', 'Ne pas sécher en machine'],
    sizes: APPAREL_SIZES,
    colors: [NOIR, ECRU],
    images: ['https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1000&q=80'],
  },
  {
    id: 'sweat-capuche-carde',
    name: 'Sweat à capuche cardé',
    category: 'hauts',
    price: 120,
    description: 'Molleton gratté 400 g',
    detail:
      'Molleton dense, gratté à l’intérieur. Capuche doublée, poche kangourou, bords côtelés qui ne se détendent pas.',
    composition: '80 % coton, 20 % polyester recyclé, 400 g/m²',
    care: ['Lavage 30°', 'Ne pas sécher en machine', 'Ne pas repasser l’impression'],
    sizes: APPAREL_SIZES,
    colors: [NOIR, GRIS, ENCRE],
    images: ['https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=1000&q=80'],
    isNew: true,
  },
  {
    id: 'sweat-col-rond',
    name: 'Sweat col rond',
    category: 'hauts',
    price: 98,
    description: 'Molleton 380 g, coupe nette',
    detail:
      'Un col rond sans fioriture. Emmanchures montées, épaules structurées, tombé droit.',
    composition: '80 % coton, 20 % polyester recyclé, 380 g/m²',
    care: ['Lavage 30°', 'Ne pas sécher en machine'],
    sizes: APPAREL_SIZES,
    colors: [ECRU, GRIS, NOIR],
    images: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1000&q=80'],
  },
  {
    id: 'chemise-popeline',
    name: 'Chemise popeline',
    category: 'hauts',
    price: 92,
    description: 'Popeline de coton, col italien',
    detail:
      'Une chemise nette, sans poche, montée en popeline fine. Se repasse vite et tient la journée.',
    composition: '100 % coton peigné',
    care: ['Lavage 30°', 'Repassage moyen'],
    sizes: APPAREL_SIZES,
    colors: [ECRU, NOIR, ENCRE],
    images: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1000&q=80'],
  },

  // ── Bas ─────────────────────────────────────────────────────────────────
  {
    id: 'pantalon-droit',
    name: 'Pantalon droit',
    category: 'bas',
    price: 105,
    description: 'Coton lavé, jambe droite',
    detail:
      'Taille mi-haute, jambe droite du genou à l’ourlet. Coton lavé pour un tombé souple dès le premier port.',
    composition: '98 % coton, 2 % élasthanne',
    care: ['Lavage 30°', 'Ne pas sécher en machine'],
    sizes: ['36', '38', '40', '42', '44', '46'],
    colors: [NOIR, KAKI, ECRU],
    images: ['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1000&q=80'],
  },
  {
    id: 'pantalon-cargo',
    name: 'Pantalon cargo',
    category: 'bas',
    price: 125,
    description: 'Toile de coton, poches plaquées',
    detail:
      'Deux poches plaquées à rabat, cordon de serrage en bas de jambe. Assez ample pour se porter tous les jours.',
    composition: '100 % coton ripstop',
    care: ['Lavage 30°', 'Ne pas sécher en machine'],
    sizes: ['36', '38', '40', '42', '44', '46'],
    colors: [KAKI, NOIR],
    images: ['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1000&q=80'],
    isNew: true,
  },
  {
    id: 'pantalon-molleton',
    name: 'Pantalon molleton',
    category: 'bas',
    price: 88,
    description: 'Molleton 380 g, bas resserré',
    detail:
      'Le bas assorti à notre sweat. Taille élastiquée avec cordon plat, chevilles resserrées.',
    composition: '80 % coton, 20 % polyester recyclé, 380 g/m²',
    care: ['Lavage 30°', 'Ne pas sécher en machine'],
    sizes: APPAREL_SIZES,
    colors: [GRIS, NOIR],
    images: ['https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=1000&q=80'],
  },
  {
    id: 'short-molleton',
    name: 'Short molleton',
    category: 'bas',
    price: 72,
    description: 'Molleton 380 g, longueur genou',
    detail: 'Coupe droite qui s’arrête au-dessus du genou. Deux poches latérales, une poche arrière.',
    composition: '80 % coton, 20 % polyester recyclé, 380 g/m²',
    care: ['Lavage 30°', 'Ne pas sécher en machine'],
    sizes: APPAREL_SIZES,
    colors: [NOIR, GRIS, ECRU],
    images: ['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=1000&q=80'],
  },

  // ── Pièces d'extérieur ──────────────────────────────────────────────────
  {
    id: 'veste-coach',
    name: 'Veste coach',
    category: 'exterieur',
    price: 155,
    description: 'Toile déperlante, fermeture pression',
    detail:
      'Une veste légère pour les demi-saisons. Toile déperlante, doublure filet, boutons pression métal.',
    composition: 'Extérieur 100 % polyester recyclé · Doublure 100 % coton',
    care: ['Lavage 30°', 'Ne pas repasser', 'Ne pas nettoyer à sec'],
    sizes: APPAREL_SIZES,
    colors: [NOIR, ENCRE],
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1000&q=80'],
  },
  {
    id: 'surchemise-laine',
    name: 'Surchemise laine',
    category: 'exterieur',
    price: 175,
    description: 'Drap de laine, deux poches poitrine',
    detail:
      'À mi-chemin entre la chemise et la veste. Drap de laine épais, se porte ouverte sur un t-shirt ou fermée par-dessus un sweat.',
    composition: '70 % laine, 30 % polyester',
    care: ['Nettoyage à sec uniquement'],
    sizes: APPAREL_SIZES,
    colors: [KAKI, NOIR, GRIS],
    images: ['https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1000&q=80'],
    isNew: true,
  },
  {
    id: 'parka-technique',
    name: 'Parka technique',
    category: 'exterieur',
    price: 240,
    description: 'Membrane imperméable, coutures étanchées',
    detail:
      'La pièce la plus protectrice de la collection. Membrane imperméable et respirante, coutures étanchées, capuche ajustable.',
    composition: '100 % polyester recyclé, membrane 10 000 mm',
    care: ['Lavage 30°', 'Ne pas repasser', 'Ne pas utiliser d’adoucissant'],
    sizes: APPAREL_SIZES,
    colors: [NOIR, KAKI],
    images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1000&q=80'],
  },
  {
    id: 'gilet-matelasse',
    name: 'Gilet matelassé',
    category: 'exterieur',
    price: 145,
    description: 'Garnissage recyclé, sans manches',
    detail: 'Se glisse sous une veste ou se porte seul. Garnissage léger, col montant, poches zippées.',
    composition: 'Extérieur 100 % polyamide · Garnissage 100 % polyester recyclé',
    care: ['Lavage 30°', 'Séchage machine doux'],
    sizes: APPAREL_SIZES,
    colors: [NOIR, ENCRE],
    images: ['https://images.unsplash.com/photo-1608063615781-e2ef8c9d4e5e?w=1000&q=80'],
  },

  // ── Accessoires ─────────────────────────────────────────────────────────
  {
    id: 'casquette-6-panneaux',
    name: 'Casquette 6 panneaux',
    category: 'accessoires',
    price: 42,
    description: 'Twill de coton, visière préformée',
    detail: 'Six panneaux, visière préformée, fermeture métal réglable. Logo brodé ton sur ton.',
    composition: '100 % coton twill',
    care: ['Lavage à la main', 'Ne pas sécher en machine'],
    sizes: ['Taille unique'],
    colors: [NOIR, ECRU, KAKI],
    images: ['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=1000&q=80'],
  },
  {
    id: 'bonnet-cotele',
    name: 'Bonnet côtelé',
    category: 'accessoires',
    price: 38,
    description: 'Maille côtelée, revers simple',
    detail: 'Maille fine côtelée, revers simple. Assez souple pour se porter court ou couvrant.',
    composition: '50 % laine mérinos, 50 % acrylique',
    care: ['Lavage à la main', 'Séchage à plat'],
    sizes: ['Taille unique'],
    colors: [NOIR, GRIS, ECRU],
    images: ['https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=1000&q=80'],
  },
  {
    id: 'tote-toile',
    name: 'Tote en toile',
    category: 'accessoires',
    price: 45,
    description: 'Toile 340 g, anses renforcées',
    detail: 'Toile épaisse non doublée, anses renforcées aux points de tension, poche intérieure plate.',
    composition: '100 % coton, 340 g/m²',
    care: ['Lavage 30°', 'Ne pas sécher en machine'],
    sizes: ['Taille unique'],
    colors: [ECRU, NOIR],
    images: ['https://images.unsplash.com/photo-1597484662317-c93a56a76bb4?w=1000&q=80'],
  },
  {
    id: 'chaussettes-lot-2',
    name: 'Chaussettes — lot de deux',
    category: 'accessoires',
    price: 24,
    description: 'Coton peigné, bord côtelé',
    detail: 'Deux paires, tige mi-haute, bord côtelé qui ne glisse pas. Talon et pointe renforcés.',
    composition: '80 % coton peigné, 18 % polyamide, 2 % élasthanne',
    care: ['Lavage 30°'],
    sizes: ['39–42', '43–46'],
    colors: [NOIR, ECRU, GRIS],
    images: ['https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=1000&q=80'],
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function formatPrice(value: number): string {
  return `${value.toFixed(0)} CHF`
}
