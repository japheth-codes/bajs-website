import type { Metadata } from 'next';
import AboutContent from '@/components/about/AboutContent';

export const metadata: Metadata = {
  title: 'About the firm',
  description:
    'Learn about BAJs PM & C: our mission, vision, five service areas and leadership team across Nigeria, West Africa and beyond.',
  openGraph: {
    title: 'About BAJs PM&C',
    description:
      'Mission, vision, services and leadership of BAJs Project Management & Consultancy.',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
