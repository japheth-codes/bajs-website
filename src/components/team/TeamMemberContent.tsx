'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, ExternalLink } from 'lucide-react';
import { TeamMember } from '@/data/types';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

interface TeamMemberContentProps {
  member: TeamMember;
}

export default function TeamMemberContent({ member }: TeamMemberContentProps) {
  return (
    <>
      {/* ── Hero Banner ────────────────────────────────────────────── */}
      <section
        className="py-20 text-white"
        style={{ background: 'linear-gradient(135deg, #7A2E2E 0%, #2d0d0d 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center sm:items-end gap-8"
          >
            {/* Initials avatar */}
            <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center shadow-2xl shrink-0">
              <span className="text-white font-bold text-3xl">{getInitials(member.name)}</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-2">
                {member.name}
              </h1>
              <p className="text-white/70 text-xl font-medium">{member.title}</p>
              <p className="text-white/50 text-base mt-1">{member.role}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Back Nav ───────────────────────────────────────────────── */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-dark-muted hover:text-primary transition-colors duration-200 font-medium"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* ── Bio ────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="text-2xl font-bold text-dark mb-4">About</h2>
            <span className="block h-1 w-12 rounded-full bg-primary mb-6" />
            <p className="text-dark-muted leading-relaxed text-base max-w-3xl">{member.longBio}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Responsibilities ───────────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-dark mb-2">Responsibilities</h2>
            <span className="block h-1 w-12 rounded-full bg-primary" />
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-3"
          >
            {member.responsibilities.map((item) => (
              <motion.li
                key={item}
                variants={fadeInUp}
                className="flex items-start gap-3 text-dark-muted"
              >
                <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-base">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-dark mb-2">Skills</h2>
            <span className="block h-1 w-12 rounded-full bg-primary" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-wrap gap-3"
          >
            {member.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={fadeInUp}
                className="inline-block bg-primary/10 text-primary font-semibold text-sm rounded-full px-4 py-2 border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LinkedIn ───────────────────────────────────────────────── */}
      {member.linkedIn && (
        <section className="py-10 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#004182] transition-colors duration-200"
              >
                <ExternalLink size={18} />
                Connect on LinkedIn
              </a>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
