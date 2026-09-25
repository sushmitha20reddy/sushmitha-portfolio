import {
  BrainCircuit,
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "AI & Machine Learning",
    description: "Building intelligent and data-driven applications.",
    icon: BrainCircuit,
    accent: "cyan",
    skills: ["Artificial Intelligence", "Machine Learning", "GenAI"],
  },
  {
    title: "Frontend Development",
    description: "Creating responsive and modern user interfaces.",
    icon: Code2,
    accent: "purple",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing APIs and application backends.",
    icon: Server,
    accent: "cyan",
    skills: ["Python", "FastAPI", "PHP", "JSP", "Servlets"],
  },
  {
    title: "Database Management",
    description: "Working with relational databases and application data.",
    icon: Database,
    accent: "purple",
    skills: ["PostgreSQL", "MySQL", "Postman", "XAMPP",],
  },
  {
    title: "Developer Tools",
    description: "Tools and platforms used throughout development.",
    icon: Wrench,
    accent: "cyan",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "VS Code",
      "XAMPP",
      "Linux",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#070b14] px-6 py-28 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              work with
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-500 sm:text-lg">
            A collection of technologies and tools I use to build AI-powered
            applications and modern web solutions.
          </p>

        </div>

        {/* Skills grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => {
            const Icon = group.icon;

            const isPurple = group.accent === "purple";

            return (
              <div
                key={group.title}
                className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]"
              >

                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    isPurple
                      ? "bg-purple-400/10 text-purple-400"
                      : "bg-cyan-400/10 text-cyan-400"
                  }`}
                >
                  <Icon size={23} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {group.description}
                </p>

                {/* Skill tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-gray-400 transition duration-300 group-hover:border-white/10 group-hover:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom tech strip */}
        <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-xs text-gray-500 sm:text-sm">

            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

            <span>Python</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>FastAPI</span>
            <span>•</span>
            <span>PostgreSQL</span>
            <span>•</span>
            <span>MySQL</span>
            <span>•</span>
            <span>Postman</span>
            <span>.</span>
            <span>Git</span>
            <span>•</span>
            <span>Vercel</span>

          </div>
        </div>

      </div>
    </section>
  );
}