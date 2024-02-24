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
        bg_primary: "#000000",
        bg_secondary: "#fedbc3",
        primary_text: "#845d48",
      },
      fontFamily: {
        mona_bold: "mona_bold",
        mona_medium: "mona_medium",
        mona_regular: "mona",
      },
      screens:{
        'mobile':'320px',
        'tab':'768px',
        'laptop':'1024px',
      }
    },
  },
  plugins: [],
};
export default config;
