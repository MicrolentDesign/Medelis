import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { EnquiryCartProvider } from "@/context/EnquiryCartContext";
import EnquiryModal from "@/components/modals/EnquiryModal";
import CartDrawer from "@/components/modals/CartDrawer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medelis Healthcare | Pharmaceutical Marketing & Distribution India",
  description: "Pharmaceutical product catalogue for Indian distributors, stockists, and PCD partners. Search by molecule and composition across 6 therapeutic ranges.",
  keywords: ["pharmaceutical distributor India", "PCD pharma franchise", "medicine catalogue", "therapeutic ranges", "pharma stockist", "Medelis Healthcare"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${geistMono.variable} antialiased bg-[var(--canvas)] text-[var(--ink600)] min-h-screen flex flex-col`}>
        <EnquiryCartProvider>
          <Header />
          <main id="top" className="flex-1">{children}</main>
          <Footer />
          <EnquiryModal />
          <CartDrawer />
        </EnquiryCartProvider>
      </body>
    </html>
  );
}
