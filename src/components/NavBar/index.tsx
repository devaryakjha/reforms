import Link from "next/link";
import styles from "./NavBar.module.css";
import Image from "next/image";
import type { Claims } from "@auth0/nextjs-auth0";
import clsx from "clsx";
import AuthSection from "./AuthSection";
import { MobileLinks, DesktopLinks } from "./SignedInLinks";
interface NavBarProps {
  isSignedIn: boolean;
  claims?: Claims;
}

export default function NavBar(props: NavBarProps) {
  return (
    <nav className={clsx(styles.nav, "typography-base")}>
      <Link
        href={props.isSignedIn ? "/dashboard" : "/about"}
        className="not-typography"
      >
        <Image
          width={90}
          height={36}
          src={"/logo.svg"}
          alt="Reforms Logo"
          priority
        />
      </Link>
      <AuthSection
        {...props}
        key={"AuthSection"}
        mobileLinks={<MobileLinks />}
        desktopLinks={<DesktopLinks />}
      />
    </nav>
  );
}
