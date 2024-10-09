import { redirect } from '@sveltejs/kit';

import type { PageServerLoad, RequestEvent } from './$types';

import { PUBLIC_API } from '$env/static/public';
import { getResource } from '$lib/fetch';
import type { ActionResponse } from '$lib/types';
import type { Transaction } from '$lib/types/budgets';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const fetchBudget = getResource(
		`${PUBLIC_API}/budgets/${params.uid}?transactions=incomes:expenses`,
		fetch,
	);
	const fetchTransactionTypes = getResource(`${PUBLIC_API}/transaction_types`, fetch);

	try {
		const responses = await Promise.all([fetchBudget, fetchTransactionTypes]);
		if (responses.some(res => !res.ok)) {
			redirect(302, '/whoops');
		}

		const budget = (await responses[0].json()).data.budget;
		const transactionTypes = (await responses[1].json()).data.transactionTypes;

		return { budget, transactionTypes };
	} catch (e) {
		redirect(302, `/whoops?${e}`);
	}
};

export const actions = {
	createIncome: async (event: RequestEvent): Promise<ActionResponse<Transaction>> => {
		return { data: null, errors: [] };
	},
};
