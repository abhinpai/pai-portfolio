module.exports = {
  title: "Abhin Pai",
  tagline: "Having a strong belief that Programming doesn't have any Language",
  url: "https://abhinpai.github.io",
  baseUrl: "/pai-portfolio/",
  favicon: "img/favicon.ico",
  organizationName: "abhinpai",
  projectName: "pai-portfolio",
  // plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    googleAnalytics: {
      trackingID: "G-8P8D7SPC6B",
    },
    gtag: {
      trackingID: "G-8P8D7SPC6B",
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
        // srcDark: 'img/docusaurus_keytar.svg',
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
