import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  title: "Medelis Healthcare | ISO 11135 Contract Sterilization Services",
  description: "B2B Ethylene Oxide (EtO) contract sterilization services for medical device manufacturers in India. Validated to ISO 11135 and ISO 13485.",
  keywords: ["contract sterilization", "ethylene oxide sterilization", "EtO sterilization", "medical device sterilization", "ISO 11135", "ISO 13485"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-800`}>
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
