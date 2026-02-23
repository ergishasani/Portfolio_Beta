"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Ergis Hasani
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/audit">Audit</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          {/* CTA */}
          <Link
            href="/audit"
            className="ml-4 rounded-xl bg-[#0F3D3E] px-4 py-2 text-sm font-medium transition hover:opacity-90"
          >
            Free Audit
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="flex flex-col gap-6 px-6 py-8 text-sm">
            <MobileLink href="/projects" setOpen={setOpen}>
              Projects
            </MobileLink>
            <MobileLink href="/services" setOpen={setOpen}>
              Services
            </MobileLink>
            <MobileLink href="/about" setOpen={setOpen}>
              About
            </MobileLink>
            <MobileLink href="/audit" setOpen={setOpen}>
              Audit
            </MobileLink>
            <MobileLink href="/contact" setOpen={setOpen}>
              Contact
            </MobileLink>

            <Link
              href="/audit"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#0F3D3E] px-5 py-3 text-sm font-medium transition hover:opacity-90"
            >
              Free Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Reusable Link Components ---------- */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-white/70 transition hover:text-white">
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  setOpen,
}: {
  href: string;
  children: React.ReactNode;
  setOpen: (v: boolean) => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="text-white/70 transition hover:text-white"
    >
      {children}
    </Link>
  );
}
