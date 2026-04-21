import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hire Me — Lotus Efkt",
  description:
    "Need an Android app built and published? Lotus Efkt builds and publishes Flutter apps on Google Play for individuals and businesses.",
};

const services = [
  {
    icon: "📱",
    title: "Custom Android App",
    description:
      "End-to-end Flutter app development tailored to your idea — from UI design to a polished, working product.",
  },
  {
    icon: "🚀",
    title: "Google Play Publishing",
    description:
      "I handle the full Play Store submission process: app signing, store listing, screenshots, and release management.",
  },
  {
    icon: "🔥",
    title: "Firebase Backend",
    description:
      "Authentication, Firestore database, cloud storage, and real-time features — all wired up and ready to scale.",
  },
  {
    icon: "🔄",
    title: "Updates & Maintenance",
    description:
      "Ongoing support, bug fixes, and feature updates to keep your app running smoothly after launch.",
  },
];

const process = [
  { step: "01", title: "Tell me your idea", desc: "Fill in the contact form with what you want to build." },
  { step: "02", title: "Get a quote", desc: "I'll review your requirements and send a scope and price estimate." },
  { step: "03", title: "Build & review", desc: "I build the app in sprints, sharing progress for your feedback." },
  { step: "04", title: "Launch", desc: "I publish to Google Play and hand over everything you need." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
              Hire Me
            </p>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-5 leading-tight">
              Let&apos;s Build Your<br />
              <span className="text-indigo-400">Android App</span>
            </h1>
            <p className="max-w-xl mx-auto text-zinc-400 text-lg leading-relaxed">
              Have an app idea but don&apos;t know how to build it? I design,
              develop, and publish Flutter Android apps on Google Play — you
              focus on your business, I handle the tech.
            </p>
          </div>

          {/* Services */}
          <div className="mb-24">
            <h2 className="text-2xl font-bold text-white mb-8">What I offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500/40 transition-colors"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-white font-bold mb-2">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-24">
            <h2 className="text-2xl font-bold text-white mb-8">How it works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {process.map((p) => (
                <div key={p.step} className="flex flex-col gap-3">
                  <span className="text-4xl font-extrabold text-zinc-800">{p.step}</span>
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-1">Quick turnaround</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Most simple apps are built and published within 2–4 weeks
                  depending on complexity.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-1">You own everything</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  All source code and Play Store assets are handed over to you
                  at the end of the project.
                </p>
              </div>
              <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-2xl p-6">
                <h3 className="text-indigo-300 font-bold mb-1">Already have an app?</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  I also help with bug fixes, feature additions, and Play Store
                  optimisation for existing Flutter apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
