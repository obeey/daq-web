import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer style={{ background: "#101820", color: "white", padding: "42px 0" }}>
      <div className="container" style={{ display: "grid", gap: 18 }}>
        <strong>{site.name}</strong>
        <p style={{ color: "#c8d3d5", margin: 0, maxWidth: 760 }}>
          {locale === "zh"
            ? "数据采集卡、温度采集模块、编码器采集与工业测控方案。面向搜索引擎和生成式问答优化。"
            : "DAQ cards, temperature acquisition modules, encoder capture, and industrial measurement solutions built for search and answer engines."}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, color: "#dce6e8" }}>
          <Link href={`/${locale}/products`}>{locale === "zh" ? "产品" : "Products"}</Link>
          <Link href={`/${locale}/knowledge`}>{locale === "zh" ? "知识库" : "Knowledge"}</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone}`}>{site.phone}</a>
          <Link href="/llms.txt">llms.txt</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
