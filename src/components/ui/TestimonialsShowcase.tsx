"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

type Theme = "dark" | "light";

type Testimonial = {
  name: string;
  title: string;
  avatarUrl: string; // /public/... OR remote (configure next/image if remote)
  heading: string;
  p1: string;
  p2: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Michael Gough",
    title: "Web developer at Google",
    avatarUrl: "/testimonials/michael.jpg",
    heading: "It was a great experience!",
    p1: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    p2: "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite.",
  },
  {
    name: "Bonnie Green",
    title: "CEO at Facebook",
    avatarUrl: "/testimonials/bonnie.jpg",
    heading: "Amazing communication & delivery.",
    p1: "Everything was clear from day one. Timelines were respected and the implementation was clean and maintainable.",
    p2: "The final result felt premium and fast. I’d recommend working together if you want sharp UI and strong attention to detail.",
  },
  {
    name: "Lana Byrd",
    title: "CTO at Microsoft",
    avatarUrl: "/testimonials/lana.jpg",
    heading: "Reliable and high quality work.",
    p1: "The UI system was consistent, and the experience across devices was solid. Performance was noticeably improved.",
    p2: "Code quality was great and handoff was smooth. This is the kind of execution you want for production work.",
  },
];

export default function TestimonialsShowcase({
  theme = "dark",
  testimonials = DEFAULT_TESTIMONIALS,
  auto = true,
  intervalMs = 5500,
}: {
  theme?: Theme;
  testimonials?: Testimonial[];
  auto?: boolean;
  intervalMs?: number;
}) {
  const isDark = theme === "dark";
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  // Smooth auto-rotate
  React.useEffect(() => {
    if (!auto || paused || testimonials.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [auto, paused, intervalMs, testimonials.length]);

  const t = testimonials[active];

  return (
    <section
      className={[
        "w-full",
        isDark ? "bg-[#12181b] text-white" : "bg-[#f1f3f5] text-[#0b0f14]",
      ].join(" ")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="mx-auto max-w-300 px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14">
          {/* LEFT LIST */}
          <div className="md:col-span-4">
            <ul className="space-y-7">
              {testimonials.map((item, idx) => {
                const isActive = idx === active;

                return (
                  <li key={item.name}>
                    <button
                      type="button"
                      onClick={() => setActive(idx)}
                      className={[
                        "w-full text-left transition",
                        isActive
                          ? [
                              "rounded-2xl border p-6",
                              isDark
                                ? "bg-white/10 border-white/10 shadow-[0_18px_55px_rgba(0,0,0,0.45)]"
                                : "bg-white/70 border-black/10 shadow-[0_14px_40px_rgba(0,0,0,0.10)]",
                            ].join(" ")
                          : "p-0",
                      ].join(" ")}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={[
                            "relative h-10 w-10 overflow-hidden rounded-full",
                            !isActive
                              ? isDark
                                ? "opacity-90"
                                : "opacity-95"
                              : "",
                          ].join(" ")}
                        ></div>

                        <div>
                          <p className="text-[14px] font-semibold leading-tight">
                            {item.name}
                          </p>
                          <p
                            className={[
                              "mt-1 text-[12px]",
                              isDark ? "text-white/55" : "text-black/55",
                            ].join(" ")}
                          >
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10">
              <Link
                href="/testimonials"
                className={[
                  "inline-flex items-center gap-2 text-[12px]",
                  isDark ? "text-[#4da3ff]" : "text-[#1b66ff]",
                  "hover:underline",
                ].join(" ")}
              >
                View other 20 testimonials <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT QUOTE */}
          <div className="md:col-span-8">
            <div className="relative">
              {/* big quote mark */}
              <div
                className={[
                  "absolute -top-6 left-0 text-[60px] font-black leading-none",
                  isDark ? "text-white/10" : "text-black/10",
                ].join(" ")}
                aria-hidden
              >
                “
              </div>

              {/* content */}
              <div className="pt-8">
                <h3 className="text-[44px] md:text-[22px] font-semibold tracking-tight">
                  {t.heading}
                </h3>

                <div
                  className={[
                    "mt-2 space-y-3 text-[22px] leading-9 md:text-[14px]",
                    isDark ? "text-white/55" : "text-black/55",
                  ].join(" ")}
                >
                  <p>{t.p1}</p>
                  <p>{t.p2}</p>
                </div>
              </div>
            </div>

            {/* subtle divider line at bottom (like screenshot feel) */}
            <div
              className={[
                "mt-8 h-px w-full",
                isDark ? "bg-white/10" : "bg-black/10",
              ].join(" ")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
