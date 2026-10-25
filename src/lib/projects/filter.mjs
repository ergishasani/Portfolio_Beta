export const projectFilters = [
  { label: "All projects", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Desktop", value: "desktop" },
];

export function filterProjects(projects, type) {
  return type === "all" ? projects : projects.filter((project) => project.projectTypes.includes(type));
}
