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
        primary: { DEFAULT: '#5EC9C3', light: '#A8E6E3', dark: '#3BA8A2' },
        secondary: { DEFAULT: '#F2B94B', light: '#F7D48A', dark: '#D4963A' },
        accent: { DEFAULT: '#10C45C', light: '#6EDEA0', dark: '#0A9444' },
        dark: { DEFAULT: '#2F2F2F', muted: '#555555', subtle: '#888888' },
        maroon: { DEFAULT: '#7A2E2E', light: '#A84444' },
      },
    },
  },
  plugins: [],
};
export default config;
