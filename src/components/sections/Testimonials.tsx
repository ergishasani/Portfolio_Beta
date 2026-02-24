import React from "react";
import TestimonialsShowcase from "../ui/TestimonialsShowcase";
import AuditCta from "../ui/Audit-CTA";

type Theme = "dark" | "light";

const Testimonials = ({ theme = "dark" }: { theme?: Theme }) => {
  const isDark = theme === "dark";
  return (
    <section className="container py-16 md:py-20">
      <h2
        className={[
          "text-center font-semibold tracking-tight",
          "text-4xl md:text-6xl",
          isDark ? "text-white" : "text-[#0b0f14]",
        ].join(" ")}
      >
        What clients say
      </h2>

      <p
        className={[
          "mt-4 text-center text-lg md:text-xl",
          isDark ? "text-white/60" : "text-black/60",
        ].join(" ")}
      >
        Short quotes that validate reliability and quality.
      </p>

      <div className="mt-12 md:mt-14">
        <TestimonialsShowcase theme={theme} auto intervalMs={5200} />
      </div>

      <div className="mt-14 md:mt-16">
        <AuditCta theme={theme} />
      </div>
    </section>
  );
};

export default Testimonials;
