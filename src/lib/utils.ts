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
