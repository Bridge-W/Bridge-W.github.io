// 站点基础信息
export const SITE = {
  title: 'Bridge-W 的个人博客',
  description: '全栈开发者 / 设计爱好者 / 终身学习者',
  url: 'https://Bridge-W.github.io',
  lang: 'zh-CN',
  author: 'default',  // 对应 authors 集合中的 key
};

// 导航配置
export const NAV = [
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog' },
  { text: '项目', link: '/projects' },
  { text: '笔记', link: '/notes' },
  { text: '关于作者', link: '/about' },
  { text: "摄影空间", link: "/photography" }
];

// 社交链接
export const SOCIAL = {
  github: 'https://github.com/Bridge-W',
  // twitter: 'https://twitter.com/yourusername',
  email: 'wangqiao20211120@163.com',
};

// 分页配置
export const PAGINATION = {
  postsPerPage: 10,
  projectsPerPage: 6,
};