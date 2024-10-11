import { z } from 'zod';

export const signInDataValidation = z.object({
	email: z
		.string()
		.min(1)
		.max(30)
		.regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
	password: z.string().min(1).max(25),
});

export const transactionDataValidation = z.object({
	transactionTypeId: z.number().min(1).positive(),
	description: z.string().min(1).max(150),
	amount: z.number().min(1).positive(),
});
