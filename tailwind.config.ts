import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Institutional palette: paper, ink, burgundy, restrained gold.
        ink: {
          DEFAULT: '#16202A',
          deep: '#0E161D',
          soft: '#2B3742',
        },
        paper: {
          DEFAULT: '#FAF8F3',
          alt: '#F1ECE2',
          dark: '#E7E0D3',
        },
        burgundy: {
          DEFAULT: '#6E2B2B',
          dark: '#542020',
          light: '#8A3A3A',
        },
        gold: {
          DEFAULT: '#A98B52',
          light: '#C9B183',
        },
        rule: '#D9D2C5',
        muted: '#545B62',
        subtle: '#7C8389',
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
      },
      borderRadius: {
        sm: '1px',
        DEFAULT: '2px',
        md: '3px',
        lg: '4px',
        xl: '6px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(22 32 42 / 0.05)',
        DEFAULT: '0 2px 8px -2px rgb(22 32 42 / 0.08)',
        md: '0 8px 24px -12px rgb(22 32 42 / 0.18)',
        lg: '0 16px 40px -20px rgb(22 32 42 / 0.22)',
      },
      letterSpacing: {
        wider: '0.12em',
        widest: '0.18em',
      },
      transitionTimingFunction: {
        'bajs-ease': 'cubic-bezier(0.33, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
