import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { OrgIconLinks } from './OrgLinks'
import { asset } from '../lib/site'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Publications', path: '/publications' },
    { name: 'Members', path: '/members' },
    { name: 'News', path: '/news' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex h-[4.25rem] items-center justify-between gap-4">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={asset('images/dip_lab_logo.webp')}
              alt="DIP Lab logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="min-w-0">
              <span className="block font-heading text-base font-bold leading-tight text-navy">
                DIP Lab
              </span>
              <span className="hidden text-[11px] uppercase tracking-[0.14em] text-muted sm:block">
                Islamia College Peshawar
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-navy text-white'
                    : 'text-ink/80 hover:bg-paper hover:text-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <OrgIconLinks className="ml-2 border-l border-navy/10 pl-2" />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-paper lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="border-t border-navy/10 pb-4 pt-2 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                  isActive(link.path)
                    ? 'bg-navy text-white'
                    : 'text-ink hover:bg-paper'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between px-1">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                Lab profiles
              </p>
              <OrgIconLinks />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
