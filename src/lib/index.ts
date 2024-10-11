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

export function camelToSnake(str: string) {
	return str.replace(/([A-Z])/g, match => `_${match.toLowerCase()}`);
}

export function toSnakeCaseObject(object: { [key: string]: unknown }): { [key: string]: unknown } {
	const entries = Object.entries(object);
	const newObject: { [key: string]: unknown } = {};

	entries.forEach(([key, value]) => {
		if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
			newObject[camelToSnake(key)] = toSnakeCaseObject(value as { [key: string]: unknown });
		} else {
			newObject[camelToSnake(key)] = value;
		}
	});

	return newObject;
}
