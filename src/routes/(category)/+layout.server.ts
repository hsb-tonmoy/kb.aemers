import { getDirectusClient } from '$lib/client';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const slug = params.slug;
	const directus = await getDirectusClient();
	let response;

	try {
		response = await directus.items('articles').readByQuery({
			fields: ['title', 'id', 'slug', 'featured_image', 'summary', 'category.name'],
			filter: {
				category: {
					slug: {
						_eq: slug
					}
				}
			}
		});
	} catch (err) {
		console.log(err);
		throw error(404, 'Articles not found');
	}

	return { articles: response.data };
}
