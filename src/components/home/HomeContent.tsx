'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Cpu, BarChart2, ArrowRight, MapPin, Calendar } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';
import ProjectShowcase from '@/components/projects/ProjectShowcase';
import { company } from '@/data/company';
import { teamMembers } from '@/data/team';

const SERVICE_PREVIEW = [
  {
    Icon: Briefcase,
    title: 'Project Development',
    desc: 'End-to-end consultancy, planning and lifecycle management from concept to delivery.',
    color: '#5EC9C3',
  },
  {
    Icon: Building2,
    title: 'Business Development',
    desc: 'Market analysis, business model design, and investment-ready documentation.',
    color: '#F2B94B',
  },
  {
    Icon: Cpu,
    title: 'IT Services',
    desc: 'Technology strategy, full-stack software engineering and SDLC execution.',
    color: '#a78bfa',
  },
  {
    Icon: BarChart2,
    title: 'Data Analysis',
    desc: 'Statistical modelling, data visualisation, and evidence-based decision frameworks.',
    color: '#60a5fa',
  },
];

const STATS = [
  { isNumeric: true, target: 6, display: null, label: 'Active Projects' },
  { isNumeric: true, target: 4, display: null, label: 'Service Areas' },
  { isNumeric: false, target: 0, display: '2024', label: 'Year Founded' },
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

const TEAM_COLORS = ['#5EC9C3', '#F2B94B', '#a78bfa'];

export default function HomeContent() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: '#06100f' }}
      >
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(94,201,195,1) 1px, transparent 1px), linear-gradient(90deg, rgba(94,201,195,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Animated blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #5EC9C3 0%, transparent 60%)',
              animation: 'meshFloat 10s ease-in-out infinite',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute -bottom-1/3 right-0 w-2/3 h-2/3 rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, #7A2E2E 0%, transparent 60%)',
              animation: 'meshFloat2 13s ease-in-out infinite',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute top-1/3 left-1/2 w-1/2 h-1/2 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, #a78bfa 0%, transparent 60%)',
              animation: 'meshFloat 18s ease-in-out infinite 2s',
              filter: 'blur(100px)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <p className="text-white/70 text-xs font-semibold tracking-[0.15em] uppercase">
                BAJs Project Management &amp; Consultancy
              </p>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.92] tracking-tight mb-6">
              Redefining
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #5EC9C3 0%, #a78bfa 60%, #F2B94B 100%)',
                }}
              >
                Operational
              </span>
              <br />
              Efficiency
            </h1>

            <p className="text-lg sm:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
              {company.mission}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full font-bold px-8 py-4 text-base text-[#06100f] transition-all duration-300 shadow-xl hover:shadow-[#5EC9C3]/30 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #5EC9C3 0%, #a78bfa 100%)' }}
              >
                View Our Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white font-semibold px-8 py-4 text-base hover:bg-white/5 hover:border-white/40 transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>

          {/* Floating info chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mt-16 flex-wrap"
          >
            <div className="inline-flex items-center gap-2 text-white/40 text-sm">
              <MapPin size={14} className="text-[#5EC9C3]" />
              Abuja, Nigeria
            </div>
            <span className="w-px h-4 bg-white/15" />
            <div className="inline-flex items-center gap-2 text-white/40 text-sm">
              <Calendar size={14} className="text-[#5EC9C3]" />
              Est. 2024
            </div>
            <span className="w-px h-4 bg-white/15" />
            <div className="inline-flex items-center gap-2 text-white/40 text-sm">
              <span className="text-[#F2B94B] text-xs font-bold">RC</span>
              {company.rc}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <div className="w-0.5 h-2 rounded-full bg-white/40" />
          </div>
        </motion.div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <section style={{ background: '#0d0d0d' }} className="py-12 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {STATS.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col gap-1">
                <span
                  className="text-4xl md:text-5xl font-black text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #5EC9C3 0%, #a78bfa 100%)' }}
                >
                  {stat.isNumeric ? <CountUp target={stat.target} /> : stat.display}
                </span>
                <span className="text-sm text-white/35 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS SHOWCASE ─────────────────────────────────────────── */}
      <section style={{ background: '#080808' }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <p className="text-[#5EC9C3] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Our Portfolio
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Projects We&apos;re
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, #5EC9C3 0%, #a78bfa 100%)' }}
                >
                  Building
                </span>
              </h2>
              <p className="text-white/40 text-base mt-3 max-w-md">
                Innovative platforms in active development across critical sectors of the Nigerian economy.
              </p>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-[#5EC9C3] font-semibold text-sm whitespace-nowrap hover:text-white transition-colors duration-200"
            >
              Explore full catalogue
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Full-width interactive showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden border border-white/5"
          >
            <ProjectShowcase />
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#0d0d0d' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mb-14"
          >
            <p className="text-[#5EC9C3] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Four Pillars of
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #F2B94B 0%, #f87171 100%)' }}
              >
                Excellence
              </span>
            </h2>
            <p className="text-white/40 text-base mt-3 max-w-lg">
              Four integrated service areas that cover the full spectrum of organisational growth and execution.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {SERVICE_PREVIEW.map(({ Icon, title, desc, color }) => (
              <motion.div key={title} variants={fadeInUp}>
                <div className="group relative rounded-2xl border border-white/5 bg-[#111111] p-6 h-full hover:border-white/10 transition-all duration-300 overflow-hidden">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${color}80, transparent)` }}
                  />

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3 className="font-bold text-white text-base leading-tight mb-2">{title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-sm font-semibold mt-4 transition-all duration-200 group/link"
                    style={{ color }}
                  >
                    Learn more
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM STRIP ───────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#080808' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mb-14 text-center"
          >
            <p className="text-[#5EC9C3] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              The Team
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Leadership
            </h2>
            <p className="text-white/40 text-base mt-3">
              The founders driving BAJs&apos; vision forward.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {teamMembers.map((member, i) => {
              const color = TEAM_COLORS[i % TEAM_COLORS.length];
              return (
                <motion.div key={member.id} variants={fadeInUp}>
                  <Link href={`/team/${member.slug}`} className="block group">
                    <div className="relative rounded-2xl border border-white/5 bg-[#111111] p-8 text-center h-full hover:border-white/10 transition-all duration-300 overflow-hidden">
                      {/* Top glow on hover */}
                      <div
                        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(90deg, transparent, ${color}80, transparent)` }}
                      />

                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl font-black transition-transform duration-300 group-hover:scale-105"
                        style={{ background: `${color}18`, color }}
                      >
                        {getInitials(member.name)}
                      </div>
                      <p className="font-bold text-white text-lg leading-tight">{member.name}</p>
                      <p className="text-white/40 text-sm mt-1.5">{member.title}</p>
                      <span
                        className="inline-flex items-center gap-1 text-sm font-semibold mt-5 transition-all duration-200 group-hover:gap-2"
                        style={{ color }}
                      >
                        View Profile <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden" style={{ background: '#080808' }}>
        {/* Background decoration */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(94,201,195,1) 1px, transparent 1px), linear-gradient(90deg, rgba(94,201,195,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #5EC9C3 0%, #a78bfa 50%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-[#5EC9C3] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Work With Us
            </p>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-5 leading-tight">
              Ready to Build
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #5EC9C3 0%, #a78bfa 50%, #F2B94B 100%)' }}
              >
                Something Great?
              </span>
            </h2>
            <p className="text-white/45 text-lg mb-10 max-w-lg mx-auto">
              Let&apos;s discuss your next project. We&apos;re based in Abuja and work across West Africa.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full font-bold px-10 py-5 text-base text-[#06100f] transition-all duration-300 shadow-xl hover:shadow-[#5EC9C3]/30 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #5EC9C3 0%, #a78bfa 100%)' }}
            >
              Get In Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
