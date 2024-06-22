import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
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
