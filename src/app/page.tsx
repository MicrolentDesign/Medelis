import { getHomepageData } from "@/lib/content";
import Hero from "@/components/sections/Hero";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import QualityBlock from "@/components/sections/QualityBlock";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import InsightsPreview from "@/components/sections/InsightsPreview";
import FaqSection from "@/components/sections/FaqSection";
import QuoteCta from "@/components/sections/QuoteCta";

export default async function HomePage() {
  const data = await getHomepageData();

  return (
    <>
      {/* 1. Hero */}
      <Hero data={data.hero} />

      {/* 2. Credibility Strip (self-suppressing if < 3 verified stats) */}
      <CredibilityStrip stats={data.stats} />

      {/* 3. What We Sterilize (Services Grid) */}
      <ServicesGrid services={data.services} />

      {/* 4. Process Flow (How It Works) */}
      <HowItWorks />

      {/* 5. Quality & Compliance */}
      <QualityBlock />

      {/* 6. Target Industries */}
      <IndustriesGrid industries={data.industries} />

      {/* 7. Technical Insights Preview */}
      <InsightsPreview insights={data.insights} />

      {/* 8. Technical FAQ */}
      <FaqSection faqs={data.faqs} />

      {/* 9. Quote CTA */}
      <QuoteCta />
    </>
  );
}
