'use client'

import { useState } from 'react'

/**
 * Inscription aux alertes de drop. Pas de back-end : le formulaire
 * confirme visuellement et l'adresse reste locale. À brancher sur le
 * service d'envoi choisi (clé API côté serveur, jamais dans le client).
 */
export default function NotifyForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <p className="ui-label" role="status">
        Inscrit. Vous serez prévenu.
      </p>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (email.trim()) setSent(true)
      }}
      className={compact ? 'w-full max-w-xs' : 'w-full max-w-sm'}
    >
      <label htmlFor="notify-email" className="ui-label block mb-3">
        Être prévenu du prochain drop
      </label>

      <div className="flex items-center border border-foreground">
        <input
          id="notify-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          className="flex-1 min-w-0 bg-transparent px-3 h-11 text-[13px] outline-none placeholder:text-dim"
        />
        <button
          type="submit"
          className="ui-label shrink-0 h-11 px-5 bg-foreground text-background hover:bg-background hover:text-foreground border-l border-foreground transition-colors"
        >
          OK
        </button>
      </div>
    </form>
  )
}
