export default function FontsExact() {
  const combos = [
    {
      name: 'Cormorant Garamond + Bodoni Moda',
      taglineFont: '--font-body',
      logoFont: '--font-display-alt1',
      taglineStyle: 'italic font-light',
      logoStyle: 'italic font-bold',
    },
    {
      name: 'EB Garamond + Bodoni Moda',
      taglineFont: '--font-display-alt5',
      logoFont: '--font-display-alt1',
      taglineStyle: 'italic font-light',
      logoStyle: 'italic font-bold',
    },
    {
      name: 'Playfair Display + Bodoni Moda',
      taglineFont: '--font-display',
      logoFont: '--font-display-alt1',
      taglineStyle: 'italic font-light',
      logoStyle: 'italic font-bold',
    },
    {
      name: 'Libre Baskerville + Bodoni Moda',
      taglineFont: '--font-display-alt6',
      logoFont: '--font-display-alt1',
      taglineStyle: 'italic font-light',
      logoStyle: 'italic font-bold',
    },
    {
      name: 'Cormorant Garamond + EB Garamond',
      taglineFont: '--font-body',
      logoFont: '--font-display-alt5',
      taglineStyle: 'italic font-light',
      logoStyle: 'italic font-bold',
    },
    {
      name: 'EB Garamond + Playfair Display',
      taglineFont: '--font-display-alt5',
      logoFont: '--font-display',
      taglineStyle: 'italic font-light',
      logoStyle: 'italic font-bold',
    },
  ]

  return (
    <main className="bg-black text-white min-h-screen p-12 space-y-20 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-3xl mb-2 font-light">Deux Polices Différentes</h1>
        <p className="text-gray-400 text-sm">Tagline élégant (light) + Logo classique (bold)</p>
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
