import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getNews } from "@/lib/content";
import PillBadge from "@/components/ui/PillBadge";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const news = await getNews();
  return news.map((item) => ({ slug: item.slug }));
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const news = await getNews();
  const item = news.find((n) => n.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="py-16 bg-[var(--canvas)] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--ink600)] mb-8">
          <Link href="/" className="hover:text-[var(--b900)]">Home</Link>
          <svg className="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
          <Link href="/insights" className="hover:text-[var(--b900)]">Insights</Link>
          <svg className="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
          <span className="text-[var(--b900)] font-bold truncate">{item.title}</span>
        </div>

        <PillBadge>{item.category}</PillBadge>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--ink900)] leading-tight mt-4">
          {item.title}
        </h1>

        <div className="flex items-center gap-3 text-xs font-semibold text-[var(--ink400)] mt-3">
          <span className="font-mono">{item.date}</span>
          <span>&middot;</span>
          <span>{item.readTime}</span>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9] mt-8">
          <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
        </div>

        {item.content && (
          <div className="flex flex-col gap-5 mt-8">
            {item.content.map((paragraph, idx) => (
              <p key={idx} className="text-sm sm:text-base text-[var(--ink600)] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand-accent)] mt-10"
        >
          <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Insights
        </Link>
      </div>
    </div>
  );
}
