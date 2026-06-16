import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const items = [
  ["tmp/source-images/src-7.jpg", "public/assets/products/dabd-e265.webp"],
  ["tmp/source-images/src-1.png", "public/assets/products/dabt7668tc.webp"],
  ["tmp/source-images/src-3.png", "public/assets/products/dabt-pt509.webp"],
  ["tmp/source-images/src-4.png", "public/assets/products/dabt-g601tc.webp"],
  ["tmp/source-images/src-5.png", "public/assets/products/dabt7689.webp"],
  ["tmp/source-images/src-2.png", "public/assets/products/dabl7606.webp"],
  ["tmp/source-images/src-6.png", "public/assets/products/dabl-g511.webp"],
];

await mkdir("public/assets/products", { recursive: true });

for (const [input, output] of items) {
  const image = sharp(input, { failOn: "none" }).rotate();
  const meta = await image.metadata();
  const width = meta.width || 900;
  const height = meta.height || 900;
  const trimBottom = Math.round(height * 0.2);

  const product = await image
    .extract({ left: 0, top: 0, width, height: Math.max(1, height - trimBottom) })
    .trim({ background: "#506d70", threshold: 18 })
    .resize(760, 760, { fit: "inside", withoutEnlargement: true })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: 900,
      height: 900,
      channels: 4,
      background: "#f8fbfa",
    },
  })
    .composite([
      {
        input: Buffer.from(
          `<svg width="900" height="900" viewBox="0 0 900 900">
            <rect width="900" height="900" fill="#f8fbfa"/>
            <circle cx="710" cy="180" r="150" fill="#e1efed"/>
            <circle cx="190" cy="720" r="180" fill="#e8eef8"/>
            <path d="M110 735 C270 630 375 770 520 650 C630 560 710 590 815 520" fill="none" stroke="#d5e1de" stroke-width="10"/>
          </svg>`,
        ),
      },
      { input: product, gravity: "center" },
      {
        input: Buffer.from(
          `<svg width="900" height="900" viewBox="0 0 900 900">
            <rect x="260" y="772" width="380" height="34" rx="5" fill="#1478b8"/>
          </svg>`,
        ),
      },
    ])
    .webp({ quality: 88 })
    .toFile(output);

  console.log(`Processed ${output}`);
}
