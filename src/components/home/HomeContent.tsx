'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  FolderKanban,
  Landmark,
  Monitor,
  TrendingUp,
} from 'lucide-react';
import CountUp from '@/components/ui/CountUp';
import ProjectShowcase from '@/components/projects/ProjectShowcase';
import { company } from '@/data/company';
import { teamMembers } from '@/data/team';
import { projects } from '@/data/projects';
import { services } from '@/data/services';

const ICONS: Record<string, React.ElementType> = {
  FolderKanban,
  TrendingUp,
  Monitor,
  BarChart3,
  Landmark,
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function HomeContent() {
  const facts = [
    { label: 'Established', value: company.founded },
    { label: 'Registration', value: `RC ${company.rc}` },
    { label: 'Head office', value: 'Abuja, Nigeria' },
    { label: 'Service areas', value: String(services.length) },
  ];

  const stats = [
    { value: projects.length, label: 'Projects in portfolio' },
    { value: services.length, label: 'Current service areas' },
    { value: company.founded, label: 'Year established' },
    { value: 'Abuja', label: 'Head office' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <p className="eyebrow">BAJs Project Management &amp; Consultancy</p>

              <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.08] tracking-tight text-ink sm:text-6xl">
                Practical counsel.
                <br />
                Disciplined delivery.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                {company.tagline}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-burgundy px-7 py-4 text-[12px] font-semibold uppercase tracking-wider text-paper transition-colors hover:bg-burgundy-dark"
                >
                  Discuss a project
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 border border-ink/25 px-7 py-4 text-[12px] font-semibold uppercase tracking-wider text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  View our work
                </Link>
              </div>

              <p className="mt-10 max-w-md border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted">
                We help organisations plan, structure and deliver projects across technology,
                business operations and strategy, in Nigeria, across Africa and globally.
              </p>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="border border-rule bg-white lg:col-span-5"
            >
              <div className="h-[3px] w-full bg-burgundy" />
              <div className="p-7">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                  Firm profile
                </p>
                <dl className="mt-5 divide-y divide-rule/70 border-t border-rule/70">
                  {facts.map((fact) => (
                    <div key={fact.label} className="flex items-baseline justify-between gap-4 py-3.5">
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-subtle">
                        {fact.label}
                      </dt>
                      <dd className="text-right text-sm font-medium text-ink">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-[13px] leading-relaxed text-muted">
                  A multidisciplinary firm working alongside public, private and development-sector
                  organisations.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-rule bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <dl className="grid grid-cols-2 divide-x divide-rule lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={[
                  'px-2 py-7 sm:px-6',
                  index > 1 ? 'border-t border-rule lg:border-t-0' : '',
                  index % 2 === 1 ? 'border-l border-rule lg:border-l-0' : '',
                ].join(' ')}
              >
                <dd className="font-serif text-3xl text-ink sm:text-4xl">
                  {typeof stat.value === 'number' ? <CountUp target={stat.value} /> : stat.value}
                </dd>
                <dt className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-muted">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-rule bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end"
          >
            <div className="md:col-span-7">
              <p className="eyebrow">What we do</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-ink sm:text-4xl">
                Five pillars of excellence
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted md:col-span-5">
              Five integrated service areas that cover the full spectrum of organisational growth
              and execution.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-10 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-6"
          >
            {services.map((service, index) => {
              const Icon = ICONS[service.icon] ?? FolderKanban;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  className={[
                    'group bg-white p-6',
                    index >= 3 ? 'lg:col-span-3' : 'lg:col-span-2',
                  ].join(' ')}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-sm text-subtle">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Icon size={18} strokeWidth={1.5} className="text-burgundy" />
                  </div>
                  <h3 className="mt-6 font-serif text-lg leading-snug text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
                  <Link
                    href="/about#services"
                    className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-burgundy transition-colors hover:text-burgundy-dark"
                  >
                    Learn more
                    <ArrowRight size={12} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Selected work */}
      <section className="border-b border-rule bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="eyebrow">Our portfolio</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-ink sm:text-4xl">
                Selected work
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-ink transition-colors hover:text-burgundy"
            >
              Explore the full catalogue
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="border border-rule"
          >
            <ProjectShowcase />
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="border-b border-rule bg-paper-alt py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-9"
          >
            <p className="eyebrow">The team</p>
            <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-ink sm:text-4xl">
              Leadership
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              The founders responsible for the firm&apos;s delivery, operations and financial
              discipline.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={fadeUp}>
                <Link
                  href={`/team/${member.slug}`}
                  className="group flex h-full flex-col border border-rule bg-paper p-6 transition-colors hover:border-ink/30"
                >
                  <div className="flex h-14 w-14 items-center justify-center border border-rule bg-white font-serif text-lg text-burgundy">
                    {initials(member.name)}
                  </div>
                  <h3 className="mt-5 font-serif text-xl leading-snug text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-burgundy">
                    {member.homeTitle ?? member.title}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {member.shortBio}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink transition-colors group-hover:text-burgundy">
                    View profile
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact band */}
      <section className="bg-ink py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-8">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-light">
                Work with us
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-[1.15] sm:text-4xl">
                Let&apos;s discuss your next project.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/60">
                We&apos;re based in Abuja and work across West Africa, the wider African continent
                and globally.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border border-paper/30 px-7 py-4 text-[12px] font-semibold uppercase tracking-wider text-paper transition-colors hover:border-gold hover:text-gold-light"
              >
                Get in touch
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
