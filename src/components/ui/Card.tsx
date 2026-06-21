import React from 'react';

interface CardProps {
  children: React.ReactNode;
  headerColor?: string;
  className?: string;
}

export default function Card({ children, headerColor, className = '' }: CardProps) {
  return (
    <div
      className={[
        'bg-white rounded-xl shadow-md overflow-hidden',
        'transition-all duration-200 hover:shadow-lg hover:scale-[1.02]',
        className,
      ].join(' ')}
    >
      {headerColor && (
        <div className="h-1.5 w-full" style={{ backgroundColor: headerColor }} />
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
