import type { Metadata } from "next";
import { Syne, Newsreader, Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const newsReader = Newsreader({
  variable: "--font-newsreader-serif",
  subsets: ["latin"],
});

const syneSans = Syne({
  variable: "--font-syne-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Arogya AI",
  description: "An assistant that sits on every doctors desk which follows through the complete consulation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${newsReader.variable} ${syneSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">{children}</body>
    </html>
  );
}
