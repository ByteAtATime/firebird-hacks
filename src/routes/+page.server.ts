import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const users = [] as const;

	return { users }
}
