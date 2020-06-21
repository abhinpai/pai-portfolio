module.exports = {
  title: "Abhin Pai",
  tagline: "Having a strong belief that Programming doesn't have any Language",
  url: "https://abhinpai.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "abhinpai",
  projectName: "pai-portfolio",
  // plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    googleAnalytics: {
      trackingID: "G-61TLB4TLQ6",
    },
    gtag: {
      trackingID: "G-61TLB4TLQ6",
    },
    announcementBar: {
      id: "underconstruction",
      content: "⭐️ This website is under contruction  ⭐️",
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
        // srcDark: 'img/docusaurus_keytar.svg', // In case of different site logo
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Technical Notes",
          position: "right",
        },
        // { to: "blog", label: "Blogs", position: "right" },
        { to: "about", label: "About", position: "right" },
        { to: "contact", label: "Contact", position: "right" },
      ],
    },
    algolia: {
      apiKey: "",
      indexName: ""
    },
    footer:{
      // style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Abhin Pai`,
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
