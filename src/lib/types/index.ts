export type FormErrors = string[] | null;

export type ActionResponse<T> = {
	data: T | null;
	errors: FormErrors;
};

export type User = {
	id: string;
	name: string;
	email: string;
	image?: string;
};

export type Session = {
	user: User;
	expires: string | null;
};

export type FlowbiteColors =
	| 'none'
	| 'green'
	| 'red'
	| 'dark'
	| 'yellow'
	| 'indigo'
	| 'purple'
	| 'pink'
	| 'blue'
	| 'primary'
	| undefined;
