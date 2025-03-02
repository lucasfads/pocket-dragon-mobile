import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';
import { number } from 'astro:schema';

const capitulos = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "src/data/capitulos" }),
	schema: z.object({
		number: z.number(),
		title: z.string(),
		intro: z.string(),
		slug: z.string(),
	}),
});

export const collections = { capitulos };