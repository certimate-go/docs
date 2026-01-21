import { themes as prismThemes } from "prism-react-renderer";
import { type Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import {
  localeConfigs,
  localLanguages,
  type LocalLanguage,
} from "./src/i18n/locale";
import ConfigLocalizationDict from "./i18n/docusaurus.config.json";

const defaultLocale: LocalLanguage = "en";

const getLocalizedConfigValue = (key: keyof typeof ConfigLocalizationDict) => {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
  const values = ConfigLocalizationDict[key];
  if (!values) {
    throw new Error(`Localized config key=${key} not found`);
  }
  const value = values[currentLocale] ?? values[defaultLocale];
  if (!value) {
    throw new Error(`Localized value for config key=${key} not found`);
  }
  return value;
};

const config: Config = {
  title: "Certimate",
  tagline: getLocalizedConfigValue("tagline"),
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: "https://docs.certimate.me",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "certimate-go", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "DEFAULT",
    locales: ["DEFAULT", ...localLanguages],
    localeConfigs: {
      ["DEFAULT"]: {
        // WARNING: This is a temporary workaround for default locale.
        ...localeConfigs[defaultLocale],
        baseUrl: "/",
        htmlLang: "en",
        label: "\u200B",
      },
      ...localeConfigs,
    },
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content: [
          "Certimate",
          "certificate management",
          "certificates",
          "SSL",
          "HTTPS",
          "Let's Encrypt",
          "ACME",
          "ACME client",
          "ACME protocol",
          "automation",
          "devops",
          "证书管理",
          "自动化",
          "运维",
          "lego",
          "certbot",
          "acme.sh",
        ].join(", "),
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "Certimate",
      logo: {
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          label: "${DOCS}",
          sidebarId: "docSidebar",
          position: "left",
        },
        {
          to: "/blog",
          label: "${BLOG}",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/certimate-go/certimate",
          position: "right",
          className: "icon icon-github",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "${GUIDE}",
          items: [
            {
              label: "${INTRODUCTION}",
              to: "/docs/introduction",
            },
            {
              label: "${INSTALLATION}",
              to: "/docs/getting-started/installation",
            },
            {
              label: "${FAQ}",
              to: "/docs/reference/faq",
            },
          ],
        },
        {
          title: "${COMMUNITY}",
          items: [
            {
              label: "${ISSUES}",
              href: "https://github.com/certimate-go/certimate/issues",
            },
            {
              label: "${NFR}",
              href: "https://github.com/certimate-go/certimate/issues/new?template=2-feature_request.yml",
            },
            {
              label: "${TELEGRAM}",
              href: "https://t.me/+ZXphsppxUg41YmVl",
            },
          ],
        },
        {
          title: "${MORE}",
          items: [
            {
              label: "${GITHUB}",
              href: "https://github.com/certimate-go/certimate",
            },
            {
              label: "${DONATE}",
              href: "https://profile.ikit.fun/sponsors",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} certimate-go. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: [...localLanguages],
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./docusaurus.sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: ["./src/css/custom.css", "./src/css/icon.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  clientModules: [
    "./src/i18n/fallback.clientModules.ts",
    "./src/i18n/fallback.clientModules.css",
  ],
};

export default config;
