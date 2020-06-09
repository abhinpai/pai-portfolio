module.exports = {
  title: "Abhin Pai",
  tagline: "Having a strong belief that Programming doesn't have any Language",
  url: "https://abhinpai.github.io",
  baseUrl: "/pai-portfolio/",
  favicon: "img/favicon.ico",
  organizationName: "abhinpai",
  projectName: "pai-portfolio",
  themeConfig: {
    navbar: {
      // title: "Abhin Pai",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Technical Notes",
          position: "right",
        },
        { to: "blog", label: "Blogs", position: "right" },
        { to: "about", label: "About", position: "right" },
        { to: "contact", label: "Contatct", position: "right" },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
