import type { Config } from "tailwindcss";
import { ThemeColors } from './theme';

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
    },
    colors: {
      [ThemeColors.WHITE]: '#ffffff',
      [ThemeColors.CYAN_600]: '#0891b2',
      [ThemeColors.STALE_800]: '#1e293b',
      [ThemeColors.STALE_700]: '#334155',
    },
    fontFamily: {
      'body': ["Nunito", "sans-serif"],
    }
  },
  plugins: [],
};
export default config;