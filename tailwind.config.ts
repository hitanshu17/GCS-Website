import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#df6853",
        grey: "#363636",
        darkmode: "#102C46",
        darklight: "#1a3a5c",
        midnight_text: "#e5e7eb",
      },
      spacing: {
        "60%": "60%",
        "70%": "70%",
      },
    },
  },
  plugins: [],
};
export default config;
