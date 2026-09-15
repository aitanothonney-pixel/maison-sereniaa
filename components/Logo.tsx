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
      className={`headline inline-block ${SIZES[size]} ${className}`}
    >
      ASTR4
    </Link>
  )
}
