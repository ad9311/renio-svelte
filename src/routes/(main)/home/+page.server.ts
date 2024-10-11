import { error, redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { PUBLIC_API } from '$env/static/public';
import { getResource } from '$lib/fetch';

export const load: PageServerLoad = async ({ fetch }) => {
	const fetchBudgetAccount = getResource(`${PUBLIC_API}/budget_account`, { fetch });
	const fetchBudgetCount = getResource(`${PUBLIC_API}/budgets?data=count`, { fetch });

	try {
		const responses = await Promise.all([fetchBudgetAccount, fetchBudgetCount]);
		if (responses[0].status === 404) {
			redirect(302, '/budgets/create');
		}

		if (responses.some(res => !res.ok)) {
			error(404);
		}

		const budgetAccount = (await responses[0].json()).data.budgetAccount;
		const budgetCount = (await responses[1].json()).data.budgetCount;

		return { budgetAccount, budgetCount };
	} catch (e) {
		error(404, { message: (e as Error)?.message });
	}
};
