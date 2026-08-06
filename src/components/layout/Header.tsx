"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-indigo-950/90 backdrop-blur-md border-b border-indigo-800/60 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo variant="dark" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#services" className="text-slate-200 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#how-it-works" className="text-slate-200 hover:text-white transition-colors">
            Process
          </Link>
          <Link href="#quality" className="text-slate-200 hover:text-white transition-colors">
            Quality & ISO
          </Link>
          <Link href="#industries" className="text-slate-200 hover:text-white transition-colors">
            Industries
          </Link>
          <Link href="#insights" className="text-slate-200 hover:text-white transition-colors">
            Insights
          </Link>
          <Link href="#faq" className="text-slate-200 hover:text-white transition-colors">
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
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-indigo-900/60 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileNavOpen && (
        <div className="md:hidden bg-indigo-950 border-b border-indigo-800/80 px-4 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 pt-2 text-base font-medium">
            <Link
              href="#services"
              onClick={() => setMobileNavOpen(false)}
              className="text-slate-200 hover:text-white py-1"
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileNavOpen(false)}
              className="text-slate-200 hover:text-white py-1"
            >
              Process
            </Link>
            <Link
              href="#quality"
              onClick={() => setMobileNavOpen(false)}
              className="text-slate-200 hover:text-white py-1"
            >
              Quality & ISO
            </Link>
            <Link
              href="#industries"
              onClick={() => setMobileNavOpen(false)}
              className="text-slate-200 hover:text-white py-1"
            >
              Industries
            </Link>
            <Link
              href="#insights"
              onClick={() => setMobileNavOpen(false)}
              className="text-slate-200 hover:text-white py-1"
            >
              Insights
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileNavOpen(false)}
              className="text-slate-200 hover:text-white py-1"
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
