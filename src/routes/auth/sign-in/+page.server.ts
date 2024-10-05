import { API } from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';

export const actions = {
	default: async (event: RequestEvent) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		const body = JSON.stringify({
			user: {
				email,
				password,
			}
		});

		// Validations here

		const response = await fetch(`${API}/users/sign_in`,
			{
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				method: 'POST',
				body
			}
		);

		if (response.ok) {
			// Save session cookie here
			const json = await response.json();
			return { user: json.data.user, errors: [] };
		}

		return { user: null, errors: [] }
	}
};
