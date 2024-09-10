import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF5EC",
        subBackground: "#C8A888",
        titleForeground: "#3D4139",
        foreground: "#343434",
        button: colors.orange[200],
      },
    },
  },
  plugins: [],
};
export default config;
