import type { Metadata } from "next";
import "./globals.css";
import NavigationDock from "@/components/layout/NavigationDock";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Ergis Hasani | Portfolio",
  description: "Personal portfolio of Ergis Hasani.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <PageTransition>{children}</PageTransition>
        <NavigationDock />
      </body>
    </html>
  );
}
