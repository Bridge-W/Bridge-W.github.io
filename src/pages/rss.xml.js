import rss from '@astrojs/rss';
import { getPublishedPosts } from '@/utils/content';
import { SITE } from '@/consts';

export async function GET(context) {
	const posts = await getPublishedPosts();
	const site = context.site;

	if (!site) {
		throw new Error('Site URL is not defined in astro.config.mjs');
	}

	return rss({
		title: SITE.title,
		description: SITE.description,
		site: site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
			categories: post.data.tags,
		})),
		customData: `<language>${SITE.lang}</language>`,
	});
}