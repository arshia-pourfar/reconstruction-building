import type { Metadata } from "next";
import { Montserrat, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "STRUCTURA | Engineered for Elegance",
  description:
    "Premier structural renovations. We merge technical mastery with architectural vision to deliver spaces that are structurally sound and aesthetically unparalleled.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${montserrat.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#fbf9f9] text-[#1b1c1c] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
