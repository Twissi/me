/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["OpenSans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        yellow: "#fbf8cc",
        orange: "#fde4cf",
        red: "#ffcfd2",
        rose: "#f1c0e8",
        purple: "#cfbaf0",
        blue: "#a3c4f3",
        iceblue: "#90dbf4",
        waterblue: "#8eecf5",
        mint: "#98f5e1",
        grass: "#b9fbc0",
        darkBlue500: "#0d1e33",
        darkBlue400: "#132b49",
        green: "#ADFF2F",
      },
    },
  },
  plugins: [],
};
