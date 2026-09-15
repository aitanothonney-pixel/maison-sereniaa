export type DropStatus = 'upcoming' | 'live' | 'sold-out'

export interface Piece {
  name: string
  price: number
  colors: string[]
  sizes: string[]
  image: string
}

export interface Drop {
  /** Référence courte, sert d'URL : « 001 », « 002 »… */
  id: string
  /** Numéro affiché en grand. */
  number: string
  name: string
  status: DropStatus
  /** Date d'ouverture, ISO. Sert au compte à rebours. */
  releaseAt: string
  /** Une phrase, ton brut. */
  statement: string
  pieces: Piece[]
  /** Visuel d'ouverture du drop. */
  cover: string
}

const IMG = {
  tee: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
  hoodie: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=1200&q=80',
  pants: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=80',
  jacket: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80',
  cap: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=1200&q=80',
  cover1: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=2000&q=80',
  cover2: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=2000&q=80',
  // Visuel fourni par la marque
  cover3: 'https://i.ibb.co/k2hjGqdF/IMG-1501.avif',
}

/**
 * Le prochain drop est daté relativement à la date de build pour que le
 * compte à rebours reste crédible en démonstration. Remplacer `releaseAt`
 * par une date fixe une fois la vraie date connue.
 */
function inDays(days: number, hour = 18): string {
  const d = new Date()
  d.setDate(d.getDate() + days)
  d.setHours(hour, 0, 0, 0)
  return d.toISOString()
}

export const drops: Drop[] = [
  {
    id: '003',
    number: '003',
    name: 'Anneal',
    status: 'upcoming',
    releaseAt: inDays(9),
    statement:
      'Troisième passage au feu. Pièces plus lourdes, coupes plus sèches. Quantités limitées, pas de réassort.',
    cover: IMG.cover3,
    pieces: [
      {
        name: 'Veste coach',
        price: 155,
        colors: ['Noir', 'Bleu encre'],
        sizes: ['S', 'M', 'L', 'XL'],
        image: IMG.jacket,
      },
      {
        name: 'Sweat à capuche cardé',
        price: 120,
        colors: ['Noir', 'Gris chiné'],
        sizes: ['S', 'M', 'L', 'XL'],
        image: IMG.hoodie,
      },
      {
        name: 'Pantalon cargo',
        price: 125,
        colors: ['Kaki', 'Noir'],
        sizes: ['S', 'M', 'L', 'XL'],
        image: IMG.pants,
      },
    ],
  },
  {
    id: '002',
    number: '002',
    name: 'Groundwork',
    status: 'sold-out',
    releaseAt: inDays(-24),
    statement:
      'Les bases, montées pour tenir. Parti en quatre heures.',
    cover: IMG.cover2,
    pieces: [
      {
        name: 'T-shirt coton lourd',
        price: 45,
        colors: ['Noir', 'Écru', 'Gris chiné'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        image: IMG.tee,
      },
      {
        name: 'Sweat col rond',
        price: 98,
        colors: ['Écru', 'Noir'],
        sizes: ['S', 'M', 'L', 'XL'],
        image: IMG.hoodie,
      },
      {
        name: 'Casquette 6 panneaux',
        price: 42,
        colors: ['Noir', 'Kaki'],
        sizes: ['Taille unique'],
        image: IMG.cap,
      },
    ],
  },
  {
    id: '001',
    number: '001',
    name: 'Cold Start',
    status: 'sold-out',
    releaseAt: inDays(-71),
    statement: 'Le premier. Quarante pièces, aucune deuxième chance.',
    cover: IMG.cover1,
    pieces: [
      {
        name: 'T-shirt coton lourd',
        price: 45,
        colors: ['Noir'],
        sizes: ['S', 'M', 'L', 'XL'],
        image: IMG.tee,
      },
      {
        name: 'Pantalon droit',
        price: 105,
        colors: ['Noir'],
        sizes: ['S', 'M', 'L', 'XL'],
        image: IMG.pants,
      },
    ],
  },
]

export const STATUS_LABEL: Record<DropStatus, string> = {
  upcoming: 'Verrouillé',
  live: 'En ligne',
  'sold-out': 'Épuisé',
}

/** Le drop mis en avant : celui à venir, sinon le plus récent. */
export function featuredDrop(): Drop {
  return drops.find((d) => d.status === 'upcoming') ?? drops.find((d) => d.status === 'live') ?? drops[0]
}

export function getDrop(id: string): Drop | undefined {
  return drops.find((d) => d.id === id)
}

export function formatPrice(value: number): string {
  return `${value} CHF`
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-CH', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
