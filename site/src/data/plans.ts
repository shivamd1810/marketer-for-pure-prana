// 30-Day Ritual Plans — one per product, keyed by product slug.
// Powers /free-wellnessplan/<slug> pages. Structure/function language only:
// never "treat", "cure", "prevent", or disease names.

export interface RoadmapStage {
  period: string;
  guidance: string;
}

export interface RitualPlan {
  slug: string;
  /** The outcome the buyer purchased, used in headlines ("steadier energy") */
  outcome: string;
  dosing: string;
  roadmap: RoadmapStage[];
  pairings: string[];
  mistakes: string[];
  crossSellSlug: string;
  crossSellReason: string;
}

export const plans: Record<string, RitualPlan> = {
  "power-blend": {
    slug: "power-blend",
    outcome: "steadier energy and stamina",
    dosing:
      "Take 2 capsules with breakfast. Take with food — a little healthy fat helps your body absorb Ashwagandha KSM-66 and Shilajit. Same time every day beats \"perfect\" timing.",
    roadmap: [
      { period: "Days 1–3", guidance: "Lock in the habit. Put the bottle next to your coffee maker or breakfast plate so you never skip." },
      { period: "Week 1", guidance: "Your routine settles in. Adaptogens like Ashwagandha build gradually — consistency matters more than anything you feel yet." },
      { period: "Weeks 2–3", guidance: "This is when most people notice steadier energy and stamina support through the day. Keep the same time, same meal." },
      { period: "Week 4", guidance: "Reassess how your energy and endurance feel vs. day 1 — and reorder before you run out. A 60-count bottle lasts ~30 days at 2/day." },
    ],
    pairings: [
      "Pair with a protein-forward breakfast — fuel and absorption in one move",
      "10 minutes of morning movement (walk, stretch, or light weights)",
      "Steady hydration — adaptogens work best in a well-hydrated body",
    ],
    mistakes: [
      "Taking it on an empty stomach (poor absorption, wasted capsules)",
      "Skipping days — adaptogens need daily consistency to build",
      "Quitting at day 5 because you don't \"feel it\" yet",
      "Doubling up after a missed dose — just resume your normal 2",
      "Storing the bottle somewhere hot and humid (like a bathroom shelf)",
    ],
    crossSellSlug: "brain-supplement",
    crossSellReason: "Calm, clear focus to match your new energy.",
  },

  "hormone-balance": {
    slug: "hormone-balance",
    outcome: "hormonal balance and calmer cycles",
    dosing:
      "Take 2 capsules daily with a meal — morning or evening, whichever you'll never skip. Shatavari and Ashwagandha are traditionally taken with food for comfort and absorption.",
    roadmap: [
      { period: "Days 1–3", guidance: "Anchor the habit to something you already do daily — breakfast or your evening wind-down." },
      { period: "Week 1", guidance: "Your body is getting acquainted. Herbs like Shatavari and Vitex work with your natural rhythm — gently and gradually." },
      { period: "Weeks 2–3", guidance: "Many women notice support for emotional balance and monthly comfort building in this window. Stay consistent right through your cycle." },
      { period: "Week 4", guidance: "A full cycle of consistency is the real milestone — note what's shifted, and reorder so you don't break the streak. 60 capsules ≈ 30 days." },
    ],
    pairings: [
      "A consistent sleep window — hormones love rhythm more than anything",
      "5 minutes of evening breathwork or journaling to support cortisol balance",
      "Seed-rich foods (flax, pumpkin) alongside your daily capsules",
    ],
    mistakes: [
      "Stopping during your period — consistency through the full cycle is the point",
      "Taking it on an empty stomach if it feels heavy — always pair with food",
      "Expecting a shift in week 1 — botanicals support your cycle over full cycles",
      "Skipping days, then doubling up — just resume your normal 2",
      "Storing it in a steamy bathroom — keep it cool and dry",
    ],
    crossSellSlug: "skin-hair-nails",
    crossSellReason: "Beauty from within pairs naturally with balance from within.",
  },

  "brain-supplement": {
    slug: "brain-supplement",
    outcome: "sharper focus and mental clarity",
    dosing:
      "Take 2 capsules with breakfast. Bacopa is traditionally taken with a meal containing some fat — it helps absorption and keeps your stomach happy.",
    roadmap: [
      { period: "Days 1–3", guidance: "Build the habit. Pair it with your first work session of the day so it becomes part of \"focus mode.\"" },
      { period: "Week 1", guidance: "Bacopa is famously gradual — researchers study it over 8–12 weeks. You're laying groundwork; don't grade it yet." },
      { period: "Weeks 2–3", guidance: "Many people start noticing calmer, clearer thinking under pressure here. Keep your dose with the same meal daily." },
      { period: "Week 4", guidance: "Compare your focus and mental stamina to day 1. Bacopa rewards the long game — reorder now so the streak doesn't break at day 30." },
    ],
    pairings: [
      "Do your hardest mental task in the 2 hours after your morning dose",
      "A 10-minute daily walk — movement is the most underrated focus tool",
      "Protect a consistent bedtime; memory consolidates during sleep",
    ],
    mistakes: [
      "Taking it on an empty stomach — Bacopa absorbs best with food and fat",
      "Judging it at day 5 — this herb builds over weeks, not days",
      "Inconsistent timing — same meal, every day",
      "Doubling up after missed days — just resume your normal 2",
      "Pairing it with an all-nighter culture — no herb out-runs sleep loss",
    ],
    crossSellSlug: "power-blend",
    crossSellReason: "Steady physical energy to power your sharper focus.",
  },

  "heart-health": {
    slug: "heart-health",
    outcome: "cardiovascular vitality and healthy circulation",
    dosing:
      "Take 2 capsules with your largest meal of the day. CoQ10 is fat-soluble — taking it with food meaningfully improves absorption. If you take any medication, check with your healthcare provider first.",
    roadmap: [
      { period: "Days 1–3", guidance: "Anchor it to dinner. Consistency with a substantial meal is the whole game for fat-soluble nutrients like CoQ10." },
      { period: "Week 1", guidance: "Arjuna has been used in Ayurveda for centuries as a daily heart tonic — its value is in the daily ritual, not a quick jolt." },
      { period: "Weeks 2–3", guidance: "Support for circulation and cardiovascular vitality builds quietly. Pair your capsules with the daily walk below." },
      { period: "Week 4", guidance: "Check in: energy on stairs, recovery after walks. Reorder before the bottle runs dry — 60 capsules ≈ 30 days at 2/day." },
    ],
    pairings: [
      "A 20-minute daily walk — the single best companion to any heart formula",
      "Swap one processed snack for a handful of nuts or berries",
      "A consistent sleep schedule — your cardiovascular system recovers at night",
    ],
    mistakes: [
      "Taking it without food — CoQ10 needs dietary fat to absorb well",
      "Treating it as a substitute for movement — it's a partner, not a replacement",
      "Skipping days — daily rhythm is how traditional heart tonics are used",
      "Doubling up after a missed dose — just resume your normal 2",
      "Not telling your doctor — always loop in your provider if you take medication",
    ],
    crossSellSlug: "immunity-booster",
    crossSellReason: "Round out your daily-defense ritual, season after season.",
  },

  "immunity-booster": {
    slug: "immunity-booster",
    outcome: "year-round immune defense",
    dosing:
      "Take 2 capsules daily with food — most people pair them with breakfast. The 10-herb blend (Elderberry, Giloy, Tulsi and more) is designed as a daily shield, not an occasional rescue.",
    roadmap: [
      { period: "Days 1–3", guidance: "Start the daily-shield habit now, while you feel fine — that's exactly the point of immune maintenance." },
      { period: "Week 1", guidance: "Your daily dose of antioxidants and traditional botanicals is stacking up. Nothing dramatic should \"happen\" — that's normal." },
      { period: "Weeks 2–3", guidance: "Daily immune maintenance is cumulative. Keep the streak through busy weeks and travel — those are the days it matters most." },
      { period: "Week 4", guidance: "One month of daily defense done. Reorder before you run out so seasonal transitions never catch you uncovered." },
    ],
    pairings: [
      "7+ hours of sleep — the immune system's non-negotiable",
      "A daily dose of sunlight or your vitamin D routine",
      "Wash-your-hands basics — herbs support defense; habits reduce exposure",
    ],
    mistakes: [
      "Only taking it when you feel run down — it's a daily maintenance formula",
      "Skipping it when traveling — that's when your routine matters most",
      "Taking it on an empty stomach if it feels strong — pair with food",
      "Doubling up after missed days — just resume your normal 2",
      "Storing it in heat and humidity — keep the herbs cool and dry",
    ],
    crossSellSlug: "heart-health",
    crossSellReason: "Pair daily defense with daily cardiovascular support.",
  },

  "skin-hair-nails": {
    slug: "skin-hair-nails",
    outcome: "radiant skin, stronger hair and healthier nails",
    dosing:
      "Take 2 capsules daily with a meal. Vitamin C in the formula supports your body's natural collagen production — consistency is what beauty-from-within runs on.",
    roadmap: [
      { period: "Days 1–3", guidance: "Put the bottle next to your skincare. Inside-out and outside-in, same ritual, same minute." },
      { period: "Week 1", guidance: "Skin renews on a multi-week cycle and hair grows ~1cm a month — you're investing in the next cycle, not tonight's mirror." },
      { period: "Weeks 2–3", guidance: "Hydration support and antioxidant protection are compounding. Many people notice their nails first — they're the fastest tell." },
      { period: "Week 4", guidance: "Compare skin, hair and nails to your day-1 photo (take one!). Reorder now — beauty-from-within only works unbroken." },
    ],
    pairings: [
      "A big glass of water with every dose — hyaluronic acid loves hydration",
      "SPF every morning — protect the collagen you're supporting",
      "Protein at every meal — hair and nails are built from it",
    ],
    mistakes: [
      "Expecting visible change in week 1 — skin and hair work in monthly cycles",
      "Skipping days — collagen support is a daily compounding habit",
      "Taking it without water or food",
      "Doubling up after missed days — just resume your normal 2",
      "Quitting at day 30 right when the cycle is turning over — reorder ahead",
    ],
    crossSellSlug: "hormone-balance",
    crossSellReason: "Balance from within is the other half of glow from within.",
  },

  "weight-management": {
    slug: "weight-management",
    outcome: "healthy metabolism and natural appetite balance",
    dosing:
      "Take 2 capsules about 30 minutes before your largest meal with a full glass of water. Garcinia and Green Tea Extract are traditionally timed before eating to support natural appetite management.",
    roadmap: [
      { period: "Days 1–3", guidance: "Set a daily phone reminder 30 minutes before your biggest meal — timing is this formula's superpower." },
      { period: "Week 1", guidance: "Notice your meals: many people find natural appetite awareness kicks in first. No jitters is by design — this is stimulant-gentle support." },
      { period: "Weeks 2–3", guidance: "Metabolic support compounds with your habits. Keep the pre-meal timing and the daily walk — that combination is the plan." },
      { period: "Week 4", guidance: "Measure what matters: energy, appetite patterns, how clothes fit. Reorder before day 30 — momentum is the asset you can't rebuy." },
    ],
    pairings: [
      "A 15-minute walk after your largest meal — the classic metabolism pairing",
      "Protein and fiber first on your plate — works with natural appetite balance",
      "A consistent eating window — your metabolism loves a schedule",
    ],
    mistakes: [
      "Taking it after the meal instead of ~30 minutes before",
      "Skipping the water — take every dose with a full glass",
      "Treating it as a license to skip movement or eat anything",
      "Skipping days, then doubling up — just resume your normal 2",
      "Quitting at day 10 — metabolic habits compound over the full month",
    ],
    crossSellSlug: "power-blend",
    crossSellReason: "Steady, crash-free energy to fuel your active routine.",
  },
};

/** Direct "write a review" link for a product's Amazon listing. */
export function amazonReviewUrl(asin: string): string {
  return `https://www.amazon.com/review/create-review?asin=${asin}`;
}
