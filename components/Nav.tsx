import Link from 'next/link'
import Logo from './Logo'

/**
 * Barre minimale. Le site n'a pas de catalogue à parcourir :
 * deux entrées suffisent, plus la signature.
 */
export default function Nav({ current }: { current?: 'drops' | 'info' }) {
  const link = (key: 'drops' | 'info', href: string, label: string) => (
    <Link
      href={href}
      aria-current={current === key ? 'page' : undefined}
      className={`tech transition-colors hover:text-foreground ${
        current === key ? 'text-foreground' : ''
      }`}
    >
      {label}
    </Link>
  )

  return (
    <header className="relative z-20 flex items-center justify-between px-5 sm:px-8 h-16 border-b border-line">
      <Logo size="md" />

      <nav className="flex items-center gap-6 sm:gap-8">
        {link('drops', '/drops', 'Drops')}
        {link('info', '/info', 'Info')}
        <span className="tech text-subtle hidden sm:inline" aria-hidden>
          TTP
        </span>
      </nav>
    </header>
  )
}
