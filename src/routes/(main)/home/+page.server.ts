import type { PageServerLoad } from './$types';

import { PUBLIC_API } from '$env/static/public';
import { getResource } from '$lib/fetch';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await getResource(`${PUBLIC_API}/budget_account`, fetch);
	if (response.ok) {
		const json = await response.json();
		return { budgetAccount: json.data.budgetAccount };
	}
	return { budgetAccount: null };
};
