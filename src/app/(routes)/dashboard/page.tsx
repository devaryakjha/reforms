import { withPageAuthRequired } from "@auth0/nextjs-auth0";

async function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
      <p>Dashboard page</p>
    </main>
  );
}

export default withPageAuthRequired(Dashboard, { returnTo: "/dashboard" });
