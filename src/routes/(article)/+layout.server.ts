import { getDirectusClient } from '$lib/client';
import { error } from '@sveltejs/kit';

export async function load() {
	const directus = await getDirectusClient();

	let response;

	try {
		response = await directus.items('articles').readByQuery({
			fields: ['id', 'title', 'slug', 'category.id', 'category.name']
		});
	} catch (err) {
		console.log(err);
		throw error(404, 'Articles not found');
	}

	// Group articles by category into an array of objects

	const groupedByCategory = response.data.reduce((acc, article) => {
		const category = article.category;
		if (!acc[category.name]) {
			acc[category.name] = {
				category,
				articles: []
			};
		}
		acc[category.name].articles.push(article);
		return acc;
	}, {});

	// Convert the object into an array of objects

	const articlesGroupedByCategory = Object.keys(groupedByCategory).map((key) => {
		return groupedByCategory[key];
	});

	return {
		categories: articlesGroupedByCategory
	};
}
