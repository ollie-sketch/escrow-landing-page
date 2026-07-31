import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';

/**
 * Sticky nav shared by both landing pages.
 * `variant` controls which role is "active" and which cross-link shows.
 */
export default function Navbar({ variant = 'buyer' }) {
  const [open, setOpen] = useState(false);
  const isBuyer = variant === 'buyer';
  const otherHref = isBuyer ? '/vendor' : '/buyer';
  const otherLabel = isBuyer ? 'Sell on Holdfast' : 'Buy on Holdfast';

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Who it\u2019s for', href: '#who-is-this-for' },
    { label: 'Compare', href: '#compare' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/95 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <Link to={isBuyer ? '/buyer' : '/vendor'} className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center border-2 border-amber text-amber font-display font-bold"
          >
            H
          </span>
          <span className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
            Holdfast
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="plate-label text-mute transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Link
            to={otherHref}
            className="plate-label text-steel underline decoration-dotted underline-offset-4 transition-colors hover:text-signal"
          >
            {otherLabel}
          </Link>
          <a
            href="#get-started"
            className="border border-amber bg-amber/10 px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide text-amber transition-colors hover:bg-amber hover:text-base"
          >
            Get started
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center border border-line p-2 text-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-base md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 plate-label text-mute hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to={otherHref}
                className="block py-2 plate-label text-steel hover:text-signal"
              >
                {otherLabel}
              </Link>
            </li>
            <li className="pt-2">
              <a
                href="#get-started"
                onClick={() => setOpen(false)}
                className="block border border-amber bg-amber/10 px-4 py-2 text-center font-display text-sm font-semibold uppercase tracking-wide text-amber"
              >
                Get started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
