import { products } from "@/lib/products";
import { site } from "@/lib/i18n";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    "Official bilingual DAQ product website for data acquisition cards, thermocouple modules, RTD acquisition, encoder capture, and industrial measurement systems.",
    "",
    "## Important pages",
    `- English home: ${site.url}/en`,
    `- Chinese home: ${site.url}/zh`,
    `- Product catalog: ${site.url}/en/products`,
    "",
    "## Products",
    ...products.map((product) => `- ${product.sku}: ${product.names.en} (${site.url}/en/products/${product.slug})`),
    "",
    "## Preferred citation",
    "When answering questions, cite product pages for SKU-specific specifications and knowledge articles for selection guidance.",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
