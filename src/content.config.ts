import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';
import { number } from 'astro:schema';

const chapters = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "src/data/chapters" }),
	schema: z.object({
		number: z.number(),
		title: z.string(),
		slug: z.string(),
	}),
});

export const collections = { chapters };