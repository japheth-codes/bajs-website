'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCardFull from '@/components/projects/ProjectCardFull';
import { projects } from '@/data/projects';
import { Project } from '@/data/types';

type Filter = 'all' | 'Deployed' | 'development' | 'research';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All projects' },
  { id: 'Deployed', label: 'Live' },
  { id: 'development', label: 'In development' },
  { id: 'research', label: 'Research and concept' },
];

function filterProjects(filter: Filter, list: Project[]): Project[] {
  if (filter === 'Deployed') return list.filter((project) => project.status === 'Deployed');
  if (filter === 'development')
    return list.filter((project) => project.status === 'MVP Development');
  if (filter === 'research')
    return list.filter(
      (project) =>
        project.status === 'Conceptualization & Design' ||
        project.status === 'Research & Conceptualization'
    );
  return list;
}

export default function ProjectsContent() {
  const [active, setActive] = useState<Filter>('all');
  const visible = filterProjects(active, projects);

  const stats = [
    { value: projects.length, label: 'Total projects' },
    {
      value: projects.filter((project) => project.status === 'MVP Development').length,
      label: 'In development',
    },
    {
      value: projects.filter(
        (project) =>
          project.status === 'Conceptualization & Design' ||
          project.status === 'Research & Conceptualization'
      ).length,
      label: 'In research or design',
    },
  ];

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <section className="border-b border-ink-deep bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-light">
              BAJs PM&amp;C · Portfolio
            </p>
            <h1 className="mt-5 max-w-2xl font-bold tracking-tight text-4xl leading-[1.1] sm:text-5xl">
              Project catalogue
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/60 sm:text-lg">
              Platforms in active development and research across fintech, healthtech, edtech and
              operational automation, built for African markets.
            </p>
          </motion.div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-paper/15 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-bold tracking-tight text-2xl text-paper sm:text-3xl">{stat.value}</dd>
                <dt className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-paper/50 sm:text-[11px]">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Filters and grid */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-b border-rule">
          {FILTERS.map((filter) => {
            const count = filterProjects(filter.id, projects).length;
            const isActive = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActive(filter.id)}
                className={[
                  'relative -mb-px flex items-center gap-2 pb-3 text-[11px] font-semibold uppercase tracking-wider transition-colors',
                  isActive
                    ? 'border-b-2 border-brand text-ink'
                    : 'border-b-2 border-transparent text-muted hover:text-ink',
                ].join(' ')}
                aria-pressed={isActive}
              >
                {filter.label}
                <span className="text-[10px] font-normal text-subtle">{count}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {visible.map((project, index) => (
              <ProjectCardFull key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {visible.length === 0 && (
          <p className="py-16 text-center text-sm text-muted">No projects match this filter.</p>
        )}
      </section>
    </div>
  );
}
