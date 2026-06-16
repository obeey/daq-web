import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { isLocale, type Locale, site } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const title =
    locale === "zh"
      ? "DAQForge | 数据采集卡与工业测控模块"
      : "DAQForge | Data Acquisition Cards and Industrial DAQ Modules";
  const description =
    locale === "zh"
      ? "销售数据采集卡、温度采集模块、编码器采集卡与工业测控方案，支持中英文、SSR、结构化数据与 GEO 优化。"
      : "DAQ cards, thermocouple modules, RTD acquisition, encoder DAQ, and industrial measurement solutions with SSR, structured data, and GEO-friendly content.";

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages: {
        en: `${site.url}/en`,
        zh: `${site.url}/zh`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      url: `${site.url}/${locale}`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body>
        <Header locale={locale as Locale} />
        {children}
        <Footer locale={locale as Locale} />
      </body>
    </html>
  );
}
