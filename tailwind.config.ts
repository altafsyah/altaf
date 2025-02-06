import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        mOrange: "#FFCC70",
        mYellow: "#FFFADD",
        mBlue: "#8ECDDD",
        mDarkBlue: "#22668D",
      },
    },
  },
  plugins: [],
};
export default config;
