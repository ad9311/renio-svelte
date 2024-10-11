import type { ActionFailure, RequestEvent } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';

import { PUBLIC_API } from '$env/static/public';
import { formatZodErrors } from '$lib';
import { defaultHeaders } from '$lib/fetch/index.js';
import { retrieveSessionToken } from '$lib/server/index.js';
import type { ActionResponse, User } from '$lib/types';
import { signInDataValidation } from '$lib/validations';

type ReturnType = Promise<ActionResponse<User> | ActionFailure<{ errors: string[] }>>;

export const actions = {
	default: async (event: RequestEvent): ReturnType => {
		const formData = await event.request.formData();
		const signInData = {
			email: formData.get('email'),
			password: formData.get('password'),
		};

		const validation = signInDataValidation.safeParse(signInData);
		if (validation.error) {
			return fail(400, { errors: formatZodErrors(validation.error.issues) });
		}

		const body = JSON.stringify({ user: { ...signInData } });
		const response = await fetch(`${PUBLIC_API}/users/sign_in`, {
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

		return fail(400, { errors: [`backend responded with ${response.statusText}`] });
	},
};
