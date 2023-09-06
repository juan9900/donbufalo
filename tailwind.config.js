/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "1920px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          fontSize: {
            sm: "0.8rem",
            base: "1rem",
            xl: "1.25rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
          },
          colors: {
            default: {
              foreground: "#fdfdfd",
            },
            background: "#fdfdfd",
            foreground: "#fdfdfd",
            darkBackground: "#1b181a",

            focus: "#452817",
            primary: "#2c272b",
            secondary: "#592c33",
            secondaryDarker: "#472429",
            transparentSecondary: "#592c334a",
            black: "#2e2c2e",
            foregroundDarker: "#d1d1d1",
            darkText: "#212427",
            customGray: "#c7c7c7",
            cardBackground: "#eeeeee",
            bgDark: "#381b22",
            bgCardBufalo: "#505050",
          },
        },
      },
    }),
  ],
};
