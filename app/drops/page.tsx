import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { drops, STATUS_LABEL, formatDate } from '@/lib/drops'

export const metadata: Metadata = {
  title: 'Drops',
  description: 'Tous les drops Tempered, passés et à venir.',
}

export default function Drops() {
  return (
    <>
      <Nav current="drops" />

      <main className="px-5 sm:px-8 pt-12 sm:pt-16">
        <div className="flex items-baseline justify-between gap-6 mb-12">
          <h1 className="headline text-[14vw] sm:text-[9vw] lg:text-[92px]">Drops</h1>
          <p className="tech shrink-0">{drops.length} au total</p>
        </div>

        <ul className="border-t border-line">
          {drops.map((d) => (
            <li key={d.id}>
              <Link
                href={`/drops/${d.id}`}
                className="group block border-b border-line py-8 sm:py-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10">
                  <div className="relative w-full md:w-40 aspect-[4/3] md:aspect-square bg-[#0d0d0d] overflow-hidden shrink-0">
                    <Image
                      src={d.cover}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 160px"
                      className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="tech text-subtle">Drop {d.number}</span>
                      <span className="tech">{formatDate(d.releaseAt)}</span>
                    </div>
                    <h2 className="headline text-4xl sm:text-6xl mb-4 group-hover:opacity-60 transition-opacity">
                      {d.name}
                    </h2>
                    <p className="text-[12px] text-muted leading-relaxed max-w-md line-clamp-2">
                      {d.statement}
                    </p>
                  </div>

                  <span
                    className={`stamp shrink-0 justify-self-start ${
                      d.status === 'sold-out' ? 'text-muted' : 'text-foreground'
                    }`}
                  >
                    {STATUS_LABEL[d.status]}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  )
}
