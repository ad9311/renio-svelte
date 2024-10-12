import type { Handle, HandleFetch } from '@sveltejs/kit';

import { PUBLIC_HOST } from '$env/static/public';
import { isSessionTokenValid } from '$lib/server';

export const handle: Handle = async ({ event, resolve }) => {
	const pathname: string = event.url.pathname;
	const sessionToken = event.cookies.get('renio-session');
	const sessionValid = await isSessionTokenValid(sessionToken as string);

	if (pathname.startsWith('/auth/sign-in') && sessionValid) {
		return Response.redirect(`${PUBLIC_HOST}`, 302);
	}

	if (!pathname.startsWith('/auth/sign-in') && !sessionValid) {
		return Response.redirect(`${PUBLIC_HOST}/auth/sign-in`, 302);
	}

	const response = await resolve(event);
	return response;
};

export const handleFetch: HandleFetch = async ({ event, request, fetch }) => {
	const sessionToken = event.cookies.get('renio-session');
	return fetch(request.url, {
		method: request.method,
		headers: { ...request.headers, Authorization: `Bearer ${sessionToken}` },
	});
};
