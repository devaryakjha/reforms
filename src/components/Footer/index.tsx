import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import EmailForm from "./EmailForm";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <hr className={styles.line} />
      <div className={styles.content}>
        <div className={styles.LHS}>
          <Image
            width={100}
            height={36}
            src={"/logo.svg"}
            alt="Reforms Logo"
            priority
          />
          <div className={styles.links}>
            <span>© {year} Reforms</span>
            <Link href="/policies/privacy-policy">Privacy Policy</Link>
            <Link href="/policies/cookies-policy">Cookies Policy</Link>
            <Link href="/policies/terms-of-use">Terms of Service</Link>
          </div>
        </div>
        <EmailForm />
      </div>
    </footer>
  );
}
