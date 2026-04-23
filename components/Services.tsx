import Link from "next/link";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-indigo-400" aria-hidden>
        <path d="M3.18 23.76c.3.17.64.24.99.19l13.19-11.94-2.93-2.93L3.18 23.76zm16.4-13.09L16.4 8.5l-3.04 2.75 3.04 2.75 3.21-1.83a1.5 1.5 0 000-2.6l-.03.3zM3.06.29A1.5 1.5 0 001.5 1.75v20.5a1.5 1.5 0 001.56 1.51l13.37-12.1L3.06.29zm10.67 9.65L3.94.76l9.85 8.93-.06.25z" />
      </svg>
    ),
    title: "Android App Development",
    description:
      "End-to-end Flutter apps built and published on Google Play. From UI design to Firebase backend — shipped fast, without cutting corners.",
    bullets: ["Flutter & Dart", "Firebase & Firestore", "Google Play publishing", "Updates & maintenance"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-indigo-400" aria-hidden>
        <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h16V5H4zm2 3h12v2H6V8zm0 4h8v2H6v-2z" />
      </svg>
    ),
    title: "Web Development",
    description:
      "Modern, performant websites and web applications built with Next.js, React, and TypeScript. Clean design, fast load times, and SEO-ready.",
    bullets: ["Next.js & React", "TypeScript", "Responsive design", "SEO & performance"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
            Services
          </p>
          <h2 className="text-4xl font-extrabold text-white">What I Build</h2>
          <p className="mt-3 text-zinc-400 max-w-lg">
            Android apps and web experiences — designed to be useful, fast, and
            built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-indigo-500/40 transition-colors"
            >
              <div className="mb-5">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
          >
            Start a project →
          </Link>
        </div>
      </div>
    </section>
  );
}
