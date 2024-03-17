import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const OptedUsersTable = pgTable("optedusers", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
});
