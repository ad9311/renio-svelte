import { error, fail, type ActionFailure } from '@sveltejs/kit';

import type { PageServerLoad, RequestEvent } from './$types';

import { PUBLIC_API } from '$env/static/public';
import { formatZodErrors, toSnakeCaseObject } from '$lib';
import { getResource, postResource } from '$lib/fetch';
import type { ActionResponse } from '$lib/types';
import type { Transaction } from '$lib/types/budgets';
import { transactionDataValidation } from '$lib/validations';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const response = await getResource(
		`${PUBLIC_API}/budgets/${params.uid}?transactions=incomes:expenses`,
		{ fetch },
	);

	if (response.ok) {
		const json = await response.json();
		return { budget: json.data.budget };
	}

	error(404);
};

export const actions = {
	createIncome: async ({
		request,
		params,
		cookies,
	}: RequestEvent): Promise<ActionResponse<Transaction> | ActionFailure<{ errors: string[] }>> => {
		const formData = await request.formData();
		const incomeData = {
			transactionTypeId: Number(formData.get('transaction_type_id')),
			description: formData.get('description'),
			amount: Number(formData.get('amount')),
		};

		const validation = transactionDataValidation.safeParse(incomeData);
		if (validation.error) {
			return fail(400, { errors: formatZodErrors(validation.error.issues) });
		}

		const sessionToken = cookies.get('renio-session');
		const body = JSON.stringify(toSnakeCaseObject({ income: incomeData }));
		const response = await postResource(`${PUBLIC_API}/budgets/${params.uid}/incomes`, {
			sessionToken,
			body,
		});
		if (response.ok) {
			const json = await response.json();
			return { data: json.data.income };
		}

		return fail(400, { errors: [`backend responded with ${response.statusText}`] });
	},
	createExpense: async ({
		request,
		params,
		cookies,
	}: RequestEvent): Promise<ActionResponse<Transaction> | ActionFailure<{ errors: string[] }>> => {
		const formData = await request.formData();
		const expenseData = {
			transactionTypeId: Number(formData.get('transaction_type_id')),
			description: formData.get('description'),
			amount: Number(formData.get('amount')),
		};

		const validation = transactionDataValidation.safeParse(expenseData);
		if (validation.error) {
			return fail(400, { errors: formatZodErrors(validation.error.issues) });
		}

		const sessionToken = cookies.get('renio-session');
		const body = JSON.stringify(toSnakeCaseObject({ expense: expenseData }));
		const response = await postResource(`${PUBLIC_API}/budgets/${params.uid}/expenses`, {
			sessionToken,
			body,
		});
		if (response.ok) {
			const json = await response.json();
			return { data: json.data.expense };
		}

		return fail(400, { errors: [`backend responded with ${response.statusText}`] });
	},
};
