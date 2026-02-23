export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <h1 className="text-5xl font-bold leading-tight">
        I build fast, minimal SaaS dashboards and websites for EU teams.
      </h1>

      <p className="mt-6 max-w-2xl text-white/70">
        Custom-coded builds with clean UI, backend integration, and scalable
        architecture.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="/projects"
          className="rounded-xl bg-[#0F3D3E] px-6 py-3 text-sm font-medium"
        >
          View Projects
        </a>
        <a
          href="/audit"
          className="rounded-xl border border-white/20 px-6 py-3 text-sm"
        >
          Free Audit
        </a>
      </div>
    </section>
  );
}
