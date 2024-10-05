import type { RequestEvent } from '@sveltejs/kit';

import { API } from '$env/static/private';
import { defaultHeaders } from '$lib/fetch/index.js';
import { retrieveSessionToken } from '$lib/server/index.js';

export const actions = {
	default: async (event: RequestEvent) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		const body = JSON.stringify({
			user: {
				email,
				password
			}
		});

		// Validations here

		const response = await fetch(`${API}/users/sign_in`, {
			headers: defaultHeaders,
			method: 'POST',
			body
		});

		if (response.ok) {
			const sessionToken = (await retrieveSessionToken(response)) as string;
			event.cookies.set('renio-session', sessionToken, {
				path: '/'
			});
			const json = await response.json();
			return { user: json.data.user, errors: [] };
		}

		return { user: null, errors: [response.statusText] };
	}
};
