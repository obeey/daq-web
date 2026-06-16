import { writeFile, mkdir } from "node:fs/promises";

const sources = [
  "https://www.z-linear.com/products",
  "https://www.z-linear.com/knowledge",
];

await mkdir("content/drafts", { recursive: true });

const draft = {
  refreshedAt: new Date().toISOString(),
  sources,
  notes: [
    "Use this script from a cron scheduler to fetch public DAQ product/news sources.",
    "Normalize facts into bilingual articles before publishing.",
    "Keep source attribution in editorial review notes.",
  ],
};

await writeFile("content/drafts/latest-refresh.json", `${JSON.stringify(draft, null, 2)}\n`);
console.log("Wrote content/drafts/latest-refresh.json");
