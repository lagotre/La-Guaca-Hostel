import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracota: {
          DEFAULT: "#E05A2B",
          light: "#F0774D",
          dark: "#C04020",
        },
        selva: {
          DEFAULT: "#2D6A4F",
          light: "#40916C",
          dark: "#1B4332",
        },
        arena: {
          DEFAULT: "#F4C842",
          light: "#F9DC7A",
          dark: "#D4A820",
        },
        caribe: {
          DEFAULT: "#0096C7",
          light: "#48CAE4",
          dark: "#005F73",
        },
        crema: {
          DEFAULT: "#FAF6EF",
          dark: "#F0E8D8",
        },
        grafito: {
          DEFAULT: "#1C1C1C",
          light: "#3D3D3D",
          muted: "#6B6B6B",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        raleway: ["var(--font-syne)", "sans-serif"],
        lato: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "10px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
