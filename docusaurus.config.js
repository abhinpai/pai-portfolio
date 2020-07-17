module.exports = {
  title: "Abhin Pai",
  tagline: "Having a strong belief that Programming doesn't have any Language",
  url: "https://abhinpai.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "abhinpai",
  projectName: "pai-portfolio",
  themeConfig: {
    sidebarCollapsible: true,
    googleAnalytics: {
      trackingID: "G-61TLB4TLQ6",
    },
    gtag: {
      trackingID: "G-61TLB4TLQ6",
    },
    announcementBar: {
      id: "underconstruction",
      content: "⭐️ This website is under construction  ⭐️",
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    algolia: {
      apiKey: '182fa59875da31eb97b079236300f6ed',
      indexName: 'abhinpai',
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Technical Notes",
          position: "right",
        },
        { to: "blog", label: "Blogs", position: "right" },
        { to: "about/about", label: "About Me", position: "right" },
        {
          href: 'https://github.com/abhinpai',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer:{
      // style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()}, Abhin Pai`,
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
