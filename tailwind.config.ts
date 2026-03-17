// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fef3f2',
          100: '#fed7aa',
          600: '#ea580c', // Primary Brand Color
          700: '#c2410c',
        },
        gray: {
          50: '#f9fafb',
          600: '#4b5563', // Secondary text
          700: '#374151', // Primary text
          900: '#111827', // Headings
        },
      },
      borderRadius: {
        lg: '0.625rem', // 10px from Style Guide
      },
    },
  },
};