import { ArrowDownToLine, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050914] px-6 py-24 lg:py-28"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">

        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 sm:p-12 lg:p-16">

          {/* Decorative gradient */}
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-purple-500/10 blur-[80px]" />

          <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">

            {/* Text */}
            <div className="max-w-2xl">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <FileText size={21} />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Resume
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
                Want to know more about my work?
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
                Explore my education, experience, projects, technical skills
                and certifications in my resume.
              </p>

            </div>

            {/* Button */}
            <a
              href="/sushmitha20reddy.pdf"
              download
              className="group flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              Download Resume

              <ArrowDownToLine
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}