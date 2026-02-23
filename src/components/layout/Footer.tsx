import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">Ergis Hasani</h3>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              SaaS Builder (Frontend / Full-stack). I build fast, minimal
              websites and dashboards for EU teams.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="space-y-3">
              <h4 className="font-medium text-white/80">Navigation</h4>
              <div className="flex flex-col gap-2 text-white/60">
                <Link href="/projects">Projects</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About</Link>
                <Link href="/audit">Free Audit</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-white/80">Links</h4>
              <div className="flex flex-col gap-2 text-white/60">
                <a
                  href="https://github.com/ergishasani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/ergis-h-bb9ba0174"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a href="mailto:your@email.com">Email</a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-medium text-white/80">
                Have a project in mind?
              </h4>
              <p className="mt-3 text-sm text-white/60">
                Send your scope and I'll propose a clean structure and timeline.
              </p>
            </div>

            <Link
              href="/audit"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#0F3D3E] px-5 py-3 text-sm font-medium transition hover:opacity-90"
            >
              Request Free Audit
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ergishasani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            className="transition hover:text-white"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/ergis-h-bb9ba0174"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            className="transition hover:text-white"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:your@email.com"
            aria-label="Send email"
            title="Email"
            className="transition hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
