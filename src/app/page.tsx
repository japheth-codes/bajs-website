import type { Metadata } from 'next';
import HomeContent from '@/components/home/HomeContent';

export const metadata: Metadata = {
  title: 'Project Management & Consultancy',
  description:
    'BAJs PM & C delivers purpose-driven solutions across technology, business operations and strategy, in Nigeria, across Africa and globally.',
  openGraph: {
    title: 'BAJs Project Management & Consultancy',
    description:
      'Practical counsel and disciplined delivery across project management, business development, technology, data and finance.',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomeContent />;
}
