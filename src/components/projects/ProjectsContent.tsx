'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCardFull from '@/components/projects/ProjectCardFull';
import { projects } from '@/data/projects';
import { Project } from '@/data/types';

type Filter = 'all' | 'Deployed' | 'development' | 'research';

const FILTERS: { id: Filter; label: string; count?: number }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'development', label: 'In Development' },
  { id: 'research', label: 'Research & Concept' },
  { id: 'Deployed', label: 'Live' },
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

export default function ProjectsContent() {
  const [active, setActive] = useState<Filter>('all');
  const visible = filterProjects(active, projects);

  return (
    <div style={{ background: '#080808' }} className="min-h-screen text-white">
      {/* ── Page Hero ──────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ background: '#080808' }}>
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(94,201,195,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(94,201,195,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glowing orbs */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #5EC9C3 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7A2E2E 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#5EC9C3] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              BAJs PM &amp; C — Portfolio
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-white mb-6">
              Project
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #5EC9C3 0%, #a78bfa 100%)' }}
              >
                Catalogue
              </span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">
              Innovative platforms in active development across fintech, healthtech, edtech, and operational automation — built for Africa&apos;s emerging markets.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-8 mt-10"
          >
            {[
              { value: projects.length, label: 'Total Projects' },
              { value: projects.filter((p) => p.status === 'MVP Development').length, label: 'In Development' },
              { value: projects.filter((p) => p.status.includes('Conceptualization') || p.status.includes('Research')).length, label: 'In Research' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span
                  className="text-4xl font-black text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #5EC9C3 0%, #a78bfa 100%)' }}
                >
                  {value}
                </span>
                <span className="text-white/35 text-xs font-medium mt-1">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Filter + Grid ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-2 mb-12 flex-wrap"
        >
          {FILTERS.map((f) => {
            const count = filterProjects(f.id, projects).length;
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={[
                  'relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
                  isActive
                    ? 'text-[#080808]'
                    : 'text-white/50 hover:text-white/80 border border-white/10 hover:border-white/20',
                ].join(' ')}
                style={isActive ? { background: 'linear-gradient(135deg, #5EC9C3 0%, #a78bfa 100%)' } : {}}
              >
                {f.label}
                <span
                  className={[
                    'ml-2 text-xs rounded-full px-1.5 py-0.5 font-medium',
                    isActive ? 'bg-black/15' : 'bg-white/8',
                  ].join(' ')}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <ProjectCardFull project={project} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {visible.length === 0 && (
          <p className="text-center text-white/30 py-20">No projects match this filter.</p>
        )}
      </section>
    </div>
  );
}
