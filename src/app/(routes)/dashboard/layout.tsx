import styles from "./Dashboard.module.css";

export default function Layout({
  children,
  formstarter,
}: {
  children: React.ReactNode;
  formstarter: React.ReactNode;
}) {
  return (
    <main className={styles.dashboard}>
      {formstarter}
      {children}
    </main>
  );
}
