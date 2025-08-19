import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)"]
      },
      colors: {
        shahbaz: {
          gold: "#FFD700",
          teal: "#003333",
          dark: "#000000"
        }
      },
      boxShadow: {
        shahbaz: "0 0 20px rgba(255, 215, 0, 0.3)"
      }
    },
  },
  plugins: [],
};
export default config;
