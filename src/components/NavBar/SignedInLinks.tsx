import styles from "./NavBar.module.css";
import Button from "@/ui/Button";
import Link from "next/link";
import Login from "@heroicons/react/20/solid/ArrowRightStartOnRectangleIcon";

export function DesktopLinks() {
  return (
    <>
      <Link href="/api/auth/signup" prefetch={false}>
        <Button size="lg">Sign up</Button>
      </Link>
      <Link href="/api/auth/login" prefetch={false}>
        <Button size="lg" variant="primary" className={styles.login}>
          Log in
        </Button>
      </Link>
    </>
  );
}

export function MobileLinks() {
  return (
    <Link href="/api/auth/login" prefetch={false}>
      <Button rounded variant="icon">
        <Login className={styles.signInBtn} />
      </Button>
    </Link>
  );
}
