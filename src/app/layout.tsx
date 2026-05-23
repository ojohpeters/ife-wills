import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ifewilliamscoaching.com"),
  title: {
    default: "Ife Williams Coaching — Compassionate, Trauma-Informed Care",
    template: "%s · Ife Williams Coaching",
  },
  description:
    "Compassionate, trauma-informed coaching for individuals, youth, and families. Rooted in wisdom, experience, and faith — because healing is possible, and you don't have to walk through it alone.",
  keywords: [
    "trauma-informed coaching",
    "Christian trauma care",
    "youth mental health coaching",
    "faith-based coaching",
    "Ife Williams",
  ],
  openGraph: {
    title: "Ife Williams Coaching — Compassionate, Trauma-Informed Care",
    description:
      "Trauma-informed, faith-sensitive coaching for individuals, youth, and families.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cream text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
