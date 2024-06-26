import { defineConfig } from "vuepress/config";

export default defineConfig({
  /**
   * Type is `DefaultThemeConfig`
   */
  themeConfig: {
    editLinks: true,
    nav: [
        {
          text: '工程规范',
          items: [
            { text: 'CHANGELOG规范', link: "/engineering/changelog" },
          ]
        }
      ],

    repo: "https://github.com/Ting-YA-Yang/my-spec",
    repoLabel: 'GitHub',

    // 假如文档放在一个特定的分支下：
    docsBranch: 'main',
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  },
  base: "/my-spec/",
  title: "My Specific Site",
  extraWatchFiles: ['.vuepress/config.ts'],  // 少了这个值部署之后的网站会失去css样式
});