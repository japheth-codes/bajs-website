import React from 'react';

interface CardProps {
  children: React.ReactNode;
  headerColor?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
}

export default function Card({
  children,
  headerColor,
  variant = 'default',
  className = '',
}: CardProps) {
  const base =
    'rounded-lg overflow-hidden transition-all duration-200 bajs-ease';
  const variantClasses: Record<string, string> = {
    default: 'bg-white border border-gray-100 shadow-sm hover:shadow-md',
    elevated:
      'bg-white shadow-md hover:shadow-lg hover:-translate-y-1',
    outlined:
      'bg-transparent border-2 border-gray-200 hover:border-primary',
  };

  return (
    <div
      className={[base, variantClasses[variant], className].join(' ')}
    >
      {headerColor && (
        <div className="h-1 w-full" style={{ backgroundColor: headerColor }} />
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
