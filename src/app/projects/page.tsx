import type { Metadata } from 'next';
import ProjectsContent from '@/components/projects/ProjectsContent';

export const metadata: Metadata = {
  title: 'Project Catalogue | BAJs PM & C',
  description:
    'Explore all BAJs active and in-development projects across fintech, healthtech, edtech, and operational automation.',
  openGraph: {
    title: 'Project Catalogue — BAJs PM & C',
    description: 'All our active and in-development projects.',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
