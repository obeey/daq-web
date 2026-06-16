import type { MetadataRoute } from "next";
import { site } from "@/lib/i18n";
import { articles } from "@/lib/news";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "zh"];
  const base = locales.flatMap((locale) => [
    `${site.url}/${locale}`,
    `${site.url}/${locale}/products`,
    `${site.url}/${locale}/knowledge`,
  ]);
  const productUrls = locales.flatMap((locale) =>
    products.map((product) => `${site.url}/${locale}/products/${product.slug}`),
  );
  const articleUrls = locales.flatMap((locale) =>
    articles.map((article) => `${site.url}/${locale}/knowledge/${article.slug}`),
  );

  return [...base, ...productUrls, ...articleUrls].map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: url.includes("/knowledge") ? "weekly" : "monthly",
    priority: url.endsWith("/products") ? 0.9 : 0.7,
  }));
}
