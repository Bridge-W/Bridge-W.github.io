import { getCollection, type CollectionEntry } from 'astro:content';

// 获取已发布的博客文章（按日期排序）
export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// 获取精选文章
export async function getFeaturedPosts(limit = 3) {
  const posts = await getCollection('blog', ({ data }) => data.featured && !data.draft);
  return posts.slice(0, limit);
}

// 获取所有标签及文章数
export async function getAllTags() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const tagCount = new Map<string, number>();

  posts.forEach(post => {
    post.data.tags.forEach(tag => {
      tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagCount.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));
}

// 类型导出
export type BlogPost = CollectionEntry<'blog'>;
export type Project = CollectionEntry<'projects'>;