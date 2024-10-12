import { error, redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { PUBLIC_API } from '$env/static/public';
import { postResource } from '$lib/fetch';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await postResource(`${PUBLIC_API}/budgets`, { fetch });
	if (response.ok) {
		redirect(302, '/home');
	}

	error(400);
};
