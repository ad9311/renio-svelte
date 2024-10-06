import type { ZodIssue } from 'zod';

type Currency = 'COP' | 'USD';

export function formatZodErrors(issues: ZodIssue[]) {
	return issues.map(issue => {
		const path = issue.path.join('');
		const message = issue.message;
		return `${path} ${message}.`;
	});
}

export function formatCurrency(amount: number, currency: Currency = 'COP') {
	const format = 'es';
	return amount.toLocaleString(format, {
		currencySign: 'standard',
		style: 'currency',
		currency,
	});
}
