export function getAssetURL(id: String) {
	if (!id) return null;
	const baseURL = import.meta.env.VITE_API_URL;
	return `${baseURL}assets/${id}`;
}

export function truncateWords(str: String, num: number) {
	if (!str) return '';
	if (str.split(' ').length <= num) return str;
	return str.split(' ').splice(0, num).join(' ') + '...';
}

export function convertDate(string_date: string) {
	let date_string = new Date(string_date);

	let date = date_string.toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	let time = date_string.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit'
	});
	return `${date} at ${time}`;
}
