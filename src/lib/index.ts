import Cookies from 'js-cookie';
import type { ZodIssue } from 'zod';

import type { RequestEvent } from '../routes/$types';

export function getSessionCookie(event: RequestEvent): string | undefined;
export function getSessionCookie(): string | undefined;

export function getSessionCookie(event?: RequestEvent): string | undefined {
	if (typeof window === 'undefined' && event) {
		return event.cookies.get('renio-session');
	}

	return Cookies.get('renio-session');
}

export function formatZodErrors(issues: ZodIssue[]) {
	return issues.map(issue => {
		const path = issue.path.join('');
		const message = issue.message;
		return `${path} ${message}.`;
	});
}
