export default function FontsTest() {
  return (
    <main className="bg-background text-foreground min-h-screen p-12 space-y-16">
      <div>
        <p className="ui-label text-muted mb-4">Playfair Display (Actuel)</p>
        <span style={{ fontFamily: 'var(--font-display)' }} className="text-[80px] font-bold leading-tight">
          TEMPERED
        </span>
      </div>

      <div>
        <p className="ui-label text-muted mb-4">Bodoni Moda</p>
        <span style={{ fontFamily: 'var(--font-display-alt1)' }} className="text-[80px] font-bold leading-tight">
          TEMPERED
        </span>
      </div>

      <div>
        <p className="ui-label text-muted mb-4">Cinzel</p>
        <span style={{ fontFamily: 'var(--font-display-alt2)' }} className="text-[80px] font-bold leading-tight">
          TEMPERED
        </span>
      </div>
    </main>
  )
}
