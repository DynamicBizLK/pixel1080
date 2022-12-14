/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {
      colors: {
        dynamic: {
          dark: "#121212",
        },
      },
      fontSize: {
        xxs: "0.75rem",
      },
      maxWidth: {
        intro: "40rem" ,
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      xmd: { max: "830px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xsm: { max: "480px" },
      mobile: "640px",
    },
  },
  plugins: [],
};
