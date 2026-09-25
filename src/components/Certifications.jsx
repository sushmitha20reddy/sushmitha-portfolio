import {
  Award,
  Database,
  Globe,
  Code2,
  BrainCircuit,
  ExternalLink,
} from "lucide-react";

const certifications = [
  {
    title: "Artificial Intelligence Internship",
    issuer: "SkillDzire",
    date: "June 2025",
    description:
      "Certificate of Internship for completing an Artificial Intelligence internship.",
    icon: BrainCircuit,
    accent: "cyan",
  },
  {
    title: "CLA & CLP",
    issuer: "C Programming",
    date: "Certified",
    description:
      "Certified in CLA (C Programming) and CLP (Advanced C).",
    icon: Code2,
    accent: "purple",
  },
  {
    title: "Database & Java Programming",
    issuer: "Oracle Academy",
    date: "Training Completed",
    description:
      "Completed Oracle Academy training in Database and Java Programming.",
    icon: Database,
    accent: "cyan",
  },
  {
    title: "Cisco Networking Academy",
    issuer: "Cisco",
    date: "Certified",
    description:
      "Certified through Cisco Networking Academy.",
    icon: Globe,
    accent: "purple",
  },
  {
    title: "HTML, CSS & TypeScript",
    issuer: "Infosys Springboard",
    date: "Completed",
    description:
      "Completed HTML, CSS and TypeScript course through Infosys Springboard.",
    icon: Code2,
    accent: "cyan",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#070b14] px-6 py-28 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-96 w-96 rounded-full bg-purple-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Certifications
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Learning &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              achievements
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
            Certifications and training that have supported my journey in
            programming, artificial intelligence and software development.
          </p>
        </div>

        {/* Certification cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {certifications.map((certificate) => {
            const Icon = certificate.icon;
            const isPurple = certificate.accent === "purple";

            return (
              <div
                key={certificate.title}
                className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]"
              >

                {/* Top accent */}
                <div
                  className={`absolute left-7 right-7 top-0 h-px ${
                    isPurple
                      ? "bg-purple-400/40"
                      : "bg-cyan-400/40"
                  }`}
                />

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

                {/* Content */}
                <h3 className="mt-6 text-lg font-semibold leading-snug text-white">
                  {certificate.title}
                </h3>

                <p
                  className={`mt-2 text-sm font-medium ${
                    isPurple ? "text-purple-400" : "text-cyan-400"
                  }`}
                >
                  {certificate.issuer}
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {certificate.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <span className="text-xs text-gray-600">
                    {certificate.date}
                  </span>

                  <span className="flex items-center gap-1.5 text-xs text-gray-500 transition group-hover:text-gray-300">
                    <Award size={14} />
                    Certified
                  </span>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}