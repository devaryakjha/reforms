"use client";

import { useEffect, useRef } from "react";
import styles from "../NavBar.module.css";

const ScrollWatcher = () => {
  const watcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = document.querySelector(`.${styles.nav}`);
    const navObserver = new IntersectionObserver((entry) => {
      nav?.classList.toggle(styles.navscrolled, !entry[0].isIntersecting);
    });
    if (watcherRef.current) navObserver.observe(watcherRef.current);
    return () => navObserver.disconnect();
  }, []);

  return <div data-scroll-watcher="" ref={watcherRef} />;
};

export default ScrollWatcher;
