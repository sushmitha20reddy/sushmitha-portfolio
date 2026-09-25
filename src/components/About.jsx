"use client";

import { Brain, Code2, GraduationCap, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Exploring AI, machine learning and GenAI to build intelligent solutions for real-world problems.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building modern web applications with Next.js, FastAPI, Python, databases and responsive UI.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Currently pursuing B.Tech in Computer Science with a specialization in Artificial Intelligence & Machine Learning.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050914] px-6 py-24 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building with{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              curiosity &amp; purpose
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m a Computer Science student specializing in AI &amp; Machine
            Learning, with a strong interest in building intelligent,
            practical and user-focused applications.
          </p>
        </div>

        {/* Main About Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.95fr]">

          {/* Introduction Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-medium text-slate-400">
                Who I am
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
                AI/ML enthusiast with a passion for building useful
                technology.
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                My interests span artificial intelligence, machine learning,
                GenAI and full-stack development. I enjoy taking an idea,
                understanding the problem behind it and turning it into a
                working application.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                B.Tech CSE — AI &amp; ML
              </div>

              <div className="mt-3 flex items-center gap-3 text-sm text-slate-300">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                2023 — 2027
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-slate-600 transition duration-300 group-hover:text-cyan-400" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}