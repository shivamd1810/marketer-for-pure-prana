export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  amazonUrl: string;
  amazonAsin: string;
  price: string;
  reviews: number;
  rating: number;
  capsules: number;
  category: string;
  icon: string;
}

export const products: Product[] = [
  {
    slug: "hormone-balance",
    name: "Hormone Balance",
    tagline: "Natural Hormonal Wellness for Women",
    description:
      "A plant-based hormone balance supplement combining traditional Ayurvedic herbs Shatavari and Ashwagandha for PMS relief, menstrual support, and cortisol management. Designed to support women through every phase of their hormonal journey.",
    benefits: [
      "Supports healthy hormone levels naturally",
      "PMS relief and menstrual comfort",
      "Cortisol and stress management",
      "Promotes emotional balance and well-being",
      "Supports reproductive health",
    ],
    ingredients: [
      "Shatavari",
      "Ashwagandha",
      "Chasteberry (Vitex)",
      "DIM (Diindolylmethane)",
      "Black Cohosh",
      "Maca Root",
    ],
    amazonUrl: "https://www.amazon.com/dp/B0DZ23LJGJ",
    amazonAsin: "B0DZ23LJGJ",
    price: "$35.00",
    reviews: 489,
    rating: 4.8,
    capsules: 60,
    category: "Women's Health",
    icon: "🌸",
  },
  {
    slug: "power-blend",
    name: "Power Blend",
    tagline: "Vitality & Energy Support",
    description:
      "A potent Ayurvedic vitality formula designed to boost natural energy levels, enhance stamina, and support overall vitality. Combines time-tested adaptogenic herbs for sustained energy without the crash.",
    benefits: [
      "Boosts natural energy and stamina",
      "Enhances physical performance",
      "Supports healthy testosterone levels",
      "Reduces fatigue and improves endurance",
      "Adaptogenic stress resilience",
    ],
    ingredients: [
      "Ashwagandha KSM-66",
      "Shilajit",
      "Safed Musli",
      "Gokshura",
      "Kapikacchu",
      "Black Pepper Extract",
    ],
    amazonUrl: "https://www.amazon.com/dp/B0CWS4NCCF",
    amazonAsin: "B0CWS4NCCF",
    price: "$29.95",
    reviews: 129,
    rating: 4.7,
    capsules: 60,
    category: "Energy & Vitality",
    icon: "⚡",
  },
  {
    slug: "brain-supplement",
    name: "Bacopa & Ashwagandha",
    tagline: "Memory, Focus & Mental Clarity",
    description:
      "A natural nootropic formula rooted in 3,000+ years of Ayurvedic wisdom. Combines Brahmi (Bacopa Monnieri) with Ashwagandha and Gotu Kola to support memory retention, sharp focus, and mental clarity for men and women.",
    benefits: [
      "Enhances memory and learning ability",
      "Sharpens focus and concentration",
      "Supports mental clarity and cognitive function",
      "Reduces brain fog and mental fatigue",
      "Promotes calm, clear thinking under stress",
    ],
    ingredients: [
      "Bacopa Monnieri (Brahmi)",
      "Ashwagandha",
      "Gotu Kola",
      "Shankhpushpi",
      "Jyotishmati",
      "Black Pepper Extract",
    ],
    amazonUrl: "https://www.amazon.com/dp/B0G3P9BXHK",
    amazonAsin: "B0G3P9BXHK",
    price: "$29.95",
    reviews: 87,
    rating: 4.6,
    capsules: 60,
    category: "Brain Health",
    icon: "🧠",
  },
  {
    slug: "heart-health",
    name: "Arjuna & Hawthorn",
    tagline: "Cardiovascular Support & Circulation",
    description:
      "Combines the Ayurvedic power of Arjuna Bark (Terminalia arjuna) with Western Hawthorn Berry, CoQ10, Beet Root, and Grape Seed extract for comprehensive heart health. Supports healthy blood pressure, cardiac muscle strength, and cardiovascular vitality.",
    benefits: [
      "Supports healthy heart function",
      "Promotes healthy blood pressure levels",
      "Strengthens cardiac muscle",
      "Enhances blood circulation",
      "Powerful antioxidant cardiovascular protection",
    ],
    ingredients: [
      "Arjuna Bark",
      "Hawthorn Berry",
      "CoQ10",
      "Beet Root",
      "Grape Seed Extract",
      "Omega-3",
    ],
    amazonUrl: "https://www.amazon.com/dp/B0G3KFMQ42",
    amazonAsin: "B0G3KFMQ42",
    price: "$29.95",
    reviews: 64,
    rating: 4.7,
    capsules: 60,
    category: "Heart Health",
    icon: "❤️",
  },
  {
    slug: "immunity-booster",
    name: "Elderberry & Giloy",
    tagline: "10-Herb Immune Defense",
    description:
      "A comprehensive 10-herb immune support formula combining Black Elderberry with traditional Ayurvedic powerhouses including Giloy (Guduchi), Tulsi (Holy Basil), Neem, Turmeric, and Ginger. Your daily shield for year-round immune defense and respiratory wellness.",
    benefits: [
      "Strengthens natural immune response",
      "Seasonal defense and respiratory support",
      "Rich in antioxidants and anti-inflammatory compounds",
      "Supports upper respiratory health",
      "Daily immune system maintenance",
    ],
    ingredients: [
      "Black Elderberry",
      "Giloy (Guduchi)",
      "Tulsi (Holy Basil)",
      "Neem",
      "Turmeric",
      "Ginger",
      "Amla",
      "Licorice Root",
      "Pippali",
      "Black Pepper",
    ],
    amazonUrl: "https://www.amazon.com/dp/B0G3KPT191",
    amazonAsin: "B0G3KPT191",
    price: "$29.95",
    reviews: 52,
    rating: 4.7,
    capsules: 60,
    category: "Immunity",
    icon: "🛡️",
  },
  {
    slug: "skin-hair-nails",
    name: "Glutathione & Collagen",
    tagline: "Radiant Skin, Hair & Nails",
    description:
      "A beauty-from-within formula combining the master antioxidant Glutathione with Collagen peptides and Ayurvedic botanicals. Supports glowing skin, strong hair, and healthy nails from the inside out.",
    benefits: [
      "Promotes radiant, glowing skin",
      "Strengthens hair and reduces breakage",
      "Supports nail health and growth",
      "Powerful antioxidant protection",
      "Supports natural collagen production",
    ],
    ingredients: [
      "Glutathione",
      "Marine Collagen Peptides",
      "Vitamin C",
      "Hyaluronic Acid",
      "Amla",
      "Aloe Vera",
    ],
    amazonUrl: "https://www.amazon.com/dp/B0G3KDYKY4",
    amazonAsin: "B0G3KDYKY4",
    price: "$29.95",
    reviews: 73,
    rating: 4.8,
    capsules: 60,
    category: "Beauty",
    icon: "✨",
  },
  {
    slug: "weight-management",
    name: "Green Tea & Garcinia",
    tagline: "Natural Metabolism & Weight Support",
    description:
      "A plant-based metabolic support formula combining Garcinia Cambogia, Green Tea Extract, Berberine, and Guggul to support natural fat metabolism, healthy appetite control, and sustained energy. No stimulant jitters, just clean metabolic support.",
    benefits: [
      "Supports healthy metabolism",
      "Natural appetite management",
      "Promotes fat metabolism",
      "Sustained energy without jitters",
      "Supports healthy blood sugar levels",
    ],
    ingredients: [
      "Garcinia Cambogia",
      "Green Tea Extract",
      "Berberine",
      "Green Coffee Bean",
      "Guggul",
      "Black Pepper Extract",
    ],
    amazonUrl: "https://www.amazon.com/dp/B0G3KKQ53V",
    amazonAsin: "B0G3KKQ53V",
    price: "$29.95",
    reviews: 41,
    rating: 4.6,
    capsules: 60,
    category: "Weight Management",
    icon: "🍃",
  },
];
