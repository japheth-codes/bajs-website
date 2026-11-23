import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import { company } from '@/data/company';

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: 'BAJs Project Management & Consultancy',
    template: '%s | BAJs PM&C',
  },
  description:
    'BAJs PM & C delivers purpose-driven solutions across technology, business operations and strategy, in Nigeria, across Africa and globally.',
  openGraph: {
    title: 'BAJs Project Management & Consultancy',
    description:
      'A multidisciplinary consultancy working across project management, business development, technology, data and finance.',
    type: 'website',
    locale: 'en_NG',
    siteName: company.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-paper text-ink antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
