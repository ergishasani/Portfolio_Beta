import test from "node:test";
import assert from "node:assert/strict";
import { filterProjects } from "../src/lib/projects/filter.mjs";
import { projectSchema } from "../src/lib/projects/schema.mjs";

const projects = [
  { slug: "web-mobile", projectTypes: ["web", "mobile"] },
  { slug: "desktop-mobile", projectTypes: ["desktop", "mobile"] },
  { slug: "web-only", projectTypes: ["web"] },
];

test("multi-platform projects appear in each applicable filter without duplicates", () => {
  assert.deepEqual(filterProjects(projects, "web").map((p) => p.slug), ["web-mobile", "web-only"]);
  assert.deepEqual(filterProjects(projects, "mobile").map((p) => p.slug), ["web-mobile", "desktop-mobile"]);
  assert.deepEqual(filterProjects(projects, "desktop").map((p) => p.slug), ["desktop-mobile"]);
  assert.deepEqual(filterProjects(projects, "all"), projects);
  assert.deepEqual(filterProjects([], "web"), []);
  assert.equal(projects.length, 3);
});

test("Firebase schema preserves multiple formats and supports older records", () => {
  const record = { slug: "project", title: "Project", description: "Description", coverImage: "https://i.ibb.co/example/cover.jpg" };
  assert.deepEqual(projectSchema.parse(record).projectTypes, ["web"]);
  assert.deepEqual(projectSchema.parse({ ...record, projectTypes: ["desktop", "mobile"] }).projectTypes, ["desktop", "mobile"]);
  assert.equal(projectSchema.safeParse({ ...record, projectTypes: [] }).success, false);
  assert.equal(projectSchema.safeParse({ ...record, projectTypes: ["unknown"] }).success, false);
});
