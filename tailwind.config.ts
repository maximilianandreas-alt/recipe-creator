// tailwind.config.ts
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
        orange: {
          50: '#fef3f2',  // Light backgrounds
          100: '#fed7aa', // Hover states
          600: '#ea580c', // Primary Brand Color
          700: '#c2410c', // Active text
        },
        gray: {
          50: '#f9fafb',  // Section backgrounds
          600: '#4b5563', // Secondary text
          700: '#374151', // Primary body text
          900: '#111827', // Headings
        },
      },
      borderRadius: {
        lg: '0.625rem',   // Standard 10px radius
      },
    },
  },
  plugins: [],
};
export default config;