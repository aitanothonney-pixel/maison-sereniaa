import Link from 'next/link'
import Image from 'next/image'
import { Product, formatPrice } from '@/lib/products'

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
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        {product.isNew && (
          <span className="headline absolute top-3 left-3 bg-foreground text-background text-[10px] px-2.5 py-1.5">
            Nouveau
          </span>
        )}
      </div>

      <div className="pt-4">
        <h3 className="headline text-[13px] mb-1.5 group-hover:opacity-60 transition-opacity">
          {product.name}
        </h3>
        <p className="text-[12px] text-muted mb-2 line-clamp-2">{product.description}</p>
        <p className="headline text-[13px] tabular-nums">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
