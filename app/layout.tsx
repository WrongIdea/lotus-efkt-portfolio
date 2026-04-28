import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Lotus Efkt — Mobile App Developer",
  description:
    "Portfolio of Lotus Efkt — independent mobile app developer building useful tools for language, chess, and finance on Android.",
  openGraph: {
    title: "Lotus Efkt — Mobile App Developer",
    description:
      "Independent mobile app developer building useful tools for language, chess, and finance.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#09090b] text-zinc-200 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
