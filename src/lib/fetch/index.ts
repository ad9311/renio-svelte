export const defaultHeaders: HeadersInit = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

type Fetch = typeof fetch;
type fetchOptions = {
	fetch?: Fetch;
	sessionToken?: string;
	body?: BodyInit;
};

export async function getResource(url: string, options: fetchOptions): Promise<Response>;
export async function getResource(url: string): Promise<Response>;
export async function getResource(url: string, options?: fetchOptions): Promise<Response> {
	if (options?.fetch) {
		return options.fetch(url, { headers: defaultHeaders });
	}

	return fetch(url, {
		headers: { ...defaultHeaders, Authorization: `Bearer ${options?.sessionToken}` },
	});
}

export async function postResource(url: string, options?: fetchOptions): Promise<Response> {
	const method = 'POST';
	if (options?.fetch) {
		return options.fetch(url, { method, headers: defaultHeaders, body: options?.body });
	}

	return fetch(url, {
		method,
		headers: { ...defaultHeaders, Authorization: `Bearer ${options?.sessionToken}` },
		body: options?.body,
	});
}

export async function patchResource(url: string, options?: fetchOptions): Promise<Response> {
	const method = 'PATCH';
	if (options?.fetch) {
		return options.fetch(url, { method, headers: defaultHeaders, body: options?.body });
	}

	return fetch(url, {
		method,
		headers: { ...defaultHeaders, Authorization: `Bearer ${options?.sessionToken}` },
		body: options?.body,
	});
}

export async function deleteResource(url: string, options: fetchOptions): Promise<Response>;
export async function deleteResource(url: string): Promise<Response>;
export async function deleteResource(url: string, options?: fetchOptions): Promise<Response> {
	const method = 'DELETE';
	if (options?.fetch) {
		return options.fetch(url, { method, headers: defaultHeaders, body: options?.body });
	}

	return fetch(url, {
		method,
		headers: { ...defaultHeaders, Authorization: `Bearer ${options?.sessionToken}` },
		body: options?.body,
	});
}
