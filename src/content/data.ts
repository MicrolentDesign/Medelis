import { HomepageData } from "@/lib/content/types";

export const homepageContent: HomepageData = {
  hero: {
    eyebrow: "CONTRACT STERILIZATION · RAJASTHAN, INDIA",
    h1: "Contract sterilization, validated to ISO 11135 and documented for audit.",
    lead: "Industrial EtO sterilization services for medical device manufacturers. Full batch traceability, custom validation protocols, and audit-ready documentation.",
    primaryCta: { label: "Request a quote", href: "/request-a-quote" },
    secondaryCta: { label: "Download capability statement", href: "#capability" }
  },
  stats: [
    { label: "ISO Standard", value: "11135", subtext: "Strict process compliance", sourceVerified: true },
    { label: "Quality System", value: "13485", subtext: "ISO 13485:2016 aligned", sourceVerified: true },
    { label: "Batch Traceability", value: "100%", subtext: "Complete physical & digital records", sourceVerified: true },
    { label: "Audit Readiness", value: "Pass-ready", subtext: "Pre-formatted validation packs", sourceVerified: true }
  ],
  services: [
    {
      slug: "eto-sterilization",
      modality: "ETHYLENE OXIDE",
      title: "Industrial EtO Sterilization",
      description: "Low-temperature gaseous sterilization optimized for heat-sensitive medical devices, complex geometry tubing, and porous packaging.",
      typicalProducts: ["Catheters", "Surgical drapes", "Syringes", "Implantable assemblies"],
      materials: ["Tyvek®", "Polypropylene", "Polyurethane", "ABS"],
      isoStandard: "ISO 11135:2014"
    },
    {
      slug: "validation-consultation",
      modality: "PROTOCOL & TESTING",
      title: "Sterilization Process Validation",
      description: "Complete IQ/OQ/PQ protocol design, bioburden testing support, and residual analysis (EO/ECH) to satisfy regulatory submission demands.",
      typicalProducts: ["New device launches", "Packaging redesigns", "Material changes"],
      materials: ["All compatible polymers & metals"],
      isoStandard: "ISO 10993-7 / ISO 11737"
    },
    {
      slug: "batch-processing",
      modality: "CONTRACT PROCESSING",
      title: "Routine Batch Sterilization",
      description: "Scheduled commercial batch processing with dedicated chamber cycles, parametric release data logging, and certificates of processing.",
      typicalProducts: ["High-volume disposables", "Surgical kits", "Diagnostic cassettes"],
      materials: ["Medical grade packaging"],
      isoStandard: "ISO 11135 Annex B"
    }
  ],
  industries: [
    {
      slug: "surgical-instruments",
      title: "Surgical Instruments & Kits",
      subtitle: "Multi-component procedure trays & stainless assemblies",
      description: "Gas penetration protocol design tailored for dense kit configurations and intricate lumens.",
      keyRequirements: ["Lumen penetration studies", "Moisture control", "Zero residue compliance"]
    },
    {
      slug: "single-use-disposables",
      title: "Single-Use Disposables",
      subtitle: "High-volume IV sets, catheters & tubing",
      description: "Streamlined batch turnarounds with rigid temperature and humidity phase monitoring.",
      keyRequirements: ["High chamber utilization", "Packaging integrity retention", "Fast aeration cycles"]
    },
    {
      slug: "implants-orthopedics",
      title: "Implants & Orthopedics",
      subtitle: "Precision implants & sterile packaging",
      description: "Ultra-low residue processing and rigorous bioburden validation to satisfy FDA & CE Mark submissions.",
      keyRequirements: ["Sub-ppm EO residual limits", "Biological indicator challenge", "Full lot genealogy"]
    },
    {
      slug: "diagnostic-devices",
      title: "Diagnostic Devices & Microfluidics",
      subtitle: "Sensitive diagnostic cassettes & cartridges",
      description: "Controlled evacuation and nitrogen flush sequences to prevent microfluidic layer delamination.",
      keyRequirements: ["Gentle pressure ramps", "Optical clarity preservation", "Seal integrity validation"]
    }
  ],
  insights: [
    {
      slug: "iso-11135-overkill-vs-bioburden",
      title: "ISO 11135 Validation: Overkill Approach vs. Bioburden/Biological Indicator Method",
      excerpt: "A comparative technical breakdown of validation strategies under ISO 11135:2014, evaluating cycle development timelines and gas reduction efficiency.",
      date: "2026-08-01",
      readTime: "6 min read",
      category: "VALIDATION PROTOCOLS",
      author: "Regulatory Engineering Team",
      isoReference: "ISO 11135:2014 §D.8",
      published: true
    },
    {
      slug: "eto-residuals-iso-10993-7",
      title: "Managing Ethylene Oxide Residues to ISO 10993-7 Tolerances",
      excerpt: "Understanding aeration kinetics, temperature influences, and degassing chamber dynamics for compliance with revised EO and ECH exposure limits.",
      date: "2026-07-24",
      readTime: "8 min read",
      category: "COMPLIANCE & TESTING",
      author: "QA & Chemistry Lab",
      isoReference: "ISO 10993-7:2008",
      published: true
    },
    {
      slug: "packaging-compatibility-eto",
      title: "Porous Packaging Selection for EtO Sterilization: Tyvek vs. Medical Paper",
      excerpt: "Evaluating gas permeability, burst strength post-vacuum cycle, and microbial barrier integrity across standard medical device packaging formats.",
      date: "2026-07-15",
      readTime: "5 min read",
      category: "PACKAGING & STERILITY",
      author: "Packaging Engineering",
      isoReference: "ISO 11607-1",
      published: true
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Which ISO standards govern Medelis contract sterilization processing?",
      answer: "All processing and validation routines adhere to ISO 11135:2014 (Sterilization of health-care products — Ethylene oxide) under an ISO 13485:2016 certified Quality Management System framework.",
      category: "compliance"
    },
    {
      id: "faq-2",
      question: "How is batch release documented and verified for regulatory audits?",
      answer: "Every processed batch receives a Certificate of Sterilization accompanied by raw parameter charts (temperature, relative humidity, pressure, gas concentration phase, aeration logs) and Biological Indicator (BI) incubation test results.",
      category: "process"
    },
    {
      id: "faq-3",
      question: "What packaging materials are compatible with EtO cycles?",
      answer: "EtO requires at least one porous surface for gas ingress and egress. Standard choices include Tyvek® (1057B/1073B) sealed to flexible film, or medical-grade packaging paper. Non-porous foil-to-foil pouches are not suitable for EtO.",
      category: "general"
    },
    {
      id: "faq-4",
      question: "What is required to initiate a new sterilization validation protocol (IQ/OQ/PQ)?",
      answer: "We begin with product family grouping, bioburden baseline assessment, and packaging challenge testing. Our validation team compiles the complete protocol according to ISO 11135 before cycle execution.",
      category: "compliance"
    }
  ]
};
