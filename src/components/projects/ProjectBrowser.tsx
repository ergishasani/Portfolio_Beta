"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HoloCard from "@/components/react-bits/HoloCard";
import OptionWheel from "@/components/react-bits/OptionWheel";
import { getProjects } from "@/lib/projects";
import { filterProjects, projectFilters } from "@/lib/projects/filter.mjs";
import { previewProjects, type ProjectEntry } from "@/lib/projects/previews";

const filterLabels = projectFilters.map((filter) => filter.label);

export default function ProjectBrowser({ limit }: { limit?: number }) {
  const [projects, setProjects] = useState<ProjectEntry[]>(previewProjects);
  const [selected, setSelected] = useState(0);
  const [source, setSource] = useState("preview");
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    getProjects().then((records) => {
      if (cancelled) return;
      setProjects(records.length ? records : previewProjects);
      setSource(records.length ? "published" : "preview");
      setFailed(false);
    }).catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; };
  }, [attempt]);

  const filter = projectFilters[selected];
  const filtered: ProjectEntry[] = filterProjects(projects, filter.value);
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="project-browser">
      <aside className="project-filter">
        <p className="eyebrow">Choose a format</p>
        <div className="project-wheel">
          <OptionWheel items={filterLabels} defaultSelected={0} onChange={(index: number) => setSelected(index)} fontSize={2.15} spacing={1.65} inset={24} curve={0.7} tilt={7} blur={0.35} fade={0.16} activeColor="#c4b5fd" />
        </div>
        <p className="text-xs leading-6 text-neutral-500">Scroll, drag, or use the arrow keys.<br />Projects can belong to more than one format.</p>
      </aside>
      <div className="min-w-0">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <p aria-live="polite" aria-atomic="true" className="text-sm text-neutral-300">{filtered.length} {filtered.length === 1 ? "project" : "projects"} <span className="text-neutral-500">/ {filter.label}</span></p>
          <span className="text-[10px] tracking-[0.18em] text-violet-300 uppercase">{source === "preview" ? "CV previews" : "Project collection"}</span>
        </div>
        {source === "preview" && <p className="mb-7 max-w-xl text-sm leading-6 text-neutral-500">Projects from my CV, with illustrated covers. Screenshots and full case studies will follow.</p>}
        {failed && <p role="status" className="mb-6 text-sm text-neutral-400">Live projects could not be loaded. Showing CV previews. <button onClick={() => setAttempt((value) => value + 1)} className="text-violet-300 underline underline-offset-4">Try again</button></p>}
        <div className="project-grid">
          {visible.map((project) => (
            <article key={project.slug} data-project-types={project.projectTypes.join(" ")} className="project-card">
              <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title}`} className="project-art-link">
                <HoloCard image={project.coverImage} alt={`${project.preview ? "Illustrated cover" : "Project screenshot"}: ${project.title}`} preset="rainbow" intensity={0.3} glare={0.18} frame={1} edgeSparkle={0.3} tiltMax={7} hoverScale={1.015} idle={false} width={640} radius={18} className="project-art" />
              </Link>
              <div className="mt-5 flex items-center justify-between gap-4">
                <h3 className="text-xl font-medium tracking-tight"><Link href={`/projects/${project.slug}`} className="hover:text-violet-300">{project.title}</Link></h3>
                <span aria-hidden="true" className="text-violet-300">↗</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-neutral-400">{project.description}</p>
              <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-[11px] text-neutral-500">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
        {!filtered.length && <div className="rounded-2xl border border-white/10 px-6 py-16 text-center"><p className="text-neutral-300">No {filter.label.toLowerCase()} projects here yet.</p><p className="mt-3 text-sm text-neutral-500">Choose another format using the wheel.</p></div>}
        {limit && filtered.length > limit && <Link href="/projects" className="mt-10 inline-block text-sm text-violet-300 underline underline-offset-8">Explore all projects ↗</Link>}
      </div>
    </div>
  );
}
