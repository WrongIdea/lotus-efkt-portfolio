import AppCard, { type App } from "./AppCard";

const apps: App[] = [
  {
    name: "Diane le Maele",
    tagline: "Setswana Proverbs Collection",
    description:
      "A rich collection of Setswana proverbs with meanings, usage examples, and cultural context. Preserve and explore the wisdom passed down through generations in Botswana.",
    category: "Language & Culture",
    icon: "📖",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.lotuseffect.diane_le_maele",
  },
  {
    name: "Setswana to English",
    tagline: "Dictionary & Translator",
    description:
      "A powerful Setswana–English dictionary with translations, pronunciation guides, and example sentences. Bridge the language gap and learn Setswana with ease.",
    category: "Language & Culture",
    icon: "🌍",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.lotuseffect.SetswanaPro",
  },
  {
    name: "ChessForge",
    tagline: "Sicilian Defense Trainer",
    description:
      "Master the Sicilian Defense — chess's most popular and dynamic opening. Study key variations, traps, and grandmaster ideas with interactive move-by-move lessons.",
    category: "Chess",
    icon: "♟️",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.lotuseffect.siciliandefense",
  },
  {
    name: "Caro-Kann Defense",
    tagline: "Chess Opening Course",
    description:
      "Deep-dive into the solid Caro-Kann Defense with structured lessons, tactical exercises, and annotated games. A must-have for club players seeking a reliable response to 1.e4.",
    category: "Chess",
    icon: "♜",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.lotuseffect.carokann",
  },
  {
    name: "Scotch Gambit",
    tagline: "Aggressive Chess Opening",
    description:
      "Learn the sharp and aggressive Scotch Gambit with annotated games, key tactical motifs, and practical exercises. Attack from move one and catch opponents off guard.",
    category: "Chess",
    icon: "⚔️",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.lotuseffect.chesstutor",
  },
  {
    name: "BondCalc",
    tagline: "Loan & Bond Calculator",
    description:
      "A clean, fast bond and loan calculator built for South African homebuyers. Calculate monthly repayments, total interest, and view full amortization schedules instantly.",
    category: "Finance",
    icon: "🏠",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bondcalc.app",
  },
];

export default function AppsGrid() {
  return (
    <section id="apps" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl font-extrabold text-white">Published Apps</h2>
          <p className="mt-3 text-zinc-400 max-w-lg">
            Six apps across language preservation, chess education, and personal
            finance — all available on Google Play.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
