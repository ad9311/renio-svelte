import { writable, type Writable } from 'svelte/store';

import type { FullBudget, Transaction, TransactionType } from '$lib/types/budgets';

export const initBudget = {
	id: '',
	uid: '',
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
};

export const initIncome = {
	id: '',
	amount: 0,
	description: '',
	budgetUid: '',
	transactionType: {
		id: '',
		uid: '',
		name: '',
	},
};

export const budgetStore: Writable<FullBudget> = writable(initBudget);

export const transactionTypesStore: Writable<TransactionType[]> = writable([]);

export const incomeStore: Writable<Transaction> = writable(initIncome);
