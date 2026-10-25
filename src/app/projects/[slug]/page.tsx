import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import { previewProjects, type ProjectEntry } from "@/lib/projects/previews";

export const dynamic = "force-dynamic";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const preview = previewProjects.find((project) => project.slug === slug);
  let project: ProjectEntry | null;
  try {
    project = await getProjectBySlug(slug) ?? preview ?? null;
  } catch (error) {
    if (!preview) throw error;
    project = preview;
  }
  if (!project) notFound();

  return <main id="main-content" className="page-shell page-spacing">
    <Link href="/projects" className="text-sm text-violet-300">← All projects</Link>
    <header className="mt-10 max-w-3xl">
      <p className="eyebrow">{project.projectTypes.join(" / ")} {project.preview ? "/ CV preview" : "/ Project"}</p>
      <h1 className="page-heading">{project.title}</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-400">{project.description}</p>
      <ul className="mt-7 flex flex-wrap gap-3 text-xs text-neutral-300" aria-label="Technologies">{project.tags.map((tag) => <li key={tag} className="rounded-full border border-white/10 px-4 py-2">{tag}</li>)}</ul>
    </header>
    <div className="relative mt-12 aspect-[8/5] overflow-hidden rounded-3xl border border-white/10"><Image src={project.coverImage} alt={`${project.title} ${project.preview ? "illustrated project cover" : "project screenshot"}`} fill priority sizes="(max-width: 768px) 100vw, 1100px" className="object-cover" unoptimized={project.preview} /></div>
    {project.preview && <p className="mt-4 text-xs text-neutral-500">Illustrated cover. Actual screenshots and the full case study are coming next.</p>}
    {project.images.length > 0 && <section aria-labelledby="gallery-heading" className="mt-16"><h2 id="gallery-heading" className="section-heading">A closer look.</h2><div className="mt-8 grid gap-6 sm:grid-cols-2">{project.images.map((image, index) => <div key={`${image}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900"><Image src={image} alt={`${project.title} screenshot ${index + 1}`} fill sizes="(max-width: 640px) 100vw, 550px" className="object-contain" /></div>)}</div></section>}
    <div className="mt-10 flex flex-wrap gap-6 text-sm text-violet-300">
      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit project ↗</a>}
      {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">View source ↗</a>}
      <Link href="/contact">Discuss a project ↗</Link>
    </div>
  </main>;
}
