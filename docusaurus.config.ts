import { themes as prismThemes } from "prism-react-renderer";
import { type Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import { localeConfigs, localLanguages } from "./src/i18n/locale";

const config: Config = {
  title: "Certimate",
  tagline:
    "An open-source and free self-hosted SSL certificates ACME tool, automates the full-cycle of issuance, deployment, and renewal visually. 完全开源免费的自托管 SSL 证书 ACME 工具，申请、部署、续期全流程自动化可视化，支持各大主流云厂商。",
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
        baseUrl: "/",
        htmlLang: "en",
        label: "\u200B",
        path: "en",
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

  clientModules: ["./src/i18n/fallback.clientModules.ts", "./src/css/hack.css"],
};

export default config;
