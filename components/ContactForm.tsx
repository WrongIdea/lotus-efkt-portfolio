"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace YOUR_FORM_ID with the ID from formspree.io/new
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center bg-zinc-900 border border-emerald-500/30 rounded-2xl p-12 gap-4">
        <div className="text-5xl">✅</div>
        <h3 className="text-xl font-bold text-white">Message sent!</h3>
        <p className="text-zinc-400">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Type of Project *
        </label>
        <select
          name="project_type"
          required
          defaultValue=""
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm"
        >
          <option value="" disabled>
            Select one...
          </option>
          <option value="new_app">Build a new Android app</option>
          <option value="publish">Publish my existing app to Play Store</option>
          <option value="feature">Add features to an existing app</option>
          <option value="fix">Bug fixes / maintenance</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Describe Your App Idea *
        </label>
        <textarea
          name="description"
          required
          rows={5}
          placeholder="Tell me what your app should do, who it's for, and any features you have in mind..."
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Budget Range
        </label>
        <select
          name="budget"
          defaultValue=""
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm"
        >
          <option value="" disabled>
            Select a range...
          </option>
          <option value="under_5k">Under R5 000</option>
          <option value="5k_15k">R5 000 – R15 000</option>
          <option value="15k_30k">R15 000 – R30 000</option>
          <option value="30k_plus">R30 000+</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold transition-colors"
      >
        {status === "loading" ? "Sending..." : "Send Message →"}
      </button>

      <p className="text-xs text-zinc-600 text-center">
        I typically respond within 24 hours.
      </p>
    </form>
  );
}
