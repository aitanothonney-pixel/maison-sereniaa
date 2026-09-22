import type { ReactNode } from 'react'

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[21px] h-[21px]"
      aria-hidden
    >
      {children}
    </svg>
  )
}

export function IconSearch() {
  return (
    <Icon>
      <circle cx="10.5" cy="10.5" r="6.75" />
      <path d="m15.4 15.4 5.1 5.1" />
    </Icon>
  )
}

export function IconBag() {
  return (
    <Icon>
      <path d="M5.4 7.8h13.2l-.95 12.1a1.6 1.6 0 0 1-1.6 1.45H7.95a1.6 1.6 0 0 1-1.6-1.45L5.4 7.8Z" />
      <path d="M9.2 7.8V6.2a2.8 2.8 0 0 1 5.6 0v1.6" />
    </Icon>
  )
}

export function IconInstagram() {
  return (
    <Icon>
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="16.9" cy="7.1" r="1.05" fill="currentColor" stroke="none" />
    </Icon>
  )
}
