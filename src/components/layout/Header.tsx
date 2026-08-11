"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/brand/Logo";
import CircularArrow from "@/components/ui/CircularArrow";
import { useEnquiryCart } from "@/context/EnquiryCartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems, setIsCartOpen } = useEnquiryCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar (Hidden on Mobile for Clean Desktop/Mobile Layout) */}
      <div className="hidden sm:block bg-[var(--color-brand-primary)] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/90 font-medium">
            <svg className="w-3.5 h-3.5 text-[var(--color-brand-accent-light)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span>Jodhpur, Rajasthan</span>
          </div>
          <div className="flex items-center gap-6 text-white/90">
            <a href="tel:+919829000000" className="hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[var(--color-brand-accent-light)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 3h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z" />
              </svg>
              <span>+91 98290 00000</span>
            </a>
            <a href="mailto:info@medelishealthcare.com" className="hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[var(--color-brand-accent-light)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <span>info@medelishealthcare.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-4 border-b border-[var(--ink100)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Logo />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-[var(--color-brand-primary)]">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium text-[var(--ink600)] hover:text-[var(--color-brand-primary)] transition-colors">
              Products
            </Link>
            <Link href="/#ranges" className="text-sm font-medium text-[var(--ink600)] hover:text-[var(--color-brand-primary)] transition-colors">
              Ranges
            </Link>
            <Link href="/#about" className="text-sm font-medium text-[var(--ink600)] hover:text-[var(--color-brand-primary)] transition-colors">
              About Us
            </Link>
            <Link href="/#why-us" className="text-sm font-medium text-[var(--ink600)] hover:text-[var(--color-brand-primary)] transition-colors">
              Why Us
            </Link>
            <Link href="/#news" className="text-sm font-medium text-[var(--ink600)] hover:text-[var(--color-brand-primary)] transition-colors">
              Insights
            </Link>
            <Link href="/#enquiry" className="text-sm font-medium text-[var(--ink600)] hover:text-[var(--color-brand-primary)] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            <button aria-label="Search" className="w-10 h-10 rounded-full bg-[var(--b50)] text-[var(--color-brand-primary)] hover:bg-[var(--b100)] flex items-center justify-center transition-colors">
              <svg className="w-4.5 h-4.5 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path d="M16.5 16.5L21 21" />
              </svg>
            </button>

            {/* Enquiry Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Enquiry Cart with ${cartItems.length} items`}
              className="relative w-10 h-10 rounded-full bg-[var(--b50)] text-[var(--color-brand-primary)] hover:bg-[var(--b100)] flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--color-brand-primary)] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <Link
              href="/#enquiry"
              className="hidden sm:inline-flex items-center gap-3 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-sm font-bold pl-5 pr-2 py-2 rounded-full shadow-md transition-all group"
            >
              <span>Get in Touch</span>
              <CircularArrow variant="primary" size="sm" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-[var(--b50)] text-[var(--color-brand-primary)] flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              <svg className="w-5 h-5 stroke-current stroke-[2]" viewBox="0 0 24 24" fill="none">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[var(--ink100)] px-4 pt-3 pb-6 flex flex-col gap-3 shadow-lg">
            <Link onClick={() => setMobileMenuOpen(false)} href="/" className="text-base font-semibold text-[var(--color-brand-primary)] py-2 border-b border-gray-100">
              Home
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/products" className="text-base font-medium text-[var(--ink600)] py-2 border-b border-gray-100">
              Products Catalogue
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/#ranges" className="text-base font-medium text-[var(--ink600)] py-2 border-b border-gray-100">
              Ranges
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/#about" className="text-base font-medium text-[var(--ink600)] py-2 border-b border-gray-100">
              About Us
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/#why-us" className="text-base font-medium text-[var(--ink600)] py-2 border-b border-gray-100">
              Why Us
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/#news" className="text-base font-medium text-[var(--ink600)] py-2 border-b border-gray-100">
              Insights
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/#enquiry" className="text-base font-medium text-[var(--ink600)] py-2">
              Contact
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/#enquiry"
              className="mt-2 w-full text-center bg-[var(--color-brand-primary)] text-white font-bold py-3 rounded-full shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
