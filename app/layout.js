// "use client";
import "./globals.css";
import "/styles/fonts.css";

import { Inter } from "next/font/google";
import CustomNavbar from "@/components/CustomNavbar";
// import { ThemeProvider } from "@emotion/react";
import "tailwindcss/tailwind.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Don Bufalo",
  description:
    "Sitio web oficial de Don Bufalo. Centro de cría murrah en Venezuela",
};

export default function RootLayout({ children }) {
  return (
    // <Provider store={store}>
    // <ThemeProvider theme={theme}>
    <html lang="en">
      <body className={inter.className}>
        <CustomNavbar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
    // </ThemeProvider>
    // </Provider>
  );
}
