import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Shell from '@/components/Shell'
import { drops, STATUS_LABEL, formatDate } from '@/lib/drops'

export const metadata: Metadata = {
  title: 'Drops',
  description: 'Tous les drops Tempered, passés et à venir.',
}

export default function Drops() {
  return (
    <Shell>
      <div className="pt-6 flex items-baseline justify-between gap-6 mb-10">
        <h1 className="page-title">Drops</h1>
        <p className="meta shrink-0">{drops.length} au total</p>
      </div>

      <ul className="border-t border-line max-w-4xl">
        {drops.map((d) => (
          <li key={d.id}>
            <Link href={`/drops/${d.id}`} className="group block border-b border-line py-7">
              <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr_auto] items-start gap-5 sm:gap-8">
                <div className="relative w-full sm:w-40 aspect-[4/3] overflow-hidden">
                  <Image
                    src={d.cover}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 160px"
                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                <div className="min-w-0">
                  <p className="meta text-dim mb-1">
                    Drop {d.number} · {formatDate(d.releaseAt)}
                  </p>
                  <p className="nav-item group-hover:text-white">{d.name}</p>
                  <p className="text-muted mt-2 max-w-md line-clamp-2">{d.statement}</p>
                </div>

                <span
                  className={`stamp shrink-0 ${
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

      <p className="meta text-dim text-center pt-24">
        Copyright © {new Date().getFullYear()}, Tempered · TTP
      </p>
    </Shell>
  )
}
