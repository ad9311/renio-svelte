export const defaultHeaders: HeadersInit = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

type Fetch = typeof fetch;

export async function getResource(url: string, fn: Fetch): Promise<Response> {
	return fn(url, { headers: defaultHeaders });
}

export async function postResource(url: string, body: BodyInit, fn: Fetch): Promise<Response> {
	return fn(url, { method: 'POST', headers: defaultHeaders, body });
}

export async function patchResource(url: string, body: BodyInit, fn: Fetch): Promise<Response> {
	return fn(url, { method: 'PATCH', headers: defaultHeaders, body });
}

export async function deleteResource(url: string, fn: Fetch): Promise<Response> {
	return fn(url, { method: 'DELETE', headers: defaultHeaders });
}
