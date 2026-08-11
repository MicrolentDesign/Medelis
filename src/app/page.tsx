import { getHomepageData } from "@/lib/content";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import RangeGrid from "@/components/sections/RangeGrid";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FranchiseBand from "@/components/sections/FranchiseBand";
import NewsSection from "@/components/sections/NewsSection";
import EnquirySection from "@/components/sections/EnquirySection";

export default async function HomePage() {
  const data = await getHomepageData();

  return (
    <>
      {/* 1. Full-Bleed Edge-to-Edge Hero Slider & Floating Stats Bar */}
      <Hero slides={data.slides} stats={data.stats} />

      {/* 2. Featured Products Showcase (Moved UP right under Hero to drive business) */}
      <FeaturedProducts products={data.featuredProducts} />

      {/* 3. Therapeutic Range Tiles (Plain white default -> Deep blue hover) */}
      <RangeGrid ranges={data.ranges} />

      {/* 4. About Medelis Healthcare */}
      <AboutSection />

      {/* 5. Why Choose Us (Distributor Operational Benefits) */}
      <WhyChooseUs items={data.whyUs} />

      {/* 6. PCD & Franchise Partnership Opportunity Band */}
      <FranchiseBand />

      {/* 7. Latest News & Molecule Knowledge Base */}
      <NewsSection news={data.news} />

      {/* 8. Commercial Enquiry Section */}
      <EnquirySection contact={data.contact} />
    </>
  );
}
