'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { Project, ProjectStatus } from '@/data/types';

const STATUS_CONFIG: Record<ProjectStatus, { label: string; dot: string }> = {
  'MVP Development': { label: 'MVP development', dot: 'bg-burgundy' },
  'Conceptualization & Design': { label: 'Concept and design', dot: 'bg-gold' },
  'Research & Conceptualization': { label: 'Research phase', dot: 'bg-subtle' },
  Deployed: { label: 'Live', dot: 'bg-ink' },
};

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const activeStatus = STATUS_CONFIG[activeProject.status];

  return (
    <div className="flex min-h-[620px] flex-col lg:flex-row">
      {/* Project list */}
      <div className="shrink-0 border-b border-rule bg-paper-alt lg:w-[340px] lg:border-b-0 lg:border-r">
        {projects.map((project, index) => {
          const status = STATUS_CONFIG[project.status];
          const isActive = activeProject.id === project.id;

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveProject(project)}
              className={[
                'block w-full border-b border-rule/70 px-6 py-5 text-left transition-colors last:border-b-0',
                isActive
                  ? 'border-l-2 border-l-burgundy bg-white'
                  : 'border-l-2 border-l-transparent hover:bg-white/60',
              ].join(' ')}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p
                    className={[
                      'truncate text-sm font-semibold',
                      isActive ? 'text-ink' : 'text-ink/70',
                    ].join(' ')}
                  >
                    {project.name}
                  </p>
                  <span className="mt-2 flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted">
                    <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                    {status.label}
                  </span>
                </div>
                <span className="font-serif text-xs text-subtle">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="flex-1 bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-full flex-col"
          >
            <div className="border-b border-rule px-7 py-8 sm:px-9">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-subtle">
                  Project {String(activeProject.id).padStart(2, '0')}
                </span>
                <span className="h-3 w-px bg-rule" />
                <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted">
                  <span className={`h-1.5 w-1.5 rounded-full ${activeStatus.dot}`} />
                  {activeStatus.label}
                </span>
              </div>

              <h2 className="mt-5 font-serif text-2xl leading-tight text-ink sm:text-3xl">
                {activeProject.name}
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {activeProject.domain.map((domain) => (
                  <span
                    key={domain}
                    className="border border-rule px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted"
                  >
                    {domain}
                  </span>
                ))}
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
                {activeProject.shortDescription}
              </p>
            </div>

            <div className="flex-1 px-7 py-7 sm:px-9">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-subtle">
                Key highlights
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {activeProject.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 border-t border-rule/60 pt-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-burgundy" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between border-t border-rule px-7 py-4 sm:px-9">
              <p className="text-[11px] uppercase tracking-wider text-subtle">
                {projects.indexOf(activeProject) + 1} of {projects.length} projects
              </p>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-ink transition-colors hover:text-burgundy"
              >
                View all projects
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
