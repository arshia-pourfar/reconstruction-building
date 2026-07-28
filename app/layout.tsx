import type { Metadata } from "next";
import { Space_Grotesk, Hanken_Grotesk, JetBrains_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
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

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ساختارا | مهندسی برای زیبایی",
  description:
    "بازسازی ساختاری لوکس. ما تخصص مهندسی را با دید معماری ترکیب می‌کنیم تا فضاهایی از نظر ساختاری مستحکم و از نظر زیبایی بی‌نظیر ارائه دهیم.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`scroll-smooth ${spaceGrotesk.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} ${vazirmatn.variable}`}
    >
      <body className="bg-[#f9f9f8] text-[#1a1c1c] antialiased" style={{ fontFamily: "var(--font-vazirmatn), var(--font-hanken), sans-serif" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
