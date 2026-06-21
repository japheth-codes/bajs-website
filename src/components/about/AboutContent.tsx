'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, Eye } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { company } from '@/data/company';
import { services } from '@/data/services';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function AboutContent() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
              About <span className="text-maroon">BAJs</span>
            </h1>
            <span className="block h-1.5 w-20 rounded-full bg-primary mb-6" />
            <p className="text-dark-muted text-lg leading-relaxed max-w-3xl">
              BAJs Project Management &amp; Consultancy is a multidisciplinary firm delivering
              integrated project management, business development, technology, and data services
              across Nigeria and West Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ───────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-xl shadow-md p-8 h-full border-t-4 border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target size={20} className="text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-dark">Our Mission</h2>
                </div>
                <p className="text-dark-muted leading-relaxed">{company.mission}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-xl shadow-md p-8 h-full border-t-4 border-maroon">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-maroon/10 flex items-center justify-center">
                    <Eye size={20} className="text-maroon" />
                  </div>
                  <h2 className="text-xl font-bold text-dark">Our Vision</h2>
                </div>
                <p className="text-dark-muted leading-relaxed">{company.vision}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Services Accordion ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mb-10"
          >
            <SectionHeading
              title="Our Services"
              subtitle="Four integrated service areas that cover the full spectrum of organisational growth."
              align="left"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-3"
          >
            {services.map((category) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === category.id ? null : category.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div>
                    <h3 className="font-bold text-dark text-base">{category.title}</h3>
                    <p className="text-dark-muted text-sm mt-0.5 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={[
                      'text-primary shrink-0 transition-transform duration-300',
                      openAccordion === category.id ? 'rotate-180' : '',
                    ].join(' ')}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openAccordion === category.id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50/50">
                        <p className="text-dark-muted text-sm mb-4 leading-relaxed">
                          {category.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {category.services.map((group) => (
                            <div key={group.name}>
                              <h4 className="font-semibold text-dark text-sm mb-2">
                                {group.name}
                              </h4>
                              <ul className="flex flex-col gap-1.5">
                                {group.items.map((item) => (
                                  <li
                                    key={item}
                                    className="text-sm text-dark-muted flex items-start gap-2"
                                  >
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Removed Board, Partners, and registration note to simplify content */}
    </>
  );
}
