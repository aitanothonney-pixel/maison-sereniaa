import Link from 'next/link'

const SIZES = {
  sm: 'text-[13px]',
  md: 'text-[16px]',
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
      aria-label="Tempered — accueil"
      className={`headline inline-block ${SIZES[size]} ${className}`}
    >
      Tempered
    </Link>
  )
}
