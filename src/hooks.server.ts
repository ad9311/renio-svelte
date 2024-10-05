import type { Handle, HandleFetch } from '@sveltejs/kit';

import { PUBLIC_HOST } from '$env/static/public';

export const handle: Handle = async ({ event, resolve }) => {
	const pathname: string = event.url.pathname;
	const session = event.cookies.get('renio-session');

	if (pathname.startsWith('/auth/sign-in') && session) {
		return Response.redirect(`${PUBLIC_HOST}`, 302);
	}

	if (!pathname.startsWith('/auth/sign-in') && !session) {
		return Response.redirect(`${PUBLIC_HOST}/auth/sign-in`, 302);
	}

	const response = await resolve(event);
	return response;
};

export const handleFetch: HandleFetch = async ({ event, request, fetch }) => {
	const sessionToken = event.cookies.get('renio-session');
	const newRequest = new Request(request, {
		headers: {
			...request.headers,
			Authorization: `Bearer ${sessionToken}`,
		},
	});
	const response = await fetch(newRequest);
	return response;
};
