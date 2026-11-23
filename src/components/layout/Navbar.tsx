'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import { company, telHref } from '@/data/company';
import { Wordmark } from '@/components/layout/Wordmark';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setTeamOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setTeamOpen(false);
    setMobileTeamOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const linkClass = (href: string) =>
    [
      'relative py-2 text-sm font-semibold transition-colors duration-200',
      isActive(href) ? 'text-brand' : 'text-ink hover:text-brand',
    ].join(' ');

  return (
    <>
      <div className="bg-ink-deep text-white">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between gap-4 px-6 text-[11px]">
          <p className="truncate font-medium text-white/60">
            {company.name}
          </p>
          <div className="flex shrink-0 items-center gap-5 text-white/60">
            <span className="hidden sm:inline">RC {company.rc}</span>
            <a
              href={`tel:${telHref(company.phones[0])}`}
              className="font-medium transition-colors hover:text-white"
            >
              {company.phones[0]}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-rule bg-paper">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <Link href="/" className={linkClass('/')}>
            Home
            {isActive('/') && <span className="absolute -bottom-1 left-0 h-px w-full bg-brand" />}
          </Link>
          <Link href="/about" className={linkClass('/about')}>
            About
            {isActive('/about') && <span className="absolute -bottom-1 left-0 h-px w-full bg-brand" />}
          </Link>
          <Link href="/projects" className={linkClass('/projects')}>
            Projects
            {isActive('/projects') && (
              <span className="absolute -bottom-1 left-0 h-px w-full bg-brand" />
            )}
          </Link>

          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setTeamOpen(true)}
            onMouseLeave={() => setTeamOpen(false)}
          >
            <button
              type="button"
              className={[
                'flex items-center gap-1 py-2 text-sm font-semibold transition-colors duration-200',
                pathname.startsWith('/team') ? 'text-brand' : 'text-ink hover:text-brand',
              ].join(' ')}
              aria-expanded={teamOpen}
              aria-haspopup="true"
            >
              Team
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${teamOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {teamOpen && (
                <motion.div
                  key="team-dropdown"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 border border-rule bg-paper py-2 shadow-md"
                >
                  {teamMembers.map((member) => (
                    <Link
                      key={member.slug}
                      href={`/team/${member.slug}`}
                      className="block px-5 py-3 transition-colors hover:bg-paper-alt"
                      onClick={() => setTeamOpen(false)}
                    >
                      <span className="block text-[13px] font-semibold text-ink">
                        {member.name}
                      </span>
                      <span className="mt-0.5 block text-[11px] uppercase tracking-wider text-muted">
                        {member.title}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className={linkClass('/contact')}>
            Contact
            {isActive('/contact') && (
              <span className="absolute -bottom-1 left-0 h-px w-full bg-brand" />
            )}
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-brand px-4 py-2.5 text-[13px] font-bold text-white transition-colors duration-200 hover:bg-brand-dark"
          >
            Talk to an advisor
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </nav>

        <button
          type="button"
          className="p-2 text-ink md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-rule bg-paper md:hidden"
            aria-label="Mobile"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-rule/60 py-3 text-sm font-semibold text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-b border-rule/60">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-sm font-semibold text-ink"
                  onClick={() => setMobileTeamOpen((value) => !value)}
                  aria-expanded={mobileTeamOpen}
                >
                  Team
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${mobileTeamOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileTeamOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pb-2 pl-4"
                    >
                      {teamMembers.map((member) => (
                        <Link
                          key={member.slug}
                          href={`/team/${member.slug}`}
                          className="block py-2 text-sm text-muted"
                          onClick={() => setMobileOpen(false)}
                        >
                          {member.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className="border-b border-rule/60 py-3 text-sm font-semibold text-ink"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-brand px-4 py-3 text-[13px] font-bold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Talk to an advisor
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}
