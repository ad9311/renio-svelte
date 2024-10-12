import { jwtVerify } from 'jose';

import { SESSION_KEY } from '$env/static/private';

export function retrieveSessionToken(response: Response) {
	const authHeader = response.headers.get('authorization');
	const sessionToken = authHeader?.split(' ')[1];

	return sessionToken;
}

/* eslint-disable no-console */
export async function isSessionTokenValid(sessionToken: string) {
	try {
		await jwtVerify(sessionToken as string, new TextEncoder().encode(SESSION_KEY));
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}
/* eslint-enable no-console */
