import { error } from '@sveltejs/kit';
import { get } from '$lib/api';

export async function load() {
	const response = await get('items/articles');
	const articles = await response.json();

	if (response.ok) {
		return articles;
	}
	throw error(500, 'Server Error. Please try again later.');
}
