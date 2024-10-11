import { redirect } from '@sveltejs/kit';

import type { PageServerLoad, RequestEvent } from './$types';

import { PUBLIC_API } from '$env/static/public';
import { formatZodErrors, toSnakeCaseObject } from '$lib';
import { getResource, postResource } from '$lib/fetch';
import type { ActionResponse } from '$lib/types';
import type { Transaction } from '$lib/types/budgets';
import { transactionDataValidation } from '$lib/validations';

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
	createIncome: async ({
		request,
		params,
		fetch,
	}: RequestEvent): Promise<ActionResponse<Transaction>> => {
		const initData: ActionResponse<Transaction> = {
			data: null,
			errors: null,
			modal: true,
		};
		const formData = await request.formData();
		const incomeData = {
			transactionTypeId: Number(formData.get('transaction_type_id')),
			description: formData.get('description'),
			amount: Number(formData.get('amount')),
		};

		const validation = transactionDataValidation.safeParse(incomeData);
		if (validation.error) {
			return { ...initData, errors: formatZodErrors(validation.error.issues) };
		}

		const body = JSON.stringify(toSnakeCaseObject({ income: incomeData }));
		const response = await postResource(`${PUBLIC_API}/budgets/${params.uid}/incomes`, fetch, body);
		if (response.ok) {
			const json = await response.json();
			return { ...initData, data: json.data.income };
		}

		return { ...initData, errors: [response.statusText] };
	},
};
