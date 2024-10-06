import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { PUBLIC_API } from '$env/static/public';
import { deleteResource } from '$lib/fetch';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const response = await deleteResource(`${PUBLIC_API}/users/sign_out`, fetch);
	if (response.ok) {
		cookies.delete('renio-session', { path: '/' });
		redirect(302, 'auth/sign-in');
	}
};
