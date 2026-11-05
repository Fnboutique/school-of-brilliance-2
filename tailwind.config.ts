import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#071B3D", deep: "#050F26" },
        royal: "#102653",
        gold: { DEFAULT: "#D6A638", light: "#F3C969" },
        offwhite: "#F8F7F3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-bn)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-bn)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F3C969 0%, #D6A638 100%)",
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(214,166,56,0.55)",
        card: "0 1px 2px rgba(7,27,61,0.06), 0 12px 32px -16px rgba(7,27,61,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
