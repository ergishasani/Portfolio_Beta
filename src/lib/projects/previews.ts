import type { Project } from "./index";

export type ProjectEntry = Project & { preview?: boolean };

// CV-based previews, never written to Firestore. Replace covers with real ImgBB
// screenshots when publishing project records.
export const previewProjects: ProjectEntry[] = [
  {
    slug: "luela-ai", title: "LuelaAI", description: "A healthcare platform connecting patients and doctors through web and mobile applications.",
    projectTypes: ["web", "mobile"], tags: ["Next.js", "React Native", "Python"], coverImage: "/project-covers/luela-ai.svg",
  },
  {
    slug: "gym-management", title: "Gym Management", description: "Desktop management and a member app, with attendance tracking, exports, and local-first synchronization.",
    projectTypes: ["desktop", "mobile"], tags: ["Svelte", "Tauri", "Spring Boot"], coverImage: "/project-covers/gym-management.svg",
  },
  {
    slug: "perka", title: "Perka", description: "An employee benefits marketplace built during JunctionX Tirana, with a mobile app and backend services.",
    projectTypes: ["mobile"], tags: ["React Native", "Expo", "FastAPI"], coverImage: "/project-covers/perka.svg",
  },
  {
    slug: "visionbau", title: "VisionBau", description: "A company website covering responsive interfaces, performance improvements, and deployment.",
    projectTypes: ["web"], tags: ["Next.js", "Tailwind CSS"], coverImage: "/project-covers/visionbau.svg",
  },
  {
    slug: "eventira", title: "EvenTira", description: "An event discovery platform in development, with web and mobile experiences for finding and sharing local events.",
    projectTypes: ["web", "mobile"], tags: ["Next.js", "React Native", "FastAPI"], coverImage: "/project-covers/eventira.svg",
  },
].map((project, order) => ({
  ...project,
  projectTypes: project.projectTypes as Project["projectTypes"],
  images: [], liveUrl: "", repositoryUrl: "", featured: order < 3,
  status: "published", order, preview: true,
}));
