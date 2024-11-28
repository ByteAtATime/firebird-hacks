import type { PageServerLoad } from './$types';
import { user } from '$lib/server/db/schema';
import { db } from '$lib/server/db';

export const load: PageServerLoad = async () => {
	const users = await db.select().from(user);

	return { users }
}
