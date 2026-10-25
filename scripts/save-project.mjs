import { readFile } from "node:fs/promises";
import { applicationDefault, initializeApp, deleteApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { projectSchema } from "../src/lib/projects/schema.mjs";

async function main() {
  const args = process.argv.slice(2);
  const path = args.find((arg) => !arg.startsWith("--"));
  if (!path) throw new Error("Usage: npm run project:save -- examples/project.json [--replace]");
  const project = projectSchema.parse(JSON.parse(await readFile(path, "utf8")));
  if (JSON.stringify(project).includes("REPLACE-ME")) throw new Error("Replace the example image URL with your direct ImgBB URL first.");
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  if (!projectId) throw new Error("Set NEXT_PUBLIC_FIREBASE_PROJECT_ID in .env.local first.");
  const app = initializeApp({ credential: applicationDefault(), projectId });
  try {
    const db = getFirestore(app);
    const ref = db.collection("projects").doc(project.slug);
    await db.runTransaction(async (transaction) => {
      const existing = await transaction.get(ref);
      if (existing.exists && !args.includes("--replace")) {
        throw new Error("Project already exists. Use --replace to update it.");
      }
      transaction.set(ref, {
        ...project,
        createdAt: existing.data()?.createdAt ?? FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });
    });
    console.log(`Saved projects/${project.slug} (${project.status}).`);
  } finally {
    await deleteApp(app);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
