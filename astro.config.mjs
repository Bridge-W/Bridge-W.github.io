// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // 🔥 使用 Vercel 分配的域名（部署后可以看到）
  site: 'https://bridgewblog.vercel.app',

  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  build: {
    format: 'directory',
  },
  output: 'server',  // SSR 模式，支持 API 路由
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,  // 自动启用访客统计
    },
  }),
});