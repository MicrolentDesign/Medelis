import { getWhyUs, getStats } from "@/lib/content";
import StatsBand from "@/components/sections/StatsBand";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SourcingStandards from "@/components/sections/SourcingStandards";

export default async function WhyUsPage() {
  const [whyUs, stats] = await Promise.all([getWhyUs(), getStats()]);

  return (
    <>
      <WhyChooseUs items={whyUs} />
      <StatsBand stats={stats} />
      <SourcingStandards />
    </>
  );
}
