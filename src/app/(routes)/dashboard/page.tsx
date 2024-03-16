import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import styles from "./Dashboard.module.css";

async function Dashboard() {
  return <main className={styles.dashboard}></main>;
}

export default withPageAuthRequired(Dashboard, { returnTo: "/dashboard" });
