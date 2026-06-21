import type { Metadata } from 'next';
import AboutContent from '@/components/about/AboutContent';

export const metadata: Metadata = {
  title: 'About BAJs | Project Management & Consultancy',
  description:
    'Learn about BAJs PM & C — our mission, vision, service areas, board of directors, and partners across West Africa.',
  openGraph: {
    title: 'About BAJs PM & C',
    description: 'Mission, vision, services, and leadership of BAJs Project Management & Consultancy.',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
