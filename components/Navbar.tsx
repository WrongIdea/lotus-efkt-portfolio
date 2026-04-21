"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg tracking-tight text-white">
          Lotus<span className="text-indigo-400">Efkt</span>
        </span>
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="/#apps" className="hover:text-white transition-colors">
            Apps
          </a>
          <a href="/#about" className="hover:text-white transition-colors">
            About
          </a>
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
      </nav>
    </header>
  );
}
