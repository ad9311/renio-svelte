import { SESSION_KEY } from "$env/static/private";
import { jwtVerify } from "jose";

export function retrieveSessionToken(response: Response) {
	const authHeader = response.headers.get('authorization');
	const sessionToken = authHeader?.split(' ')[1];

	return sessionToken;
}

export async function isSessionTokenValid(sessionToken: string) {
	try {
		await jwtVerify(sessionToken as string, new TextEncoder().encode(SESSION_KEY));
		return true;
	} catch (error) {
		return false;
	}
}
