export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "T-Shirt Classique",
    category: "T-Shirts",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    description: "T-shirt en coton 100% premium, confortable et durable",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Noir", "Blanc", "Gris", "Bleu", "Rouge"]
  },
  {
    id: "2",
    name: "Pantalon Slim Fit",
    category: "Pantalons",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=500&fit=crop",
    description: "Pantalon slim fit moderne, parfait pour le quotidien",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Noir", "Bleu foncé", "Gris", "Marron"]
  },
  {
    id: "3",
    name: "Hoodie Premium",
    category: "Sweats",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=400&h=500&fit=crop",
    description: "Hoodie en coton organique, idéal pour l'automne",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Noir", "Gris", "Bleu", "Blanc"]
  },
  {
    id: "4",
    name: "Chemise Oxford",
    category: "Chemises",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    description: "Chemise Oxford élégante, versátile et intemporelle",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blanc", "Bleu ciel", "Bleu foncé", "Rose"]
  },
  {
    id: "5",
    name: "Veste Denim",
    category: "Vestes",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&h=500&fit=crop",
    description: "Veste denim classique, incontournable de la garde-robe",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Bleu clair", "Bleu foncé", "Noir"]
  },
  {
    id: "6",
    name: "Shorts Été",
    category: "Shorts",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop",
    description: "Shorts confortables pour l'été, parfait pour les vacances",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Bleu", "Noir", "Blanc", "Khaki"]
  },
  {
    id: "7",
    name: "Cardigan Tricot",
    category: "Mailles",
    price: 75.99,
    image: "https://images.unsplash.com/photo-1551213955-acbb88aeb799?w=400&h=500&fit=crop",
    description: "Cardigan en tricot fin, élégant et polyvalent",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Crème", "Marron", "Noir", "Rose pale"]
  },
  {
    id: "8",
    name: "Polos Sport",
    category: "Polos",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1581091916519-5d532f1b2476?w=400&h=500&fit=crop",
    description: "Polo en tissu performant, idéal pour le sport et les loisirs",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Blanc", "Noir", "Bleu", "Vert"]
  }
];
