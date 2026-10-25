import type { Metadata } from "next";
import ProjectBrowser from "@/components/projects/ProjectBrowser";

export const metadata: Metadata = { title: "Projects | Ergis Hasani", description: "Explore my web, mobile, and desktop projects." };

export default function ProjectsPage() {
  return <main id="main-content" className="page-shell page-spacing">
    <header className="mb-16 max-w-2xl">
      <p className="eyebrow">Projects / The collection</p>
      <h1 className="page-heading">Built across<br /><span className="text-violet-300">screens.</span></h1>
      <p className="mt-6 max-w-lg text-base leading-7 text-neutral-400">Web platforms, mobile experiences, and desktop tools. Pick a format and take a closer look.</p>
    </header>
    <ProjectBrowser />
  </main>;
}
