import Link from 'next/link'
import NotifyForm from './NotifyForm'

const COLUMNS = [
  {
    title: 'Drops',
    links: [
      { label: 'Tous les drops', href: '/drops' },
      { label: 'Prochain drop', href: '/drops/003' },
      { label: 'Archives', href: '/drops' },
    ],
  },
  {
    title: 'Aide',
    links: [
      { label: 'Livraison', href: '/info' },
      { label: 'Retours', href: '/info' },
      { label: 'Nous écrire', href: '/info' },
    ],
  },
  {
    title: 'Maison',
    links: [
      { label: 'Info', href: '/info' },
      { label: 'Matières', href: '/info' },
      { label: 'Instagram', href: 'https://www.instagram.com/temperedgarments/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-line mt-20">
      <div className="px-5 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div className="max-w-xs">
            <p className="display text-2xl mb-2">Tempered</p>
            <p className="ui-label text-muted mb-6">Trust the process</p>
            <NotifyForm compact />
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="ui-label mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[13px] text-muted hover:text-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p className="text-[12px] text-dim">
            © {new Date().getFullYear()} Tempered · TTP
          </p>
          <p className="text-[12px] text-dim">Genève, Suisse</p>
        </div>
      </div>
    </footer>
  )
}
