'use client';

import { motion } from 'framer-motion';

type ColorVariant = 'ink' | 'brand' | 'paper';

const VARIANTS: Record<ColorVariant, string> = {
  ink: 'bg-ink text-paper',
  brand: 'bg-brand text-paper',
  paper: 'bg-paper-alt text-ink border-b border-rule',
};

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  variant?: ColorVariant;
  align?: 'left' | 'center';
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  variant = 'ink',
  align = 'left',
}: PageHeroProps) {
  const isDark = variant !== 'paper';
  const isCenter = align === 'center';

  return (
    <section
      className={[
        VARIANTS[variant],
        'py-16 sm:py-20',
        variant === 'ink' ? 'border-t-2 border-brand' : '',
      ].join(' ')}
    >
      <div className={`mx-auto max-w-6xl px-6 ${isCenter ? 'text-center' : ''}`}>
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={[
              'mb-5 text-[11px] font-semibold uppercase tracking-widest',
              isDark ? 'text-brand-light' : 'text-brand',
            ].join(' ')}
          >
            {breadcrumb}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">{title}</h1>
          {subtitle && (
            <p
              className={[
                'mt-5 max-w-2xl text-base leading-relaxed sm:text-lg',
                isDark ? 'text-paper/65' : 'text-muted',
                isCenter ? 'mx-auto' : '',
              ].join(' ')}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
