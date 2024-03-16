import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonal from "./components/Testimonial";
import styles from "./About.module.css";
import clsx from "clsx";

export default function SignedOut() {
  return (
    <main className={clsx(styles.main, "typography-base")}>
      <Hero />
      <Features />
      <Testimonal />
    </main>
  );
}
