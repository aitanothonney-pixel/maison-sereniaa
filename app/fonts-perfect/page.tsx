export default function FontsPerfect() {
  const combos = [
    {
      name: 'Tangerine (script) + Bodoni Moda (serif bold)',
      taglineFont: '--font-script-1',
      logoFont: '--font-display-alt1',
      taglineStyle: 'font-bold',
      logoStyle: 'italic font-bold',
    },
    {
      name: 'Great Vibes (script) + Bodoni Moda (serif bold)',
      taglineFont: '--font-script-2',
      logoFont: '--font-display-alt1',
      taglineStyle: 'font-bold',
      logoStyle: 'italic font-bold',
    },
    {
      name: 'Parisienne (script) + Bodoni Moda (serif bold)',
      taglineFont: '--font-script-3',
      logoFont: '--font-display-alt1',
      taglineStyle: 'font-bold',
      logoStyle: 'italic font-bold',
    },
    {
      name: 'Allura (script) + Bodoni Moda (serif bold)',
      taglineFont: '--font-script-4',
      logoFont: '--font-display-alt1',
      taglineStyle: 'font-bold',
      logoStyle: 'italic font-bold',
    },
    {
      name: 'Satisfy (script) + Bodoni Moda (serif bold)',
      taglineFont: '--font-script-5',
      logoFont: '--font-display-alt1',
      taglineStyle: 'font-bold',
      logoStyle: 'italic font-bold',
    },
    {
      name: 'Tangerine (script) + EB Garamond (serif bold)',
      taglineFont: '--font-script-1',
      logoFont: '--font-display-alt5',
      taglineStyle: 'font-bold',
      logoStyle: 'italic font-bold',
    },
  ]

  return (
    <main className="bg-black text-white min-h-screen p-12 space-y-20 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-3xl mb-2 font-light">Script Cursif + Serif Bold Italic</h1>
        <p className="text-gray-400 text-sm">Élégant fluide + Classique fort</p>
      </div>

      {combos.map((combo) => (
        <div key={combo.name} className="border-b border-gray-700 pb-16 w-full max-w-2xl text-center">
          <p className="text-gray-500 text-xs mb-8 uppercase tracking-widest">{combo.name}</p>
          <div className="space-y-6">
            <span
              style={{ fontFamily: `var(${combo.taglineFont})` }}
              className={`${combo.taglineStyle} leading-tight block text-6xl text-gray-300`}
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
