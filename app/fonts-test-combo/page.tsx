export default function FontsCombo() {
  const combos = [
    {
      name: 'Playfair Display + Playfair Italic',
      logoFont: '--font-display',
      taglineFont: '--font-display',
      logoWeight: 'font-bold',
      taglineStyle: 'italic font-light',
    },
    {
      name: 'Bodoni Moda + Bodoni Italic',
      logoFont: '--font-display-alt1',
      taglineFont: '--font-display-alt1',
      logoWeight: 'font-bold',
      taglineStyle: 'italic font-light',
    },
    {
      name: 'EB Garamond + EB Italic',
      logoFont: '--font-display-alt5',
      taglineFont: '--font-display-alt5',
      logoWeight: 'font-bold',
      taglineStyle: 'italic font-light',
    },
    {
      name: 'Libre Baskerville + Baskerville Italic',
      logoFont: '--font-display-alt6',
      taglineFont: '--font-display-alt6',
      logoWeight: 'font-bold',
      taglineStyle: 'italic font-light',
    },
    {
      name: 'Cinzel + Cormorant Italic',
      logoFont: '--font-display-alt2',
      taglineFont: '--font-body',
      logoWeight: 'font-bold',
      taglineStyle: 'italic font-light',
    },
    {
      name: 'Fraunces + Fraunces Italic',
      logoFont: '--font-display-alt3',
      taglineFont: '--font-display-alt3',
      logoWeight: 'font-bold',
      taglineStyle: 'italic font-light',
    },
  ]

  return (
    <main className="bg-background text-foreground min-h-screen p-12 space-y-16">
      <div className="mb-16">
        <h1 className="display text-4xl mb-2">Combinaisons Logo + Tagline</h1>
        <p className="text-muted">Serif classique + Italic élégant</p>
      </div>

      {combos.map((combo) => (
        <div key={combo.name} className="border-b border-line pb-16">
          <p className="ui-label text-muted mb-6">{combo.name}</p>
          <div className="space-y-4">
            <span
              style={{ fontFamily: `var(${combo.logoFont})` }}
              className={`${combo.logoWeight} leading-tight block text-[120px]`}
            >
              TEMPERED
            </span>
            <span
              style={{ fontFamily: `var(${combo.taglineFont})` }}
              className={`${combo.taglineStyle} leading-tight block text-[48px] text-muted`}
            >
              Trust the process
            </span>
          </div>
        </div>
      ))}
    </main>
  )
}
