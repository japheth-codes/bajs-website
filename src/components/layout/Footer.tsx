import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#2F2F2F' }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-lg font-bold tracking-wide">
              <span className="text-primary">BAJs</span>{' '}
              <span style={{ color: '#7A2E2E' }}>PM &amp; C</span>
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              BAJs Project Management &amp; Consultancy — delivering innovative,
              purpose-driven solutions across technology, operations, and strategy.
            </p>
            <p className="text-xs text-gray-500">RC Number: 7377476</p>
          </div>

          {/* Quick links column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:bajsprojmangandconsultancy@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-200 break-all"
                >
                  <Mail size={15} className="shrink-0 text-primary" />
                  bajsprojmangandconsultancy@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348000000000"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <Phone size={15} className="shrink-0 text-primary" />
                  +234 800 000 0000
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bajs-projmang-and-consult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <span className="shrink-0 text-primary"><LinkedinIcon size={15} /></span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; {year} BAJs Project Management &amp; Consultancy. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">RC: 7377476</p>
        </div>
      </div>
    </footer>
  );
}
