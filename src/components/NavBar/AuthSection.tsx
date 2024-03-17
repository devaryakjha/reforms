"use client";
import type { Claims } from "@auth0/nextjs-auth0";
import styles from "./NavBar.module.css";
import Userdropdown from "./UserDropDown";
import useMedia from "@/lib/hooks/useMedia";

interface NavBarProps {
  isSignedIn: boolean;
  claims?: Claims;
  desktopLinks: React.ReactNode;
  mobileLinks: React.ReactNode;
}

const AuthSection = (props: NavBarProps) => {
  const isMobile = useMedia("(max-width: 640px)", true);
  return isMobile ? (
    <div className={styles.auth_container_mobile}>
      {props.isSignedIn && <Userdropdown claims={props.claims} />}
      {!props.isSignedIn && props.mobileLinks}
    </div>
  ) : (
    <div className={styles.auth_container}>
      {props.isSignedIn && <Userdropdown claims={props.claims} />}
      {!props.isSignedIn && props.desktopLinks}
    </div>
  );
};

export default AuthSection;
