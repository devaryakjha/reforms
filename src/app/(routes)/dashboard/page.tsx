import { withPageAuthRequired } from "@auth0/nextjs-auth0";

async function Dashboard() {
  return <></>;
}

export default withPageAuthRequired(Dashboard, { returnTo: "/dashboard" });
