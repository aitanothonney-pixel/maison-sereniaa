export default function FontsTest() {
  const fonts = [
    { name: 'Playfair Display (Current)', var: '--font-display', weight: 'font-bold' },
    { name: 'Bodoni Moda', var: '--font-display-alt1', weight: 'font-bold' },
    { name: 'Cinzel', var: '--font-display-alt2', weight: 'font-bold' },
    { name: 'Fraunces', var: '--font-display-alt3', weight: 'font-bold' },
    { name: 'Abril Fatface', var: '--font-display-alt4', weight: 'font-bold' },
    { name: 'EB Garamond', var: '--font-display-alt5', weight: 'font-bold' },
    { name: 'Libre Baskerville', var: '--font-display-alt6', weight: 'font-bold' },
    { name: 'DM Serif Display', var: '--font-display-alt7', weight: 'font-bold' },
  ]

  return (
    <main className="bg-background text-foreground min-h-screen p-12 space-y-12">
      <div className="mb-12">
        <h1 className="display text-4xl mb-2">Font Comparison</h1>
        <p className="text-muted">Polices serif luxe pour le logo Tempered</p>
      </div>

      {fonts.map((font) => (
        <div key={font.var} className="border-b border-line pb-12">
          <p className="ui-label text-muted mb-3">{font.name}</p>
          <span style={{ fontFamily: `var(${font.var})` }} className={`text-[96px] ${font.weight} leading-tight block`}>
            TEMPERED
          </span>
          <p className="text-sm text-dim mt-2 font-normal">Trust the process</p>
        </div>
      ))}
    </main>
  )
}
