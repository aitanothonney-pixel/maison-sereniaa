import Link from 'next/link'
import Logo from './Logo'

const COLUMNS = [
  {
    title: 'Boutique',
    links: [
      { label: 'Tout voir', href: '/boutique' },
      { label: 'Hauts', href: '/boutique?categorie=hauts' },
      { label: 'Bas', href: '/boutique?categorie=bas' },
      { label: 'Pièces d’extérieur', href: '/boutique?categorie=exterieur' },
      { label: 'Accessoires', href: '/boutique?categorie=accessoires' },
    ],
  },
  {
    title: 'Aide',
    links: [
      { label: 'Livraison', href: '/a-propos' },
      { label: 'Retours', href: '/a-propos' },
      { label: 'Guide des tailles', href: '/a-propos' },
      { label: 'Nous écrire', href: '/a-propos' },
    ],
  },
  {
    title: 'Maison',
    links: [
      { label: 'À propos', href: '/a-propos' },
      { label: 'Matières', href: '/a-propos' },
      { label: 'Instagram', href: 'https://instagram.com' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 md:gap-8">
          {/* Marque + inscription */}
          <div className="max-w-xs">
            <Logo size="md" tagline className="mb-6" />
            <p className="text-[12px] text-muted leading-relaxed mb-7">
              Vêtements essentiels. Des pièces sobres, coupées net, faites pour durer.
            </p>

            <form className="border-b border-foreground pb-2 flex items-center gap-3">
              <label htmlFor="footer-email" className="sr-only">
                Adresse e-mail
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Recevoir nos sorties"
                className="flex-1 min-w-0 bg-transparent text-[12px] outline-none placeholder:text-subtle"
              />
              <button type="submit" className="text-[12px] tracking-[0.06em] shrink-0">
                OK
              </button>
            </form>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="label mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="link-underline text-[12px]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-7 border-t border-line flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="label">
            © {new Date().getFullYear()} Tempered <span aria-hidden>·</span> TTP
          </p>
          <p className="label">Genève, Suisse</p>
        </div>
      </div>
    </footer>
  )
}
