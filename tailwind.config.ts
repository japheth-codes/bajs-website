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
        // BAJs brand palette, kept intact. Burgundy leads interaction,
        // turquoise and gold are supporting accents.
        brand: {
          DEFAULT: '#7A2E2E',
          dark: '#5E2020',
          light: '#A8E6E3',
        },
        teal: {
          DEFAULT: '#5EC9C3',
          dark: '#3BA8A2',
          light: '#A8E6E3',
        },
        gold: {
          DEFAULT: '#F2B94B',
          dark: '#D4963A',
          light: '#F7D48A',
        },
        green: {
          DEFAULT: '#168C52',
          dark: '#0E6A3F',
          light: '#2FA373',
        },
        ink: {
          DEFAULT: '#222222',
          deep: '#171717',
          soft: '#333333',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          alt: '#F5F4F1',
          dark: '#EAE8E3',
        },
        rule: '#DCDAD5',
        muted: '#555555',
        subtle: '#888888',
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
        sm: '0 1px 2px 0 rgb(34 34 34 / 0.06)',
        DEFAULT: '0 1px 3px 0 rgb(34 34 34 / 0.08)',
        md: '0 8px 24px -16px rgb(34 34 34 / 0.2)',
        lg: '0 16px 40px -24px rgb(34 34 34 / 0.24)',
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
