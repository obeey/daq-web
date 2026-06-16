import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { site, type Locale } from "@/lib/i18n";
import { articles } from "@/lib/news";

export function generateStaticParams() {
  return articles.flatMap((article) => [
    { locale: "en", slug: article.slug },
    { locale: "zh", slug: article.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return {
    title: `${article.title[locale]} | ${site.name}`,
    description: article.summary[locale],
    alternates: {
      canonical: `${site.url}/${locale}/knowledge/${article.slug}`,
      languages: {
        en: `${site.url}/en/knowledge/${article.slug}`,
        zh: `${site.url}/zh/knowledge/${article.slug}`,
      },
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const isZh = locale === "zh";

  const blocks =
    locale === "zh"
      ? [
          "选择 DAQ 产品时，先明确采集对象：温度、模拟电压、电流、编码器或数字量。不同信号对应不同前端保护、滤波和标定要求。",
          "其次确认接口距离与部署数量。USB 适合近距离实验台，RS485 适合长距离多节点，以太网更适合上位机集中管理和跨网段部署。",
          "最后核对软件集成。工程团队通常需要协议文档、驱动示例、标定流程和长期可维护的资料包。",
        ]
      : [
          "Start DAQ selection by identifying the signal: temperature, analog voltage, current, encoder, or digital I/O. Each signal requires different front-end protection, filtering, and calibration.",
          "Next, confirm interface distance and deployment count. USB fits nearby benches, RS485 fits long-distance multi-node systems, and Ethernet fits centralized host software or routed networks.",
          "Finally, evaluate software integration. Engineering teams usually need protocol documents, driver examples, calibration steps, and maintainable resource packages.",
        ];

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title[locale],
          datePublished: article.date,
          description: article.summary[locale],
          inLanguage: locale,
          author: { "@type": "Organization", name: site.name },
        }}
      />
      <article className="band" style={{ paddingTop: 54 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">{isZh ? "工程指南" : "Engineering guide"}</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.08 }}>{article.title[locale]}</h1>
          <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>{article.summary[locale]}</p>
          <div style={{ display: "grid", gap: 18, lineHeight: 1.78, marginTop: 28 }}>
            {blocks.map((block) => (
              <p key={block}>{block}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
