import { pgTable, serial, text, integer, varchar, pgEnum, timestamp } from 'drizzle-orm/pg-core';

export const userAuthProvidersEnum = pgEnum('user_auth_providers', ['clerk']);

export const usersTable = pgTable('users', {
	id: serial('id').primaryKey(),
	authProvider: userAuthProvidersEnum('auth_provider').notNull(),
	authId: varchar('auth_id', { length: 256 }).notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow()
});

export const eventsTable = pgTable('events', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	occursAt: integer('occurs_at'),
	description: text('description'),
	createdAt: timestamp('created_at').notNull().defaultNow()
});
