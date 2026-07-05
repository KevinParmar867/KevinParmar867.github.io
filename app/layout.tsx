import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolio.name} | ${portfolio.title}`,
  description: portfolio.tagline,
  icons: {
    icon: "/owner.png",
    shortcut: "/owner.png",
    apple: "/owner.png",
  },
  openGraph: {
    title: `${portfolio.name} | ${portfolio.title}`,
    description: portfolio.tagline,
    type: "website",
    images: [{ url: "/owner.png", width: 512, height: 512, alt: portfolio.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-grid min-h-screen bg-zinc-950 font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
