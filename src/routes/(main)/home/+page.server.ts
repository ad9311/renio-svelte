import type { PageServerLoad } from './$types';

import { PUBLIC_API } from '$env/static/public';
import { getResource } from '$lib/fetch';
import type { BudgetAccount } from '$lib/types/budgets';

export const load: PageServerLoad = async ({ fetch }) => {
	let budgetAccount: BudgetAccount | null = null;
	const response = await getResource(`${PUBLIC_API}/budget_account`, fetch);
	if (response.ok) {
		const json = await response.json();
		budgetAccount = json.data.budgetAccount;
	}
	return { budgetAccount };
};
