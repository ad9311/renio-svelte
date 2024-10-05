import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { API } from '$env/static/private';
import { deleteResource } from '$lib/fetch';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const response = await deleteResource(fetch, `${API}/users/sign_out`);
	if (response.ok) {
		cookies.delete('renio-session', { path: '/' });
		redirect(302, 'auth/sign-in');
	}
};
