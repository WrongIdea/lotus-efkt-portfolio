export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <span>
          © {new Date().getFullYear()}{" "}
          <span className="text-zinc-300 font-medium">Lotus Efkt</span>. All
          rights reserved.
        </span>
        <a
          href="https://play.google.com/store/apps/developer?id=Lotus+Effect"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition-colors"
        >
          Google Play Developer Page →
        </a>
      </div>
    </footer>
  );
}
