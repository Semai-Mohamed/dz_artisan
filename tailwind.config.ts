import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Poppins: "Poppins",
      },
      boxShadow: {
        'custom': '0px 0px 300.7px rgba(0, 167, 157, 0.2)',
        'custom-shadow': '0px 0px 42.1px 10px rgba(0, 0, 0, 0.07)',

      },
     
    },
  },
  plugins: [],
} satisfies Config;
