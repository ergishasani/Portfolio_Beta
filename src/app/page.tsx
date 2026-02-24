import Image from "next/image";

import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex  w-full  flex-col items-center justify-between  bg-white dark:bg-black sm:items-start">
        <Hero />
        <FeaturedProjects />
        <Services />
        <Process />
        <Testimonials />
      </main>
    </div>
  );
}
