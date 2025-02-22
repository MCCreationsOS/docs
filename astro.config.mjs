// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MCCreations Docs',
			credits: true,
			favicon: '/public/favicon.ico',
			logo: {
				src: '/public/mcc_more_scaffold_cube.png',
				alt: 'MCCreations Logo',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
					],
				},
				...openAPISidebarGroups
			],
			plugins: [
				starlightOpenAPI([{
					base: 'scaffolding',
					schema: './public/openapi.json',
					collapsed: true,
					sidebarMethodBadges: true,
				}]),
			],
		}),
	],

});
