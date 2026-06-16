import type { Metadata } from "next";
import Link from "next/link";
import { site, type Locale } from "@/lib/i18n";
import { articles } from "@/lib/news";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "zh" ? "DAQ 知识库 | DAQForge" : "DAQ Knowledge Base | DAQForge",
    description:
      locale === "zh"
        ? "数据采集卡选型、接口、热电偶、热电阻与工业测控知识。"
        : "DAQ selection, interfaces, thermocouples, RTDs, and industrial measurement knowledge.",
    alternates: {
      canonical: `${site.url}/${locale}/knowledge`,
      languages: {
        en: `${site.url}/en/knowledge`,
        zh: `${site.url}/zh/knowledge`,
      },
    },
  };
}

export default async function KnowledgePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isZh = locale === "zh";

  return (
    <main>
      <section className="band" style={{ paddingTop: 54 }}>
        <div className="container" style={{ display: "grid", gap: 28 }}>
          <div style={{ maxWidth: 820 }}>
            <span className="eyebrow">{isZh ? "知识库" : "Knowledge base"}</span>
            <h1 style={{ fontSize: "clamp(2.3rem, 5vw, 4.4rem)", margin: "10px 0" }}>
              {isZh ? "DAQ 选型与工业测控文章" : "DAQ selection and industrial measurement articles"}
            </h1>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {articles.map((article) => (
              <Link key={article.slug} className="card" href={`/${locale}/knowledge/${article.slug}`} style={{ padding: 22 }}>
                <time style={{ color: "var(--muted)" }}>{article.date}</time>
                <h2>{article.title[locale]}</h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>{article.summary[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
