import { writeFile, mkdir } from "node:fs/promises";

const DEFAULT_PROJECTS_URL =
  "https://tonybnya-portfolio-api.onrender.com/api/projects";
const DEFAULT_TIMELINES_URL =
  "https://tonybnya-portfolio-api.onrender.com/api/timelines";

const PROJECTS_OUT = "public/data/projects.json";
const TIMELINES_OUT = "public/data/timelines.json";

const projectsUrl = process.env.API_PROJECTS_URL || DEFAULT_PROJECTS_URL;
const timelinesUrl = process.env.API_TIMELINES_URL || DEFAULT_TIMELINES_URL;

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${url} -> HTTP ${res.status}`);
  }
  return res.json();
}

async function main() {
  const [projects, timelines] = await Promise.all([
    fetchJson(projectsUrl),
    fetchJson(timelinesUrl),
  ]);
  await mkdir("public/data", { recursive: true });
  await writeFile(PROJECTS_OUT, JSON.stringify(projects, null, 2) + "\n");
  await writeFile(TIMELINES_OUT, JSON.stringify(timelines, null, 2) + "\n");
  console.log(`Wrote ${PROJECTS_OUT} (${projects.length} projects)`);
  console.log(`Wrote ${TIMELINES_OUT} (${timelines.length} timelines)`);
}

main().catch((err) => {
  console.error("sync-data failed:", err.message);
  process.exit(1);
});
