"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-250 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm"
          : "bg-indigo-950/90 backdrop-blur-md border-b border-indigo-800/60 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo variant={scrolled ? "light" : "dark"} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="#services"
            className={`transition-colors ${
              scrolled ? "text-slate-700 hover:text-indigo-700" : "text-slate-200 hover:text-white"
            }`}
          >
            Services
          </Link>
          <Link
            href="#how-it-works"
            className={`transition-colors ${
              scrolled ? "text-slate-700 hover:text-indigo-700" : "text-slate-200 hover:text-white"
            }`}
          >
            Process
          </Link>
          <Link
            href="#quality"
            className={`transition-colors ${
              scrolled ? "text-slate-700 hover:text-indigo-700" : "text-slate-200 hover:text-white"
            }`}
          >
            Quality & ISO
          </Link>
          <Link
            href="#industries"
            className={`transition-colors ${
              scrolled ? "text-slate-700 hover:text-indigo-700" : "text-slate-200 hover:text-white"
            }`}
          >
            Industries
          </Link>
          <Link
            href="#insights"
            className={`transition-colors ${
              scrolled ? "text-slate-700 hover:text-indigo-700" : "text-slate-200 hover:text-white"
            }`}
          >
            Insights
          </Link>
          <Link
            href="#faq"
            className={`transition-colors ${
              scrolled ? "text-slate-700 hover:text-indigo-700" : "text-slate-200 hover:text-white"
            }`}
          >
            FAQ
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#quote"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm transition-colors shadow-sm"
          >
            <span>Request a quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${
            scrolled
              ? "text-slate-700 hover:text-indigo-900 hover:bg-slate-100"
              : "text-slate-300 hover:text-white hover:bg-indigo-900/60"
          }`}
          aria-label="Toggle Navigation"
        >
          {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileNavOpen && (
        <div
          className={`md:hidden border-b px-4 pt-2 pb-6 space-y-4 transition-colors ${
            scrolled
              ? "bg-white border-slate-200 text-slate-900"
              : "bg-indigo-950 border-indigo-800/80 text-white"
          }`}
        >
          <nav className="flex flex-col space-y-3 pt-2 text-base font-medium">
            <Link
              href="#services"
              onClick={() => setMobileNavOpen(false)}
              className="py-1 hover:text-orange-500 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileNavOpen(false)}
              className="py-1 hover:text-orange-500 transition-colors"
            >
              Process
            </Link>
            <Link
              href="#quality"
              onClick={() => setMobileNavOpen(false)}
              className="py-1 hover:text-orange-500 transition-colors"
            >
              Quality & ISO
            </Link>
            <Link
              href="#industries"
              onClick={() => setMobileNavOpen(false)}
              className="py-1 hover:text-orange-500 transition-colors"
            >
              Industries
            </Link>
            <Link
              href="#insights"
              onClick={() => setMobileNavOpen(false)}
              className="py-1 hover:text-orange-500 transition-colors"
            >
              Insights
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileNavOpen(false)}
              className="py-1 hover:text-orange-500 transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <div className="pt-2">
            <Link
              href="#quote"
              onClick={() => setMobileNavOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-orange-600 text-white font-medium text-center"
            >
              <span>Request a quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
