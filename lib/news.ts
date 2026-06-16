import type { Locale } from "./i18n";

export type Article = {
  slug: string;
  date: string;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  tags: string[];
};

export const articles: Article[] = [
  {
    slug: "choosing-usb-rs485-ethernet-daq",
    date: "2026-06-16",
    title: {
      en: "USB, RS485, or Ethernet DAQ: how to choose the right interface",
      zh: "USB、RS485、以太网 DAQ 接口如何选择",
    },
    summary: {
      en: "A practical comparison for sampling distance, host software, isolation, deployment count, and serviceability.",
      zh: "从采样距离、上位机软件、隔离、部署数量和维护性角度进行实用对比。",
    },
    tags: ["daq", "interface", "seo"],
  },
  {
    slug: "thermocouple-vs-rtd-daq",
    date: "2026-06-12",
    title: {
      en: "Thermocouple vs RTD acquisition modules for industrial temperature measurement",
      zh: "工业温度测量中热电偶与热电阻采集模块的差异",
    },
    summary: {
      en: "Thermocouples cover wider ranges; RTDs improve repeatability. The acquisition module should match both sensor physics and plant wiring.",
      zh: "热电偶覆盖更宽温区，热电阻重复性更好；采集模块需要同时匹配传感器原理和现场布线。",
    },
    tags: ["temperature", "rtd", "thermocouple"],
  },
];
