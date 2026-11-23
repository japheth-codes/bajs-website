import type { Metadata } from 'next';
import ProjectsContent from '@/components/projects/ProjectsContent';

export const metadata: Metadata = {
  title: 'Project catalogue',
  description:
    'Explore the BAJs portfolio: active and in-development projects across fintech, healthtech, edtech and operational automation.',
  openGraph: {
    title: 'Project catalogue | BAJs PM&C',
    description: 'All our active and in-development projects.',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
