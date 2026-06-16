import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Product } from "@/lib/products";
import { t } from "@/lib/i18n";

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  return (
    <Link className="card" href={`/${locale}/products/${product.slug}`} style={{ display: "grid", overflow: "hidden" }}>
      <div className="product-image">
        <Image src={product.image} alt={product.names[locale]} width={720} height={720} />
      </div>
      <div style={{ display: "grid", gap: 12, padding: 18 }}>
        <span className="eyebrow">{product.sku}</span>
        <h3 style={{ fontSize: "1.15rem", lineHeight: 1.25, margin: 0 }}>{product.names[locale]}</h3>
        <p style={{ color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>{product.short[locale]}</p>
        <span style={{ alignItems: "center", color: "var(--accent)", display: "inline-flex", fontWeight: 800, gap: 6 }}>
          {t[locale].viewProduct}
          <ArrowRight aria-hidden size={16} />
        </span>
      </div>
    </Link>
  );
}
