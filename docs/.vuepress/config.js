module.exports = {
  base: "/Panda-UI/",
  title: "P-UI",
  description: "一个好用的UI框架",
  themeConfig: {
    logo: "/assets/img/logo.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/guide/" },
      { text: "交流", link: "https://google.com" },
    ],
    sidebar: [
      {
        title: "快速上手",
        children: ["/guide//install/"],
      },
      {
        title: "Components",
        children: [
          "/guide/components/button",
          // "/components/tabs",
          // "/components/input",
          // "/components/grid",
          // "/components/layout",
          // "/components/toast",
          // "/components/tabs",
        ],
      },
    ],
  },
};
