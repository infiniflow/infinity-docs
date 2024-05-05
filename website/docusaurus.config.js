// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Infinity',
  tagline: 'AI-native database for LLM applications',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://infiniflow.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Infiniflow', // Usually your GitHub org/user name.
  projectName: 'Infinity', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // New feature of Docusaurus v3.1
  onBrokenAnchors: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          disableVersioning: false,
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/infiniflow/infinity-docs/tree/main/website',
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          versions: {
            current: {
              label: 'Latest',
            },
          },
          // Needs to disable versioning when deployed in production.
          // disableVersioning: true,
          admonitions: {
            keywords: ['note', 'tip', 'info', 'warning', 'danger'],
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        gtag: {
          trackingID: 'G-F4PLCX32CM',
          anonymizeIP: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   appId: 'G23OEULB0Z',
      //   apiKey: '8d8c27bf49a7eb177b2b3fcb02c64d19',
      //   indexName: 'infiniflow',
      //   contextualSearch: true,
      // },
      // Replace with your project's social card
      prism: {
        theme: require('prism-react-renderer').themes.oceanicNext,
        darkTheme: require('prism-react-renderer').themes.oceanicNext,
      },
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        hideOnScroll: true,
        title: 'Infinity',
        logo: {
          alt: 'Infinity',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/infiniflow/infinity',
            'aria-label': 'GitHub repo',
            position: 'left',
            className: 'header-github-link',
          },
          {
            type: 'custom-github-stars',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://twitter.com/infiniflowai',
            'aria-label': 'Twitter',
            position: 'right',
            className: 'header-twitter-link',
          },
          {
            href: 'https://discord.com/invite/jEfRUwEYEV',
            'aria-label': 'Infinity on Discord',
            position: 'right',
            className: 'header-discord-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        // logo: { src: 'img/favicon.ico' },
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/build_from_source',
          //     },
          //   ],
          // },

          {
            // title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discord.com/invite/jEfRUwEYEV',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/infiniflowai',
              // },
              {
                html: `<div class="footer_custom_copyright"> © InfiniFlow ${new Date().getFullYear()} </div>`,
              },
            ],
          },
          // {
          //   title: 'Resources',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/infiniflow/infinity',
          //     },
          //   ],
          // },
        ],
        // copyright: `The AI-native database built for LLM applications, providing incredibly fast full-text and vector search.`,
      },
    }),
};

export default config;
