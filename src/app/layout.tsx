import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

const openSans: NextFontWithVariable = Open_Sans({
  variable: "--font-opensans-sans",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const playfairDisplay: NextFontWithVariable = Playfair_Display({
  variable: "--font-playfair-mono",
  subsets: ["latin"],
  weight: ["600", "900"],
});

export const metadata: Metadata = {
  title: "Tyron Hayman - Web Developer",
  description:
    "Hi, I am Tyron, a frontend developer from Vancouver, BC, Canada. I want to turn your ideas into functional services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
