export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-indigo-700/20 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto">
        <p className="animate-fade-up inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-indigo-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Independent Android Developer
        </p>

        <h1 className="animate-fade-up delay-100 text-5xl sm:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6">
          Lotus<span className="text-indigo-400">Efkt</span>
        </h1>

        <p className="animate-fade-up delay-200 max-w-xl text-lg text-zinc-400 leading-relaxed mb-10">
          Building purposeful Android apps — from preserving Setswana culture
          and language to sharpening chess minds and simplifying home finance.
        </p>

        <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
          <a
            href="#apps"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
          >
            View Apps
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold transition-colors"
          >
            About Me
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex flex-wrap gap-10">
          {[
            { value: "6+", label: "Apps Published" },
            { value: "3", label: "Categories" },
            { value: "Android", label: "Platform" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-white">{s.value}</p>
              <p className="text-sm text-zinc-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
