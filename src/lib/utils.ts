export function getAssetURL(id) {
	if (!id) return null;
	return `${import.meta.env.VITE_API_URL}assets/${id}`;
}

export function truncateWords(str: String, num: number) {
	if (!str) return '';
	if (str.split(' ').length <= num) return str;
	return str.split(' ').splice(0, num).join(' ') + '...';
}
