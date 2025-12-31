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
        primary: "#02BB7E",
      },
      fontFamily: {
        sans: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  // @ts-ignore - DaisyUI config
  daisyui: {
    themes: [
      {
        light: {
          primary: "#02BB7E",
          "base-100": "#FAF8F5",
          "base-200": "#F5F1EB",
          "base-300": "#E8E3DB",
        },
      },
    ],
  },
};

export default config;





