export default function FontsSame() {
  const combos = [
    {
      name: 'Bodoni Moda (Light + Bold)',
      font: '--font-display-alt1',
    },
    {
      name: 'EB Garamond (Light + Bold)',
      font: '--font-display-alt5',
    },
    {
      name: 'Libre Baskerville (Light + Bold)',
      font: '--font-display-alt6',
    },
    {
      name: 'Playfair Display (Light + Bold)',
      font: '--font-display',
    },
    {
      name: 'Fraunces (Light + Bold)',
      font: '--font-display-alt3',
    },
    {
      name: 'Cinzel (Light + Bold)',
      font: '--font-display-alt2',
    },
  ]

  return (
    <main className="bg-black text-white min-h-screen p-12 space-y-20 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-3xl mb-2 font-light">Une Seule Police — Deux Poids</h1>
        <p className="text-gray-400 text-sm">Light (tagline) + Bold (logo) en italic</p>
      </div>

      {combos.map((combo) => (
        <div key={combo.name} className="border-b border-gray-700 pb-16 w-full max-w-2xl text-center">
          <p className="text-gray-500 text-xs mb-8 uppercase tracking-widest">{combo.name}</p>
          <div className="space-y-6">
            <span
              style={{ fontFamily: `var(${combo.font})` }}
              className="italic font-light leading-tight block text-5xl text-gray-300"
            >
              Trust the process
            </span>
            <span
              style={{ fontFamily: `var(${combo.font})` }}
              className="italic font-bold leading-tight block text-8xl"
            >
              TEMPERED
            </span>
          </div>
        </div>
      ))}
    </main>
  )
}
