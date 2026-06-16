import { CircuitBoard, Languages } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localeNames, site, t } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
  path?: string;
};

export function Header({ locale, path = "" }: HeaderProps) {
  const otherLocale = locale === "en" ? "zh" : "en";
  const copy = t[locale];

  return (
    <header
      style={{
        background: "rgba(251, 252, 250, 0.92)",
        borderBottom: "1px solid var(--line)",
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(14px)",
      }}
    >
      <div
        className="container"
        style={{
          alignItems: "center",
          display: "flex",
          gap: 24,
          minHeight: 72,
          justifyContent: "space-between",
        }}
      >
        <Link href={`/${locale}`} style={{ alignItems: "center", display: "flex", gap: 10, fontWeight: 850 }}>
          <CircuitBoard aria-hidden size={28} color="var(--accent)" />
          <span>{site.name}</span>
        </Link>
        <nav style={{ alignItems: "center", display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "flex-end" }}>
          <Link href={`/${locale}/products`}>{copy.navProducts}</Link>
          <Link href={`/${locale}#solutions`}>{copy.navSolutions}</Link>
          <Link href={`/${locale}/knowledge`}>{copy.navKnowledge}</Link>
          <Link href={`/${locale}#contact`}>{copy.navContact}</Link>
          <Link
            href={`/${otherLocale}${path}`}
            aria-label={`Switch to ${localeNames[otherLocale]}`}
            style={{ alignItems: "center", display: "inline-flex", gap: 6 }}
          >
            <Languages aria-hidden size={18} />
            {localeNames[otherLocale]}
          </Link>
          <Link className="button" href={`/${locale}#contact`}>
            {copy.quote}
          </Link>
        </nav>
      </div>
    </header>
  );
}
