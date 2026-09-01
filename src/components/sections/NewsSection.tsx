import Link from "next/link";
import Image from "next/image";
import PillBadge from "@/components/ui/PillBadge";
import CircularArrow from "@/components/ui/CircularArrow";
import { NewsItem } from "@/lib/content/types";

interface NewsSectionProps {
  news: NewsItem[];
}

export default function NewsSection({ news }: NewsSectionProps) {
  return (
    <section id="news" className="py-20 bg-[var(--canvas)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <PillBadge>Latest Insights</PillBadge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink900)] mt-3">
              Molecule & Range{" "}
              <span className="text-[var(--color-brand-accent)]">Knowledge Base</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[var(--ink600)]">
              General pharmacology and PCD distribution explainers to help stockists make informed inventory decisions.
            </p>
          </div>
        </div>

        {/* 3 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}`}
              className="bg-white rounded-2xl p-4 shadow-md flex flex-col justify-between transition-all duration-300 card-lift"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Category & Date */}
                <div className="flex items-center justify-between text-xs font-semibold text-[var(--color-brand-accent)] mb-2">
                  <span className="uppercase tracking-wider">{item.category}</span>
                  <span className="font-mono text-[var(--ink400)]">{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[var(--ink900)] leading-snug mb-4 line-clamp-2">
                  {item.title}
                </h3>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="tlink text-sm">
                  <span>Read Article</span>
                  <svg className="w-3.5 h-3.5 stroke-current stroke-2 fill-none" viewBox="0 0 14 14">
                    <path d="M3.5 10.5l7-7M5 3.5h5.5V9" />
                  </svg>
                </span>
                <CircularArrow variant="card" size="md" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
