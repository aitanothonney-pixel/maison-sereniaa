'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  return (
    <footer className="bg-black text-white/60 pt-16 pb-8">
      <div className="h-px w-full bg-neutral-800" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="mb-4">
              <Logo color="white" size="md" />
            </div>
            <p className="text-sm leading-relaxed mb-2">La performance, sans compromis.</p>
            <p className="text-sm mb-5">Genève, Suisse 🇨🇭</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-white transition-colors text-sm font-medium tracking-wider"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Col 2 — Collections */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-4">
              Nos Collections
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Running', href: '/shop?category=running' },
                { label: 'Basketball', href: '/shop?category=basketball' },
                { label: 'Sneakers', href: '/shop?category=casual' },
                { label: 'Hoodies', href: '/shop?category=hoodie' },
                { label: 'Accessoires', href: '/shop?category=accessories' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Service Client */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-4">
              Service Client
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Livraison', href: '/livraison' },
                { label: 'Retours', href: '/retours' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
                { label: 'À propos', href: '/a-propos' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-4">
              Newsletter
            </h4>
            <p className="text-sm leading-relaxed mb-4">Recevez nos nouveautés et offres exclusives.</p>
            {newsletterSent ? (
              <p className="text-sm text-white/80">Merci pour votre inscription !</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail) setNewsletterSent(true);
                }}
                className="flex items-center"
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="flex-1 min-w-0 bg-white/5 border border-white/20 text-white text-sm px-3 py-2 rounded-l outline-none focus:ring-1 focus:ring-[#C9A96E] placeholder:text-white/30 transition-all"
                />
                <button
                  type="submit"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 border-l-0 text-white px-3 py-2 rounded-r transition-colors focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
                  aria-label="S'inscrire"
                >
                  →
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© 2026 in &amp; Co — Sportswear &amp; Sneakers Premium</p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Visa */}
            <svg viewBox="0 0 48 32" className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="#1A1F71"/>
              <path d="M19.5 22H16.6L18.4 10H21.3L19.5 22Z" fill="white"/>
              <path d="M29.7 10.3C29.1 10.1 28.1 9.9 26.9 9.9C24 9.9 21.9 11.4 21.9 13.6C21.9 15.2 23.4 16.1 24.5 16.6C25.6 17.1 26 17.5 26 18C26 18.8 25 19.1 24.1 19.1C22.8 19.1 22.1 18.9 21 18.4L20.6 18.2L20.1 21C20.8 21.3 22.1 21.6 23.4 21.6C26.5 21.6 28.5 20.1 28.5 17.7C28.5 16.4 27.7 15.4 25.9 14.6C24.9 14.1 24.3 13.8 24.3 13.2C24.3 12.7 24.9 12.2 26.1 12.2C27.1 12.2 27.8 12.4 28.4 12.6L28.7 12.7L29.7 10.3Z" fill="white"/>
              <path d="M33.4 17.7L34.5 14.7C34.5 14.7 34.8 13.9 35 13.4L35.2 14.6L35.9 17.7H33.4ZM38 10H35.7C35 10 34.4 10.2 34.1 10.9L29.7 22H32.8L33.4 20.3H37.1L37.5 22H40.2L38 10Z" fill="white"/>
              <path d="M14.4 10L11.5 18.2L11.2 16.7C10.6 14.8 8.8 12.7 6.8 11.7L9.5 22H12.6L17.5 10H14.4Z" fill="white"/>
              <path d="M8.5 10H3.8L3.7 10.3C7.3 11.2 9.8 13.3 10.8 16L9.8 11C9.6 10.3 9.1 10 8.5 10Z" fill="#F9A51A"/>
            </svg>
            {/* Mastercard */}
            <svg viewBox="0 0 48 32" className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="#252525"/>
              <circle cx="18" cy="16" r="8" fill="#EB001B"/>
              <circle cx="30" cy="16" r="8" fill="#F79E1B"/>
              <path d="M24 9.8A8 8 0 0 1 27.5 16 8 8 0 0 1 24 22.2 8 8 0 0 1 20.5 16 8 8 0 0 1 24 9.8Z" fill="#FF5F00"/>
            </svg>
            {/* PayPal */}
            <svg viewBox="0 0 48 32" className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="#F7F7F7"/>
              <path d="M32.3 11.2c.1-.7 0-1.2-.4-1.7-.5-.5-1.3-.8-2.4-.8h-4.1c-.3 0-.5.2-.6.5l-1.7 10.8c0 .2.1.4.3.4h2.4l.6-3.8v.1c.1-.3.3-.5.6-.5h1.3c2.5 0 4.5-1 5-4 .2-.8.1-1.5-.1-2Z" fill="#009EE3"/>
              <path d="M19.3 11.2c.1-.7 0-1.2-.4-1.7C18.4 9 17.6 8.7 16.5 8.7h-4.1c-.3 0-.5.2-.6.5L10.1 20c0 .2.1.4.3.4H13l.7-4.4.6-3.8c.1-.3.3-.5.6-.5H16c2.1 0 3.7-.9 4.2-3.2.3-1 .1-1.7 0-2.1.3.2.8.5 1 .8Z" fill="#113984"/>
              <path d="M20.3 13.3c-.1.4-.3.8-.5 1.1-.7 1.7-2.3 2.3-4.5 2.3h-1.1c-.3 0-.5.2-.6.5l-.7 4.4-.2 1.2c0 .2.1.3.3.3h2.4c.3 0 .5-.2.5-.4v-.1l.4-2.7v-.1c0-.3.2-.4.5-.4h.3c2.1 0 3.8-.9 4.2-3.4.2-1 .1-1.9-.5-2.5-.2-.1-.3-.2-.5-.2Z" fill="#009EE3"/>
            </svg>
            {/* Apple Pay */}
            <svg viewBox="0 0 48 32" className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="#000"/>
              <path d="M17.3 12.1c.5-.6.8-1.4.7-2.2-.7 0-1.5.5-2 1.1-.4.5-.8 1.3-.7 2.1.8.1 1.5-.4 2-1ZM18 13.2c-1.1-.1-2 .6-2.5.6s-1.3-.6-2.2-.6c-1.1 0-2.2.7-2.7 1.7-1.2 2-.3 5 .8 6.6.6.8 1.2 1.7 2.1 1.7.8 0 1.1-.5 2.1-.5 1 0 1.2.5 2.1.5.9 0 1.5-.8 2.1-1.7.6-.9.9-1.8.9-1.8s-1.7-.7-1.7-2.5c0-1.6 1.3-2.3 1.3-2.3s-.7-1.7-2.3-1.7ZM26.8 10.4h-2.4c-.1 0-.3.1-.3.3v10.8c0 .2.1.3.3.3h1.2c.2 0 .3-.1.3-.3v-3.4h1.1c2 0 3.3-1 3.3-3 0-1.9-1.3-2.7-3.5-2.7Zm.2 4.5h-.9v-3.2h.9c1.1 0 1.7.5 1.7 1.6 0 1.1-.6 1.6-1.7 1.6ZM33 16.2c-.7 0-1.1.3-1.4.8l-.3-1.2v-.1h-.9c-.1 0-.2.1-.2.2v6.3c0 .1.1.2.2.2h1.1c.1 0 .2-.1.2-.2V20c.3.4.8.7 1.4.7 1.3 0 2.1-1.1 2.1-2.7-.1-1.5-.9-1.8-2.2-1.8Zm-.3 3.9c-.7 0-1.1-.5-1.1-1.3 0-.8.4-1.3 1.1-1.3.6 0 1 .5 1 1.3 0 .8-.4 1.3-1 1.3Z" fill="white"/>
            </svg>
            {/* Google Pay */}
            <svg viewBox="0 0 48 32" className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="#F7F7F7"/>
              <path d="M23.5 16.7v2.9h-.9v-7.2h2.5c.6 0 1.2.2 1.6.6.4.4.7.9.7 1.5s-.2 1.1-.7 1.5c-.4.4-1 .6-1.6.6l-1.6.1Zm0-3.5v2.7h1.6c.4 0 .7-.1.9-.4.3-.2.4-.5.4-.9s-.1-.7-.4-.9c-.3-.2-.6-.4-.9-.4l-1.6-.1ZM29 15c.7 0 1.2.2 1.6.5.4.3.6.8.6 1.4v2.9H30v-.7h-.1c-.4.5-.9.8-1.5.8-.5 0-1-.2-1.4-.5-.4-.3-.5-.7-.5-1.2 0-.5.2-.9.5-1.2.4-.3.9-.4 1.5-.4.5 0 1 .1 1.3.3v-.2c0-.3-.1-.6-.4-.8-.3-.2-.6-.3-.9-.3-.5 0-.9.2-1.2.6l-.8-.5c.5-.7 1.2-1 2-.7Zm-1.2 3.5c0 .2.1.4.3.5.2.1.4.2.6.2.3 0 .7-.1.9-.4.3-.3.4-.6.4-.9-.3-.2-.6-.3-1.1-.3-.3 0-.6.1-.8.3-.2.1-.3.4-.3.6ZM35.7 15.1l-3 6.9h-.9l1.1-2.4-1.9-4.5h1l1.4 3.4 1.3-3.4h1Z" fill="#3C4043"/>
              <path d="M20.1 16.3c0-.3 0-.5-.1-.8h-3.7v1.5h2.1c-.1.5-.4.9-.8 1.2v1h1.3c.7-.7 1.2-1.7 1.2-2.9Z" fill="#4285F4"/>
              <path d="M16.3 20.2c1.1 0 2-.4 2.7-1l-1.3-1c-.4.3-.9.4-1.4.4-1 0-1.9-.7-2.2-1.7h-1.3v1c.7 1.4 2.1 2.3 3.5 2.3Z" fill="#34A853"/>
              <path d="M14.1 16.9c-.2-.5-.2-1 0-1.5v-1h-1.3c-.6 1.2-.6 2.6 0 3.8l1.3-1.3Z" fill="#FBBC04"/>
              <path d="M16.3 13.7c.6 0 1.1.2 1.5.6l1.1-1.1c-.7-.7-1.6-1-2.6-1-1.4 0-2.8.9-3.5 2.3l1.3 1c.3-1 1.2-1.8 2.2-1.8Z" fill="#EA4335"/>
            </svg>
            {/* Amex */}
            <svg viewBox="0 0 48 32" className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="32" rx="4" fill="#2557D6"/>
              <path d="M8 14l-1.5 4h3L8 14ZM9.5 20H6.5l-.5 1.5H4l3-8h2l3 8h-2l-.5-1.5ZM14.5 12.5l1.5 4 1.5-4H20v8h-2v-5.5l-1.5 4h-1l-1.5-4V20.5h-2v-8h2.5ZM24 12.5v8h-2v-8h2ZM27.5 12.5l3 5v-5h2v8h-2l-3-5v5h-2v-8h2ZM37 17.5v1.5h4v1.5h-4v.5h4v1.5h-6v-8h6v1.5h-4v1.5h4v.5h-4Z" fill="white"/>
            </svg>
            {/* Klarna */}
            <div className="h-7 px-3 rounded flex items-center justify-center bg-[#FFB3C7] opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-black text-[11px] font-bold tracking-tight">Klarna</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
