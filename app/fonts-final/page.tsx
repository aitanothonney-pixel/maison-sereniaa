export default function FontsFinal() {
  const combos = [
    {
      name: 'Bodoni Moda + EB Garamond (Both Italic)',
      logoFont: '--font-display-alt1',
      taglineFont: '--font-display-alt5',
      logoStyle: 'italic font-bold',
      taglineStyle: 'italic font-light',
    },
    {
      name: 'Libre Baskerville + Bodoni Moda (Both Italic)',
      logoFont: '--font-display-alt6',
      taglineFont: '--font-display-alt1',
      logoStyle: 'italic font-bold',
      taglineStyle: 'italic font-light',
    },
    {
      name: 'EB Garamond + Playfair Display (Both Italic)',
      logoFont: '--font-display-alt5',
      taglineFont: '--font-display',
      logoStyle: 'italic font-bold',
      taglineStyle: 'italic font-light',
    },
    {
      name: 'Playfair Display + Libre Baskerville (Both Italic)',
      logoFont: '--font-display',
      taglineFont: '--font-display-alt6',
      logoStyle: 'italic font-bold',
      taglineStyle: 'italic font-light',
    },
    {
      name: 'Fraunces + EB Garamond (Both Italic)',
      logoFont: '--font-display-alt3',
      taglineFont: '--font-display-alt5',
      logoStyle: 'italic font-bold',
      taglineStyle: 'italic font-light',
    },
    {
      name: 'Bodoni Moda + Libre Baskerville (Both Italic)',
      logoFont: '--font-display-alt1',
      taglineFont: '--font-display-alt6',
      logoStyle: 'italic font-bold',
      taglineStyle: 'italic font-light',
    },
  ]

  return (
    <main className="bg-black text-white min-h-screen p-12 space-y-20 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-3xl mb-2 font-light">Combinaisons Serif Italic</h1>
        <p className="text-gray-400 text-sm">Logo (bold) + Tagline (light) — Style luxe classique</p>
      </div>

      {combos.map((combo) => (
        <div key={combo.name} className="border-b border-gray-700 pb-16 w-full max-w-2xl text-center">
          <p className="text-gray-500 text-xs mb-8 uppercase tracking-widest">{combo.name}</p>
          <div className="space-y-6">
            <span
              style={{ fontFamily: `var(${combo.taglineFont})` }}
              className={`${combo.taglineStyle} leading-tight block text-5xl text-gray-300`}
            >
              Trust the process
            </span>
            <span
              style={{ fontFamily: `var(${combo.logoFont})` }}
              className={`${combo.logoStyle} leading-tight block text-8xl`}
            >
              TEMPERED
            </span>
          </div>
        </div>
      ))}
    </main>
  )
}
