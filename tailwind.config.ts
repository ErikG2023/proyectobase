import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#f3faf7",
          100: "#def3ea",
          200: "#b5e3ce",
          // Definir más tonos de color según sea necesario
          900: "#006641",
        },
        secondary: {
          50: "#f7f3f8",
          100: "#f0def2",
          // Definir más tonos de color según sea necesario
          900: "#6d0066",
        },
      },
    },
  },
  plugins: [],
};
export default config;
