import { themes as prismThemes } from "prism-react-renderer";
import { type Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Certimate",
  tagline: "开源的 SSL 证书管理工具，可以帮助你自动申请、部署、续期 SSL 证书。",
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: "https://docs.certimate.me",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "certimate-go", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh",
    locales: ["en", "zh"],
  },

  markdown: {
    mermaid: true,
  },

  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ["en", "zh"],
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

  themeConfig: {
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
      copyright: `Copyright © ${new Date().getFullYear()} Certimate. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
