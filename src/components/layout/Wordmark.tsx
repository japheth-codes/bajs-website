import Link from 'next/link';

export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-label="BAJs Project Management and Consultancy"
      className="shrink-0"
    >
      <rect width="32" height="32" fill="#6E2B2B" />
      <text
        x="16"
        y="22.5"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="20"
        fill="#FAF8F3"
      >
        B
      </text>
      <rect x="6" y="27" width="20" height="1" fill="#A98B52" />
    </svg>
  );
}

interface WordmarkProps {
  /** Renders on a dark background when true. */
  inverse?: boolean;
  size?: number;
  href?: string | null;
}

export function Wordmark({ inverse = false, size = 32, href = '/' }: WordmarkProps) {
  const content = (
    <span className="inline-flex items-center gap-2.5">
      <BrandMark size={size} />
      <span className="flex items-baseline gap-1.5 whitespace-nowrap">
        <span
          className={[
            'font-serif text-[20px] leading-none',
            inverse ? 'text-paper' : 'text-ink',
          ].join(' ')}
        >
          BAJs
        </span>
        <span
          className={[
            'text-[9px] font-semibold uppercase tracking-widest',
            inverse ? 'text-gold-light' : 'text-burgundy',
          ].join(' ')}
        >
          PM&amp;C
        </span>
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="BAJs Project Management and Consultancy, home">
      {content}
    </Link>
  );
}

export default Wordmark;
