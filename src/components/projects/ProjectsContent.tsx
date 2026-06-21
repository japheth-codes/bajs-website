'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/projects/ProjectCard';
import PageHero from '@/components/ui/PageHero';
import { projects } from '@/data/projects';
import { Project } from '@/data/types';

type Filter = 'all' | 'Deployed' | 'development' | 'research';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'Deployed', label: 'Active' },
  { id: 'development', label: 'In Development' },
  { id: 'research', label: 'Research Phase' },
];

function filterProjects(filter: Filter, list: Project[]): Project[] {
  if (filter === 'Deployed') return list.filter((p) => p.status === 'Deployed');
  if (filter === 'development') return list.filter((p) => p.status === 'MVP Development');
  if (filter === 'research')
    return list.filter(
      (p) =>
        p.status === 'Conceptualization & Design' || p.status === 'Research & Conceptualization'
    );
  return list;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ProjectsContent() {
  const [active, setActive] = useState<Filter>('all');
  const visible = filterProjects(active, projects);

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────────── */}
      <PageHero
        title="Project Catalogue"
        subtitle="All our active and in-development projects — spanning fintech, healthtech, edtech, and operational automation."
        breadcrumb="BAJs PM & C"
        variant="maroon"
        align="center"
      />

      {/* ── Filter + Grid ─────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-10 flex-wrap"
          >
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={[
                  'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border-2',
                  active === f.id
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-white text-dark border-gray-200 hover:border-primary hover:text-primary',
                ].join(' ')}
              >
                {f.label}
                <span
                  className={[
                    'ml-2 text-xs rounded-full px-1.5 py-0.5',
                    active === f.id ? 'bg-white/20' : 'bg-gray-100',
                  ].join(' ')}
                >
                  {filterProjects(f.id, projects).length}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visible.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {visible.length === 0 && (
            <p className="text-center text-dark-muted py-20">No projects match this filter.</p>
          )}
        </div>
      </section>
    </>
  );
}
