// src/components/sections/AuditCta.tsx
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type AuditCtaProps = {
  /** "dark" uses #12181b, "light" uses #f1f3f5 */
  theme?: "dark" | "light";
};

export default function AuditCta({ theme = "dark" }: AuditCtaProps) {
  const isDark = theme === "dark";

  return (
    <section
      aria-label="Free website audit call to action"
      className={[
        "max-w-7xl rounded-[34px] border shadow-[0_30px_80px_rgba(0,0,0,0.55)]",
        "px-10 py-12 md:px-14 md:py-14",
        "flex flex-col gap-10 md:flex-row md:items-center md:justify-between",
        isDark
          ? "bg-[#12181b] border-white/10"
          : "bg-[#f1f3f5] border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.12)]",
      ].join(" ")}
    >
      {/* Left text */}
      <div className="max-w-190">
        <h2
          className={[
            "text-[44px] md:text-[30px] font-semibold tracking-tight leading-[1.05]",
            isDark ? "text-white" : "text-[#0b0f14]",
          ].join(" ")}
        >
          Get a free website audit
        </h2>

        <p
          className={[
            "mt-4 text-[20px] max-w-xl md:text-[16px] leading-8",
            isDark ? "text-white/60" : "text-black/60",
          ].join(" ")}
        >
          I&apos;ll review your site or idea and send a clear improvement plan
          (UX, performance, structure, next steps).
        </p>
      </div>

      {/* Right buttons */}
      <div className="flex items-center gap-4 md:gap-6">
        <Button
          href="/audit"
          size="cta"
          variant={isDark ? "solidTeal" : "solidTealLight"}
        >
          Request Audit
        </Button>

        <Button
          href="/contact"
          size="cta"
          variant={isDark ? "outlineGlass" : "outlineLight"}
        >
          Contact
        </Button>
      </div>
    </section>
  );
}
