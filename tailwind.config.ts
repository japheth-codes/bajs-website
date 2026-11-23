import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // BAJs PM&C brand palette
        primary: { DEFAULT: '#5EC9C3', light: '#A8E6E3', dark: '#3BA8A2' },   // Turquoise
        secondary: { DEFAULT: '#F2B94B', light: '#F7D48A', dark: '#D4963A' }, // Golden yellow
        accent: { DEFAULT: '#168C52', light: '#2FA373', dark: '#0E6A3F' },    // Green (provisional)
        dark: { DEFAULT: '#222222', muted: '#555555', subtle: '#888888' },    // Charcoal neutrals
        burgundy: { DEFAULT: '#7A2E2E', light: '#A84444', dark: '#5A1E1E' },  // Deep burgundy
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
        md: '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        lg: '0 20px 25px -5px rgb(0 0 0 / 0.06), 0 8px 10px -6px rgb(0 0 0 / 0.03)',
      },
      transitionTimingFunction: {
        'bajs-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
