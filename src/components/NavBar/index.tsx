import Link from "next/link";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Button from "@/ui/Button";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image
          width={90}
          height={36}
          src={"/logo.svg"}
          alt="Reforms Logo"
          priority
        />
      </Link>
      <div className={styles.auth_container}>
        <Link href="/api/auth/login">
          <Button size="lg">Sign up</Button>
        </Link>
        <Link href="/api/auth/login">
          <Button size="lg" variant="primary" className={styles.login}>
            Log in
          </Button>
        </Link>
      </div>
    </nav>
  );
}
