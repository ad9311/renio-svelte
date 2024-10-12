export function retrieveSessionToken(response: Response) {
	const authHeader = response.headers.get('authorization');
	const sessionToken = authHeader?.split(' ')[1];

	return sessionToken;
}
