import type { PageServerLoad } from './$types';

import { PUBLIC_API } from '$env/static/public';
import { getResource } from '$lib/fetch';
import type { Budget } from '$lib/types/budgets';

export const load: PageServerLoad = async ({ fetch }) => {
	let budget: Budget | null = null;
	let budgets: Budget[] | null = null;

	await getResource(`${PUBLIC_API}/budgets/current`, fetch).then(async res => {
		if (res.ok) {
			budget = (await res.json()).data.budget;
		}
	});

	await getResource(`${PUBLIC_API}/budgets`, fetch).then(async res => {
		if (res.ok) {
			budgets = (await res.json()).data.budgets;
		}
	});

	return { budget, budgets };
};
