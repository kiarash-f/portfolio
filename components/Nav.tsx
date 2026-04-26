'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-zinc-800/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-accent font-bold text-sm tracking-widest hover:text-accent-dim transition-colors"
        >
          KF
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:kiarash.fayyaz72@gmail.com"
            className="text-sm px-4 py-1.5 border border-accent/60 text-accent rounded-sm hover:bg-accent hover:text-bg transition-all font-medium"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-b border-zinc-800 px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:kiarash.fayyaz72@gmail.com"
            className="text-sm text-accent font-mono"
            onClick={() => setOpen(false)}
          >
            kiarash.fayyaz72@gmail.com
          </a>
        </div>
      )}
    </header>
  )
}
