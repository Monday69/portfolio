import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const statuses = ['internship', 'production', 'private', 'school', 'personal', 'ongoing'] as const;
export const categories = ['ia', 'fullstack', 'iot'] as const;

const projects = defineCollection({
  // Une fiche par projet et par langue : src/content/projects/<lang>/<slug>.md
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string().max(180),
      order: z.number().int().positive(),
      status: z.enum(statuses),
      categories: z.array(z.enum(categories)).min(1),
      stack: z.array(z.string()).min(1).max(6),
      context: z.string(),
      role: z.string(),
      period: z.string().optional(),
      metric: z.object({ value: z.string(), label: z.string() }).optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      links: z
        .object({
          github: z.string().url().optional(),
          site: z.string().url().optional(),
          demo: z.string().url().optional(),
        })
        .default({}),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
