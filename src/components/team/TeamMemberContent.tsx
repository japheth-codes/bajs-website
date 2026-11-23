'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { TeamMember } from '@/data/types';
import { Wordmark } from '@/components/layout/Wordmark';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
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
      {/* Profile header */}
      <section className="bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-7 sm:flex-row sm:items-end"
          >
            <div className="flex h-24 w-24 shrink-0 items-center justify-center border border-brand bg-brand">
              <span className="font-bold text-3xl text-white">{initials(member.name)}</span>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-light">
                Leadership
              </p>
              <h1 className="mt-3 font-bold tracking-tight text-3xl leading-tight sm:text-4xl">{member.name}</h1>
              <p className="mt-3 text-base text-paper/70">{member.title}</p>
              {member.actingTitle && (
                <span className="mt-3 inline-block border border-brand-light/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-light">
                  {member.actingTitle}
                </span>
              )}
              <p className="mt-2 text-sm font-semibold text-paper/40">
                {member.role}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back */}
      <div className="border-b border-rule bg-paper-alt">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <Link
            href="/#leadership"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-brand"
          >
            <ArrowLeft size={14} />
            Back to leadership
          </Link>
          <span className="hidden sm:block">
            <Wordmark size={22} />
          </span>
        </div>
      </div>

      {/* About */}
      <section className="border-b border-rule bg-paper py-14">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand">
              Profile
            </p>
            <h2 className="mt-3 font-bold tracking-tight text-2xl text-ink">About</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">{member.longBio}</p>
          </motion.div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="border-b border-rule bg-white py-14">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="font-bold tracking-tight text-2xl text-ink">Responsibilities</h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-10 border-t border-rule sm:grid-cols-2">
              {member.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-rule/70 py-3.5 text-sm leading-relaxed text-muted"
                >
                  <Check size={14} className="mt-0.5 shrink-0 text-brand" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b border-rule bg-paper py-14">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2 className="font-bold tracking-tight text-2xl text-ink">Skills</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-rule bg-white px-3 py-1.5 text-sm font-semibold text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LinkedIn */}
      {member.linkedIn && (
        <section className="bg-paper py-10">
          <div className="mx-auto max-w-5xl px-6">
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-ink px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Connect on LinkedIn
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </section>
      )}
    </>
  );
}
