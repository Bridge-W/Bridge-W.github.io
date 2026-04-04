import { defineCollection, z } from 'astro:content';

// 博客集合 - 支持高扩展的字段设计
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    series: z.object({
      name: z.string(),
      order: z.number(),
    }).optional(),
    author: z.string().default('default'),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    coverImage: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
  }),
});

// 项目展示集合
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    links: z.object({
      demo: z.string().url().optional(),
      repo: z.string().url().optional(),
    }),
    coverImage: z.string(),
    featured: z.boolean().default(false),
    startDate: z.coerce.date(),
    status: z.enum(['completed', 'ongoing', 'archived']).default('completed'),
  }),
});

// 短内容/笔记集合
const notes = defineCollection({
  type: 'content',
  schema: z.object({
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    externalUrl: z.string().url().optional(),
  }),
});

// 作者信息
const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    avatar: z.string(),
    social: z.object({
      github: z.string().optional(),
      twitter: z.string().optional(),
      email: z.string().email().optional(),
    }),
  }),
});

export const collections = { blog, projects, notes, authors };