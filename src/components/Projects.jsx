"use client";

import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

function GithubIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.08 1.54 1.07 1.54 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.02c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.28 10.28 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

const projects = [
  {
    title: "AI-Driven Intelligent Resource Management Platform",
    description:
      "An AI-powered academic resource platform designed to help students discover, manage and interact with study materials through intelligent features.",
    image: "/resource-platform.png",
    featured: true,
    technologies: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Tailwind CSS",
      "AI/ML",
    ],
    features: [
      "AI Assistant",
      "Quiz Generator",
      "Resume Analyzer",
      "Study Resource Management",
      "Performance Analytics",
      "Authentication",
    ],
    github:
      "https://github.com/sushmitha20reddy",
  },

  {
    title: "Food Ordering System",
    description:
      "A full-stack food ordering web application with user authentication, food browsing, cart management, checkout and an admin panel.",
    technologies: [
      "JSP",
      "Servlets",
      "MySQL",
      "HTML",
      "CSS",
      "PHP",
    ],
    features: [
      "User Login",
      "Food Cart",
      "Checkout",
      "Admin Panel",
    ],
    github:
      "https://github.com/sushmitha20reddy",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050914] px-6 py-24 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[10%] top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-[5%] bottom-20 h-80 w-80 rounded-full bg-purple-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Projects that turn ideas into{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              working solutions
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            A selection of projects where I combine AI, software development
            and modern web technologies to build practical applications.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-8">

          {/* FEATURED PROJECT */}
          <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] transition duration-500 hover:border-cyan-400/20">

            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

              {/* Project Screenshot */}
              <div className="relative min-h-[320px] overflow-hidden border-b border-white/10 bg-[#080d18] lg:min-h-[500px] lg:border-b-0 lg:border-r">

                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

                {/* Browser Frame */}
                <div className="absolute inset-5 overflow-hidden rounded-2xl border border-white/10 bg-[#030711] shadow-2xl sm:inset-8">

                  {/* Browser Header */}
                  <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                    <div className="ml-3 hidden h-5 flex-1 items-center rounded-md bg-white/[0.04] px-3 text-[10px] text-slate-600 sm:flex">
                      ai-resource-platform.local
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="relative h-[calc(100%-2.5rem)] overflow-hidden">
                    <img
                      src="/resource-platform.png"
                      alt="AI-Driven Intelligent Resource Management Platform"
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050914]/30 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Featured Badge */}
                <div className="absolute left-8 top-8 z-10 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-[#050914]/80 px-3 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" />
                  Featured Project
                </div>
              </div>

              {/* Project Information */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                <p className="text-sm font-medium text-cyan-400">
                  AI • Full-Stack
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {projects[0].title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  {projects[0].description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {projects[0].technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-7">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                    Key Features
                  </p>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {projects[0].features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-400"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* GitHub */}
                <div className="mt-9">
                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]"
                  >
                    <GithubIcon className="h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* SECOND PROJECT */}
          <article className="group rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-400/20 sm:p-9">

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-purple-400">
                    Web Application
                  </span>

                  <span className="h-1 w-1 rounded-full bg-slate-600" />

                  <span className="text-sm text-slate-500">
                    Full-Stack
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  {projects[1].title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {projects[1].description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[1].technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {projects[1].features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={projects[1].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-purple-400/30 hover:bg-white/[0.06]"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-purple-400" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}