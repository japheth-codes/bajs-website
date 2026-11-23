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
        // Enterprise palette: Oracle-style red, near-black and cool greys.
        brand: {
          DEFAULT: '#C74634',
          dark: '#A33527',
          light: '#EE8878',
        },
        ink: {
          DEFAULT: '#1B1A19',
          deep: '#111110',
          soft: '#2E2C29',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          alt: '#F5F3EF',
          dark: '#EAE7E1',
        },
        rule: '#D8D4CE',
        muted: '#5B5854',
        subtle: '#7A7671',
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'system-ui',
          'sans-serif',
        ],
        serif: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        sm: '0px',
        DEFAULT: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(17 17 16 / 0.06)',
        DEFAULT: '0 1px 3px 0 rgb(17 17 16 / 0.08)',
        md: '0 8px 24px -16px rgb(17 17 16 / 0.2)',
        lg: '0 16px 40px -24px rgb(17 17 16 / 0.24)',
      },
      letterSpacing: {
        wider: '0.06em',
        widest: '0.14em',
      },
      transitionTimingFunction: {
        'bajs-ease': 'cubic-bezier(0.33, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
