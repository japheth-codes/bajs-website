import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  underline?: boolean;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  underline = true,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={['flex flex-col gap-2', alignClass, className].join(' ')}>
      <h2 className="text-3xl font-bold text-maroon">{title}</h2>
      {underline && (
        <span className="block h-1 w-16 rounded-full bg-primary" />
      )}
      {subtitle && (
        <p className="mt-1 text-dark-muted text-base max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
