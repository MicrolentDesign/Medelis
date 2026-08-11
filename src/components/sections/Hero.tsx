"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CircularArrow from "@/components/ui/CircularArrow";
import PillBadge from "@/components/ui/PillBadge";
import { HeroSlide, StatItem } from "@/lib/content/types";

interface HeroProps {
  slides: HeroSlide[];
  stats: StatItem[];
}

export default function Hero({ slides, stats }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide] || slides[0];

  return (
    <section className="relative w-full bg-[var(--canvas)] flex flex-col justify-between pb-6 min-h-[calc(100vh-112px)] lg:max-h-[720px]">
      {/* Full-Bleed Edge-to-Edge Banner Slider */}
      <div className="relative w-full flex-1 min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex items-center overflow-hidden shadow-md">
        {/* Background Images with Fade Transition & Centre-Centre Position */}
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={s.imageSrc}
              alt={s.imageAlt}
              fill
              priority={idx === 0}
              className="object-cover object-center"
            />
            {/* High-Contrast Heavy Dark Gradient Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40" />
          </div>
        ))}

        {/* Foreground Content Container with Responsive Padding */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 text-white">
          <div className="max-w-2xl flex flex-col gap-4 sm:gap-5">
            {/* Eyebrow */}
            <div className="flex items-center">
              <PillBadge variant="inverse">{slide.eyebrow}</PillBadge>
            </div>

            {/* Fixed Responsive Title Container to Prevent Layout Jumps */}
            <div className="min-h-[90px] sm:min-h-[120px] lg:min-h-[140px] flex items-center">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white drop-shadow-md">
                {slide.h1Prefix}
                <span className="text-[#64B5F6] drop-shadow">{slide.h1Highlight}</span>
                {slide.h1Suffix}
              </h1>
            </div>

            {/* Lead Paragraph */}
            <div className="min-h-[50px] sm:min-h-[64px] flex items-center">
              <p className="text-xs sm:text-base lg:text-lg text-white/95 font-normal leading-relaxed max-w-xl drop-shadow-sm">
                {slide.lead}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href={slide.primaryCta.href}
                className="inline-flex items-center gap-2.5 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs sm:text-base font-bold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full shadow-xl transition-all group border border-white/20"
              >
                <span>{slide.primaryCta.label}</span>
                <CircularArrow variant="primary" size="md" />
              </Link>

              <Link
                href={slide.secondaryCta.href}
                className="inline-flex items-center gap-2.5 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md text-xs sm:text-base font-bold px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full border border-white/25 transition-all group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#64B5F6]" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>{slide.secondaryCta.label}</span>
              </Link>
            </div>

            {/* Slide Navigation Indicator Dots */}
            {/* The dot stays visually small; the button carries a 44x44 hit
                area so it meets the touch-target floor in 01-project-context §9. */}
            <div className="flex items-center -ml-2.5 pt-1 sm:pt-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={idx === currentSlide ? "true" : undefined}
                  className="w-11 h-11 flex items-center justify-center group/dot"
                >
                  <span
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 block ${
                      idx === currentSlide
                        ? "w-6 sm:w-8 bg-[#64B5F6]"
                        : "w-2 sm:w-2.5 bg-white/40 group-hover/dot:bg-white/70"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Stats Bar (Positioned to fit Viewport Height cleanly) */}
      <div className="relative z-30 -mt-8 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-7 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 border border-slate-100">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 sm:gap-4 ${
                idx > 0 ? "pt-3 lg:pt-0 lg:pl-6" : ""
              }`}
            >
              {/* Icon Circle */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--b50)] text-[var(--b900)] flex items-center justify-center flex-shrink-0">
                {stat.iconName === "users" && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 010 7.75" />
                  </svg>
                )}
                {stat.iconName === "box" && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                )}
                {stat.iconName === "shield" && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                )}
                {stat.iconName === "map-pin" && (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                )}
              </div>

              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--ink900)] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs lg:text-sm font-semibold text-[var(--ink700)]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
