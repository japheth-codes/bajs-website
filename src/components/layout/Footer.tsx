import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { company, telHref } from '@/data/company';
import { services } from '@/data/services';
import { Wordmark } from '@/components/layout/Wordmark';

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About the firm', href: '/about' },
  { label: 'Project catalogue', href: '/projects' },
  { label: 'Leadership', href: '/#leadership' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-brand bg-ink-deep text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:pr-10">
            <Wordmark inverse />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/60">
              {company.tagline}
            </p>
            <p className="mt-5 text-[11px] uppercase tracking-wider text-paper/40">
              RC Number {company.rc}
            </p>
          </div>

          <div className="md:col-span-1 lg:col-span-3">
            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-brand-light">
              The Firm
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/60 transition-colors duration-200 hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-brand-light">
              Contact
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-[13px] text-paper/60">
              <li>
                <a
                  href={`tel:${telHref(company.phones[0])}`}
                  className="flex items-start gap-2.5 transition-colors hover:text-paper"
                >
                  <Phone size={14} className="mt-0.5 shrink-0 text-paper/40" />
                  {company.phones[0]}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-2.5 break-all transition-colors hover:text-paper"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-paper/40" />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors hover:text-paper"
                >
                  <LinkedInIcon size={14} />
                  LinkedIn
                  <ArrowUpRight size={12} className="mt-0.5 text-paper/40" />
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-paper/40" />
                {company.addresses[0]}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/10 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-paper/40">
              &copy; {year} {company.name}. All rights reserved.
            </p>
            <p className="text-xs text-paper/40">
              {services.length} service areas · Abuja, Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
