import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LLM开发手册",
  description: "LLM开发手册",
  srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'LLM发展',
        items: [
          { text: '概述', link: '/llm-develop-overview' },
          { text: '开源LLM', link: '/opensource-llm' },
          { text: 'prompt指南和原则', link: '/prompt-guide' },
          { text: 'llm agent代理综述', link: '/llm-agent' },
          { text: 'llm训练和微调', link: '/llm-train-fine-tuning' },
          { text: 'llm评估', link: '/llm-evaluate' },
        ]
      },
      {
        text: '深度学习',
        items: [
          { text: '深度学习基础知识', link: '/deep-learn-knowledge' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
