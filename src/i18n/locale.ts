import { type I18nLocaleConfig } from "@docusaurus/types";

export type LocalLanguage = (typeof localLanguages)[number];

export const localLanguages = ["en", "zh"] as const;

export const localeConfigs: Record<LocalLanguage, Partial<I18nLocaleConfig>> = {
  en: {
    baseUrl: "/en-US/",
    htmlLang: "en-US",
    label: "English",
    path: "en",
  },
  zh: {
    baseUrl: "/zh-CN/",
    htmlLang: "zh-Hans",
    label: "简体中文",
    path: "zh",
  },
};
