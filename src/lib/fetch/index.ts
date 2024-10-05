export const defaultHeaders: HeadersInit = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

export async function getResource(url: string): Promise<Response> {
	return fetch(url, { headers: defaultHeaders });
}

export async function postResource(url: string, body: BodyInit): Promise<Response> {
	return fetch(url, { method: 'POST', headers: defaultHeaders, body });
}

export async function patchResource(url: string, body: BodyInit): Promise<Response> {
	return fetch(url, { method: 'PATCH', headers: defaultHeaders, body });
}

export async function deleteResource(url: string): Promise<Response> {
	return fetch(url, { method: 'DELETE', headers: defaultHeaders });
}
