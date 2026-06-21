'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Cpu, BarChart2, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CountUp from '@/components/ui/CountUp';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { company } from '@/data/company';
import { projects } from '@/data/projects';
import { teamMembers } from '@/data/team';
import { ProjectStatus } from '@/data/types';

type BadgeVariant = 'mvp' | 'concept' | 'research';

const STATUS_BADGE: Record<ProjectStatus, BadgeVariant> = {
  'MVP Development': 'mvp',
  'Conceptualization & Design': 'concept',
  'Research & Conceptualization': 'research',
};

const STATUS_LABEL: Record<ProjectStatus, string> = {
  'MVP Development': 'MVP Development',
  'Conceptualization & Design': 'Concept & Design',
  'Research & Conceptualization': 'Research Phase',
};

const SERVICE_PREVIEW = [
  {
    Icon: Briefcase,
    title: 'Project Development',
    desc: 'End-to-end consultancy, planning and lifecycle management from concept to delivery.',
  },
  {
    Icon: Building2,
    title: 'Business Development',
    desc: 'Market analysis, business model design, and investment-ready documentation.',
  },
  {
    Icon: Cpu,
    title: 'IT Services',
    desc: 'Technology strategy, full-stack software engineering and SDLC execution.',
  },
  {
    Icon: BarChart2,
    title: 'Data Analysis',
    desc: 'Statistical modelling, data visualisation, and evidence-based decision frameworks.',
  },
];

const STATS = [
  { isNumeric: true, target: 6, display: null, label: 'Active Projects' },
  { isNumeric: true, target: 4, display: null, label: 'Service Areas' },
  { isNumeric: false, target: 0, display: 'Est. 2024', label: '' },
  { isNumeric: false, target: 0, display: 'Abuja', label: 'Nigeria' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}


export default function HomeContent() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d3b37 0%, #1a6a64 45%, #2e9e98 100%)',
        }}
      >
        {/* Animated mesh blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #5EC9C3 0%, transparent 70%)',
              animation: 'meshFloat 8s ease-in-out infinite',
            }}
          />
          <div
            className="absolute -bottom-1/3 -right-1/4 w-2/3 h-2/3 rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, #3BA8A2 0%, transparent 70%)',
              animation: 'meshFloat2 11s ease-in-out infinite',
            }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-1/2 h-1/2 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, #A8E6E3 0%, transparent 70%)',
              animation: 'meshFloat 14s ease-in-out infinite 3s',
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <p className="text-primary-light text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              BAJs Project Management &amp; Consultancy
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] mb-6">
              Redefining Operational
              <br className="hidden sm:block" /> Efficiency Across Sectors
            </h1>
            <p className="text-lg sm:text-xl text-white/75 max-w-3xl mx-auto mb-10 leading-relaxed">
              {company.mission}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-[#0d3b37] font-bold px-8 py-3.5 text-base hover:bg-primary hover:text-white transition-all duration-200 shadow-lg"
              >
                View Our Projects
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/70 text-white font-semibold px-8 py-3.5 text-base hover:bg-white hover:text-[#0d3b37] transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2.5 rounded-full bg-white/50" />
          </div>
        </motion.div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <section className="bg-[#2F2F2F] py-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {STATS.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col gap-1.5">
                <span className="text-3xl md:text-4xl font-extrabold text-primary">
                  {stat.isNumeric ? <CountUp target={stat.target} /> : stat.display}
                </span>
                <span className="text-sm text-gray-400 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mb-12"
          >
            <SectionHeading
              title="What We Do"
              subtitle="Four integrated service areas that cover the full spectrum of organisational growth and execution."
              align="center"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SERVICE_PREVIEW.map(({ Icon, title, desc }) => (
              <motion.div key={title} variants={fadeInUp}>
                <Card headerColor="#5EC9C3" className="h-full">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-dark text-lg leading-tight">{title}</h3>
                    <p className="text-dark-muted text-sm leading-relaxed">{desc}</p>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all duration-200 mt-auto"
                    >
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS TEASER ──────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
          >
            <SectionHeading
              title="Our Projects"
              subtitle="Innovative platforms in active development across critical sectors."
              align="left"
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm whitespace-nowrap hover:gap-3 transition-all duration-200"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="flex flex-col gap-3 h-full">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <Badge variant={STATUS_BADGE[project.status]}>
                        {STATUS_LABEL[project.status]}
                      </Badge>
                      {project.status === 'MVP Development' && (
                        <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                          </span>
                          In Development
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-dark text-lg leading-snug">{project.name}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.domain.map((d) => (
                        <span
                          key={d}
                          className="text-xs bg-primary/10 text-primary font-medium rounded-full px-2.5 py-0.5"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                    <p className="text-dark-muted text-sm leading-relaxed flex-1">
                      {project.shortDescription}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM STRIP ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mb-12 text-center"
          >
            <SectionHeading
              title="Leadership Team"
              subtitle="The founders driving BAJs' vision forward."
              align="center"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={fadeInUp}>
                <Link href={`/team/${member.slug}`} className="block group">
                  <Card className="text-center h-full">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:shadow-primary/40 transition-shadow duration-300">
                        <span className="text-white font-bold text-xl">
                          {getInitials(member.name)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-dark text-base leading-tight">
                          {member.name}
                        </p>
                        <p className="text-dark-muted text-sm mt-0.5">{member.title}</p>
                      </div>
                      <span className="text-primary text-sm font-semibold group-hover:underline">
                        View Profile →
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className="bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
              Ready to Build the Future?
            </h2>
            <p className="text-dark/70 text-lg mb-8">
              Let&apos;s discuss your next project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-dark text-white font-bold px-8 py-4 text-base hover:bg-dark/90 transition-colors duration-200 shadow-lg"
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
