// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// Themes
import pagePlugin from "@pelagornis/page";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.ivanax86.dev/',
	integrations: [
		starlight({
			title: 'My Docs',
      plugins: [pagePlugin()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
