'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Project, ProjectStatus } from '@/data/types';

const STATUS_CONFIG: Record<ProjectStatus, { label: string; dot: string }> = {
  'MVP Development': { label: 'MVP development', dot: 'bg-burgundy' },
  'Conceptualization & Design': { label: 'Concept and design', dot: 'bg-gold' },
  'Research & Conceptualization': { label: 'Research phase', dot: 'bg-subtle' },
  Deployed: { label: 'Live', dot: 'bg-ink' },
};

interface ProjectCardFullProps {
  project: Project;
  index: number;
}

export default function ProjectCardFull({ project, index }: ProjectCardFullProps) {
  const [expanded, setExpanded] = useState(false);
  const status = STATUS_CONFIG[project.status];

  return (
    <motion.article layout className="flex h-full flex-col border border-rule bg-white">
      <div className="flex items-start justify-between gap-4 border-b border-rule px-6 py-5">
        <span className="font-serif text-sm text-subtle">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl leading-snug text-ink">{project.name}</h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.domain.map((domain) => (
            <span
              key={domain}
              className="border border-rule px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted"
            >
              {domain}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">{project.shortDescription}</p>
      </div>

      <div className="mt-auto border-t border-rule/60 px-6 py-4">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-burgundy transition-colors hover:text-burgundy-dark"
          aria-expanded={expanded}
        >
          {expanded ? 'Hide details' : 'See highlights'}
          <ChevronDown
            size={13}
            className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="highlights"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ul className="flex flex-col gap-2.5 border-t border-rule px-6 py-5">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
