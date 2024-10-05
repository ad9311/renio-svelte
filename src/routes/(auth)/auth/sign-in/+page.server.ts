import type { RequestEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

import { API } from '$env/static/private';
import { formatZodErrors } from '$lib';
import { defaultHeaders } from '$lib/fetch/index.js';
import { retrieveSessionToken } from '$lib/server/index.js';
import type { ActionResponse, User } from '$lib/types/common';
import { SignInDataValidation } from '$lib/validations';

export const actions = {
	default: async (event: RequestEvent): Promise<ActionResponse<User>> => {
		const formData = await event.request.formData();
		const signInData = {
			email: formData.get('email'),
			password: formData.get('password'),
		};

		const validation = SignInDataValidation.safeParse(signInData);
		if (validation.error) {
			return { data: null, errors: formatZodErrors(validation.error.issues) };
		}

		const body = JSON.stringify({ user: { ...signInData } });
		const response = await fetch(`${API}/users/sign_in`, {
			headers: defaultHeaders,
			method: 'POST',
			body,
		});

		if (response.ok) {
			const sessionToken = (await retrieveSessionToken(response)) as string;
			event.cookies.set('renio-session', sessionToken, {
				path: '/',
			});
			redirect(302, '/');
		}

		return { data: null, errors: [response.statusText] };
	},
};
