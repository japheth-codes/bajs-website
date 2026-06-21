'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  target: number;
  duration?: number;
  suffix?: string;
}

export default function CountUp({ target, duration = 2, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const durationMs = duration * 1000;
    const raf = requestAnimationFrame(function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / durationMs, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
