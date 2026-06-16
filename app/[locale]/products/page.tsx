import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { site, type Locale } from "@/lib/i18n";
import { categories, products } from "@/lib/products";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const isZh = locale === "zh";
  return {
    title: isZh ? "DAQ 数据采集卡产品 | DAQForge" : "DAQ Data Acquisition Products | DAQForge",
    description: isZh
      ? "浏览热电偶、热电阻、编码器和多功能数据采集卡产品。"
      : "Browse thermocouple, RTD, encoder, and multifunction DAQ products.",
    alternates: {
      canonical: `${site.url}/${locale}/products`,
      languages: {
        en: `${site.url}/en/products`,
        zh: `${site.url}/zh/products`,
      },
    },
  };
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isZh = locale === "zh";

  return (
    <main>
      <section className="band" style={{ paddingTop: 54 }}>
        <div className="container" style={{ display: "grid", gap: 28 }}>
          <div style={{ maxWidth: 820 }}>
            <span className="eyebrow">{isZh ? "产品中心" : "Product catalog"}</span>
            <h1 style={{ fontSize: "clamp(2.3rem, 5vw, 4.4rem)", margin: "10px 0" }}>
              {isZh ? "数据采集卡与工业采集模块" : "Data acquisition cards and industrial DAQ modules"}
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.65, margin: 0 }}>
              {isZh
                ? "产品资料基于公开产品页整理，并重写为中英文 SEO 友好的页面内容。"
                : "Product data is organized from public product information and rewritten into bilingual SEO-friendly pages."}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {categories(locale).map((category) => (
              <span key={category.id} className="card" style={{ padding: "10px 13px" }}>
                {category.label}
              </span>
            ))}
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
