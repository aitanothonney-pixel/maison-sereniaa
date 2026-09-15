import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="headline text-[13vw] sm:text-[8vw] lg:text-[92px] leading-[0.82]">
              Trust the
              <br />
              process
            </p>
          </div>

          <nav className="flex flex-col gap-3 sm:text-right shrink-0">
            <Link href="/drops" className="tech link-underline hover:text-foreground">
              Drops
            </Link>
            <Link href="/info" className="tech link-underline hover:text-foreground">
              Info
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tech link-underline hover:text-foreground"
            >
              Instagram
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p className="tech text-subtle">
            © {new Date().getFullYear()} Tempered · TTP
          </p>
          <p className="tech text-subtle">Genève, Suisse</p>
        </div>
      </div>
    </footer>
  )
}
