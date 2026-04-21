import Image from "next/image";
import Link from "next/link";

type Category = "Language & Culture" | "Chess" | "Finance";

interface App {
  name: string;
  tagline: string;
  description: string;
  category: Category;
  image: string;
  playStoreUrl: string;
}

const categoryStyles: Record<Category, string> = {
  "Language & Culture": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Chess: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Finance: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function AppCard({ app }: { app: App }) {
  return (
    <div className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:bg-zinc-800/60 transition-all duration-300">
      {/* App image */}
      <div className="relative w-full aspect-square bg-zinc-800">
        <Image
          src={app.image}
          alt={app.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Category badge overlaid on image */}
        <span
          className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm ${categoryStyles[app.category]}`}
        >
          {app.category}
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-white mb-1">{app.name}</h3>
        <p className="text-sm font-medium text-indigo-400 mb-2">{app.tagline}</p>
        <p className="text-sm text-zinc-400 leading-relaxed flex-1">
          {app.description}
        </p>

        {/* Play Store link */}
        <Link
          href={app.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-indigo-600 border border-zinc-700 hover:border-indigo-500 text-sm font-semibold text-zinc-300 hover:text-white transition-all duration-200"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden>
            <path d="M3.18 23.76c.3.17.64.24.99.19l13.19-11.94-2.93-2.93L3.18 23.76zm16.4-13.09L16.4 8.5l-3.04 2.75 3.04 2.75 3.21-1.83a1.5 1.5 0 000-2.6l-.03.3zM3.06.29A1.5 1.5 0 001.5 1.75v20.5a1.5 1.5 0 001.56 1.51l13.37-12.1L3.06.29zm10.67 9.65L3.94.76l9.85 8.93-.06.25z" />
          </svg>
          Get it on Google Play
        </Link>
      </div>
    </div>
  );
}

export type { App };
