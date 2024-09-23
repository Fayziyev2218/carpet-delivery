/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primaryblue:"#1AA3B5",
        raisinBlack:"#1D1E21",
        lightGray:"#F5F5F5"
      },
      screens: {
        'phone': '376px',
        'phone-sm': '426px',
        'phone-320': '322px',
        'table-850': '850px',
        'laptop': '1441px',
      },
      letterSpacing: {
        'tight-custom': '-1.68px',
      },
    },
  },
  plugins: [],
};
