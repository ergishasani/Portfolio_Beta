import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact | Ergis Hasani" };

export default function ContactPage() {
  return <main id="main-content" className="page-shell page-spacing flex min-h-[80dvh] flex-col justify-center">
    <p className="eyebrow">Contact / Let’s connect</p>
    <h1 className="page-heading">Have something<br /><span className="text-violet-300">in mind?</span></h1>
    <p className="mt-7 max-w-lg text-lg leading-8 text-neutral-400">A role, a collaboration, or an idea you’d like to build. Tell me a little about it.</p>
    <a href="mailto:ergishasani@icloud.com" className="mt-10 w-fit break-all text-xl text-neutral-100 underline decoration-violet-300/50 underline-offset-8 transition-colors hover:text-violet-300 sm:text-3xl">ergishasani@icloud.com ↗</a>
    <p className="mt-8 text-sm text-neutral-500">Tirana, Albania</p>
  </main>;
}
