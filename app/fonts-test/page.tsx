export default function FontsTest() {
  const serif = [
    { name: 'Playfair Display (Current)', var: '--font-display', weight: 'font-bold' },
    { name: 'Bodoni Moda', var: '--font-display-alt1', weight: 'font-bold' },
    { name: 'Cinzel', var: '--font-display-alt2', weight: 'font-bold' },
    { name: 'Fraunces', var: '--font-display-alt3', weight: 'font-bold' },
    { name: 'Abril Fatface', var: '--font-display-alt4', weight: 'font-bold' },
    { name: 'EB Garamond', var: '--font-display-alt5', weight: 'font-bold' },
    { name: 'Libre Baskerville', var: '--font-display-alt6', weight: 'font-bold' },
    { name: 'DM Serif Display', var: '--font-display-alt7', weight: 'font-bold' },
  ]

  const script = [
    { name: 'Tangerine (Léger)', var: '--font-script-1', weight: 'font-light' },
    { name: 'Tangerine (Bold)', var: '--font-script-1', weight: 'font-bold' },
    { name: 'Great Vibes', var: '--font-script-2', weight: 'font-bold' },
    { name: 'Parisienne', var: '--font-script-3', weight: 'font-bold' },
    { name: 'Allura', var: '--font-script-4', weight: 'font-bold' },
    { name: 'Satisfy', var: '--font-script-5', weight: 'font-bold' },
  ]

  return (
    <main className="bg-background text-foreground min-h-screen p-12 space-y-12">
      <div className="mb-12">
        <h1 className="display text-4xl mb-2">Font Comparison</h1>
        <p className="text-muted">Polices serif luxe et script élégantes pour Tempered</p>
      </div>

      <section>
        <h2 className="display text-2xl mb-8 text-muted">Serif Classiques</h2>
        <div className="space-y-12">
          {serif.map((font) => (
            <div key={font.var} className="border-b border-line pb-12">
              <p className="ui-label text-muted mb-3">{font.name}</p>
              <span style={{ fontFamily: `var(${font.var})` }} className={`text-[96px] ${font.weight} leading-tight block`}>
                TEMPERED
              </span>
              <p className="text-sm text-dim mt-2 font-normal">Trust the process</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 pt-12 border-t border-line">
        <h2 className="display text-2xl mb-8 text-muted">Script Élégants</h2>
        <div className="space-y-12">
          {script.map((font) => (
            <div key={`${font.var}-${font.name}`} className="border-b border-line pb-12">
              <p className="ui-label text-muted mb-3">{font.name}</p>
              <span style={{ fontFamily: `var(${font.var})` }} className={`text-[96px] ${font.weight} leading-tight block`}>
                Tempered
              </span>
              <p className="text-sm text-dim mt-2 font-normal" style={{ fontFamily: `var(${font.var})`, fontSize: '18px' }}>Trust the process</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
