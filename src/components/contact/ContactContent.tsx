'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { company, telHref } from '@/data/company';
import PageHero from '@/components/ui/PageHero';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const SUBJECTS = ['General Inquiry', 'Project Discussion', 'Partnership', 'Other'];

const emptyForm = {
  name: '',
  email: '',
  subject: 'General Inquiry',
  message: '',
};

export default function ContactContent() {
  const [formData, setFormData] = useState(emptyForm);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, company: honeypot }),
      });

      if (!response.ok) throw new Error('Send failed');

      setStatus('success');
      setFormData(emptyForm);
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full rounded-sm border border-rule bg-white px-4 py-3 text-sm text-ink placeholder:text-subtle focus:border-brand focus:outline-none focus:ring-0 transition-colors';
  const labelClass = 'mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted';

  return (
    <>
      <PageHero
        title="Contact us"
        subtitle="Reach out to discuss a project, partnership or enquiry. We typically respond within 24 hours."
        breadcrumb="BAJs PM&C"
        variant="ink"
      />

      <section className="border-b border-rule bg-paper py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Contact details */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-5"
            >
              <div className="border-t-2 border-brand pt-6">
                <h2 className="font-bold tracking-tight text-2xl text-ink">{company.name}</h2>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-muted">
                  RC {company.rc}
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-[11px] font-semibold uppercase tracking-widest text-subtle">
                  Our offices
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {company.addresses.map((address) => (
                    <div key={address} className="flex items-start gap-3">
                      <MapPin size={15} className="mt-1 shrink-0 text-brand" strokeWidth={1.5} />
                      <span className="text-sm leading-relaxed text-muted">{address}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 border-l border-rule pl-3 text-[13px] italic leading-relaxed text-muted">
                  BAJs operates on a remote-first model, a deliberate choice that reflects the
                  digital, technology-led nature of the projects in our pipeline.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-[11px] font-semibold uppercase tracking-widest text-subtle">
                  Phone
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {company.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${telHref(phone)}`}
                      className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-brand"
                    >
                      <Phone size={15} className="shrink-0 text-brand" strokeWidth={1.5} />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-[11px] font-semibold uppercase tracking-widest text-subtle">
                  Email
                </h3>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-4 flex items-center gap-3 break-all text-sm text-muted transition-colors hover:text-brand"
                >
                  <Mail size={15} className="shrink-0 text-brand" strokeWidth={1.5} />
                  {company.email}
                </a>
              </div>

              <div className="mt-8">
                <h3 className="text-[11px] font-semibold uppercase tracking-widest text-subtle">
                  LinkedIn
                </h3>
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-3 text-sm text-muted transition-colors hover:text-brand"
                >
                  <ExternalLink size={15} className="shrink-0 text-brand" strokeWidth={1.5} />
                  BAJs PM &amp; Consultancy on LinkedIn
                </a>
              </div>

              <div className="mt-8">
                <h3 className="text-[11px] font-semibold uppercase tracking-widest text-subtle">
                  Working hours
                </h3>
                <div className="mt-4 flex items-center gap-3 text-sm text-muted">
                  <Clock size={15} className="shrink-0 text-brand" strokeWidth={1.5} />
                  {company.workingHours}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:col-span-7"
            >
              <div className="border border-rule border-t-2 border-t-brand bg-white">
                <div className="border-b border-rule px-7 py-6">
                  <h2 className="font-bold tracking-tight text-2xl text-ink">Send us a message</h2>
                  <p className="mt-2 text-sm text-muted">
                    Fields marked with an asterisk are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-7">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full name <span className="text-brand">*</span>
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
                        Email <span className="text-brand">*</span>
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
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelClass}>
                      Subject <span className="text-brand">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {SUBJECTS.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message <span className="text-brand">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or enquiry."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(event) => setHoneypot(event.target.value)}
                    />
                  </div>

                  {status === 'success' && (
                    <div
                      role="status"
                      className="flex items-start gap-3 border border-[#1D6B45]/30 bg-[#1D6B45]/5 px-4 py-3 text-sm text-[#1D6B45]"
                    >
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
                      <span>Message sent. We will get back to you within 24 hours.</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 border border-brand/30 bg-brand/5 px-4 py-3 text-sm text-brand"
                    >
                      <AlertCircle size={17} className="mt-0.5 shrink-0" />
                      <span>
                        Something went wrong. Please email us directly at{' '}
                        <a href={`mailto:${company.email}`} className="font-medium underline">
                          {company.email}
                        </a>
                        .
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-1 inline-flex items-center justify-center gap-2 bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending
                      </>
                    ) : (
                      'Send message'
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
