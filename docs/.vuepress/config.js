const path = require('path');

const projectRoot = process.cwd();
const alias = path.resolve(projectRoot, 'src')


module.exports = {
    plugins: [
        [
            'vuepress-plugin-typescript',
            {
                transpileOnly: true,
                compilerOptions: {
                    'target': 'ES2019',
                },
            },
        ],
    ],
    base: "/Panda-UI/",
    title: "P-UI",
    description: "一个好用的UI框架",
    themeConfig: {
        logo: "/assets/img/logo.png",
        nav: [
            {text: "主页", link: "/"},
            {text: "文档", link: "/guide/"},
            {text: "交流", link: "https://google.com"},
        ],
        sidebar: [
            {
                title: "快速上手",
                children: ["/guide/install/"],
            },
            {
                title: "Components",
                children: [
                    "/guide/components/button",
                    "/guide/components/tabs",
                    "/guide/components/input",
                    "/guide/components/grid",
                    "/guide/components/layout",
                    "/guide/components/toast",
                    "/guide/components/popover",
                    "/guide/components/collapse",
                ],
            },
        ],
    },
};
