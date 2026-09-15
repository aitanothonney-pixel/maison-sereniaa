import Link from 'next/link'
import Image from 'next/image'
import { Product, formatPrice, categoryLabel } from '@/lib/products'

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product
  /** Précharge l'image — à réserver aux premières cartes de la grille. */
  priority?: boolean
}) {
  return (
    <Link href={`/produit/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] bg-surface overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          preload={priority}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 label text-foreground bg-background px-2 py-1">
            Nouveau
          </span>
        )}
      </div>

      <div className="pt-3.5">
        <p className="label mb-1.5">{categoryLabel(product.category)}</p>
        <h3 className="text-[13px] leading-snug mb-1">{product.name}</h3>
        <p className="text-[12px] text-muted mb-2 line-clamp-2">{product.description}</p>
        <p className="text-[13px] tabular-nums">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
