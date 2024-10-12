import { error } from '@sveltejs/kit';

import type { PageServerLoad } from '../../$types';

import { PUBLIC_API } from '$env/static/public';
import { getResource } from '$lib/fetch';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await getResource(`${PUBLIC_API}/transaction_types`, { fetch });
	if (response.ok) {
		const json = await response.json();
		return { transactionTypes: json.data.transactionTypes };
	}

	error(404);
};
