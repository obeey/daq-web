import { ArrowRight, CheckCircle2, Gauge, Network, ShieldCheck, Thermometer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { site, t, type Locale } from "@/lib/i18n";
import { articles } from "@/lib/news";
import { products } from "@/lib/products";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = t[locale];
  const featured = products.slice(0, 3);
  const isZh = locale === "zh";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      url: `${site.url}/${locale}`,
      email: site.email,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: `${site.url}/${locale}`,
      inLanguage: locale,
      potentialAction: {
        "@type": "SearchAction",
        target: `${site.url}/${locale}/products?query={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <main>
      <JsonLd data={jsonLd} />
      <section style={{ borderBottom: "1px solid var(--line)", overflow: "hidden" }}>
        <div
          className="container grid"
          style={{
            alignItems: "center",
            display: "grid",
            gap: 42,
            gridTemplateColumns: "minmax(0, 1.02fr) minmax(320px, 0.98fr)",
            minHeight: "calc(100vh - 72px)",
            padding: "42px 0",
          }}
        >
          <div style={{ display: "grid", gap: 24 }}>
            <span className="eyebrow">{isZh ? "工业数据采集卡官网" : "Industrial DAQ Official Site"}</span>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5.7rem)", lineHeight: 0.98, margin: 0 }}>
              {isZh ? "面向工业测控的 DAQ 采集卡与模块" : "DAQ cards and modules for industrial measurement"}
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1.16rem", lineHeight: 1.65, margin: 0, maxWidth: 760 }}>
              {isZh
                ? "提供热电偶、热电阻、编码器和多功能数据采集产品。页面采用 SSR、结构化数据、FAQ 和 llms.txt，兼顾 SEO 与生成式搜索问答。"
                : "Thermocouple, RTD, encoder, and multifunction data acquisition products. Built with SSR, structured data, FAQ content, and llms.txt for SEO and generative answer engines."}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link className="button" href={`/${locale}/products`}>
                {copy.navProducts}
                <ArrowRight aria-hidden size={18} />
              </Link>
              <Link className="button secondary" href={`/${locale}#contact`}>
                {copy.quote}
              </Link>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <Image
              priority
              src="/assets/products/dabt7668tc.webp"
              alt={isZh ? "DAQ 数据采集卡产品展示" : "DAQ data acquisition card product visual"}
              width={900}
              height={900}
              style={{ height: "auto", width: "100%" }}
            />
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {[
            [Thermometer, isZh ? "温度采集" : "Temperature DAQ", isZh ? "热电偶、PT100、混合输入" : "Thermocouple, PT100, mixed inputs"],
            [Gauge, isZh ? "编码器采集" : "Encoder capture", isZh ? "位置、速度、同步计数" : "Position, speed, synchronized counters"],
            [Network, isZh ? "开放接口" : "Open interfaces", isZh ? "USB、RS485、CAN、以太网" : "USB, RS485, CAN, Ethernet"],
            [ShieldCheck, isZh ? "工业部署" : "Industrial deployment", isZh ? "隔离、抗干扰、可维护" : "Isolation, noise rejection, serviceability"],
          ].map(([Icon, title, text]) => (
            <div key={String(title)} className="card" style={{ display: "grid", gap: 12, padding: 22 }}>
              <Icon aria-hidden color="var(--accent)" size={28} />
              <h2 style={{ fontSize: "1.12rem", margin: 0 }}>{title as string}</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>{text as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band" id="solutions" style={{ background: "#eef5f3" }}>
        <div className="container" style={{ display: "grid", gap: 30 }}>
          <div style={{ maxWidth: 760 }}>
            <span className="eyebrow">{isZh ? "解决方案" : "Solutions"}</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", margin: "10px 0" }}>
              {isZh ? "从单板采集到系统集成" : "From single-board acquisition to system integration"}
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              {isZh
                ? "围绕采样精度、接口距离、隔离等级、上位机软件和数据链路，形成可被工程师快速评估的方案页面。"
                : "Solution pages are organized around accuracy, interface distance, isolation, host software, and data flow so engineers can evaluate quickly."}
            </p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {[
              isZh ? "工业传感器数据采集" : "Industrial sensor acquisition",
              isZh ? "温度巡检与实验记录" : "Temperature logging and lab tests",
              isZh ? "运动控制编码器反馈" : "Motion encoder feedback",
            ].map((item) => (
              <div key={item} className="card" style={{ alignItems: "center", display: "flex", gap: 12, padding: 18 }}>
                <CheckCircle2 aria-hidden color="var(--accent)" />
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container" style={{ display: "grid", gap: 28 }}>
          <div style={{ alignItems: "end", display: "flex", gap: 20, justifyContent: "space-between" }}>
            <div>
              <span className="eyebrow">{copy.products}</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", margin: "10px 0 0" }}>
                {isZh ? "精选产品" : "Featured products"}
              </h2>
            </div>
            <Link className="button secondary" href={`/${locale}/products`}>
              {copy.navProducts}
            </Link>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="band" style={{ background: "#f7faf8" }}>
        <div className="container grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <span className="eyebrow">{copy.navKnowledge}</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "10px 0" }}>
              {isZh ? "持续更新的 DAQ 知识内容" : "Continuously updated DAQ knowledge"}
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              {isZh
                ? "定时脚本可抓取行业资讯并生成草稿数据，便于保持站点新鲜度。"
                : "A scheduled refresh script can collect industry updates into draft data to keep the site fresh."}
            </p>
          </div>
          <div className="grid">
            {articles.map((article) => (
              <Link key={article.slug} className="card" href={`/${locale}/knowledge/${article.slug}`} style={{ padding: 20 }}>
                <time style={{ color: "var(--muted)", fontSize: ".9rem" }}>{article.date}</time>
                <h3 style={{ margin: "8px 0" }}>{article.title[locale]}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>{article.summary[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id="contact">
        <div className="container card" style={{ display: "grid", gap: 18, padding: 28 }}>
          <span className="eyebrow">{copy.navContact}</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", margin: 0 }}>
            {isZh ? "告诉我们你的采集通道、速率和接口需求" : "Tell us your channel count, sample rate, and interface requirements"}
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
            {isZh
              ? "我们可以基于现有 DAQ 模块推荐型号，也可以规划定制硬件、固件与上位机方案。"
              : "We can recommend an existing DAQ module or plan custom hardware, firmware, and host software."}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a className="button" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="button secondary" href={`tel:${site.phone}`}>
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
