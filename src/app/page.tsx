import StrokeText from "@/components/react-bits/StrokeText";
import ProjectBrowser from "@/components/projects/ProjectBrowser";
import Link from "next/link";

export default function Home() {
  return (
    <main id="main-content" className="pb-36">
      <section aria-labelledby="hero-heading" className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col justify-center px-6 py-24 sm:px-12">
        <p className="mb-6 text-xs font-medium tracking-[0.25em] text-violet-300 uppercase">Software Developer / Tirana, Albania</p>
        <h1 id="hero-heading" className="max-w-5xl font-extrabold">
          <span className="sr-only">Ergis Hasani</span>
          <span aria-hidden="true">
            <StrokeText
              text="Ergis Hasani"
              strokeColor="#A78BFA"
              fillColor="#ededed"
              strokeWidth={1.4}
              drawDuration={1.6}
              fillDelay={0.2}
              stagger={0.05}
              trigger="mount"
              fillMode="wipe"
              wipeFrom="left"
              fontSize={128}
              fontWeight={800}
              letterSpacing={-4}
              hoverRedraw
            />
          </span>
        </h1>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-400">
          I build web, mobile, and desktop applications, turning ideas into useful digital experiences.
        </p>
        <div className="mt-14 flex flex-wrap gap-3 text-sm text-neutral-300">
          {["Web applications", "Mobile apps", "Desktop software"].map((item) => (
            <span key={item} className="rounded-full border border-neutral-800 px-4 py-2">{item}</span>
          ))}
        </div>
        <Link href="#selected-work" className="mt-10 w-fit text-sm text-violet-300 underline underline-offset-8">Explore my work ↓</Link>
      </section>
      <section id="selected-work" aria-labelledby="work-heading" className="page-shell scroll-mt-12 py-16">
        <p className="eyebrow">A selection of my work</p>
        <h2 id="work-heading" className="section-heading">Ideas, made tangible.</h2>
        <div className="mt-12"><ProjectBrowser limit={3} /></div>
      </section>
    </main>
  );
}
