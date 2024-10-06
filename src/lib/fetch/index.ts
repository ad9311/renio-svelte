import { getSessionCookie } from '$lib';

export const defaultHeaders: HeadersInit = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

type Fetch = typeof fetch;

export function authHeader(sessionToken: string) {
	return { Authorization: `Bearer ${sessionToken}` };
}

export async function getResource(url: string): Promise<Response>;
export async function getResource(url: string, fn: Fetch): Promise<Response>;

export async function getResource(url: string, fn?: Fetch): Promise<Response> {
	if (fn) {
		return fn(url, { headers: defaultHeaders });
	}
	const headers = { ...defaultHeaders, ...authHeader(getSessionCookie() as string) };
	return fetch(url, { headers });
}

export async function postResource(url: string, body: BodyInit): Promise<Response>;
export async function postResource(url: string, body: BodyInit, fn: Fetch): Promise<Response>;

export async function postResource(url: string, body: BodyInit, fn?: Fetch): Promise<Response> {
	if (fn) {
		return fn(url, { method: 'POST', headers: defaultHeaders, body });
	}
	const headers = { ...defaultHeaders, ...authHeader(getSessionCookie() as string) };
	return fetch(url, { method: 'POST', headers, body });
}

export async function patchResource(url: string, body: BodyInit): Promise<Response>;
export async function patchResource(url: string, body: BodyInit, fn: Fetch): Promise<Response>;

export async function patchResource(url: string, body: BodyInit, fn?: Fetch): Promise<Response> {
	if (fn) {
		return fn(url, { method: 'PATCH', headers: defaultHeaders, body });
	}
	const headers = { ...defaultHeaders, ...authHeader(getSessionCookie() as string) };
	return fetch(url, { method: 'PATCH', headers, body });
}

export async function deleteResource(url: string): Promise<Response>;
export async function deleteResource(url: string, fn: Fetch): Promise<Response>;

export async function deleteResource(url: string, fn?: Fetch): Promise<Response> {
	if (fn) {
		return fn(url, { method: 'DELETE', headers: defaultHeaders });
	}
	const headers = { ...defaultHeaders, ...authHeader(getSessionCookie() as string) };
	return fetch(url, { method: 'DELETE', headers });
}
