'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ExternalLink, Clock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { company } from '@/data/company';
import PageHero from '@/components/ui/PageHero';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const SUBJECTS = ['General Inquiry', 'Project Discussion', 'Partnership', 'Other'];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setStatus('loading');
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full border border-gray-200 rounded-lg px-4 py-3 text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white placeholder:text-gray-400';

  const labelClass = 'block text-sm font-semibold text-dark mb-1.5';

  return (
    <>
      {/* ── Page Header ────────────────────────────────────────────── */}
      <PageHero
        title="Contact Us"
        subtitle="Reach out to discuss a project, partnership, or enquiry. We typically respond within 24 hours."
        breadcrumb="BAJs PM & C"
        variant="aqua"
      />

      {/* ── Two-column layout ──────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ── LEFT: Contact Info ──────────────────────────────── */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold text-dark mb-1">{company.name}</h2>
                <p className="text-dark-muted text-sm">RC: 7377476</p>
              </motion.div>

              {/* Addresses */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-dark uppercase tracking-widest">
                  Our Offices
                </h3>
                {company.addresses.map((addr) => (
                  <div key={addr} className="flex items-start gap-3">
                    <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-dark-muted text-sm leading-relaxed">{addr}</span>
                  </div>
                ))}
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold text-dark uppercase tracking-widest">
                  Phone
                </h3>
                {company.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-dark-muted text-sm hover:text-primary transition-colors duration-200"
                  >
                    <Phone size={16} className="text-primary shrink-0" />
                    {phone}
                  </a>
                ))}
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold text-dark uppercase tracking-widest">
                  Email
                </h3>
                <a
                  href={`mailto:bajsprojmangandconsultancy@gmail.com`}
                  className="flex items-center gap-3 text-dark-muted text-sm hover:text-primary transition-colors duration-200 break-all"
                >
                  <Mail size={16} className="text-primary shrink-0" />
                  bajsprojmangandconsultancy@gmail.com
                </a>
              </motion.div>

              {/* LinkedIn */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold text-dark uppercase tracking-widest">
                  LinkedIn
                </h3>
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-dark-muted text-sm hover:text-primary transition-colors duration-200"
                >
                  <ExternalLink size={16} className="text-primary shrink-0" />
                  BAJs PM &amp; Consultancy on LinkedIn
                </a>
              </motion.div>

              {/* Working Hours */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold text-dark uppercase tracking-widest">
                  Working Hours
                </h3>
                <div className="flex items-center gap-3 text-dark-muted text-sm">
                  <Clock size={16} className="text-primary shrink-0" />
                  {company.workingHours}
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Contact Form ─────────────────────────────── */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelClass}>
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or enquiry…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Status messages */}
                  {status === 'success' && (
                    <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg px-4 py-3 text-sm">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                      <span>
                        Message sent! We&apos;ll get back to you within 24 hours.
                      </span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      <span>
                        Something went wrong. Please email us directly at{' '}
                        <a
                          href="mailto:bajsprojmangandconsultancy@gmail.com"
                          className="underline font-medium"
                        >
                          bajsprojmangandconsultancy@gmail.com
                        </a>
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-lg px-6 py-3.5 text-base hover:bg-primary-dark transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed mt-1"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
