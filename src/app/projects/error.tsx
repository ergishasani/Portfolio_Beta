"use client";

export default function ProjectsError({ reset }: { reset: () => void }) {
  return <main id="main-content" className="page-shell page-spacing"><p className="eyebrow">Projects</p><h1 className="section-heading">This project could not be loaded.</h1><p className="mt-6 text-neutral-400">Please try again in a moment.</p><button onClick={reset} className="mt-8 rounded-full border border-violet-300/30 px-6 py-3 text-violet-300">Try again</button></main>;
}
