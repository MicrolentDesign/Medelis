"use client";

import { useState } from "react";
import PillBadge from "@/components/ui/PillBadge";
import CircularArrow from "@/components/ui/CircularArrow";

interface EnquirySectionProps {
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    location: string;
  };
  showMap?: boolean;
}

export default function EnquirySection({ contact, showMap = false }: EnquirySectionProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-20 bg-[var(--canvas-deep)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column Contact Details */}
          <div className="flex flex-col gap-6">
            <div>
              <PillBadge>Contact Us</PillBadge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--ink900)] mt-3 leading-tight">
                Tell Us the Molecule.{" "}
                <span className="text-[var(--color-brand-accent)]">We Will Quote.</span>
              </h2>
            </div>

            <p className="text-base text-[var(--ink600)] leading-relaxed">
              One enquiry, as many products as you need. If you already have a list of molecules or ranges, submit your inquiry below or contact our regional distribution desk.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-accent-light)] text-[var(--color-brand-accent)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <path d="M5 3h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[var(--ink600)] font-medium">Direct Phone Line</div>
                  <div className="text-base font-extrabold text-[var(--ink900)] font-mono">{contact.phone}</div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-accent-light)] text-[var(--color-brand-accent)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.36.101 11.943c0 2.105.549 4.16 1.595 5.976L0 24l6.235-1.634a11.882 11.882 0 005.71 1.454h.005c6.585 0 11.945-5.36 11.948-11.943a11.86 11.86 0 00-3.379-8.428" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[var(--ink600)] font-medium">WhatsApp Support</div>
                  <div className="text-base font-extrabold text-[var(--ink900)] font-mono">{contact.whatsapp}</div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-accent-light)] text-[var(--color-brand-accent)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[var(--ink600)] font-medium">Email Desk</div>
                  <div className="text-base font-extrabold text-[var(--ink900)]">{contact.email}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--color-brand-accent-light)] text-[var(--color-brand-accent)] flex items-center justify-center">
                  <svg className="w-8 h-8 stroke-current stroke-3 fill-none" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-[var(--ink900)]">Enquiry Submitted!</h3>
                <p className="text-sm text-[var(--ink600)] max-w-sm">
                  Thank you. Our regional pharmaceutical coordinator will review your requirements and reply with rates within 1 working day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[var(--color-brand-accent)] underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-extrabold text-[var(--ink900)] mb-1">
                  Send Commercial Enquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[var(--ink700)] mb-1">Your Name</label>
                    <input
                      suppressHydrationWarning
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[var(--color-brand-accent)] focus:ring-2 focus:ring-[var(--color-brand-accent)]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[var(--ink700)] mb-1">Firm / Agency Name</label>
                    <input
                      suppressHydrationWarning
                      type="text"
                      required
                      placeholder="e.g. Med Pharma Stockists"
                      className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[var(--color-brand-accent)] focus:ring-2 focus:ring-[var(--color-brand-accent)]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[var(--ink700)] mb-1">Mobile Number</label>
                    <input
                      suppressHydrationWarning
                      type="tel"
                      required
                      placeholder="+91 98290 00000"
                      className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[var(--color-brand-accent)] focus:ring-2 focus:ring-[var(--color-brand-accent)]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[var(--ink700)] mb-1">Email Address</label>
                    <input
                      suppressHydrationWarning
                      type="email"
                      required
                      placeholder="info@yourfirm.com"
                      className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[var(--color-brand-accent)] focus:ring-2 focus:ring-[var(--color-brand-accent)]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--ink700)] mb-1">City and State</label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    required
                    placeholder="e.g. Bangalore, Karnataka"
                    className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[var(--color-brand-accent)] focus:ring-2 focus:ring-[var(--color-brand-accent)]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--ink700)] mb-1">Molecules / Segments Required</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="List the molecules, strengths, or therapeutic ranges you are looking for..."
                    className="w-full rounded-xl border border-slate-200 p-4 text-sm outline-none focus:border-[var(--color-brand-accent)] focus:ring-2 focus:ring-[var(--color-brand-accent)]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-between bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent-hover)] text-white text-base font-bold px-6 py-3.5 rounded-full shadow-md transition-all group"
                >
                  <span>Submit Enquiry</span>
                  <CircularArrow variant="primary" size="md" />
                </button>

                <p className="text-[11px] text-[var(--ink400)] text-center mt-1">
                  Protected by Turnstile. We reply within one working day.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        {showMap && (
          <div className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <iframe
              title="Medelis Healthcare Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${contact.address}, ${contact.location}`)}&output=embed`}
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </section>
  );
}
