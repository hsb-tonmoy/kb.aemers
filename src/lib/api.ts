import 'dotenv/config';

const API_URL: string = process.env.API_URL;

async function send({ method, path, data, token }) {
	const opts = {
		method,
		headers: {}
	};

	if (data && !file) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `JWT ${token}`;
	}

	return fetch(`${API_URL}${path}`, opts);
}

export function get(path) {
	return send({ method: 'GET', path });
}

export function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}
export function patch(path, data, token) {
	return send({ method: 'PATCH', path, data, token });
}
