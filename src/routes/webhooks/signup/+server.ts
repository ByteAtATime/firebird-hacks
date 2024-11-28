import { z } from 'zod';
import type { RequestHandler } from './$types';
import { validateSchema } from '$lib/validation';
import { db } from '$lib/server/db';
import { usersTable } from '$lib/server/db/schema';
import { json } from '@sveltejs/kit';

const bodySchema = z.object({
	data: z.object({
		id: z.string()
	})
});

export const POST: RequestHandler = validateSchema(bodySchema, async ({ data }) => {
	await db.insert(usersTable).values({
		authProvider: 'clerk',
		authId: data.id
	});

	return json({ success: true }, { status: 201 });
});
