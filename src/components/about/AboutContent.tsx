'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { company } from '@/data/company';
import { services } from '@/data/services';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutContent() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(services[0].id);

  return (
    <>
      {/* Introduction */}
      <section className="border-b border-rule bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <p className="eyebrow">About the firm</p>
              <h1 className="mt-5 font-bold tracking-tight text-4xl leading-[1.1] text-ink sm:text-5xl">
                About BAJs
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                BAJs Project Management &amp; Consultancy is a multidisciplinary firm delivering
                in-depth project management, business development, technology and data services
                across Nigeria, West Africa and globally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t-2 border-brand pt-6 lg:col-span-4 lg:col-start-9"
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
                At a glance
              </p>
              <dl className="mt-4 divide-y divide-rule/70">
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[11px] uppercase tracking-wider text-subtle">Established</dt>
                  <dd className="text-sm font-medium text-ink">{company.founded}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[11px] uppercase tracking-wider text-subtle">Registration</dt>
                  <dd className="text-sm font-medium text-ink">RC {company.rc}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[11px] uppercase tracking-wider text-subtle">Head office</dt>
                  <dd className="text-right text-sm font-medium text-ink">Abuja, Nigeria</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-[11px] uppercase tracking-wider text-subtle">Service areas</dt>
                  <dd className="text-sm font-medium text-ink">{services.length}</dd>
                </div>
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="border-b border-rule bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16"
          >
            <div className="border-t-2 border-brand pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-brand">
                Our mission
              </p>
              <h2 className="mt-3 font-bold tracking-tight text-2xl leading-snug text-ink">
                Integrated services for sustainable ventures.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{company.mission}</p>
            </div>

            <div className="border-t-2 border-brand pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-brand">
                Our vision
              </p>
              <h2 className="mt-3 font-bold tracking-tight text-2xl leading-snug text-ink">
                A leading multidisciplinary consultancy.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{company.vision}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end"
          >
            <div className="md:col-span-7">
              <p className="eyebrow">Our services</p>
              <h2 className="mt-4 font-bold tracking-tight text-3xl leading-[1.15] text-ink sm:text-4xl">
                Service areas
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted md:col-span-5">
              Five integrated service areas that cover the full spectrum of organisational growth.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-10 border-t border-rule"
          >
            {services.map((category, index) => {
              const isOpen = openAccordion === category.id;

              return (
                <div key={category.id} className="border-b border-rule">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? null : category.id)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:bg-white/60"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-5">
                      <span className="mt-1 font-bold tracking-tight text-sm text-subtle">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-bold tracking-tight text-xl leading-snug text-ink">
                          {category.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {category.summary}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className={[
                        'mt-1 shrink-0 text-brand transition-transform duration-200',
                        isOpen ? 'rotate-180' : '',
                      ].join(' ')}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-0 sm:pl-10">
                          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted">
                            {category.description}
                          </p>
                          <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
                            {category.services.map((group) => (
                              <div key={group.name} className="border-t border-rule/80 pt-4">
                                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-ink">
                                  {group.name}
                                </h4>
                                <ul className="mt-3 flex flex-col gap-2">
                                  {group.items.map((item) => (
                                    <li
                                      key={item}
                                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                                    >
                                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
