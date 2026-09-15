'use client'

import { useState } from 'react'

/**
 * Inscription aux alertes de drop. Pas de back-end ici : le formulaire
 * confirme visuellement et l'adresse reste locale. À brancher sur le
 * service d'envoi choisi (clé API côté serveur, jamais dans le client).
 */
export default function NotifyForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <p className="tech text-foreground" role="status">
        Inscrit. Vous serez prévenu à l&apos;ouverture.
      </p>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (email.trim()) setSent(true)
      }}
      className={compact ? 'w-full max-w-sm' : 'w-full max-w-md'}
    >
      <label htmlFor="notify-email" className="tech block mb-3">
        Être prévenu de l&apos;ouverture
      </label>

      <div className="flex items-center border border-foreground">
        <input
          id="notify-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          className="flex-1 min-w-0 bg-transparent px-4 h-12 text-[13px] outline-none placeholder:text-subtle"
        />
        <button
          type="submit"
          className="headline shrink-0 h-12 px-6 text-[12px] bg-foreground text-background hover:bg-background hover:text-foreground border-l border-foreground transition-colors"
        >
          Go
        </button>
      </div>
    </form>
  )
}
