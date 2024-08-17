import type { Config } from "tailwindcss";
import { ThemeColors } from "./theme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
    colors: {
      [ThemeColors.WHITE]: "#ffffff",
      [ThemeColors.CYAN_600]: "#073fb1",
      [ThemeColors.STALE_800]: "#002873",
      [ThemeColors.STALE_700]: "#334155",
      [ThemeColors.GRAY_100]: "rgba(249,250,253,0.93)",
      [ThemeColors.GRAY_400]: "#b3b3b3",
      [ThemeColors.RED_500]: "#f62121",
    },
    fontFamily: {
      body: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
