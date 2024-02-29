// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Infinity',
  tagline: 'The AI-native database for LLM applications',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Infiniflow', // Usually your GitHub org/user name.
  projectName: 'Infinity', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/infiniflow/infinity-docs/tree/main/website',
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          versions: {
            current: {
              label: 'Next',
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
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
 
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        hideOnScroll: false,
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
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/infiniflow/infinity',
          //   label: 'GitHub',
          //   position: 'left',
          // },
          // {
          //   'aria-label': 'GitHub Repository',
          //   'className': 'navbar--github-link',
          //   'href': 'https://github.com/infiniflow/infinity',
          //   'position': 'left',
          // },
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
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/jEfRUwEYEV',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/infiniflowai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/infiniflow/infinity',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} InfiniFlow all rights reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
