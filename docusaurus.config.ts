import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import path from 'path';

const config: Config = {
  title: 'Bioinformatics',
  tagline: 'Bioinformatics is cool',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'a-xavier', // Usually your GitHub org/user name
  projectName: 'docusaurus',    // Usually your repo name

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // disable default docs instance (we'll use plugins instead)
        blog: {
          // You can add options here, or leave it empty for defaults
         authorsMapPath: "authors.yml",
        }, 
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'genomics',
        path: 'docs/genomics',
        routeBasePath: 'genomics',
        sidebarPath: './sidebars/sidebarGeno.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'transcriptomics',
        path: 'docs/transcriptomics',
        routeBasePath: 'transcriptomics',
        sidebarPath: './sidebars/sidebarTranscripto.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'methylomics',
        path: 'docs/methylomics',
        routeBasePath: 'methylomics',
        sidebarPath: './sidebars/sidebarMethylo.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'proteomics',
        path: 'docs/proteomics',
        routeBasePath: 'proteomics',
        sidebarPath: './sidebars/sidebarProteo.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'metagenomics',
        path: 'docs/metagenomics',
        routeBasePath: 'metagenomics',
        sidebarPath: './sidebars/sidebarMeta.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'linux',
        path: 'docs/linux',
        routeBasePath: 'linux',
        sidebarPath: './sidebars/sidebarLinux.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'coding',
        path: 'docs/coding',
        routeBasePath: 'coding',
        sidebarPath: './sidebars/sidebarCoding.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ressources',
        path: 'docs/ressources',
        routeBasePath: 'ressources',
        sidebarPath: 'sidebars/sidebarRessource.ts',
      }
      ],
      [
      '@docusaurus/plugin-content-docs',
      {
        id: 'visualisation',
        path: 'docs/visualisation',
        routeBasePath: 'visualisation',
        sidebarPath: 'sidebars/sidebarViz.ts',
      }
      ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pipeline',
        path: 'docs/pipeline',
        routeBasePath: 'pipeline',
        sidebarPath: 'sidebars/sidebarPipeline.ts',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'statistics',
        path: 'docs/stats',
        routeBasePath: 'stats',
        sidebarPath: 'sidebars/sidebarStats.ts',
      }
      ]
  ],

  themeConfig: {
    image: 'img/bioinfo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Bioinformatics',
      logo: {
        alt: 'Bioinformatics Logo',
        src: 'img/bioinfo.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Domain',
          position: 'left',
          items: [
            {label: 'Genomics', to: '/genomics/intro'},
            {label: 'Transcriptomics', to: '/transcriptomics/intro'},
            {label: 'Methylomics', to: '/methylomics/intro'},
            {label: 'Proteomics', to: '/proteomics/intro'},
            {label: 'Metagenomics', to: '/metagenomics/intro'},
          ],
        },
        {
          type: "dropdown",
          label: "Coding",
          position: "left",
          items: [
            {label: 'Linux/Bash', to: '/linux/intro'},
            {label: 'Coding', to: '/coding/intro'},
            {label: "Pipeline", to: "/pipeline/intro"}
          ],
        },
        {
          type: "dropdown",
          label: "Analysis",
          position: "left",
          items: [
            {label: "Visualisation", to: "/visualisation/intro"},
            {label: "Statistics", to: "/stats/intro"},
          ],
        },
        {
          type: "docSidebar",
          sidebarId: "ressourceSidebar",
          docsPluginId: "ressources", // <-- this is required!
          position: "left",
          label: "Ressources",
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          type: 'html',
          position: 'right',
          value: '<a href="https://github.com/a-xavier" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 5.77a5.07 5.07 0 0 0-.09-3.86S18.73 1.56 16 3.13a13.38 13.38 0 0 0-7 0C6.27 1.56 5.09 1.91 5.09 1.91A5.07 5.07 0 0 0 5 5.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></a>',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About us',
          items: [
            {label: 'Alex', to: '/blog/authors/alex'},
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus'},
        //     {label: 'Discord', href: 'https://discordapp.com/invite/docusaurus'},
        //     {label: 'X', href: 'https://x.com/docusaurus'},
        //   ],
        // },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/a-xavier'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bioinformatics`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
