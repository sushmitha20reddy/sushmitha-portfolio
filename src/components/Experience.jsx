import { ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050914] px-6 py-28 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Experience & Education
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              journey
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
            A snapshot of my academic journey and hands-on experience in
            artificial intelligence and software development.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {/* Experience */}
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 lg:p-9">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Briefcase size={21} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Experience
                </p>

                <h3 className="mt-1 text-xl font-semibold text-white">
                  Internship
                </h3>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative mt-10 border-l border-white/10 pl-7">

              <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-lg font-semibold text-white">
                  Artificial Intelligence Intern
                </h4>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300">
                  May 2025 – June 2025
                </span>
              </div>

              <p className="mt-2 text-sm font-medium text-cyan-400">
                SkillDzire
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-500">
                <li className="flex gap-3">
                  <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                  Completed an Artificial Intelligence internship under the
                  AICTE initiative.
                </li>

                <li className="flex gap-3">
                  <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                  Learned AI/ML fundamentals and practical applications.
                </li>

                <li className="flex gap-3">
                  <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                  Developed understanding of intelligent systems and
                  data-driven technologies.
                </li>
              </ul>

            </div>
          </div>

          {/* Education */}
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 lg:p-9">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-400/10 text-purple-400">
                <GraduationCap size={21} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Education
                </p>

                <h3 className="mt-1 text-xl font-semibold text-white">
                  Academic Journey
                </h3>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative mt-10 space-y-10 border-l border-white/10 pl-7">

              {/* B.Tech */}
              <div className="relative">
                <div className="absolute -left-[33px] top-1 h-2.5 w-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-400/40" />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold text-white">
                    B.Tech – Computer Science (AI & ML)
                  </h4>

                  <span className="text-xs text-gray-500">
                    2023 – 2027
                  </span>
                </div>

                <p className="mt-2 text-sm text-purple-400">
                  Geethanjali College of Engineering and Technology
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  Current CGPA: <span className="text-gray-300">7.6</span>
                </p>
              </div>

              {/* Intermediate */}
              <div className="relative">
                <div className="absolute -left-[33px] top-1 h-2.5 w-2.5 rounded-full bg-white/30" />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold text-white">
                    Intermediate (MPC)
                  </h4>

                  <span className="text-xs text-gray-500">
                    2020 – 2022
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-400">
                  Narayana Junior College
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  Percentage: <span className="text-gray-300">85%</span>
                </p>
              </div>

              {/* School */}
              <div className="relative">
                <div className="absolute -left-[33px] top-1 h-2.5 w-2.5 rounded-full bg-white/20" />

                <h4 className="text-lg font-semibold text-white">
                  Secondary School
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Dr. K.K.R Gowtham Concept High School
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  GPA: <span className="text-gray-300">10</span>
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}