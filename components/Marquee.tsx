/**
 * Bandeau défilant en tête de page.
 *
 * L'animation translate la piste de -50 %. Pour que la boucle soit
 * invisible, la piste doit contenir exactement deux moitiés identiques,
 * et chaque moitié doit être au moins aussi large que l'écran : sinon un
 * vide apparaît en fin de course et le défilement semble s'interrompre.
 */

// Durée par motif, pour que la vitesse ne dépende pas du nombre de motifs.
const SECONDS_PER_REPEAT = 5.33

export default function Marquee({
  text = 'Trust the process',
  repeat = 18,
}: {
  text?: string
  repeat?: number
}) {
  const half = Array.from({ length: repeat }, (_, i) => i)
  const track = [...half, ...half]

  return (
    <div className="bg-foreground text-background overflow-hidden py-2.5">
      <div
        className="marquee-track"
        style={{ animationDuration: `${repeat * SECONDS_PER_REPEAT}s` }}
        aria-hidden
      >
        {track.map((_, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="ui-label whitespace-nowrap px-6">{text}</span>
            <Glyph />
          </span>
        ))}
      </div>
      {/* Le texte défilant est décoratif : une seule occurrence lisible
          est exposée aux lecteurs d'écran. */}
      <span className="sr-only">{text}</span>
    </div>
  )
}

function Glyph() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M12 0l2.2 7.2L21 5l-4.3 5.8L24 12l-7.3 1.2L21 19l-6.8-2.2L12 24l-2.2-7.2L3 19l4.3-5.8L0 12l7.3-1.2L3 5l6.8 2.2z" />
    </svg>
  )
}
