import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: "#f4efe4",
          deep: "#ece4d3",
          edge: "#ded2b9",
        },
        ink: {
          DEFAULT: "#2b2622",
          soft: "#4d4640",
          faint: "#6f665c",
        },
        oxblood: "#7a2e2a",
        indigo_ink: "#2f3f56",
        brass: "#a67c34",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(43,38,34,0.06), 0 8px 24px -12px rgba(43,38,34,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
