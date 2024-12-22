"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./Theme";
import Navbar from "./_Components/Navbar/page";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Box sx={{ pt: 10 }}>
              <Navbar />
              {children}
            </Box>
          </ThemeProvider>
        </Provider>
            <Toaster/>
      </body>
    </html>
  );
}
