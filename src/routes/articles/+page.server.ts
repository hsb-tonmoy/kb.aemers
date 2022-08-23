import { getDirectusClient } from '$lib/client';
import { error } from '@sveltejs/kit';

export async function load() {
	const directus = await getDirectusClient();
	let response;

	try {
		response = await directus.items('articles').readByQuery({
			fields: ['*', 'category.id', 'category.name', 'category.slug']
		});
	} catch (err) {
		console.log(err);
		throw error(404, 'Articles not found');
	}

	const formattedArticles = response.data.map((article) => {
		return {
			...article,
			category: {
				id: article.category.id,
				name: article.category.name,
				slug: article.category.slug
			}
		};
	});

	const featuredArticles = await directus.items('articles').readByQuery({
		fields: ['*', 'category.id', 'category.name', 'category.slug'],
		filter: {
			featured: {
				_eq: true
			}
		}
	});
	console.log(featuredArticles);
	return { formattedArticles, featuredArticles };
}
