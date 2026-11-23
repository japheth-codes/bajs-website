import React from 'react';

type BadgeVariant = 'mvp' | 'concept' | 'research' | 'deployed' | 'secondary';

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  mvp: 'bg-secondary text-dark',
  concept: 'bg-primary text-dark',
  research: 'bg-accent text-white',
  deployed: 'bg-burgundy text-white',
  secondary: 'bg-muted text-white',
};

export default function Badge({ variant, children, className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-block rounded-full px-3 py-0.5 text-xs font-semibold tracking-wide',
        variantClasses[variant],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
