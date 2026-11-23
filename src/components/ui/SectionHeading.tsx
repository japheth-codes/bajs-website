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
    <div className={['flex flex-col gap-3', alignClass, className].join(' ')}>
      <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">{title}</h2>
      {underline && (
        <span className="block h-1 w-20 rounded-full bg-primary mx-auto sm:mx-0" />
      )}
      {subtitle && (
        <p className="mt-1 text-muted text-base max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
