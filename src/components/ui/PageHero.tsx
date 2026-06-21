'use client';

import { motion } from 'framer-motion';

type ColorVariant = 'aqua' | 'maroon' | 'dark';

const GRADIENTS: Record<ColorVariant, string> = {
  aqua: 'linear-gradient(135deg, #0d3b37 0%, #1a6a64 45%, #2e9e98 100%)',
  maroon: 'linear-gradient(135deg, #7A2E2E 0%, #3d1111 100%)',
  dark: 'linear-gradient(135deg, #1a1a1a 0%, #2F2F2F 100%)',
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
  variant = 'dark',
  align = 'left',
}: PageHeroProps) {
  const isCenter = align === 'center';

  return (
    <section className="py-20 text-white" style={{ background: GRADIENTS[variant] }}>
      <div className={`max-w-5xl mx-auto px-6 ${isCenter ? 'text-center' : ''}`}>
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-3"
          >
            {breadcrumb}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">{title}</h1>
          {subtitle && (
            <p className={`text-white/70 text-lg ${isCenter ? 'mx-auto' : ''} max-w-2xl`}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
