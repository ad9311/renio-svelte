import { writable, type Writable } from 'svelte/store';

import type { FullBudget, TransactionType } from '$lib/types/budgets';

export const budgetStore: Writable<FullBudget> = writable({
	id: '0',
	uid: '0_0000_00',
	year: 0,
	month: 0,
	balance: 0,
	totalIncome: 0,
	totalExpenses: 0,
	transactionCount: 0,
	incomeCount: 0,
	expenseCount: 0,
	incomeList: [],
	expenses: [],
});

export const transactionTypesStore: Writable<TransactionType[]> = writable([]);
