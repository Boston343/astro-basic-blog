/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "560px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
