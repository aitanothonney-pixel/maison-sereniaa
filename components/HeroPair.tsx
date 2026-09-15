import Image from 'next/image'
import Link from 'next/link'

export interface HeroPanel {
  title: string
  subtitle: string
  image: string
  href: string
}

/**
 * Ouverture en deux volets côte à côte, plein cadre.
 * Sous 768 px les volets s'empilent.
 */
export default function HeroPair({ panels }: { panels: [HeroPanel, HeroPanel] }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {panels.map((panel, i) => (
        <Link
          key={panel.title}
          href={panel.href}
          className="group relative block h-[58vh] md:h-[calc(100vh-7.5rem)] min-h-[380px] overflow-hidden bg-surface"
        >
          <Image
            src={panel.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            preload={i === 0}
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
          {/* Voile bas : garantit la lisibilité du titre sur n'importe quelle photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9 text-white">
            <h2 className="display text-[11vw] md:text-[5.2vw] leading-[0.88] mb-2">
              {panel.title}
            </h2>
            <p className="ui-label tracking-[0.06em]">{panel.subtitle}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}
