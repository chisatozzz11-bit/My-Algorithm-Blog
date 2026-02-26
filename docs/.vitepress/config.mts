import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的算法空间",
  description: "学一个知识点，就点亮一颗星",
  // 核心中文配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '算法笔记', link: '/markdown-examples' } // 这里先连到自带的例子
    ],

    // 侧边栏（你以后写了新文章就在这里加）
    sidebar: [
      {
        text: '基础算法',
        items: [
          { text: '排序算法', link: '/algorithm/sorting' },
          { text: '示例页面', link: '/markdown-examples' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chisatozzz11-bit/My-Algorithm-Blog' }
    ],

    // 把默认的英文文案改成中文
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于'
    }
  }
})