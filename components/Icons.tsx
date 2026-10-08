import type { ReactNode } from 'react'

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden
    >
      {children}
    </svg>
  )
}

export function IconSearch() {
  return (
    <Icon>
      <circle cx="11" cy="11" r="7" />
      <path d="m16 16 4 4" />
    </Icon>
  )
}

export function IconBag() {
  return (
    <Icon>
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V5a2 2 0 0 1 6 0v3" />
    </Icon>
  )
}

export function IconInstagram() {
  return (
    <Icon>
      <rect x="2" y="2" width="20" height="20" rx="4.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
    </Icon>
  )
}
