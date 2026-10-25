"use client";

import { usePathname } from "next/navigation";
import Dock from "@/components/react-bits/Dock";

const pages = [
  { href: "/", label: "Home", path: "m3 10 9-7 9 7M5 9v12h5v-7h4v7h5V9" },
  { href: "/projects", label: "Projects", path: "M3 3h7v7H3ZM14 3h7v7h-7ZM3 14h7v7H3ZM14 14h7v7h-7Z" },
  { href: "/about", label: "About", path: "M20 21v-2a7 7 0 0 0-14 0v2M17 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" },
  { href: "/contact", label: "Contact", path: "M3 5h18v14H3ZM3 5l9 8 9-8" },
];

export default function NavigationDock() {
  const pathname = usePathname();
  const items = pages.map((page) => ({
    ...page,
    active: page.href === "/" ? pathname === "/" : pathname.startsWith(page.href),
    icon: (
      <span className="dock-link-content" aria-hidden="true">
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"><path d={page.path} /></svg>
        <span className="dock-link-caption">{page.label}</span>
      </span>
    ),
  }));

  return (
    <nav aria-label="Main navigation" className="portfolio-dock">
      <Dock
        items={items}
        baseItemSize={54}
        magnification={58}
        panelHeight={66}
        gap={10}
        distance={85}
        roundness={0.8}
        spring={{ mass: 0.25, stiffness: 210, damping: 28 }}
        bounce={false}
        showLabels={false}
        showIndicators={false}
        accentColor="#c4b5fd"
      />
    </nav>
  );
}
