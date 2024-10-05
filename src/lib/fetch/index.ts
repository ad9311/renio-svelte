export const defaultHeaders: HeadersInit = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

type Fetch = typeof fetch;

export async function getResource(fn: Fetch, url: string): Promise<Response> {
	return fn(url, { headers: defaultHeaders });
}

export async function postResource(fn: Fetch, url: string, body: BodyInit): Promise<Response> {
	return fn(url, { method: 'POST', headers: defaultHeaders, body });
}

export async function patchResource(fn: Fetch, url: string, body: BodyInit): Promise<Response> {
	return fn(url, { method: 'PATCH', headers: defaultHeaders, body });
}

export async function deleteResource(fn: Fetch, url: string): Promise<Response> {
	return fn(url, { method: 'DELETE', headers: defaultHeaders });
}
