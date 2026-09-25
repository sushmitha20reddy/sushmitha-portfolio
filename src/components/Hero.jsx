import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-[10%] top-[25%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute right-[10%] top-[25%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[140px]" />

      {/* Hero content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

        {/* LEFT */}
        <div>

          {/* Availability badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300 sm:text-sm">
            <Sparkles size={14} />
            Available for Full-Stack Opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Karla Sushmitha
            <br />
            Reddy
          </h1>

          {/* Main gradient heading */}
          <h2 className="mt-6 max-w-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-4xl font-bold leading-[1.1] text-transparent sm:text-5xl lg:text-6xl">
            Full-Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I build intelligent applications using AI, machine learning and
            modern web technologies — turning real-world problems into
            practical solutions.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              View Projects
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06]"
            >
              Get in Touch
            </a>

          </div>

          {/* Tech stack */}
          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-500 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
            <span>•</span>
            <span>Python</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>FastAPI</span>
            <span>•</span>
            <span>PostgreSQL</span>
          </div>

        </div>

        {/* RIGHT — PROFILE CARD */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">

          {/* Glow */}
          <div className="absolute inset-10 rounded-full bg-cyan-500/10 blur-[100px]" />

          {/* Card */}
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.025] p-3 shadow-2xl backdrop-blur-xl">

            {/* Profile Photo */}
<div className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080d18] shadow-2xl">

  {/* Decorative glow */}
  <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[80px]" />

  {/* Profile image */}
  <img
    src="/profile.jpeg"
    alt="Karla Sushmitha Reddy"
    className="relative z-10 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
  />

  {/* Bottom gradient */}
  <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-[#050914] via-[#050914]/50 to-transparent" />

  {/* Profile information */}
  <div className="absolute bottom-5 left-5 z-30">
    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
      Specialty
    </p>

    <p className="mt-1 text-sm font-semibold text-white">
      Full-Stack
    </p>
  </div>

</div>
            {/* Specialty badge */}
            <div className="absolute bottom-8 left-8 rounded-xl border border-white/10 bg-[#080d18]/90 px-5 py-3 shadow-xl backdrop-blur-xl">

              <p className="text-[10px] uppercase tracking-wider text-gray-500">
                Specialty
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Full-Stack
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}