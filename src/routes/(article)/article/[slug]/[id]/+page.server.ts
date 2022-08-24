import { getDirectusClient } from '$lib/client';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const id = params.id;

	const directus = await getDirectusClient();

	let response;

	try {
		response = await directus.items('articles').readOne(id, {
			fields: ['*', 'category.id', 'category.name']
		});
	} catch (err) {
		console.log(err);
		throw error(404, 'Article not found');
	}

	return { article: response };
}
