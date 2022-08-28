import { getDirectusClient } from '$lib/client';
import { error } from '@sveltejs/kit';

export async function POST({ url }) {
	const email = url.searchParams.get('email');

	const directus = await getDirectusClient();

	let response;

	try {
		response = await directus.items('email_leads').createOne({
			email
		});
	} catch (err) {
		console.log('err');
	}
	console.log(response);
}
