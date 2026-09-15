import Link from 'next/link'

const SIZES = {
  sm: 'text-[11px]',
  md: 'text-[13px]',
  lg: 'text-[15px]',
} as const

export default function Logo({
  size = 'md',
  href = '/',
  onClick,
  className = '',
}: {
  size?: keyof typeof SIZES
  href?: string
  onClick?: () => void
  className?: string
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="ASTR4 — accueil"
      className={`wordmark inline-block ${SIZES[size]} ${className}`}
    >
      ASTR4
    </Link>
  )
}
