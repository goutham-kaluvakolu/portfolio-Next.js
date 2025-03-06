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
        black: "#000000",
        accent: "#0070f3",
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "vercel-gradient": "linear-gradient(to right, #0070f3, #ffffff)",
      },
      boxShadow: {
        'accent': '0 0 15px rgba(0, 112, 243, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 4s linear infinite',
      },
      borderColor: {
        DEFAULT: '#1f2937', // gray-800
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#ffffff',
            a: {
              color: '#0070f3',
              '&:hover': {
                color: '#3291ff',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
