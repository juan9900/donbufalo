// "use client";
import "./globals.css";
import "/styles/fonts.css";

import { Inter } from "next/font/google";
import CustomNavbar from "@/components/CustomNavbar";
// import { ThemeProvider } from "@emotion/react";
import "tailwindcss/tailwind.css";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import FacebookPixel from "@/components/FacebookPixel";
import { Suspense } from "react";
import Analytics from "@/components/Analytics";
import FacebookPixelOld from "@/components/FacebookPixelOld";

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
    <html className="min-h-screen" lang="en">
      <body className={`${inter.className} `}>
        <CustomNavbar />

        <main className="">{children}</main>
        <Suspense>
          <Analytics />
        </Suspense>
        <FacebookPixel />
        <FacebookPixelOld />
      </body>
    </html>
    // </ThemeProvider>
    // </Provider>
  );
}
