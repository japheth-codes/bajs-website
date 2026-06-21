import type { Metadata } from 'next';
import HomeContent from '@/components/home/HomeContent';

export const metadata: Metadata = {
  title: 'BAJs Project Management & Consultancy | Home',
  description:
    'BAJs PM & C — delivering innovative, purpose-driven solutions across technology, operations, and strategy in West Africa.',
  openGraph: {
    title: 'BAJs Project Management & Consultancy',
    description: 'Redefining Operational Efficiency Across Sectors',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomeContent />;
}
