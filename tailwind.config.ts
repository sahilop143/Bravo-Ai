import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#00E5FF",
        "brand-hover": "#00C4E6",
        dark: "#030303",
      },
      fontFamily: {
        sans: ["Sora", "system-ui"],
        display: ["Playfair Display", "serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
export default config
