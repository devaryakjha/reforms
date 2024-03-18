"use client";
import styles from "./NavBar.module.css";
import useMedia from "@/lib/hooks/useMedia";

interface NavBarProps {
  isSignedIn: boolean;
  userDropdown?: React.ReactNode;
  desktopLinks: React.ReactNode;
  mobileLinks: React.ReactNode;
}

const AuthSection = (props: NavBarProps) => {
  const isMobile = useMedia("(max-width: 640px)", true);
  return isMobile ? (
    <div className={styles.auth_container_mobile}>
      {props.isSignedIn && props.userDropdown}
      {!props.isSignedIn && props.mobileLinks}
    </div>
  ) : (
    <div className={styles.auth_container}>
      {props.isSignedIn && props.userDropdown}
      {!props.isSignedIn && props.desktopLinks}
    </div>
  );
};

export default AuthSection;
