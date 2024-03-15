import Link from "next/link";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Button from "@/ui/Button";
import Userdropdown from "./UserDropDown";
import type { Claims } from "@auth0/nextjs-auth0";
import clsx from "clsx";

interface NavBarProps {
  isSignedIn: boolean;
  claims?: Claims;
}

export default function NavBar(props: NavBarProps) {
  return (
    <nav className={clsx(styles.nav, "typography-base")}>
      <Link href="/" className="not-typography">
        <Image
          width={90}
          height={36}
          src={"/logo.svg"}
          alt="Reforms Logo"
          priority
        />
      </Link>
      <div className={styles.auth_container}>
        {props.isSignedIn && <Userdropdown claims={props.claims} />}
        {!props.isSignedIn && (
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
        )}
      </div>
    </nav>
  );
}
