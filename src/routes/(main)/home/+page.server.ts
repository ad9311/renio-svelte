import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { PUBLIC_API } from '$env/static/public';
import { getResource } from '$lib/fetch';

export const load: PageServerLoad = async ({ fetch }) => {
	const fetchBudgetAccount = getResource(`${PUBLIC_API}/budget_account`, fetch);
	const fetchBudgetCount = getResource(`${PUBLIC_API}/budgets?data=count`, fetch);

	const results = await Promise.allSettled([fetchBudgetAccount, fetchBudgetCount]);
	if (results[0].status === 'fulfilled' && results[0].value.status === 404) {
		redirect(302, '/budgets/create');
	}

	const budgetAccount =
		results[0].status === 'fulfilled' && results[0].value.ok
			? (await results[0].value.json()).data.budgetAccount
			: null;

	const budgetCount =
		results[1].status === 'fulfilled' && results[1].value.ok
			? (await results[1].value.json()).data.budgetCount
			: 0;

	return { budgetAccount, budgetCount };
};
