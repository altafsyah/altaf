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
