// src/components/layout/Footer.tsx
import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-[#0e1214] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-13 md:gap-6">
          {/* Brand */}
          <div className="md:col-span-4">
            <h3 className="text-[24px] font-semibold tracking-tight">
              Ergis Hasani
            </h3>
            <p className="mt-5 text-[15px] leading-7 text-white/70">
              SaaS Builder crafting fast, minimal websites and management
              dashboards with clean UI and reliable backend integration.
            </p>
            <p className="mt-8 text-sm text-white/45">
              Based in Tirana • Remote for EU
            </p>
          </div>

          {/* Pages */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-sm font-semibold tracking-widest text-white/90">
              PAGES
            </p>
            <ul className="mt-6 space-y-4 text-[15px] text-white/70">
              <li>
                <Link className="transition-colors hover:text-white" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div className="md:col-span-3">
            <p className="text-sm font-semibold tracking-widest text-white/90">
              GET IN TOUCH
            </p>
            <ul className="mt-6 space-y-4 text-[15px] text-white/70">
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/audit"
                >
                  Free Website Audit
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <p className="text-sm font-semibold tracking-widest text-white/90">
              CONNECT
            </p>

            <div className="mt-6 flex items-center gap-4">
              <IconButton
                href="https://github.com/ergishasani"
                label="GitHub"
                icon={<Github className="h-4.5 w-4.5" />}
              />
              <IconButton
                href="https://linkedin.com/in/ergis-h-bb9ba0174/?skipRedirect=true"
                label="LinkedIn"
                icon={<Linkedin className="h-4.5 w-4.5" />}
              />
              <IconButton
                href="https://drive.google.com/file/d/1IySe1zYX76YKeH2e8MdBH6lJ_IIwZAHL/view"
                label="CV"
                icon={<FileText className="h-4.5 w-4.5" />}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        <div className="mt-8 flex flex-col gap-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {year} Ergis Hasani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function IconButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition
                 hover:border-white/20 hover:bg-white/6 hover:text-white"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  );
}
