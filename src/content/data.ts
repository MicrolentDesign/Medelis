import { HomepageData } from "@/lib/content/types";
import { getAssetUrl } from "@/utils/assets";

export const homepageContent: HomepageData = {
  slides: [
    {
      id: "slide-1",
      eyebrow: "Pharmaceutical Marketing & Distribution",
      h1Prefix: "The Molecule You Need, Under a Brand You Can ",
      h1Highlight: "Stock",
      h1Suffix: ".",
      lead: "Six therapeutic ranges built for Indian distributors, stockists and PCD partners. Search by composition rather than brand name, and send one enquiry for as many products as you need.",
      primaryCta: { label: "Browse Products", href: "#featured" },
      secondaryCta: { label: "PCD Partnership", href: "#franchise" },
      imageSrc: getAssetUrl("/images/hero_family.png"),
      imageAlt: "Happy healthy Indian multi-generational family outdoors"
    },
    {
      id: "slide-2",
      eyebrow: "Active Lifestyle & Fitness",
      h1Prefix: "Empowering Health, Inspiring ",
      h1Highlight: "Active Living",
      h1Suffix: ".",
      lead: "From daily metabolic health to active cardiovascular support, our high-potency molecules empower active living across every stage of life in India.",
      primaryCta: { label: "Explore Products", href: "#featured" },
      secondaryCta: { label: "PCD Partnership", href: "#franchise" },
      imageSrc: getAssetUrl("/images/hero_workout.png"),
      imageAlt: "Active Indian couple jogging together in a park"
    },
    {
      id: "slide-3",
      eyebrow: "Vitality & Healthy Aging",
      h1Prefix: "Trusted Quality for Every ",
      h1Highlight: "Indian Family",
      h1Suffix: ".",
      lead: "Consistent packing, verified efficacy disclaimers, and clear composition on every strip. One contact point that answers your stock demands promptly.",
      primaryCta: { label: "View All Ranges", href: "#ranges" },
      secondaryCta: { label: "Send Enquiry", href: "#enquiry" },
      imageSrc: getAssetUrl("/images/hero_lifestyle.png"),
      imageAlt: "Healthy active senior Indian couple smiling in a garden"
    }
  ],
  stats: [
    {
      iconName: "users",
      value: "6+",
      label: "Therapeutic Ranges",
      subtext: "Speciality focused"
    },
    {
      iconName: "box",
      value: "25+",
      label: "Launch SKUs",
      subtext: "Formulations ready"
    },
    {
      iconName: "shield",
      value: "100%",
      label: "Quality Assured",
      subtext: "WHO-GMP manufacturing"
    },
    {
      iconName: "map-pin",
      value: "28+",
      label: "States Network",
      subtext: "Pan-India presence"
    }
  ],
  ranges: [
    {
      slug: "cardiology",
      title: "Cardiology Range",
      description: "Antihypertensives, lipid-lowering agents and angina management formulations.",
      productCount: "6 Products",
      iconName: "heart"
    },
    {
      slug: "diabetic",
      title: "Diabetic Care",
      description: "Oral hypoglycaemic fixed-dose combinations for glycemic control.",
      productCount: "5 Products",
      iconName: "activity"
    },
    {
      slug: "neurology",
      title: "Neurology",
      description: "Neuroprotective agents, neuropathic pain relievers and anti-epileptics.",
      productCount: "4 Products",
      iconName: "brain"
    },
    {
      slug: "orthopaedic",
      title: "Orthopaedic Range",
      description: "Muscle relaxants, NSAID combinations and joint inflammation support.",
      productCount: "4 Products",
      iconName: "bone"
    },
    {
      slug: "gastrology",
      title: "Gastrology",
      description: "Proton pump inhibitors, prokinetics and anti-reflux formulations.",
      productCount: "4 Products",
      iconName: "shield"
    },
    {
      slug: "general",
      title: "General Medicine",
      description: "Broad-spectrum anti-infectives, vitamins, minerals and analgesics.",
      productCount: "6 Products",
      iconName: "plus-square"
    }
  ],
  featuredProducts: [
    {
      id: "prod-1",
      slug: "metoprolol-succinate-25mg",
      brandName: "Metopro-25",
      composition: "Metoprolol Succinate 25mg",
      dosageForm: "Extended-Release Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "cardiology",
      rangeName: "Cardiology",
      imageUrl: getAssetUrl("/images/pack1.png"),
      description: "Extended-release Metoprolol Succinate formulation designed for 24-hour hypertension management and angina control.",
      indications: ["Hypertension", "Angina Pectoris", "Heart Failure Management"],
      storage: "Store below 25°C in a dry place. Protect from light."
    },
    {
      id: "prod-2",
      slug: "tolperisone-paracetamol",
      brandName: "Tolper-P 150",
      composition: "Tolperisone 150mg + Paracetamol 325mg",
      dosageForm: "Film-Coated Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "orthopaedic",
      rangeName: "Orthopaedic",
      imageUrl: getAssetUrl("/images/pack2.png"),
      description: "Dual-action centrally acting muscle relaxant and analgesic combination for painful musculoskeletal spasms.",
      indications: ["Acute Musculoskeletal Pain", "Spinal Muscle Spasms", "Post-Traumatic Pain"],
      storage: "Store in a cool dry place away from direct sunlight."
    },
    {
      id: "prod-3",
      slug: "glyci-triple-forte",
      brandName: "Glyci-Triple Forte — a deliberately long brand name to test three-line wrap",
      composition: "Metformin Hydrochloride 500mg + Glimepiride 1mg + Pioglitazone 15mg",
      dosageForm: "Sustained-Release Tablet",
      packing: "10x15 Tablets Blister Pack",
      rangeSlug: "diabetic",
      rangeName: "Diabetic",
      imageUrl: getAssetUrl("/images/pack3.png"),
      description: "Triple fixed-dose oral antidiabetic therapy combining insulin sensitizers and secretagogues for refractory Type 2 Diabetes.",
      indications: ["Type 2 Diabetes Mellitus", "Insulin Resistance", "Glycemic Control"],
      storage: "Store below 30°C. Keep out of reach of children."
    }
  ],
  whyUs: [
    {
      iconName: "shield-check",
      title: "Monopoly Rights by District",
      description: "One partner per territory, in writing, so you are not competing with your own supplier."
    },
    {
      iconName: "package",
      title: "Consistent Packing",
      description: "Pack sizes and cartons stay fixed between batches, so your shelf and your billing do not change."
    },
    {
      iconName: "clock",
      title: "Quoted, Not Queued",
      description: "Enquiries come back with rates and availability within 1 working day, not a request for a call."
    },
    {
      iconName: "file-text",
      title: "Composition-First Catalogue",
      description: "Search by molecule and strength. You should not need our brand name to find our product."
    }
  ],
  news: [
    {
      slug: "metformin-combinations-guide",
      category: "Range Explainer",
      title: "Choosing between metformin combinations for a diabetic range",
      date: "10 AUG 2026",
      readTime: "5 MIN READ",
      imageUrl: getAssetUrl("/images/hero_workout.png")
    },
    {
      slug: "pcd-territory-checklist",
      category: "Distribution",
      title: "What a PCD partner should ask before signing a district territory",
      date: "05 AUG 2026",
      readTime: "6 MIN READ",
      imageUrl: getAssetUrl("/images/hero_family.png")
    },
    {
      slug: "tolperisone-paracetamol-combination",
      category: "Molecule Note",
      title: "Tolperisone with paracetamol: where the muscle relaxant combination fits",
      date: "28 JUL 2026",
      readTime: "4 MIN READ",
      imageUrl: getAssetUrl("/images/hero_lifestyle.png")
    }
  ],
  contact: {
    phone: "+91 98290 00000",
    whatsapp: "+91 98290 00000",
    email: "info@medelishealthcare.com",
    address: "Medelis Healthcare, Commercial Complex",
    location: "Jodhpur, Rajasthan 342001"
  }
};
