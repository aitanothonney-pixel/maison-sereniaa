import Link from 'next/link'

const SIZES = {
  sm: 'text-[13px]',
  md: 'text-[17px]',
  lg: 'text-[22px]',
} as const

export default function Logo({
  size = 'md',
  href = '/',
  onClick,
  className = '',
  /** Affiche la devise sous le nom — réservé au pied de page. */
  tagline = false,
}: {
  size?: keyof typeof SIZES
  href?: string
  onClick?: () => void
  className?: string
  tagline?: boolean
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="Tempered — accueil"
      className={`inline-block ${className}`}
    >
      <span className={`headline block ${SIZES[size]}`}>Tempered</span>
      {tagline && (
        <span className="block text-[9px] tracking-[0.3em] uppercase text-muted mt-1.5">
          Trust the process
        </span>
      )}
    </Link>
  )
}
