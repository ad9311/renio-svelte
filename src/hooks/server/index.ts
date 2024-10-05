import type { RequestEvent } from '@sveltejs/kit';

import { PUBLIC_HOST } from '$env/static/public';

type HandleParams = {
	event: RequestEvent;
	resolve: (event: RequestEvent) => Promise<Response>;
};

export async function handle({ event, resolve }: HandleParams) {
	const pathname: string = event.url.pathname;
	const session = event.cookies.get('renio-session');

	if (pathname.startsWith('/auth') && session) {
		return Response.redirect(`${PUBLIC_HOST}`, 302);
	}

	if (!pathname.startsWith('/auth') && !session) {
		return Response.redirect(`${PUBLIC_HOST}/auth/sign-in`, 302);
	}

	const response = await resolve(event);
	return response;
}
