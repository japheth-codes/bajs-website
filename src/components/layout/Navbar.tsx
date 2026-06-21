'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  { name: 'Chief Technology Officer', slug: 'benjamin-japheth' },
  { name: 'Chief Operating Officer', slug: 'benjamin-prince' },
  { name: 'Chief Financial Officer', slug: 'divine-favour' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTeamOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // On home page at top: transparent bg + white text; everywhere else: white bg + dark text
  const isHome = pathname === '/';
  const atTopHome = isHome && !scrolled;

  const navBgClass = atTopHome
    ? 'bg-transparent'
    : scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
    : 'bg-white/90 backdrop-blur-md border-b border-gray-100';

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const getLinkClass = (href: string) => {
    const base = 'text-sm font-medium transition-colors duration-200';
    if (isActive(href)) {
      return `${base} ${atTopHome ? 'text-white' : 'text-primary'}`;
    }
    return `${base} ${atTopHome ? 'text-white/80 hover:text-white' : 'text-dark hover:text-primary'}`;
  };

  const teamBtnClass = [
    'flex items-center gap-1 text-sm font-medium transition-colors duration-200',
    pathname.startsWith('/team')
      ? atTopHome ? 'text-white' : 'text-primary'
      : atTopHome ? 'text-white/80 hover:text-white' : 'text-dark hover:text-primary',
  ].join(' ');

  const underlineColor = atTopHome ? 'bg-white' : 'bg-primary';

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo.svg" alt="BAJs PM & C" width={120} height={40} priority />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className={`relative group ${getLinkClass(link.href)}`}>
                {link.label}
                <span
                  className={[
                    'absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-200',
                    underlineColor,
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full',
                  ].join(' ')}
                />
              </Link>
            ))}

            <Link href="/about" className={`relative group ${getLinkClass('/about')}`}>
              About
              <span
                className={[
                  'absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-200',
                  underlineColor,
                  isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full',
                ].join(' ')}
              />
            </Link>

            {/* Team dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setTeamOpen(true)}
              onMouseLeave={() => setTeamOpen(false)}
            >
              <button className={teamBtnClass} aria-expanded={teamOpen}>
                Team
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${teamOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {teamOpen && (
                  <motion.div
                    key="team-dropdown"
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
                  >
                    {teamMembers.map((member) => (
                      <Link
                        key={member.slug}
                        href={`/team/${member.slug}`}
                        className="block px-4 py-2.5 text-sm text-dark hover:bg-primary/10 hover:text-primary transition-colors"
                        onClick={() => setTeamOpen(false)}
                      >
                        {member.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className={`relative group ${getLinkClass('/contact')}`}>
              Contact
              <span
                className={[
                  'absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-200',
                  underlineColor,
                  isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full',
                ].join(' ')}
              />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${atTopHome ? 'text-white hover:text-white/70' : 'text-dark hover:text-primary'}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — animated slide-down */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-gray-100 bg-white shadow-md overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    'block py-2 px-3 rounded-md text-sm font-medium transition-colors',
                    isActive(link.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-dark hover:text-primary hover:bg-primary/5',
                  ].join(' ')}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/about"
                className={[
                  'block py-2 px-3 rounded-md text-sm font-medium transition-colors',
                  isActive('/about')
                    ? 'text-primary bg-primary/10'
                    : 'text-dark hover:text-primary hover:bg-primary/5',
                ].join(' ')}
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>

              {/* Mobile team accordion */}
              <div>
                <button
                  className={[
                    'w-full flex items-center justify-between py-2 px-3 rounded-md text-sm font-medium transition-colors',
                    pathname.startsWith('/team')
                      ? 'text-primary bg-primary/10'
                      : 'text-dark hover:text-primary hover:bg-primary/5',
                  ].join(' ')}
                  onClick={() => setMobileTeamOpen((v) => !v)}
                >
                  Team
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${mobileTeamOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileTeamOpen && (
                    <motion.div
                      key="mobile-team"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-primary/30 pl-3">
                        {teamMembers.map((member) => (
                          <Link
                            key={member.slug}
                            href={`/team/${member.slug}`}
                            className="block py-1.5 text-sm text-dark hover:text-primary transition-colors"
                            onClick={() => { setMobileOpen(false); setMobileTeamOpen(false); }}
                          >
                            {member.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className={[
                  'block py-2 px-3 rounded-md text-sm font-medium transition-colors',
                  isActive('/contact')
                    ? 'text-primary bg-primary/10'
                    : 'text-dark hover:text-primary hover:bg-primary/5',
                ].join(' ')}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
