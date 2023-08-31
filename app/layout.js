"use client";
import "./globals.css";
import "/styles/fonts.css";

import { Inter } from "next/font/google";
import { Providers } from "./providers";
import CustomNavbar from "@/components/CustomNavbar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import "tailwindcss/tailwind.css";

const theme = {
  colors: {
    primary: "#2c272b",
    secondary: "#592c33",
    secondaryDarker: "#472429",
    transparentSecondary: "#592c334a",
    black: "#2e2c2e",
    foreground: "#fdfdfd",
    darkText: "#212427",
    gray: "#a6a4a4",
    cardBackground: "#eeeeee",
  },
};
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Donbufalo",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    // <Provider store={store}>
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>
          <CustomNavbar />

          <Providers>
            <main>{children}</main>
          </Providers>
        </body>
      </html>
    </ThemeProvider>
    // </Provider>
  );
}
