import { getSession } from "@auth0/nextjs-auth0";

const getIsSignedIn = async () => {
  const session = await getSession();
  return !!session?.user;
};

export { getIsSignedIn };
