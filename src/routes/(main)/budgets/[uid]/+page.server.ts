import type { PageServerLoad } from './$types';

import { PUBLIC_API } from '$env/static/public';
import { getResource } from '$lib/fetch';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const response = await getResource(
		`${PUBLIC_API}/budgets/${params.uid}?transactions=incomes:expenses`,
		fetch,
	);
	if (response.ok) {
		const json = await response.json();
		return { budget: json.data.budget };
	}

	return { budget: null };
};
