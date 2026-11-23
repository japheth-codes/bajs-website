'use client';

import { motion } from 'framer-motion';

type ColorVariant = 'burgundy' | 'dark' | 'primary';

const GRADIENTS: Record<ColorVariant, string> = {
  burgundy: 'linear-gradient(135deg, #7A2E2E 0%, #5A1E1E 100%)',
  dark: 'linear-gradient(135deg, #222222 0%, #171717 100%)',
  primary: 'linear-gradient(135deg, #5EC9C3 0%, #3BA8A2 100%)',
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
  variant = 'burgundy',
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
            className="text-primary/90 text-xs font-semibold tracking-[0.15em] uppercase mb-3"
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
            <p className={`text-white/80 text-lg ${isCenter ? 'mx-auto' : ''} max-w-2xl leading-relaxed`}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
