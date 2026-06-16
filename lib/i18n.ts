export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
};

export const site = {
  name: "DAQForge",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://daq-web.vercel.app",
  email: "obeeycyc@gmail.com",
  phone: "+8618108655617",
};

export const t = {
  en: {
    navProducts: "Products",
    navSolutions: "Solutions",
    navKnowledge: "Knowledge",
    navContact: "Contact",
    quote: "Request Quote",
    products: "DAQ products",
    viewProduct: "View product",
    specs: "Specifications",
    features: "Key features",
    applications: "Applications",
    downloads: "Engineering resources",
    faq: "FAQ",
  },
  zh: {
    navProducts: "产品",
    navSolutions: "方案",
    navKnowledge: "知识库",
    navContact: "联系",
    quote: "获取报价",
    products: "DAQ 产品",
    viewProduct: "查看产品",
    specs: "规格参数",
    features: "核心特性",
    applications: "应用场景",
    downloads: "工程资料",
    faq: "常见问题",
  },
} satisfies Record<Locale, Record<string, string>>;
