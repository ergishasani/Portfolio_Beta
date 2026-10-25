import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About | Ergis Hasani" };

export default function AboutPage() {
  return <main id="main-content" className="page-shell page-spacing">
    <p className="eyebrow">About / Based in Tirana</p>
    <h1 className="page-heading">Curious by nature.<br /><span className="text-violet-300">Developer by craft.</span></h1>
    <div className="mt-12 grid gap-12 text-base leading-8 text-neutral-400 md:grid-cols-2">
      <section><h2 className="mb-5 text-xl text-neutral-100">From electronics to software</h2><p>I’m Ergis Hasani, a software developer based in Tirana, Albania. My background spans electronics and computer science, and my work covers web applications, mobile apps, desktop software, and backend integrations.</p><p className="mt-5">I enjoy turning an idea into something useful, from the first interface through the database and deployment.</p></section>
      <section><h2 className="mb-5 text-xl text-neutral-100">Experience</h2><ul className="space-y-5"><li><span className="block text-neutral-200">Freelance development</span>Client websites, applications, and deployment.</li><li><span className="block text-neutral-200">Cadmus</span>Web and desktop application development.</li><li><span className="block text-neutral-200">ISD · Infosoft Software Development</span>React development internship.</li><li><span className="block text-neutral-200">VisionBau</span>Website development and maintenance.</li></ul></section>
      <section><h2 className="mb-5 text-xl text-neutral-100">Tools I work with</h2><p>React, Next.js, Tailwind CSS, Svelte, Tauri, React Native, Python, APIs, databases, and Docker.</p></section>
      <section><h2 className="mb-5 text-xl text-neutral-100">Education & learning</h2><p>Electronics at Harry Fultz. Computer science at Polis University. Continuing to develop my programming foundations through the project-based program at 42 Tirana.</p></section>
    </div>
    <Link href="/projects" className="mt-14 inline-block text-sm text-violet-300 underline underline-offset-8">See what I’ve built ↗</Link>
  </main>;
}
