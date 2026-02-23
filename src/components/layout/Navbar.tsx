import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Ergis Hasani
        </Link>

        <nav className="hidden gap-8 text-sm md:flex">
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/audit">Audit</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
