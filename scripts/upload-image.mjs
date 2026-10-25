import { readFile, stat } from "node:fs/promises";
import { basename } from "node:path";

async function main() {
  const path = process.argv[2];
  if (!path) throw new Error('Usage: npm run image:upload -- "path/to/image.jpg"');
  if (!process.env.IMGBB_API_KEY) throw new Error("Set IMGBB_API_KEY in .env.local first.");
  const file = await stat(path);
  if (!file.isFile() || file.size === 0 || file.size > 32_000_000) {
    throw new Error("Choose a nonempty image file no larger than 32 MB.");
  }
  const form = new FormData();
  form.set("key", process.env.IMGBB_API_KEY);
  form.set("image", new Blob([await readFile(path)]), basename(path));
  const response = await fetch("https://api.imgbb.com/1/upload", {
    method: "POST", body: form, signal: AbortSignal.timeout(120_000),
  });
  const result = await response.json();
  if (!response.ok || !result.success || !result.data?.url) {
    throw new Error(`ImgBB upload failed (HTTP ${response.status}). Check your API key and image.`);
  }
  console.log(JSON.stringify({ url: result.data.url, width: result.data.width, height: result.data.height }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
