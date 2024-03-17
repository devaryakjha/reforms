import { db } from "@/lib/db";
import { OptedUsersTable } from ".";

export const insertIntoOptedUsers = async (email: string) => {
  return await db.insert(OptedUsersTable).values({ email }).execute();
};
