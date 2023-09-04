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
          colors: {
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
            gray: "#a6a4a4",
            cardBackground: "#eeeeee",
            bgDark: "#202124",
          },
        },
      },
    }),
  ],
};
