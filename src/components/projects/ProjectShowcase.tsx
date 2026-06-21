'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, FlaskConical, Lightbulb, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/projects';
import { Project, ProjectStatus } from '@/data/types';


const STATUS_CONFIG: Record<ProjectStatus, { label: string; color: string; bg: string; Icon: React.ElementType; dotColor: string }> = {
  'MVP Development': { label: 'MVP Dev', color: '#10b981', bg: 'rgba(16,185,129,0.12)', Icon: Zap, dotColor: '#10b981' },
  'Conceptualization & Design': { label: 'Concept & Design', color: '#5EC9C3', bg: 'rgba(94,201,195,0.12)', Icon: Lightbulb, dotColor: '#5EC9C3' },
  'Research & Conceptualization': { label: 'Research Phase', color: '#F2B94B', bg: 'rgba(242,185,75,0.12)', Icon: FlaskConical, dotColor: '#F2B94B' },
  'Deployed': { label: 'Live', color: '#10b981', bg: 'rgba(16,185,129,0.12)', Icon: CheckCircle2, dotColor: '#10b981' },
};

const DOMAIN_COLORS: Record<string, string> = {
  Fintech: '#5EC9C3',
  'E-Commerce': '#F2B94B',
  Healthcare: '#f87171',
  Operations: '#a78bfa',
  Automation: '#60a5fa',
  'Customer Experience': '#f472b6',
  FX: '#34d399',
  EdTech: '#fb923c',
  AI: '#c084fc',
  'Church Admin': '#fbbf24',
};

const CARD_GRADIENTS = [
  'linear-gradient(135deg, #0d3b37 0%, #1a5c56 100%)',
  'linear-gradient(135deg, #3b0d2f 0%, #5c1a4a 100%)',
  'linear-gradient(135deg, #0d1f3b 0%, #1a3a5c 100%)',
  'linear-gradient(135deg, #1f1b0d 0%, #3b3014 100%)',
  'linear-gradient(135deg, #1b0d3b 0%, #2e1a5c 100%)',
  'linear-gradient(135deg, #0d3b1a 0%, #1a5c35 100%)',
];

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  return (
    <div className="relative w-full">
      {/* Left: Project List */}
      <div className="flex flex-col lg:flex-row gap-0 min-h-[700px]">
        {/* Sidebar list */}
        <div className="lg:w-[360px] shrink-0 bg-[#111111] border-r border-white/5 flex flex-col">
          {projects.map((project, i) => {
            const cfg = STATUS_CONFIG[project.status];
            const isActive = activeProject.id === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={[
                  'relative text-left px-6 py-5 border-b border-white/5 transition-all duration-300 group',
                  isActive
                    ? 'bg-white/[0.06]'
                    : 'hover:bg-white/[0.03]',
                ].join(' ')}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 top-0 h-full w-[3px] rounded-r-full"
                    style={{ background: cfg.color }}
                  />
                )}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p
                      className={[
                        'text-sm font-semibold leading-snug transition-colors duration-200',
                        isActive ? 'text-white' : 'text-white/60 group-hover:text-white/90',
                      ].join(' ')}
                    >
                      {project.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: cfg.dotColor }}
                      />
                      <span className="text-xs" style={{ color: cfg.color }}>
                        {cfg.label}
                      </span>
                    </div>
                  </div>
                  <span
                    className={[
                      'text-xs font-mono mt-0.5 shrink-0',
                      isActive ? 'text-white/40' : 'text-white/20',
                    ].join(' ')}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.domain.map((d) => (
                    <span
                      key={d}
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{
                        color: DOMAIN_COLORS[d] ?? '#5EC9C3',
                        background: `${DOMAIN_COLORS[d] ?? '#5EC9C3'}18`,
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main detail panel */}
        <div className="flex-1 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="h-full flex flex-col"
            >
              {/* Project header */}
              <div
                className="relative px-8 py-10 overflow-hidden"
                style={{ background: CARD_GRADIENTS[activeProject.id - 1] ?? CARD_GRADIENTS[0] }}
              >
                {/* Background decoration */}
                <div
                  className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-10"
                  style={{
                    background: `radial-gradient(circle, ${STATUS_CONFIG[activeProject.status].color} 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full opacity-5"
                  style={{
                    background: `radial-gradient(circle, white 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Index + Status */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-white/30 text-xs font-mono">
                      Project 0{activeProject.id}
                    </span>
                    <span className="w-px h-3 bg-white/20" />
                    {(() => {
                      const cfg = STATUS_CONFIG[activeProject.status];
                      const Icon = cfg.Icon;
                      return (
                        <span
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ color: cfg.color, background: cfg.bg }}
                        >
                          <Icon size={11} />
                          {cfg.label}
                        </span>
                      );
                    })()}
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
                    {activeProject.name}
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {activeProject.domain.map((d) => (
                      <span
                        key={d}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          color: DOMAIN_COLORS[d] ?? '#5EC9C3',
                          background: `${DOMAIN_COLORS[d] ?? '#5EC9C3'}18`,
                          border: `1px solid ${DOMAIN_COLORS[d] ?? '#5EC9C3'}30`,
                        }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/70 text-base leading-relaxed max-w-2xl">
                    {activeProject.shortDescription}
                  </p>
                </div>
              </div>

              {/* Project body */}
              <div className="flex-1 px-8 py-8 overflow-y-auto">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">
                  Key Highlights
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeProject.highlights.map((h, i) => {
                    const cfg = STATUS_CONFIG[activeProject.status];
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.3 }}
                        className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.03]"
                      >
                        <span
                          className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: cfg.color }}
                        />
                        <p className="text-white/65 text-sm leading-relaxed">{h}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Footer action */}
              <div className="px-8 py-5 border-t border-white/5 flex items-center justify-between">
                <p className="text-white/30 text-xs">
                  {projects.indexOf(activeProject) + 1} of {projects.length} projects
                </p>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors duration-200 group"
                >
                  View all projects
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
