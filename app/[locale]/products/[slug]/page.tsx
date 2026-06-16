import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { site, t, type Locale } from "@/lib/i18n";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.flatMap((product) => [
    { locale: "en", slug: product.slug },
    { locale: "zh", slug: product.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return {
    title: `${product.names[locale]} | ${site.name}`,
    description: product.short[locale],
    alternates: {
      canonical: `${site.url}/${locale}/products/${product.slug}`,
      languages: {
        en: `${site.url}/en/products/${product.slug}`,
        zh: `${site.url}/zh/products/${product.slug}`,
      },
    },
    openGraph: {
      title: product.names[locale],
      description: product.short[locale],
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const copy = t[locale];
  const isZh = locale === "zh";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.names[locale],
      sku: product.sku,
      image: `${site.url}${product.image}`,
      description: product.description[locale],
      brand: { "@type": "Brand", name: site.name },
      offers: {
        "@type": "Offer",
        priceCurrency: "CNY",
        price: product.priceCny,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: isZh ? `${product.sku} 支持哪些接口？` : `Which interfaces does ${product.sku} support?`,
          acceptedAnswer: {
            "@type": "Answer",
            text:
              product.specs[locale][isZh ? "通信方式" : "Communication"] ||
              product.specs[locale][isZh ? "接口" : "Interface"] ||
              product.short[locale],
          },
        },
        {
          "@type": "Question",
          name: isZh ? `${product.sku} 适合什么应用？` : `What applications fit ${product.sku}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: product.applications[locale].join(", "),
          },
        },
      ],
    },
  ];

  return (
    <main>
      <JsonLd data={jsonLd} />
      <section className="band" style={{ paddingTop: 54 }}>
        <div className="container grid" style={{ gridTemplateColumns: "minmax(320px, .9fr) minmax(0, 1.1fr)", alignItems: "center" }}>
          <div className="product-image card">
            <Image priority src={product.image} alt={product.names[locale]} width={900} height={900} />
          </div>
          <div style={{ display: "grid", gap: 18 }}>
            <span className="eyebrow">{product.sku}</span>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 4.4rem)", lineHeight: 1.02, margin: 0 }}>{product.names[locale]}</h1>
            <p style={{ color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.7, margin: 0 }}>{product.description[locale]}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {product.applications[locale].map((app) => (
                <span className="card" key={app} style={{ padding: "9px 12px" }}>
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band" style={{ background: "#f7faf8" }}>
        <div className="container grid" style={{ gridTemplateColumns: "0.9fr 1.1fr" }}>
          <div>
            <span className="eyebrow">{copy.features}</span>
            <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>{isZh ? "工程亮点" : "Engineering highlights"}</h2>
            <ul style={{ display: "grid", gap: 12, lineHeight: 1.6, margin: 0, paddingLeft: 20 }}>
              {product.features[locale].map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <span className="eyebrow">{copy.specs}</span>
            <table className="spec-table">
              <tbody>
                {Object.entries(product.specs[locale]).map(([key, value]) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <span className="eyebrow">{copy.faq}</span>
            <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>
              {isZh ? "面向搜索与问答的简明答案" : "Concise answers for search and AI results"}
            </h2>
          </div>
          <div className="grid">
            <details className="card" open style={{ padding: 18 }}>
              <summary style={{ cursor: "pointer", fontWeight: 800 }}>
                {isZh ? "这款产品适合二次开发吗？" : "Is this product suitable for integration work?"}
              </summary>
              <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                {isZh
                  ? "适合。页面按接口、输入类型、采样能力和应用场景组织，便于工程评估和后续定制沟通。"
                  : "Yes. The product page is organized by interfaces, input type, sampling capability, and applications for engineering evaluation."}
              </p>
            </details>
            <details className="card" style={{ padding: 18 }}>
              <summary style={{ cursor: "pointer", fontWeight: 800 }}>
                {isZh ? "可以替代进口 DAQ 吗？" : "Can it replace imported DAQ hardware?"}
              </summary>
              <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                {isZh
                  ? "需要按通道数、精度、采样率、驱动软件和环境要求逐项确认；我们可以协助完成选型表。"
                  : "It depends on channel count, accuracy, sample rate, driver software, and environment. We can help prepare a selection matrix."}
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
