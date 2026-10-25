import { collection, getDocs, query, where } from "firebase/firestore";
import type { z } from "zod";
import { getFirebaseDb } from "@/lib/firebase/client";
import { projectSchema } from "./schema.mjs";

export type Project = z.infer<typeof projectSchema>;

export async function getProjects(): Promise<Project[]> {
  const result = await getDocs(query(collection(getFirebaseDb(), "projects"), where("status", "==", "published")));
  return result.docs
    .map((item) => projectSchema.parse({ ...item.data(), slug: item.id }))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  const result = await getDocs(query(
    collection(getFirebaseDb(), "projects"),
    where("slug", "==", slug),
    where("status", "==", "published"),
  ));
  const project = result.docs[0];
  return project ? projectSchema.parse({ ...project.data(), slug: project.id }) : null;
}
