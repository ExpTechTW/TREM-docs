import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "TREM Docs",
  tagline: "TREM Docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://exptechtw.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ExpTechTW", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["en", "zh-Hant", "ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/NKUST-iOS-Club/docs/tree/main/",
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/NKUST-iOS-Club/docs/tree/main/",
          editLocalizedFiles: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "TREM Docs",
      logo: {
        alt: "TREM Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tremSidebar",
          position: "left",
          label: "Swift",
        },
        {
          href: "https://github.com/ExpTechTW/TREM-Docs",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "TREM",
          items: [
            {
              label: "trem",
              to: "/docs/trem/start/",
            },
          ],
        },
        {
          title: "社群連結",
          items: [
            {
              label: "Discord",
              href: "https://exptech.com.tw/dc",
            },
          ],
        },
        {
          title: "其他連結",
          items: [
            {
              label: "部落格",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/ExpTechTW",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ExpTech Studio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ["bash"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
