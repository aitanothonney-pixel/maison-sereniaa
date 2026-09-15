import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import { drops, STATUS_LABEL, formatDate } from '@/lib/drops'

export const metadata: Metadata = {
  title: 'Drops',
  description: 'Tous les drops Tempered, passés et à venir.',
}

export default function Drops() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 pt-12">
        <div className="flex items-baseline justify-between gap-6 mb-10">
          <h1 className="display text-[13vw] sm:text-[7vw] lg:text-[80px]">Drops</h1>
          <p className="ui-label text-muted shrink-0">{drops.length} au total</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
          {drops.map((d, i) => (
            <Link key={d.id} href={`/drops/${d.id}`} className="group block">
              <div className="relative aspect-[4/5] bg-surface overflow-hidden mb-4">
                <Image
                  src={d.cover}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  preload={i === 0}
                  className={`object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                    d.status === 'sold-out' ? 'opacity-60' : ''
                  }`}
                />
                <span className="badge absolute top-3 left-3">{STATUS_LABEL[d.status]}</span>
              </div>

              <p className="ui-label text-muted mb-1">
                Drop {d.number} · {formatDate(d.releaseAt)}
              </p>
              <h2 className="display text-2xl mb-2 group-hover:opacity-60 transition-opacity">
                {d.name}
              </h2>
              <p className="text-[13px] text-muted leading-[1.7] line-clamp-2">{d.statement}</p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
