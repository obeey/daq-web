import type { Locale } from "./i18n";

export type Product = {
  slug: string;
  sku: string;
  category: "temperature" | "encoder" | "multifunction" | "module";
  priceCny: number;
  image: string;
  names: Record<Locale, string>;
  short: Record<Locale, string>;
  description: Record<Locale, string>;
  features: Record<Locale, string[]>;
  applications: Record<Locale, string[]>;
  specs: Record<Locale, Record<string, string>>;
};

export const products: Product[] = [
  {
    slug: "dabd-e265-encoder-daq",
    sku: "DABD-E265",
    category: "encoder",
    priceCny: 999,
    image: "/assets/products/dabd-e265.webp",
    names: {
      en: "DABD-E265 Encoder Data Acquisition Card",
      zh: "DABD-E265 编码器采集卡",
    },
    short: {
      en: "4-channel encoder capture with DI/DO and isolated RS485, USB, Ethernet communication.",
      zh: "4 路编码器输入，集成 DI/DO，支持隔离 RS485、USB、以太网通信。",
    },
    description: {
      en: "A compact encoder DAQ card for motion control, speed measurement, displacement feedback, and industrial automation retrofits.",
      zh: "面向运动控制、转速测量、位移反馈和工业自动化改造的紧凑型编码器采集卡。",
    },
    features: {
      en: [
        "4 differential or single-ended encoder input channels",
        "32-bit counter resolution with 40 Ksps sampling",
        "8 digital inputs and 8 Darlington open-drain outputs",
        "RS485 isolation plus USB and Ethernet connectivity",
      ],
      zh: [
        "4 路差分或单端编码器输入",
        "32bit 分辨率，40 Ksps 采样",
        "8 路数字输入和 8 路达林顿开漏输出",
        "支持隔离 RS485、USB、以太网通信",
      ],
    },
    applications: {
      en: ["Servo feedback", "Rotary speed monitoring", "Production line position tracking"],
      zh: ["伺服反馈", "旋转速度监测", "产线位置跟踪"],
    },
    specs: {
      en: {
        Communication: "Isolated RS485, USB, Ethernet",
        Power: "DC plug or 3.81 mm terminal, 2 W",
        "Encoder input": "4 channels, differential/single-ended",
        Resolution: "32 bit",
        "Sampling rate": "40 Ksps",
        "Digital I/O": "8 DI at 5 V logic, 8 DO open drain",
      },
      zh: {
        通信方式: "隔离 RS485、USB、以太网",
        供电方式: "DC 插头或 3.81 接线端子，2 W",
        编码器输入: "4 路，差分/单端",
        分辨率: "32 bit",
        采样速率: "40 Ksps",
        数字IO: "8 路 DI 5V 逻辑，8 路 DO 开漏输出",
      },
    },
  },
  {
    slug: "dabt7668tc-thermocouple-module",
    sku: "DABT7668TC",
    category: "temperature",
    priceCny: 499,
    image: "/assets/products/dabt7668tc.webp",
    names: {
      en: "DABT7668TC 8-Channel Thermocouple Module",
      zh: "DABT7668TC 8 通道热电偶采集模块",
    },
    short: {
      en: "24-bit thermocouple acquisition for K/J/T/S/N/R/B sensors with USB and isolated RS485.",
      zh: "支持 K/J/T/S/N/R/B 热电偶，24bit 采集，提供 USB 与隔离 RS485。",
    },
    description: {
      en: "Designed for stable industrial temperature monitoring where channel density, noise rejection, and open integration matter.",
      zh: "适合需要多通道、抗干扰和开放集成能力的工业温度监测场景。",
    },
    features: {
      en: [
        "8 thermocouple channels",
        "K, J, T, S, N, R, B type support",
        "-200 C to 1300 C measurement range",
        "24-bit delta-sigma ADC with 10 Hz stable acquisition",
      ],
      zh: [
        "8 路热电偶输入",
        "支持 K、J、T、S、N、R、B 多类型",
        "-200℃ 至 1300℃ 温度量程",
        "24bit Delta-Sigma ADC，10Hz 稳定采集",
      ],
    },
    applications: {
      en: ["Furnace monitoring", "Battery thermal tests", "Process temperature logging"],
      zh: ["炉温监测", "电池热测试", "工艺温度记录"],
    },
    specs: {
      en: {
        Communication: "Isolated RS485, USB",
        Input: "8 thermocouple channels",
        Accuracy: "0.02%",
        Resolution: "24 bit",
        Rate: "10 Hz",
      },
      zh: {
        通信方式: "隔离 RS485、USB",
        输入类型: "8 路热电偶",
        精度: "0.02%",
        分辨率: "24 bit",
        采样速率: "10 Hz",
      },
    },
  },
  {
    slug: "dabt-pt509-rtd-module",
    sku: "DABT-PT509",
    category: "temperature",
    priceCny: 1999,
    image: "/assets/products/dabt-pt509.webp",
    names: {
      en: "DABT-PT509 PT100 RTD Acquisition Module",
      zh: "DABT-PT509 PT100 热电阻采集模块",
    },
    short: {
      en: "8-channel PT100 acquisition module for precision resistance temperature measurement.",
      zh: "8 路 PT100 热电阻采集模块，适用于精密温度测量。",
    },
    description: {
      en: "A high-resolution RTD module for laboratory test benches, environmental chambers, and industrial sensing nodes.",
      zh: "适用于实验台、环境箱和工业传感节点的高分辨率 RTD 模块。",
    },
    features: {
      en: ["8 PT100 channels", "-200 C to 600 C range", "24-bit ADC", "USB and isolated RS485"],
      zh: ["8 路 PT100", "-200℃ 至 600℃ 量程", "24bit ADC", "USB 与隔离 RS485"],
    },
    applications: {
      en: ["Environmental chambers", "Precision process control", "Equipment health monitoring"],
      zh: ["环境试验箱", "精密过程控制", "设备健康监测"],
    },
    specs: {
      en: {
        Communication: "Isolated RS485, USB",
        Sensor: "PT100 RTD, 8 channels",
        Accuracy: "0.05%",
        Resolution: "24 bit",
        Rate: "10 Hz",
      },
      zh: {
        通信方式: "隔离 RS485、USB",
        传感器: "PT100 热电阻，8 路",
        精度: "0.05%",
        分辨率: "24 bit",
        采样速率: "10 Hz",
      },
    },
  },
  {
    slug: "dabt-g601tc-isolated-thermocouple",
    sku: "DABT-G601TC",
    category: "temperature",
    priceCny: 1999,
    image: "/assets/products/dabt-g601tc.webp",
    names: {
      en: "DABT-G601TC Isolated Thermocouple Module",
      zh: "DABT-G601TC 隔离型热电偶采集模块",
    },
    short: {
      en: "Isolated temperature acquisition with RS485, USB FS, and Ethernet interfaces.",
      zh: "隔离型温度采集模块，支持 RS485、USB FS 和以太网接口。",
    },
    description: {
      en: "Built for harsh electrical environments where isolation and flexible host integration are required.",
      zh: "面向复杂电气环境，强调隔离保护与灵活主机集成。",
    },
    features: {
      en: ["8 thermocouple channels", "16-bit 1 kHz or 24-bit 10 Hz modes", "Isolated RS485", "Ethernet option"],
      zh: ["8 路热电偶", "16bit 1kHz 或 24bit 10Hz 模式", "隔离 RS485", "以太网接口"],
    },
    applications: {
      en: ["High-noise factories", "Distributed temperature nodes", "OEM equipment"],
      zh: ["强干扰工厂", "分布式温度节点", "OEM 设备"],
    },
    specs: {
      en: {
        Communication: "Isolated RS485, USB FS, Ethernet",
        Input: "K/J/T/S/N/R/B thermocouples",
        Accuracy: "0.05%",
        Rate: "16-bit 1 kHz or 24-bit 10 Hz",
      },
      zh: {
        通信方式: "隔离 RS485、USB FS、以太网",
        输入类型: "K/J/T/S/N/R/B 热电偶",
        精度: "0.05%",
        采样速率: "16bit 1kHz 或 24bit 10Hz",
      },
    },
  },
  {
    slug: "dabt7689-thermocouple-rtd-module",
    sku: "DABT7689",
    category: "temperature",
    priceCny: 1980,
    image: "/assets/products/dabt7689.webp",
    names: {
      en: "DABT7689 Thermocouple and RTD Module",
      zh: "DABT7689 热电偶/热电阻采集模块",
    },
    short: {
      en: "Combined thermocouple and PT100 acquisition for flexible temperature test systems.",
      zh: "同时支持热电偶与 PT100，适合灵活温度测试系统。",
    },
    description: {
      en: "One platform for mixed temperature sensors, simplifying wiring, software integration, and inventory.",
      zh: "以一个平台兼容多类温度传感器，简化接线、软件集成和备货。",
    },
    features: {
      en: ["Thermocouple and PT100 inputs", "Isolated CAN and RS485", "USB support", "Selectable resolution modes"],
      zh: ["热电偶与 PT100 输入", "隔离 CAN 与 RS485", "支持 USB", "分辨率模式可选"],
    },
    applications: {
      en: ["Mixed-sensor rigs", "R&D validation", "Industrial temperature mapping"],
      zh: ["混合传感器台架", "研发验证", "工业温度场测绘"],
    },
    specs: {
      en: {
        Communication: "Isolated CAN, isolated RS485, USB",
        Input: "Thermocouple and PT100",
        Range: "-200 C to 1300 C",
        Rate: "16-bit 1 kHz or 24-bit 10 Hz",
      },
      zh: {
        通信方式: "隔离 CAN、隔离 RS485、USB",
        输入类型: "热电偶与 PT100",
        温度量程: "-200℃ 至 1300℃",
        采样速率: "16bit 1kHz 或 24bit 10Hz",
      },
    },
  },
  {
    slug: "dabl7606-multifunction-daq",
    sku: "DABL7606",
    category: "multifunction",
    priceCny: 3980,
    image: "/assets/products/dabl7606.webp",
    names: {
      en: "DABL7606 Multifunction DAQ Card",
      zh: "DABL7606 多功能数据采集卡",
    },
    short: {
      en: "Multifunction DAQ card for analog acquisition, control I/O, and embedded test systems.",
      zh: "面向模拟采集、控制 I/O 和嵌入式测试系统的多功能 DAQ 卡。",
    },
    description: {
      en: "A flexible DAQ board for teams replacing closed instrumentation with controllable, documented hardware.",
      zh: "适合替代封闭式仪器系统，构建可控、可文档化硬件平台。",
    },
    features: {
      en: ["Multi-channel analog acquisition", "Digital I/O expansion", "Open integration workflow", "Industrial connector layout"],
      zh: ["多通道模拟采集", "数字 I/O 扩展", "开放集成流程", "工业端子布局"],
    },
    applications: {
      en: ["Automated test", "Sensor acquisition", "Teaching labs"],
      zh: ["自动化测试", "传感器采集", "教学实验室"],
    },
    specs: {
      en: {
        Class: "Multifunction DAQ",
        Interface: "USB/fieldbus options",
        Use: "Analog input, digital I/O, control",
      },
      zh: {
        类型: "多功能 DAQ",
        接口: "USB/现场总线可选",
        用途: "模拟输入、数字 I/O、控制",
      },
    },
  },
  {
    slug: "dabl-g511-temperature-daq",
    sku: "DABL-G511",
    category: "temperature",
    priceCny: 139,
    image: "/assets/products/dabl-g511.webp",
    names: {
      en: "DABL-G511 Compact Temperature DAQ",
      zh: "DABL-G511 紧凑型温度采集模块",
    },
    short: {
      en: "Compact low-cost module for temperature sensing and embedded data logging.",
      zh: "低成本紧凑模块，适合温度感知与嵌入式数据记录。",
    },
    description: {
      en: "A compact board for prototypes, education, and distributed sensing nodes.",
      zh: "适合原型验证、教学和分布式感知节点的小型板卡。",
    },
    features: {
      en: ["Compact footprint", "Low-cost integration", "DAQ-ready terminal layout", "Suitable for prototypes"],
      zh: ["紧凑尺寸", "低成本集成", "适合 DAQ 的端子布局", "适合原型项目"],
    },
    applications: {
      en: ["Prototype sensing", "Education", "Small monitoring systems"],
      zh: ["原型传感", "教学", "小型监测系统"],
    },
    specs: {
      en: {
        Class: "Compact DAQ module",
        Integration: "Embedded-friendly",
        Use: "Temperature and sensor logging",
      },
      zh: {
        类型: "紧凑 DAQ 模块",
        集成方式: "适合嵌入式系统",
        用途: "温度与传感器记录",
      },
    },
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function categories(locale: Locale) {
  return [
    {
      id: "temperature",
      label: locale === "zh" ? "温度采集" : "Temperature DAQ",
    },
    {
      id: "encoder",
      label: locale === "zh" ? "编码器采集" : "Encoder DAQ",
    },
    {
      id: "multifunction",
      label: locale === "zh" ? "多功能采集" : "Multifunction DAQ",
    },
    {
      id: "module",
      label: locale === "zh" ? "模块" : "Modules",
    },
  ];
}
