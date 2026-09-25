import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

function GithubIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.9c.85 0 1.7.12 2.5.37 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.95.68 1.91v2.83c0 .27.18.6.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.76-2-5.5-4.67-5.5-2.14 0-3.1 1.18-3.63 2.01V8.5H9.2V21h3.5v-6.19c0-1.63.31-3.2 2.32-3.2 1.98 0 2.01 1.85 2.01 3.3V21H21v-7.15Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050914] px-6 py-28 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] px-7 py-16 text-center sm:px-12 lg:px-20 lg:py-20">

          {/* Decorative gradients */}
          <div className="pointer-events-none absolute left-0 top-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-[90px]" />

          <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-purple-500/10 blur-[90px]" />

          <div className="relative">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Get In Touch
            </p>

            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                intelligent.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
              I&apos;m open to opportunities where I can learn, contribute and
              build meaningful solutions using AI and modern software
              technologies.
            </p>

            {/* Email CTA */}
            <div className="mt-9">
              <a
                href="mailto:sushmithareddykarla@gmail.com"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <Mail size={17} />
                Email Me
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

          </div>
        </div>

        {/* Contact details */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:sushmithareddykarla@gmail.com"
            className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
          >
            <Mail
              size={21}
              className="text-cyan-400 transition group-hover:scale-110"
            />

            <p className="mt-5 text-xs uppercase tracking-wider text-gray-600">
              Email
            </p>

            <p className="mt-2 break-all text-sm text-gray-300">
              sushmithareddykarla@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/20"
          >
            <div className="text-purple-400 transition group-hover:scale-110">
              <LinkedinIcon />
            </div>

            <p className="mt-5 text-xs uppercase tracking-wider text-gray-600">
              LinkedIn
            </p>

            <p className="mt-2 text-sm text-gray-300">
              Connect with me
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sushmitha20reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
          >
            <div className="text-cyan-400 transition group-hover:scale-110">
              <GithubIcon />
            </div>

            <p className="mt-5 text-xs uppercase tracking-wider text-gray-600">
              GitHub
            </p>

            <p className="mt-2 text-sm text-gray-300">
              sushmitha20reddy
            </p>
          </a>

        </div>

        {/* Small location/contact line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-600">
          <MapPin size={14} />
          <span>India</span>
          <span>•</span>
          <span>Full-Stack Development</span>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/[0.06] pt-8">

          <div className="flex flex-col items-center justify-between gap-5 text-xs text-gray-600 sm:flex-row">

            <p>
              © {new Date().getFullYear()} Karla Sushmitha Reddy. All rights
              reserved.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com/sushmitha20reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-gray-300"
              >
                GitHub
              </a>

              <a
                href="mailto:sushmithareddykarla@gmail.com"
                className="transition hover:text-gray-300"
              >
                Email
              </a>

              <a
                href="#"
                className="transition hover:text-gray-300"
              >
                Back to top ↑
              </a>
            </div>

          </div>

        </footer>

      </div>
    </section>
  );
}