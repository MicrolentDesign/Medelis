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
      primaryCta: { label: "Browse Products", href: "/products" },
      secondaryCta: { label: "PCD Partnership", href: "/#franchise" },
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
      primaryCta: { label: "Explore Products", href: "/products" },
      secondaryCta: { label: "PCD Partnership", href: "/#franchise" },
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
      primaryCta: { label: "View All Segments", href: "/products" },
      secondaryCta: { label: "Send Enquiry", href: "/contact" },
      imageSrc: getAssetUrl("/images/hero_lifestyle.png"),
      imageAlt: "Healthy active senior Indian couple smiling in a garden"
    }
  ],
  stats: [
    {
      iconName: "users",
      value: "6+",
      label: "Therapeutic Segments",
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
      subtext: "Batch-tested formulations"
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
      longDescription: "Our Cardiology Range covers antihypertensives, lipid-lowering agents and angina management formulations for long-term cardiovascular care. Stockists get fixed-dose combinations that simplify prescribing across common cardiac comorbidities, with consistent pack sizes and a transparent composition strip on every SKU.",
      productCount: "6 Products",
      iconName: "heart",
      categories: [
        { label: "Antihypertensives", note: "For long-term blood pressure control", molecules: "Metoprolol, Amlodipine, Telmisartan", iconName: "activity" },
        { label: "Lipid-Lowering Agents", note: "Statins for cholesterol management", molecules: "Atorvastatin, Rosuvastatin", iconName: "droplet" },
        { label: "Angina Management", note: "Antiplatelet and anti-anginal support", molecules: "Clopidogrel + Aspirin", iconName: "heart" }
      ]
    },
    {
      slug: "diabetic",
      title: "Diabetic Care",
      description: "Oral hypoglycaemic fixed-dose combinations for glycemic control.",
      longDescription: "Diabetic Care brings together oral hypoglycaemic fixed-dose combinations for glycemic control, formulated around the dosing patterns prescribed most often. Every SKU carries its full composition and strength on the pack, so pharmacists and stockists can match prescriptions without guesswork.",
      productCount: "5 Products",
      iconName: "activity",
      categories: [
        { label: "Oral Hypoglycaemics", note: "First-line Type 2 Diabetes therapy", molecules: "Metformin, Glimepiride", iconName: "pill" },
        { label: "Fixed-Dose Combinations", note: "Simplified multi-drug dosing", molecules: "Vildagliptin + Metformin", iconName: "box" },
        { label: "Glycemic Control", note: "DPP-4 inhibitors and secretagogues", molecules: "Sitagliptin, Metformin + Glimepiride + Pioglitazone", iconName: "activity" }
      ]
    },
    {
      slug: "neurology",
      title: "Neurology",
      description: "Neuroprotective agents, neuropathic pain relievers and anti-epileptics.",
      longDescription: "The Neurology range includes neuroprotective agents, neuropathic pain relievers and anti-epileptics for chronic and acute neurological care. Formulations ship in consistent batch sizes with strict quality controls, supporting distributors who need dependable stock across a demanding therapeutic category.",
      productCount: "4 Products",
      iconName: "brain",
      categories: [
        { label: "Neuroprotective Agents", note: "Post-stroke and cognitive support", molecules: "Citicoline", iconName: "brain" },
        { label: "Neuropathic Pain Relief", note: "For chronic nerve-related pain", molecules: "Pregabalin, Gabapentin", iconName: "zap" },
        { label: "Anti-Epileptics", note: "Seizure and epilepsy management", molecules: "Levetiracetam", iconName: "shield-check" }
      ]
    },
    {
      slug: "orthopaedic",
      title: "Orthopaedic Range",
      description: "Muscle relaxants, NSAID combinations and joint inflammation support.",
      longDescription: "Muscle relaxants, NSAID combinations and joint inflammation support make up our Orthopaedic Range, built for the volume and variety that orthopaedic and physiotherapy practices need. Pack sizes and compositions stay fixed across batches, keeping shelf planning predictable for stockists.",
      productCount: "4 Products",
      iconName: "bone",
      categories: [
        { label: "Muscle Relaxants", note: "For acute musculoskeletal spasms", molecules: "Tolperisone + Paracetamol", iconName: "activity" },
        { label: "NSAID Combinations", note: "Pain and inflammation relief", molecules: "Aceclofenac + Paracetamol, Etoricoxib", iconName: "pill" },
        { label: "Joint Inflammation Support", note: "Cartilage and joint care", molecules: "Glucosamine + Diacerein", iconName: "bone" }
      ]
    },
    {
      slug: "gastrology",
      title: "Gastrology",
      description: "Proton pump inhibitors, prokinetics and anti-reflux formulations.",
      longDescription: "Gastrology covers proton pump inhibitors, prokinetics and anti-reflux formulations for common digestive conditions. Each product ships with a clear composition strip and standard packing, so distributors can move stock quickly across pharmacies and clinics.",
      productCount: "4 Products",
      iconName: "pill",
      categories: [
        { label: "Proton Pump Inhibitors", note: "For acid-related digestive conditions", molecules: "Pantoprazole, Esomeprazole", iconName: "pill" },
        { label: "Prokinetics", note: "Symptom relief for dyspepsia", molecules: "Domperidone, Ondansetron", iconName: "activity" },
        { label: "Anti-Reflux Formulations", note: "GERD and reflux management", molecules: "Rabeprazole + Domperidone", iconName: "gastro" }
      ]
    },
    {
      slug: "general",
      title: "General Medicine",
      description: "Broad-spectrum anti-infectives, vitamins, minerals and analgesics.",
      longDescription: "General Medicine is our broadest range — anti-infectives, vitamins, minerals and analgesics for everyday prescribing. It is built for stockists who need one reliable supplier across the most commonly moved SKUs in a pharmacy.",
      productCount: "6 Products",
      iconName: "plus-square",
      categories: [
        { label: "Anti-Infectives", note: "Broad-spectrum antibiotic coverage", molecules: "Amoxicillin + Clavulanic Acid, Azithromycin", iconName: "shield-check" },
        { label: "Vitamins & Minerals", note: "Nutritional and bone health support", molecules: "Multivitamin, Calcium + Vitamin D3", iconName: "droplet" },
        { label: "Analgesics", note: "Fever and pain management", molecules: "Paracetamol, Diclofenac", iconName: "pill" }
      ]
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
      description: "Extended-release Metoprolol Succinate formulation for hypertension management and angina control.",
      indications: ["Hypertension", "Angina Pectoris", "Heart Failure Management"],
      storage: "Store below 25°C in a dry place. Protect from light."
    },
    {
      id: "prod-4",
      slug: "amlodipine-besylate-5mg",
      brandName: "Amlogard-5",
      composition: "Amlodipine Besylate 5mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "cardiology",
      rangeName: "Cardiology",
      imageUrl: getAssetUrl("/images/pack2.png"),
      description: "Calcium channel blocker formulation for long-term blood pressure management.",
      indications: ["Hypertension", "Chronic Stable Angina"],
      storage: "Store below 30°C in a dry place. Protect from light."
    },
    {
      id: "prod-5",
      slug: "atorvastatin-20mg",
      brandName: "Ator-20",
      composition: "Atorvastatin 20mg",
      dosageForm: "Film-Coated Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "cardiology",
      rangeName: "Cardiology",
      imageUrl: getAssetUrl("/images/pack3.png"),
      description: "Statin formulation for lipid management in patients with elevated cholesterol.",
      indications: ["Hyperlipidaemia", "Cardiovascular Risk Reduction"],
      storage: "Store below 25°C. Protect from moisture and light."
    },
    {
      id: "prod-6",
      slug: "telmisartan-40mg",
      brandName: "Telsart-40",
      composition: "Telmisartan 40mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "cardiology",
      rangeName: "Cardiology",
      imageUrl: getAssetUrl("/images/pack1.png"),
      description: "Angiotensin receptor blocker formulation for blood pressure management.",
      indications: ["Hypertension"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-7",
      slug: "rosuvastatin-10mg",
      brandName: "Rosuva-10",
      composition: "Rosuvastatin 10mg",
      dosageForm: "Film-Coated Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "cardiology",
      rangeName: "Cardiology",
      imageUrl: getAssetUrl("/images/pack2.png"),
      description: "Statin formulation for lipid-lowering therapy in adults.",
      indications: ["Hyperlipidaemia", "Cardiovascular Risk Reduction"],
      storage: "Store below 25°C. Protect from light."
    },
    {
      id: "prod-8",
      slug: "clopidogrel-aspirin-75mg",
      brandName: "Clopivas-75",
      composition: "Clopidogrel 75mg + Aspirin 75mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "cardiology",
      rangeName: "Cardiology",
      imageUrl: getAssetUrl("/images/pack3.png"),
      description: "Dual antiplatelet fixed-dose combination for angina and cardiovascular event management.",
      indications: ["Angina Pectoris", "Post-MI Antiplatelet Therapy"],
      storage: "Store below 30°C in a dry place."
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
      id: "prod-9",
      slug: "aceclofenac-paracetamol",
      brandName: "Aceclo-P",
      composition: "Aceclofenac 100mg + Paracetamol 325mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "orthopaedic",
      rangeName: "Orthopaedic",
      imageUrl: getAssetUrl("/images/pack1.png"),
      description: "NSAID and analgesic fixed-dose combination for musculoskeletal pain and inflammation.",
      indications: ["Osteoarthritis", "Post-Operative Pain", "Soft Tissue Injury"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-10",
      slug: "glucosamine-diacerein",
      brandName: "Glucosamex",
      composition: "Glucosamine Sulphate 750mg + Diacerein 50mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "orthopaedic",
      rangeName: "Orthopaedic",
      imageUrl: getAssetUrl("/images/pack2.png"),
      description: "Joint-support combination for cartilage maintenance and inflammation support in osteoarthritis.",
      indications: ["Osteoarthritis", "Joint Inflammation Support"],
      storage: "Store below 30°C. Keep out of reach of children."
    },
    {
      id: "prod-11",
      slug: "etoricoxib-90mg",
      brandName: "Etorico-90",
      composition: "Etoricoxib 90mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "orthopaedic",
      rangeName: "Orthopaedic",
      imageUrl: getAssetUrl("/images/pack3.png"),
      description: "Selective NSAID formulation for joint and musculoskeletal pain management.",
      indications: ["Osteoarthritis", "Rheumatoid Arthritis", "Acute Pain"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-3",
      slug: "glyci-triple-forte",
      brandName: "Glyci-Triple Forte",
      composition: "Metformin Hydrochloride 500mg + Glimepiride 1mg + Pioglitazone 15mg",
      dosageForm: "Sustained-Release Tablet",
      packing: "10x15 Tablets Blister Pack",
      rangeSlug: "diabetic",
      rangeName: "Diabetic",
      imageUrl: getAssetUrl("/images/pack3.png"),
      description: "Triple fixed-dose oral antidiabetic therapy combining insulin sensitizers and secretagogues for Type 2 Diabetes.",
      indications: ["Type 2 Diabetes Mellitus", "Insulin Resistance", "Glycemic Control"],
      storage: "Store below 30°C. Keep out of reach of children."
    },
    {
      id: "prod-12",
      slug: "metformin-500mg",
      brandName: "Metfor-500",
      composition: "Metformin Hydrochloride 500mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "diabetic",
      rangeName: "Diabetic",
      imageUrl: getAssetUrl("/images/pack1.png"),
      description: "First-line oral hypoglycaemic for Type 2 Diabetes management.",
      indications: ["Type 2 Diabetes Mellitus"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-13",
      slug: "glimepiride-2mg",
      brandName: "Glimy-2",
      composition: "Glimepiride 2mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "diabetic",
      rangeName: "Diabetic",
      imageUrl: getAssetUrl("/images/pack2.png"),
      description: "Sulfonylurea formulation for glycemic control in Type 2 Diabetes.",
      indications: ["Type 2 Diabetes Mellitus", "Glycemic Control"],
      storage: "Store below 25°C. Protect from light and moisture."
    },
    {
      id: "prod-14",
      slug: "vildagliptin-metformin",
      brandName: "Vildaglip-M",
      composition: "Vildagliptin 50mg + Metformin Hydrochloride 500mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "diabetic",
      rangeName: "Diabetic",
      imageUrl: getAssetUrl("/images/pack3.png"),
      description: "DPP-4 inhibitor and biguanide fixed-dose combination for glycemic control.",
      indications: ["Type 2 Diabetes Mellitus", "Glycemic Control"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-15",
      slug: "sitagliptin-100mg",
      brandName: "Sitaglip-100",
      composition: "Sitagliptin 100mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "diabetic",
      rangeName: "Diabetic",
      imageUrl: getAssetUrl("/images/pack1.png"),
      description: "DPP-4 inhibitor formulation for glycemic control in Type 2 Diabetes.",
      indications: ["Type 2 Diabetes Mellitus", "Glycemic Control"],
      storage: "Store below 30°C. Keep out of reach of children."
    },
    {
      id: "prod-16",
      slug: "pregabalin-75mg",
      brandName: "Pregabin-75",
      composition: "Pregabalin 75mg",
      dosageForm: "Capsule",
      packing: "10x10 Capsules Blister Pack",
      rangeSlug: "neurology",
      rangeName: "Neurology",
      imageUrl: getAssetUrl("/images/pack2.png"),
      description: "Neuropathic pain reliever formulation for peripheral and central nerve pain.",
      indications: ["Neuropathic Pain", "Fibromyalgia"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-17",
      slug: "gabapentin-300mg",
      brandName: "Gabapex-300",
      composition: "Gabapentin 300mg",
      dosageForm: "Capsule",
      packing: "10x10 Capsules Blister Pack",
      rangeSlug: "neurology",
      rangeName: "Neurology",
      imageUrl: getAssetUrl("/images/pack3.png"),
      description: "Anticonvulsant and neuropathic pain reliever formulation.",
      indications: ["Neuropathic Pain", "Adjunct Epilepsy Therapy"],
      storage: "Store below 25°C. Protect from moisture."
    },
    {
      id: "prod-18",
      slug: "levetiracetam-500mg",
      brandName: "Levetira-500",
      composition: "Levetiracetam 500mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "neurology",
      rangeName: "Neurology",
      imageUrl: getAssetUrl("/images/pack1.png"),
      description: "Anti-epileptic formulation for partial and generalised seizure management.",
      indications: ["Epilepsy", "Seizure Management"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-19",
      slug: "citicoline-500mg",
      brandName: "Citicolin-500",
      composition: "Citicoline 500mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "neurology",
      rangeName: "Neurology",
      imageUrl: getAssetUrl("/images/pack2.png"),
      description: "Neuroprotective agent formulation used in post-stroke and cognitive recovery support.",
      indications: ["Neuroprotection", "Cognitive Recovery Support"],
      storage: "Store below 30°C. Protect from light."
    },
    {
      id: "prod-20",
      slug: "pantoprazole-40mg",
      brandName: "Pantogard-40",
      composition: "Pantoprazole 40mg",
      dosageForm: "Enteric-Coated Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "gastrology",
      rangeName: "Gastrology",
      imageUrl: getAssetUrl("/images/pack3.png"),
      description: "Proton pump inhibitor formulation for acid-related digestive conditions.",
      indications: ["GERD", "Peptic Ulcer Disease"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-21",
      slug: "rabeprazole-domperidone",
      brandName: "Rabez-D",
      composition: "Rabeprazole 20mg + Domperidone 30mg",
      dosageForm: "Capsule",
      packing: "10x10 Capsules Blister Pack",
      rangeSlug: "gastrology",
      rangeName: "Gastrology",
      imageUrl: getAssetUrl("/images/pack1.png"),
      description: "Proton pump inhibitor and prokinetic fixed-dose combination for digestive symptom relief.",
      indications: ["GERD", "Dyspepsia"],
      storage: "Store below 25°C. Protect from light and moisture."
    },
    {
      id: "prod-22",
      slug: "esomeprazole-40mg",
      brandName: "Esogard-40",
      composition: "Esomeprazole 40mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "gastrology",
      rangeName: "Gastrology",
      imageUrl: getAssetUrl("/images/pack2.png"),
      description: "Proton pump inhibitor formulation for gastro-oesophageal reflux management.",
      indications: ["GERD", "Erosive Oesophagitis"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-23",
      slug: "ondansetron-4mg",
      brandName: "Ondaset-4",
      composition: "Ondansetron 4mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "gastrology",
      rangeName: "Gastrology",
      imageUrl: getAssetUrl("/images/pack3.png"),
      description: "Antiemetic formulation for nausea and vomiting management.",
      indications: ["Nausea", "Vomiting"],
      storage: "Store below 30°C. Protect from light."
    },
    {
      id: "prod-24",
      slug: "amoxicillin-clavulanate-625",
      brandName: "Amoxiclav-625",
      composition: "Amoxicillin 500mg + Clavulanic Acid 125mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "general",
      rangeName: "General Medicine",
      imageUrl: getAssetUrl("/images/pack1.png"),
      description: "Broad-spectrum beta-lactam antibiotic combination for common bacterial infections.",
      indications: ["Respiratory Tract Infection", "Urinary Tract Infection", "Skin Infection"],
      storage: "Store below 25°C in a dry place."
    },
    {
      id: "prod-25",
      slug: "azithromycin-500mg",
      brandName: "Azithro-500",
      composition: "Azithromycin 500mg",
      dosageForm: "Tablet",
      packing: "3 Tablets Strip",
      rangeSlug: "general",
      rangeName: "General Medicine",
      imageUrl: getAssetUrl("/images/pack2.png"),
      description: "Macrolide antibiotic formulation for common respiratory and skin infections.",
      indications: ["Respiratory Tract Infection", "Skin and Soft Tissue Infection"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-26",
      slug: "multivitamin-multimineral",
      brandName: "Multivit-Forte",
      composition: "Multivitamin + Multimineral Formulation",
      dosageForm: "Tablet",
      packing: "15 Tablets Strip",
      rangeSlug: "general",
      rangeName: "General Medicine",
      imageUrl: getAssetUrl("/images/pack3.png"),
      description: "Broad-spectrum vitamin and mineral supplement for nutritional support.",
      indications: ["Nutritional Supplementation"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-27",
      slug: "calcium-vitamin-d3",
      brandName: "Calcium-D3",
      composition: "Calcium Carbonate 500mg + Vitamin D3 250IU",
      dosageForm: "Tablet",
      packing: "15 Tablets Strip",
      rangeSlug: "general",
      rangeName: "General Medicine",
      imageUrl: getAssetUrl("/images/pack1.png"),
      description: "Calcium and Vitamin D3 supplement formulation for bone health support.",
      indications: ["Calcium Deficiency", "Bone Health Support"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-28",
      slug: "paracetamol-650mg",
      brandName: "Paracet-650",
      composition: "Paracetamol 650mg",
      dosageForm: "Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "general",
      rangeName: "General Medicine",
      imageUrl: getAssetUrl("/images/pack2.png"),
      description: "Analgesic and antipyretic formulation for fever and mild to moderate pain.",
      indications: ["Fever", "Mild to Moderate Pain"],
      storage: "Store below 30°C in a dry place."
    },
    {
      id: "prod-29",
      slug: "diclofenac-sodium-sr",
      brandName: "Diclo-SR",
      composition: "Diclofenac Sodium 100mg SR",
      dosageForm: "Sustained-Release Tablet",
      packing: "10x10 Tablets Blister Pack",
      rangeSlug: "general",
      rangeName: "General Medicine",
      imageUrl: getAssetUrl("/images/pack3.png"),
      description: "NSAID formulation for pain and inflammation management.",
      indications: ["Musculoskeletal Pain", "Post-Operative Pain"],
      storage: "Store below 30°C in a dry place."
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
      imageUrl: getAssetUrl("/images/hero_workout.png"),
      content: [
        "Metformin remains the first-line molecule across most Type 2 Diabetes prescriptions, but the fixed-dose combination a stockist carries matters as much as the base molecule itself. Plain Metformin Hydrochloride 500mg still moves well for newly diagnosed, treatment-naive patients where a physician wants to titrate a single molecule before adding anything else.",
        "Once a patient plateaus on metformin alone, prescribers typically move to a two-drug combination. Metformin with a sulfonylurea such as Glimepiride is the most commonly stocked pairing in Tier 2 and Tier 3 towns, largely because it is inexpensive and the dosing schedule is familiar to both physicians and patients.",
        "Metformin with a DPP-4 inhibitor such as Vildagliptin or Sitagliptin is gaining share in metro and semi-urban markets, where prescribers favour it for a lower hypoglycaemia risk profile compared to sulfonylurea-based combinations. Stockists serving diagnostic centres and endocrinology clinics tend to see faster movement on this pairing.",
        "Triple fixed-dose combinations — Metformin with Glimepiride and Pioglitazone, for instance — are typically reserved for patients who have not achieved glycemic control on a two-drug regimen. These SKUs sell in smaller volumes but carry stronger margins, and a district territory with an established diabetic patient base can usually support at least one triple-combination listing.",
        "For a new PCD partner building out a diabetic range, the practical approach is to stock one option from each tier — a standalone Metformin, one sulfonylurea combination, one DPP-4 combination, and one triple combination — rather than carrying multiple brands within the same tier. This keeps working capital lower while still covering the prescribing patterns a distributor is likely to encounter across a district."
      ]
    },
    {
      slug: "pcd-territory-checklist",
      category: "Distribution",
      title: "What a PCD partner should ask before signing a district territory",
      date: "05 AUG 2026",
      readTime: "6 MIN READ",
      imageUrl: getAssetUrl("/images/hero_family.png"),
      content: [
        "A district territory agreement is only as good as the questions asked before it is signed. The single most important clause to verify is monopoly scope — whether the rights granted are exclusive for the full range, or only for a subset of SKUs within it. Partners are sometimes surprised to find a competing distributor active in the same district on products outside their agreed list.",
        "Ask for the minimum order quantity in writing, along with what happens if a quarter's order falls short. Some agreements treat a missed MOQ as a soft warning; others treat it as grounds to open the territory to another partner. Knowing which applies before signing avoids a difficult conversation later.",
        "Product allocation is the next area to clarify. A distributor should know, SKU by SKU, which products are guaranteed for supply versus which are subject to availability. Ranges with newly launched formulations sometimes carry supply constraints in the first two to three quarters — that is normal, but it should be disclosed upfront rather than discovered after the first short-shipment.",
        "Delivery timelines and freight terms matter more in Tier 3 and Tier 4 districts than in metro territories. Confirm whether freight is borne by the company or the distributor, what the standard dispatch-to-delivery window looks like, and whether there is a defined process for urgent or emergency stock requests.",
        "Finally, ask how pricing changes are communicated. A distributor holding inventory at one price point needs advance notice of any MRP or trade margin revision, ideally in writing and with a defined notice period, so existing stock in the pipeline is not caught mid-transition."
      ]
    },
    {
      slug: "tolperisone-paracetamol-combination",
      category: "Molecule Note",
      title: "Tolperisone with paracetamol: where the muscle relaxant combination fits",
      date: "28 JUL 2026",
      readTime: "4 MIN READ",
      imageUrl: getAssetUrl("/images/hero_lifestyle.png"),
      content: [
        "Tolperisone is a centrally acting muscle relaxant that works by reducing excessive muscle tone without the heavy sedation associated with older relaxants in the same class. Paired with Paracetamol, the combination addresses two components of an acute musculoskeletal complaint at once — the muscle spasm itself, and the pain that accompanies it.",
        "This pairing is most commonly prescribed for acute lower back pain, cervical spondylosis-related muscle spasm, and post-traumatic muscular pain following minor injury. Because Tolperisone does not carry the same drowsiness profile as centrally sedating relaxants, it is often preferred for patients who need to remain functional during the day — a relevant consideration for a working-age patient population.",
        "For a stockist, this combination sits in a different prescribing lane from NSAID-based combinations like Aceclofenac with Paracetamol. NSAID combinations target inflammation directly and are typically reached for first in orthopaedic and post-operative settings. The Tolperisone and Paracetamol combination is reached for when spasm, rather than inflammation, is the primary complaint — general physicians and orthopaedic clinics tend to prescribe it for exactly that distinction.",
        "Carrying both categories — an NSAID combination and a muscle-relaxant combination — within the same orthopaedic range gives a distributor coverage across the two most common reasons a musculoskeletal prescription is written, without needing to stock multiple brands within either category."
      ]
    }
  ],
  contact: {
    phone: "+91 998 229 9977",
    whatsapp: "+91 964 982 4365",
    email: "medelishealthcare@gmail.com",
    address: "C.O. : 131, 1st floor, 2nd A Cross, Magdi road",
    location: "Bengaluru-56002"
  }
};
