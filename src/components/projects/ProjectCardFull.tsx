'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, FlaskConical, Lightbulb, CheckCircle2, ChevronDown } from 'lucide-react';
import { Project, ProjectStatus } from '@/data/types';

const STATUS_CONFIG: Record<ProjectStatus, { label: string; color: string; bg: string; Icon: React.ElementType }> = {
  'MVP Development': { label: 'MVP Development', color: '#10b981', bg: 'rgba(16,185,129,0.10)', Icon: Zap },
  'Conceptualization & Design': { label: 'Concept & Design', color: '#5EC9C3', bg: 'rgba(94,201,195,0.10)', Icon: Lightbulb },
  'Research & Conceptualization': { label: 'Research Phase', color: '#F2B94B', bg: 'rgba(242,185,75,0.10)', Icon: FlaskConical },
  'Deployed': { label: 'Live', color: '#10b981', bg: 'rgba(16,185,129,0.10)', Icon: CheckCircle2 },
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

const CARD_ACCENT_COLORS = [
  '#5EC9C3',
  '#a78bfa',
  '#60a5fa',
  '#F2B94B',
  '#c084fc',
  '#34d399',
];

interface ProjectCardFullProps {
  project: Project;
  index: number;
}

export default function ProjectCardFull({ project, index }: ProjectCardFullProps) {
  const [expanded, setExpanded] = useState(false);
  const cfg = STATUS_CONFIG[project.status];
  const Icon = cfg.Icon;
  const accentColor = CARD_ACCENT_COLORS[index % CARD_ACCENT_COLORS.length];

  return (
    <motion.div
      layout
      className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0f0f0f] transition-all duration-300"
      style={{
        boxShadow: expanded ? `0 0 0 1px ${accentColor}30, 0 20px 60px rgba(0,0,0,0.4)` : '0 2px 20px rgba(0,0,0,0.3)',
      }}
    >
      {/* Accent top bar */}
      <div
        className="h-[3px] w-full"
        style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
      />

      {/* Card header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          {/* Index circle */}
          <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
            style={{ background: `${accentColor}18`, color: accentColor }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Status badge */}
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
            style={{ color: cfg.color, background: cfg.bg }}
          >
            {project.status === 'MVP Development' && (
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: cfg.color }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: cfg.color }} />
              </span>
            )}
            <Icon size={11} />
            {cfg.label}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-white leading-snug group-hover:text-white transition-colors">
          {project.name}
        </h3>

        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {project.domain.map((d) => (
            <span
              key={d}
              className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
              style={{
                color: DOMAIN_COLORS[d] ?? accentColor,
                background: `${DOMAIN_COLORS[d] ?? accentColor}15`,
              }}
            >
              {d}
            </span>
          ))}
        </div>

        <p className="mt-4 text-white/55 text-sm leading-relaxed">
          {project.shortDescription}
        </p>
      </div>

      {/* Expand button */}
      <div className="px-6 pb-4">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-2 text-xs font-semibold transition-all duration-200 hover:gap-3"
          style={{ color: accentColor }}
        >
          {expanded ? 'Hide details' : 'See highlights'}
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Expandable highlights */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="highlights"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-white/5 pt-5">
              <p className="text-white/30 text-[10px] font-semibold uppercase tracking-widest mb-3">
                Key Highlights
              </p>
              <ul className="flex flex-col gap-2.5">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: accentColor }}
                    />
                    <span className="text-white/55 text-sm leading-relaxed">{h}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom hover glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)` }}
      />
    </motion.div>
  );
}
