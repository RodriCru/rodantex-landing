import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Estructura
        primary:   { DEFAULT: "#17232F", hover: "#0F1922", light: "#293B4B" },
        // Acción positiva
        lime:      { DEFAULT: "#B8D957", hover: "#A6C644", light: "#D4E894" },
        // Info / disponible
        info:      { DEFAULT: "#2A9D8F", hover: "#21867A", light: "#5DC4B8", dark: "#0F4C5C" },
        // Advertencia
        accent:    { DEFAULT: "#E9A23B", hover: "#D18E2A", light: "#F2C77F" },
        // Crítico
        danger:    { DEFAULT: "#E76F51", hover: "#D45A3D", light: "#F4A38F" },
        // Superficies
        app:       "#F3F5F6",
        surface:   "#FFFFFF",
        subtle:    "#E7EBEE",
        border:    "#D2D8DD",
        // Texto
        ink:       { DEFAULT: "#17232F", secondary: "#4A5A6B", muted: "#8795A3", inverse: "#FFFFFF" },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;