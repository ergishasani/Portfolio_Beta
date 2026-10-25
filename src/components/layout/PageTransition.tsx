"use client";

import type {} from "react/canary";
import { ViewTransition } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ViewTransition key={pathname} enter="page-enter" exit="page-exit" default="none">
      <div className="page-transition">{children}</div>
    </ViewTransition>
  );
}
