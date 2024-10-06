export type TransactionType = {
	id: string;
	uid: string;
	name: string;
};

export type Transaction = {
	id: string;
	budgetUid: string;
	description: string;
	amount: number;
	transactionType: TransactionType;
};

export type Budget = {
	id: string;
	uid: string;
	year: number;
	month: number;
	balance: number;
	totalIncome: number;
	totalExpenses: number;
	transactionCount: number;
	incomeCount: number;
	expenseCount: number;
};

export type FullBudget = Budget & {
	incomeList: Transaction[];
	expenses: Transaction[];
};
