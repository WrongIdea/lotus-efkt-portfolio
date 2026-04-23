const skills = [
  "Flutter", "Dart", "Android", "Firebase",
  "Firestore", "Next.js", "TypeScript", "Kotlin",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
            About
          </p>
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Who is Lotus Efkt?
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            I&apos;m an independent Android and web developer from South Africa,
            passionate about building things that matter. My Android work spans
            cultural preservation — keeping Setswana language and proverbs alive
            digitally — to chess education and practical finance tools.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            On the web side I build fast, modern sites and web apps using
            Next.js, React, and TypeScript. Whether it&apos;s a portfolio, a
            landing page, or a full-stack web application — I focus on
            simplicity, performance, and real-world usefulness.
          </p>
        </div>

        {/* Right — skills */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-5">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 font-medium"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-800 flex items-center gap-4">
            <a
              href="https://play.google.com/store/apps/developer?id=LotusEffect"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
                <path d="M3.18 23.76c.3.17.64.24.99.19l13.19-11.94-2.93-2.93L3.18 23.76zm16.4-13.09L16.4 8.5l-3.04 2.75 3.04 2.75 3.21-1.83a1.5 1.5 0 000-2.6l-.03.3zM3.06.29A1.5 1.5 0 001.5 1.75v20.5a1.5 1.5 0 001.56 1.51l13.37-12.1L3.06.29zm10.67 9.65L3.94.76l9.85 8.93-.06.25z" />
              </svg>
              All apps on Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
