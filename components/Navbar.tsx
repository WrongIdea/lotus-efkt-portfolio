"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu when navigating
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#09090b]/95 backdrop-blur border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="font-bold text-lg tracking-tight text-white">
          Lotus<span className="text-indigo-400">Efkt</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6 text-sm text-zinc-400">
          <a href="/#apps" className="hover:text-white transition-colors">Apps</a>
          <a href="/#about" className="hover:text-white transition-colors">About</a>
          <a
            href="https://play.google.com/store/apps/developer?id=LotusEffect"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Play Store
          </a>
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-zinc-300 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-300 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-300 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-6 pt-2 gap-4 border-t border-zinc-800 bg-[#09090b]">
          <a
            href="/#apps"
            onClick={closeMenu}
            className="text-zinc-300 hover:text-white text-sm py-2 transition-colors"
          >
            Apps
          </a>
          <a
            href="/#about"
            onClick={closeMenu}
            className="text-zinc-300 hover:text-white text-sm py-2 transition-colors"
          >
            About
          </a>
          <a
            href="https://play.google.com/store/apps/developer?id=LotusEffect"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="text-zinc-300 hover:text-white text-sm py-2 transition-colors"
          >
            Play Store ↗
          </a>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-center py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
