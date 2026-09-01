import { getNews } from "@/lib/content";
import NewsSection from "@/components/sections/NewsSection";

export default async function InsightsPage() {
  const news = await getNews();

  return <NewsSection news={news} />;
}
